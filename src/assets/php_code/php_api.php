<?php
    // filepath where this goes: /path/to/the/theme/functions.php
    // Generated with assistance from GitHub Copilot, 2025 TerenceWaters.com

// Function to enqueue React app scripts and styles
function enqueue_react_app() {
    // Check if the script is already enqueued
    if (!wp_script_is('beta-hive-story-submission', 'enqueued')) {
        wp_enqueue_script(
            'beta-hive-story-submission',
            get_template_directory_uri() . '/htdocs/wp-content/reactpress/apps/beta-hive-story-submission/build/static/js/main.3f655f80.js',
            array(),
            null,
            true
        );
    }

    // Check if the style is already enqueued
    if (!wp_style_is('react-app', 'enqueued')) {
        wp_enqueue_style(
            'react-app',
            get_template_directory_uri() . '/path-to-your-react-app/build/static/css/main.f2ed6db1.css',
            array(),
            null
        );
    }
}

// Function to generate and pass nonce to the front-end
function pass_nonce_to_react_app() {
    // Generate a nonce and pass it to the front-end
    wp_localize_script('beta-hive-story-submission', 'wpApiSettings', array(
        'nonce' => wp_create_nonce('wp_rest')
    ));
}

// Hook the functions to the wp_enqueue_scripts action
add_action('wp_enqueue_scripts', 'enqueue_react_app');
add_action('wp_enqueue_scripts', 'pass_nonce_to_react_app');

// now that we have the nonce, we can use it in the React app to authenticate requests to the WordPress REST API
function create_story_post_type() {
    register_post_type('story',
        array(
            'labels' => array(
                'name' => __('Stories'),
                'singular_name' => __('Story')
            ),
            'public' => true,
            'has_archive' => true,
            'show_in_rest' => true,
            'supports' => array('title', 'editor', 'author', 'custom-fields'),
        )
    );
}
add_action('init', 'create_story_post_type');

function register_story_routes() {
    register_rest_route('custom/v1', '/stories/(?P<id>\d+)', array(
        'methods' => 'PUT',
        'callback' => 'update_story',
        'permission_callback' => function () {
            return current_user_can('edit_posts');
        },
        'args' => array(
            'id' => array(
                'validate_callback' => function ($param, $request, $key) {
                    return is_numeric($param);
                }
            ),
            '_wpnonce' => array(
                'validate_callback' => function ($param, $request, $key) {
                    return wp_verify_nonce($param, 'wp_rest');
                }
            )
        )
    ));
}
add_action('rest_api_init', 'register_story_routes');

function update_story($request) {
    $id = $request['id'];
    $params = $request->get_json_params();

    // Verify nonce
    if (!wp_verify_nonce($request->get_header('X-WP-Nonce'), 'wp_rest')) {
        return new WP_Error('rest_forbidden', __('Nonce verification failed'), array('status' => 403));
    }

    $post_data = array(
        'ID' => $id,
        'post_title' => $params['title'],
        'post_content' => $params['story'],
        'post_author' => $params['author'],
    );

    $updated_post_id = wp_update_post($post_data, true);

    if (is_wp_error($updated_post_id)) {
        return new WP_Error('cant_update', __('Cannot update story'), array('status' => 500));
    }

    // Update custom fields
    if (isset($params['HIVE'])) {
        update_post_meta($id, 'HIVE', $params['HIVE']);
    }
    if (isset($params['contentWarnings'])) {
        update_post_meta($id, 'contentWarnings', $params['contentWarnings']);
    }
    if (isset($params['feedback'])) {
        update_post_meta($id, 'feedback', $params['feedback']);
    }
    if (isset($params['wins'])) {
        update_post_meta($id, 'wins', $params['wins']);
    }
    if (isset($params['losses'])) {
        update_post_meta($id, 'losses', $params['losses']);
    }

    return new WP_REST_Response('Story updated', 200);
}
?>