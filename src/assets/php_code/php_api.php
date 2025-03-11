<?php
    // filepath where this goes: /path/to/the/theme/functions.php
    // Generated with assistance from GitHub Copilot, 2025 TerenceWaters.com

// Function to create custom post type for stories
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

// Function to register custom REST API routes
function register_story_routes() {
    register_rest_route('custom/v1', '/stories', array(
        'methods' => 'GET',
        'callback' => 'get_all_stories',
        'permission_callback' => '__return_true',
    ));

    register_rest_route('custom/v1', '/stories', array(
        'methods' => 'POST',
        'callback' => 'add_story',
        'permission_callback' => function () {
            return current_user_can('edit_posts');
        },
    ));

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

    register_rest_route('custom/v1', '/stories/(?P<id>\d+)', array(
        'methods' => 'DELETE',
        'callback' => 'delete_story',
        'permission_callback' => function () {
            return current_user_can('delete_posts');
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

// Callback function to get all stories
function get_all_stories($request) {
    $args = array(
        'post_type' => 'story',
        'posts_per_page' => -1
    );

    $query = new WP_Query($args);
    $stories = array();

    if ($query->have_posts()) {
        while ($query->have_posts()) {
            $query->the_post();
            $story = array(
                'id' => get_the_ID(),
                'title' => get_the_title(),
                'story' => get_the_content(),
                'author' => get_post_meta(get_the_ID(), 'author', true),
                'HIVE' => get_post_meta(get_the_ID(), 'HIVE', true),
                'contentWarnings' => get_post_meta(get_the_ID(), 'contentWarnings', true),
                'feedback' => get_post_meta(get_the_ID(), 'feedback', true),
                'wins' => get_post_meta(get_the_ID(), 'wins', true),
                'losses' => get_post_meta(get_the_ID(), 'losses', true)
            );
            array_push($stories, $story);
        }
    }

    return new WP_REST_Response($stories, 200);
}

// Callback function to add a new story
function add_story($request) {
    $params = $request->get_json_params();

    $post_data = array(
        'post_title' => $params['title'],
        'post_content' => $params['story'],
        'post_author' => $params['author'],
        'post_type' => 'story',
        'post_status' => 'publish',
    );

    $post_id = wp_insert_post($post_data);

    if (is_wp_error($post_id)) {
        return new WP_Error('cant_create', __('Cannot create story'), array('status' => 500));
    }

    // Add custom fields
    if (isset($params['HIVE'])) {
        update_post_meta($post_id, 'HIVE', $params['HIVE']);
    }
    if (isset($params['contentWarnings'])) {
        update_post_meta($post_id, 'contentWarnings', $params['contentWarnings']);
    }
    if (isset($params['feedback'])) {
        update_post_meta($post_id, 'feedback', $params['feedback']);
    }
    if (isset($params['wins'])) {
        update_post_meta($post_id, 'wins', $params['wins']);
    }
    if (isset($params['losses'])) {
        update_post_meta($post_id, 'losses', $params['losses']);
    }

    return new WP_REST_Response('Story created', 201);
}

// Callback function to update a story
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

// Callback function to delete a story
function delete_story($request) {
    $id = $request['id'];

    // Verify nonce
    if (!wp_verify_nonce($request->get_header('X-WP-Nonce'), 'wp_rest')) {
        return new WP_Error('rest_forbidden', __('Nonce verification failed'), array('status' => 403));
    }

    $deleted = wp_delete_post($id, true);

    if (!$deleted) {
        return new WP_Error('cant_delete', __('Cannot delete story'), array('status' => 500));
    }

    return new WP_REST_Response('Story deleted', 200);
}
?>