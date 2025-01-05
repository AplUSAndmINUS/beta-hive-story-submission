<?php
if (!defined('ABSPATH')) {
    define('ABSPATH', dirname(__FILE__) . '/');
}
require_once(ABSPATH . 'wp-load.php');
require_once(ABSPATH . 'wp-includes/formatting.php');
require_once(ABSPATH . 'wp-includes/pluggable.php');

function handle_story_submission($request) {
    $params = $request->get_json_params();

    $title = sanitize_text_field($params['title']);
    $author = sanitize_text_field($params['author']);
    $beta_hive = sanitize_text_field($params['betaHive']);
    $setting = sanitize_text_field($params['setting']);
    $character = sanitize_text_field($params['character']);
    $story = sanitize_textarea_field($params['story']);
    $date = sanitize_text_field($params['date']);

    $post_data = array(
        'post_title'    => $title,
        'post_content'  => $story,
        'post_status'   => 'publish',
        'post_author'   => $author,
        'post_date'     => $date,
        'meta_input'    => array(
            'beta_hive' => $beta_hive,
            'setting'   => $setting,
            'character' => $character,
        ),
    );

    $post_id = wp_insert_post($post_data);

    if (is_wp_error($post_id)) {
        return new WP_Error('post_creation_failed', 'Failed to create post', array('status' => 500));
    }

    return new WP_REST_Response(array('post_id' => $post_id), 200);
}

function register_story_submission_endpoint() {
    register_rest_route('beta-hive/v1', '/submit-story', array(
        'methods' => 'POST',
        'callback' => 'handle_story_submission',
        'permission_callback' => '__return_true',
    ));
    register_rest_route('beta-hive/v1', '/stories', array(
        'methods' => 'GET',
        'callback' => 'get_stories_by_beta_hive',
        'permission_callback' => '__return_true',
    ));
}
add_action('rest_api_init', 'register_story_submission_endpoint');

function get_stories_by_beta_hive($request) {
    $beta_hive = sanitize_text_field($request->get_param('beta_hive'));

    $args = array(
        'post_type' => 'post',
        'meta_query' => array(
            array(
                'key' => 'beta_hive',
                'value' => $beta_hive,
                'compare' => '='
            )
        )
    );

    $query = new WP_Query($args);
    $posts = array();

    if ($query->have_posts()) {
        while ($query->have_posts()) {
            $query->the_post();
            $posts[] = array(
                'id' => get_the_ID(),
                'title' => get_the_title(),
                'content' => get_the_content(),
                'author' => get_the_author(),
                'date' => get_the_date(),
                'beta_hive' => get_post_meta(get_the_ID(), 'beta_hive', true),
                'setting' => get_post_meta(get_the_ID(), 'setting', true),
                'character' => get_post_meta(get_the_ID(), 'character', true),
            );
        }
        wp_reset_postdata();
    }

    return new WP_REST_Response($posts, 200);
}
``
?>