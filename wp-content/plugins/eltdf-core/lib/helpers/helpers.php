<?php

if(!function_exists('eltd_core_version_class')) {
	/**
	 * Adds plugins version class to body
	 * @param $classes
	 * @return array
	 */
	function eltd_core_version_class($classes) {
		$classes[] = 'eltd-core-'.ELATED_CORE_VERSION;
		
		return $classes;
	}
	
	add_filter('body_class', 'eltd_core_version_class');
}

if(!function_exists('eltd_core_theme_installed')) {
	/**
	 * Checks whether theme is installed or not
	 * @return bool
	 */
	function eltd_core_theme_installed() {
		return defined('ELATED_ROOT');
	}
}

if(!function_exists('eltd_core_get_shortcode_module_template_part')) {
	/**
	 * Loads module template part.
	 *
	 * @param string $shortcode name of the shortcode folder
	 * @param string $template name of the template to load
	 * @param string $slug
	 * @param array $params array of parameters to pass to template
	 *
	 * @see ambient_elated_get_template_part()
	 */
	function eltd_core_get_shortcode_module_template_part($shortcode,$template, $slug = '', $params = array()) {
		
		//HTML Content from template
		$html = '';
		$template_path = ELATED_CORE_CPT_PATH.'/'.$shortcode.'/shortcodes/templates';
		
		$temp = $template_path.'/'.$template;
		if(is_array($params) && count($params)) {
			extract($params);
		}
		
		$template = '';
		
		if($temp !== '') {
			if($slug !== '') {
				$template = "{$temp}-{$slug}.php";
			}
			$template = $temp.'.php';
		}
		if($template) {
			ob_start();
			include($template);
			$html = ob_get_clean();
		}
		
		return $html;
	}
}

/**
 * Function that checks if url exists
 *
 * @param $url string url to check
 *
 * @return bool
 */
function ambient_elated_url_exists($url) {
	$url = str_replace("http://", "", $url);
	if(strstr($url, "/")) {
		$url    = explode("/", $url, 2);
		$url[1] = "/".$url[1];
	} else {
		$url = array($url, "/");
	}

	$fh = fsockopen($url[0], 80);
	if($fh) {
		fputs($fh, "GET ".$url[1]." HTTP/1.1\nHost:".$url[0]."\n\n");
		if(fread($fh, 22) == "HTTP/1.1 404 Not Found") {
			return false;
		} else {
			return true;
		}

	} else {
		return false;
	}
}

if(!function_exists('ambient_elated_add_user_custom_fields')) {
	/**
	 * Function creates custom social fields for users
	 *
	 * return $user_contact
	 */
	function ambient_elated_add_user_custom_fields($user_contact) {
		
		/**
		 * Function that add custom user fields
		 **/
		$user_contact['facebook']   = esc_html__('Facebook', 'edgtf-core');
		$user_contact['twitter']    = esc_html__('Twitter', 'edgtf-core');
		$user_contact['linkedin']   = esc_html__('Linkedin', 'edgtf-core');
		$user_contact['instagram']  = esc_html__('Instagram', 'edgtf-core');
		$user_contact['pinterest']  = esc_html__('Pinterest', 'edgtf-core');
		$user_contact['tumblr']     = esc_html__('Tumbrl', 'edgtf-core');
		$user_contact['googleplus'] = esc_html__('Google Plus', 'edgtf-core');
		
		return $user_contact;
	}
	
	add_filter('user_contactmethods', 'ambient_elated_add_user_custom_fields');
}

if(!function_exists('eltd_core_init_shortcode_loader')) {
	function eltd_core_init_shortcode_loader() {
		
		include_once 'shortcode-loader.php';
	}
	
	add_action('ambient_elated_shortcode_loader', 'eltd_core_init_shortcode_loader');
}
