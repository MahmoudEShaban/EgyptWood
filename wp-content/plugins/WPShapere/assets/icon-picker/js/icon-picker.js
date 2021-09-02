/* Icon Picker */

(function($) {

	$.fn.iconPicker = function( options ) {
		var options = ['dashicons','dashicons']; // default font set
		var icons;
		$list = $('');
		function font_set() {
			if (options[0] == 'lni') {
				icons = [
					"blank",	// there is no "blank" but we need the option
					'add-file',
					'empty-file',
					'remove-file',
					'files',
					'display-alt',
					'laptop-phone',
					'laptop',
					'mobile',
					'tab',
					'timer',
					'headphone',
					'rocket',
					'package',
					'popup',
					'scroll-down',
					'pagination',
					'unlock',
					'lock',
					'reload',
					'map-marker',
					'map',
					'game',
					'search',
					'alarm',
					'code',
					'website',
					'code-alt',
					'display',
					'shortcode',
					'headphone-alt',
					'alarm-clock',
					'bookmark-alt',
					'bookmark',
					'layout',
					'keyboard',
					'grid-alt',
					'grid',
					'mic',
					'signal',
					'download',
					'upload',
					'zip',
					'rss-feed',
					'warning',
					'cloud-sync',
					'cloud-upload',
					'cloud-check',
					'cloud-download',
					'cog',
					'dashboard',
					'folder',
					'database',
					'harddrive',
					'control-panel',
					'plug',
					'menu',
					'power-switch',
					'printer',
					'save',
					'layers',
					'link',
					'share',
					'inbox',
					'unlink',
					'microphone',
					'magnet',
					'mouse',
					'share-alt',
					'bluetooth',
					'crop',
					'cut',
					'protection',
					'shield',
					'bolt-alt',
					'bolt',
					'infinite',
					'hand',
					'flag',
					'zoom-out',
					'zoom-in',
					'pin-alt',
					'pin',
					'more-alt',
					'more',
					'check-box',
					'check-mark-circle',
					'cross-circle',
					'circle-minus',
					'close',
					'star-filled',
					'star',
					'star-empty',
					'star-half',
					'question-circle',
					'thumbs-down',
					'thumbs-up',
					'minus',
					'plus',
					'ban',
					'hourglass',
					'trash',
					'key',
					'pulse',
					'heart',
					'heart-filled',
					'help',
					'paint-roller',
					'ux',
					'radio-button',
					'brush-alt',
					'select',
					'slice',
					'move',
					'wheelchair',
					'vector',
					'ruler-pencil',
					'ruler',
					'brush',
					'eraser',
					'ruler-alt',
					'color-pallet',
					'paint-bucket',
					'bulb',
					'highlight-alt',
					'highlight',
					'handshake',
					'briefcase',
					'funnel',
					'world',
					'calculator',
					'target-revenue',
					'revenue',
					'invention',
					'network',
					'credit-cards',
					'pie-chart',
					'archive',
					'magnifier',
					'agenda',
					'tag',
					'target',
					'stamp',
					'clipboard',
					'licencse',
					'paperclip',
					'stats-up',
					'stats-down',
					'bar-chart',
					'bullhorn',
					'calendar',
					'quotation',
					'bus',
					'car-alt',
					'car',
					'train',
					'train-alt',
					'helicopter',
					'ship',
					'bridge',
					'scooter',
					'plane',
					'bi-cycle',
					'postcard',
					'road',
					'envelope',
					'reply',
					'bubble',
					'support',
					'comment-reply',
					'pointer',
					'phone',
					'phone-handset',
					'comment-alt',
					'comment',
					'coffee-cup',
					'home',
					'gift',
					'thought',
					'eye',
					'user',
					'users',
					'wallet',
					'tshirt',
					'medall-alt',
					'medall',
					'notepad',
					'crown',
					'ticket',
					'ticket-alt',
					'certificate',
					'cup',
					'library',
					'school-bench-alt',
					'school-bench',
					'microscope',
					'school-compass',
					'information',
					'graduation',
					'write',
					'pencil-alt',
					'pencil',
					'blackboard',
					'book',
					'shuffle',
					'gallery',
					'image',
					'volume-mute',
					'backward',
					'forward',
					'stop',
					'play',
					'pause',
					'music',
					'frame-expand',
					'full-screen',
					'video',
					'volume-high',
					'volume-low',
					'volume-medium',
					'volume',
					'camera',
					'invest-monitor',
					'grow',
					'money-location',
					'cloudnetwork',
					'diamond',
					'customer',
					'domain',
					'target-audience',
					'seo',
					'keyword-research',
					'seo-monitoring',
					'seo-consulting',
					'money-protection',
					'offer',
					'delivery',
					'investment',
					'shopping-basket',
					'coin',
					'cart-full',
					'cart',
					'burger',
					'restaurant',
					'service',
					'chef-hat',
					'cake',
					'pizza',
					'teabag',
					'dinner',
					'taxi',
					'caravan',
					'pyramids',
					'surfboard',
					'travel',
					'island',
					'mashroom',
					'sprout',
					'tree',
					'trees',
					'flower',
					'bug',
					'leaf',
					'fresh-juice',
					'heart-monitor',
					'dumbbell',
					'skipping-rope',
					'slim',
					'weight',
					'basketball',
					'first-aid',
					'ambulance',
					'hospital',
					'syringe',
					'capsule',
					'stethoscope',
					'wheelbarrow',
					'shovel',
					'construction-hammer',
					'brick',
					'hammer',
					'helmet',
					'trowel',
					'construction',
					'apartment',
					'juice',
					'spray',
					'candy-cane',
					'candy',
					'fireworks',
					'flags',
					'baloon',
					'cloud',
					'night',
					'cloudy-sun',
					'rain',
					'thunder',
					'drop',
					'thunder-alt',
					'sun',
					'spell-check',
					'text-format',
					'text-format-remove',
					'italic',
					'line-dotted',
					'text-align-center',
					'text-align-left',
					'text-align-right',
					'text-align-justify',
					'bold',
					'page-break',
					'strikethrough',
					'text-size',
					'line-dashed',
					'line-double',
					'direction-ltr',
					'direction-rtl',
					'list',
					'line-spacing',
					'sort-alpha-asc',
					'sort-amount-asc',
					'indent-decrease',
					'indent-increase',
					'pilcrow',
					'underline',
					'dollar',
					'rupee',
					'pound',
					'yen',
					'euro',
					'emoji-happy',
					'emoji-tounge',
					'emoji-cool',
					'emoji-friendly',
					'emoji-neutral',
					'emoji-sad',
					'emoji-smile',
					'emoji-suspect',
					'direction-alt',
					'enter',
					'exit-down',
					'exit-up',
					'exit',
					'chevron-up',
					'chevron-left',
					'chevron-down',
					'chevron-right',
					'arrow-down',
					'arrows-horizontal',
					'arrows-vertical',
					'direction',
					'arrow-left',
					'arrow-right',
					'arrow-up',
					'arrow-down-circle',
					'anchor',
					'arrow-left-circle',
					'arrow-right-circle',
					'arrow-up-circle',
					'angle-double-down',
					'angle-double-left',
					'angle-double-right',
					'angle-double-up',
					'arrow-top-left',
					'arrow-top-right',
					'chevron-down-circle',
					'chevron-left-circle',
					'chevron-right-circle',
					'chevron-up-circle',
					'shift-left',
					'shift-right',
					'pointer-down',
					'pointer-right',
					'pointer-left',
					'pointer-up',
					'spinner-arrow',
					'spinner-solid',
					'spinner',
					'google',
					'producthunt',
					'paypal',
					'paypal-original',
					'java',
					'microsoft',
					'windows',
					'flickr',
					'drupal',
					'drupal-original',
					'android',
					'android-original',
					'playstore',
					'git',
					'github-original',
					'github',
					'steam',
					'shopify',
					'snapchat',
					'soundcloud',
					'souncloud-original',
					'telegram',
					'twitch',
					'vimeo',
					'vk',
					'wechat',
					'whatsapp',
					'yahoo',
					'youtube',
					'stackoverflow',
					'slideshare',
					'slack',
					'lineicons-alt',
					'lineicons',
					'skype',
					'pinterest',
					'reddit',
					'line',
					'megento',
					'blogger',
					'bootstrap',
					'dribbble',
					'dropbox',
					'dropbox-original',
					'envato',
					'500px',
					'twitter-original',
					'twitter',
					'twitter-filled',
					'facebook-messenger',
					'facebook-original',
					'facebook-filled',
					'facebook',
					'joomla',
					'firefox',
					'amazon-original',
					'amazon',
					'linkedin-original',
					'linkedin',
					'linkedin-filled',
					'bitbucket',
					'quora',
					'medium',
					'instagram-original',
					'instagram-filled',
					'instagram',
					'bitcoin',
					'stripe',
					'wordpress-filled',
					'wordpress',
					'google-plus',
					'mastercard',
					'visa',
					'amex',
					'apple',
					'behance',
					'behance-original',
					'chrome',
					'spotify-original',
					'spotify',
					'html',
					'css',
					'ycombinator'
				];
				options[1] = 'lni';
			}
			else if (options[0] == 'dashicons') {
				icons = [
					"blank",	// there is no "blank" but we need the option
					"menu",
					"admin-site",
					"dashboard",
					"admin-media",
					"admin-page",
					"admin-comments",
					"admin-appearance",
					"admin-plugins",
					"admin-users",
					"admin-tools",
					"admin-settings",
					"admin-network",
					"admin-generic",
					"admin-home",
					"admin-collapse",
					"admin-links",
					"format-links",
					"admin-post",
					"format-standard",
					"format-image",
					"format-gallery",
					"format-audio",
					"format-video",
					"format-chat",
					"format-status",
					"format-aside",
					"format-quote",
					"welcome-write-blog",
					"welcome-edit-page",
					"welcome-add-page",
					"welcome-view-site",
					"welcome-widgets-menus",
					"welcome-comments",
					"welcome-learn-more",
					"image-crop",
					"image-rotate-left",
					"image-rotate-right",
					"image-flip-vertical",
					"image-flip-horizontal",
					"undo",
					"redo",
					"editor-bold",
					"editor-italic",
					"editor-ul",
					"editor-ol",
					"editor-quote",
					"editor-alignleft",
					"editor-aligncenter",
					"editor-alignright",
					"editor-insertmore",
					"editor-spellcheck",
					"editor-distractionfree",
					"editor-kitchensink",
					"editor-underline",
					"editor-justify",
					"editor-textcolor",
					"editor-paste-word",
					"editor-paste-text",
					"editor-removeformatting",
					"editor-video",
					"editor-customchar",
					"editor-outdent",
					"editor-indent",
					"editor-help",
					"editor-strikethrough",
					"editor-unlink",
					"editor-rtl",
					"align-left",
					"align-right",
					"align-center",
					"align-none",
					"lock",
					"calendar",
					"visibility",
					"post-status",
					"post-trash",
					"edit",
					"trash",
					"arrow-up",
					"arrow-down",
					"arrow-left",
					"arrow-right",
					"arrow-up-alt",
					"arrow-down-alt",
					"arrow-left-alt",
					"arrow-right-alt",
					"arrow-up-alt2",
					"arrow-down-alt2",
					"arrow-left-alt2",
					"arrow-right-alt2",
					"leftright",
					"sort",
					"list-view",
					"exerpt-view",
					"share",
					"share1",
					"share-alt",
					"share-alt2",
					"twitter",
					"rss",
					"facebook",
					"facebook-alt",
					"networking",
					"googleplus",
					"hammer",
					"art",
					"migrate",
					"performance",
					"wordpress",
					"wordpress-alt",
					"pressthis",
					"update",
					"screenoptions",
					"info",
					"cart",
					"feedback",
					"cloud",
					"translation",
					"tag",
					"category",
					"yes",
					"no",
					"no-alt",
					"plus",
					"minus",
					"dismiss",
					"marker",
					"star-filled",
					"star-half",
					"star-empty",
					"flag",
					"location",
					"location-alt",
					"camera",
					"images-alt",
					"images-alt2",
					"video-alt",
					"video-alt2",
					"video-alt3",
					"vault",
					"shield",
					"shield-alt",
					"search",
					"slides",
					"analytics",
					"chart-pie",
					"chart-bar",
					"chart-line",
					"chart-area",
					"groups",
					"businessman",
					"id",
					"id-alt",
					"products",
					"awards",
					"forms",
					"portfolio",
					"book",
					"book-alt",
					"download",
					"upload",
					"backup",
					"lightbulb",
					"smiley"
				];
				options[1] = 'dashicons';
			} else if (options[0] == 'fa') {
			icons = [
				"blank",
				"adjust",
"adn",
"align-center",
"align-justify",
"align-left",
"align-right",
"ambulance",
"anchor",
"android",
"angle-double-down",
"angle-double-left",
"angle-double-right",
"angle-double-up",
"angle-down",
"angle-left",
"angle-right",
"angle-up",
"apple",
"archive",
"arrow-circle-down",
"arrow-circle-left",
"arrow-circle-o-down",
"arrow-circle-o-left",
"arrow-circle-o-right",
"arrow-circle-o-up",
"arrow-circle-right",
"arrow-circle-up",
"arrow-down",
"arrow-left",
"arrow-right",
"arrow-up",
"arrows",
"arrows-alt",
"arrows-h",
"arrows-v",
"asterisk",
"automobile",
"backward",
"ban",
"bank",
"bar-chart-o",
"barcode",
"bars",
"beer",
"behance",
"behance-square",
"bell",
"bell-o",
"bitbucket",
"bitbucket-square",
"bitcoin",
"bold",
"bolt",
"bomb",
"book",
"bookmark",
"bookmark-o",
"briefcase",
"btc",
"bug",
"building",
"building-o",
"bullhorn",
"bullseye",
"cab",
"calendar",
"calendar-o",
"camera",
"camera-retro",
"car",
"caret-down",
"caret-left",
"caret-right",
"caret-square-o-down",
"caret-square-o-left",
"caret-square-o-right",
"caret-square-o-up",
"caret-up",
"certificate",
"chain",
"chain-broken",
"check",
"check-circle",
"check-circle-o",
"check-square",
"check-square-o",
"chevron-circle-down",
"chevron-circle-left",
"chevron-circle-right",
"chevron-circle-up",
"chevron-down",
"chevron-left",
"chevron-right",
"chevron-up",
"child",
"circle",
"circle-o",
"circle-o-notch",
"circle-thin",
"clipboard",
"clock-o",
"cloud",
"cloud-download",
"cloud-upload",
"cny",
"code",
"code-fork",
"codepen",
"coffee",
"cog",
"cogs",
"columns",
"comment",
"comment-o",
"comments",
"comments-o",
"compass",
"compress",
"copy",
"credit-card",
"crop",
"crosshairs",
"css3",
"cube",
"cubes",
"cut",
"cutlery",
"dashboard",
"database",
"dedent",
"delicious",
"desktop",
"deviantart",
"digg",
"dollar",
"dot-circle-o",
"download",
"dribbble",
"dropbox",
"drupal",
"edit",
"eject",
"ellipsis-h",
"ellipsis-v",
"empire",
"envelope",
"envelope-o",
"envelope-square",
"eraser",
"eur",
"euro",
"exchange",
"exclamation",
"exclamation-circle",
"exclamation-triangle",
"expand",
"external-link",
"external-link-square",
"eye",
"eye-slash",
"facebook",
"facebook-square",
"fast-backward",
"fast-forward",
"fax",
"female",
"fighter-jet",
"file",
"file-archive-o",
"file-audio-o",
"file-code-o",
"file-excel-o",
"file-image-o",
"file-movie-o",
"file-o",
"file-pdf-o",
"file-photo-o",
"file-picture-o",
"file-powerpoint-o",
"file-sound-o",
"file-text",
"file-text-o",
"file-video-o",
"file-word-o",
"file-zip-o",
"files-o",
"film",
"filter",
"fire",
"fire-extinguisher",
"flag",
"flag-checkered",
"flag-o",
"flash",
"flask",
"flickr",
"floppy-o",
"folder",
"folder-o",
"folder-open",
"folder-open-o",
"font",
"forward",
"foursquare",
"frown-o",
"gamepad",
"gavel",
"gbp",
"ge",
"gear",
"gears",
"gift",
"git",
"git-square",
"github",
"github-alt",
"github-square",
"gittip",
"glass",
"globe",
"google",
"google-plus",
"google-plus-square",
"graduation-cap",
"group",
"h-square",
"hacker-news",
"hand-o-down",
"hand-o-left",
"hand-o-right",
"hand-o-up",
"hdd-o",
"header",
"headphones",
"heart",
"heart-o",
"history",
"home",
"hospital-o",
"html5",
"image",
"inbox",
"indent",
"info",
"info-circle",
"inr",
"instagram",
"institution",
"italic",
"joomla",
"jpy",
"jsfiddle",
"key",
"keyboard-o",
"krw",
"language",
"laptop",
"leaf",
"legal",
"lemon-o",
"level-down",
"level-up",
"life-bouy",
"life-ring",
"life-saver",
"lightbulb-o",
"link",
"linkedin",
"linkedin-square",
"linux",
"list",
"list-alt",
"list-ol",
"list-ul",
"location-arrow",
"lock",
"long-arrow-down",
"long-arrow-left",
"long-arrow-right",
"long-arrow-up",
"magic",
"magnet",
"mail-forward",
"mail-reply",
"mail-reply-all",
"male",
"map-marker",
"maxcdn",
"medkit",
"meh-o",
"microphone",
"microphone-slash",
"minus",
"minus-circle",
"minus-square",
"minus-square-o",
"mobile",
"mobile-phone",
"money",
"moon-o",
"mortar-board",
"music",
"navicon",
"openid",
"outdent",
"pagelines",
"paper-plane",
"paper-plane-o",
"paperclip",
"paragraph",
"paste",
"pause",
"paw",
"pencil",
"pencil-square",
"pencil-square-o",
"phone",
"phone-square",
"photo",
"picture-o",
"pied-piper",
"pied-piper-alt",
"pied-piper-square",
"pinterest",
"pinterest-square",
"plane",
"play",
"play-circle",
"play-circle-o",
"plus",
"plus-circle",
"plus-square",
"plus-square-o",
"power-off",
"print",
"puzzle-piece",
"qq",
"qrcode",
"question",
"question-circle",
"quote-left",
"quote-right",
"ra",
"random",
"rebel",
"recycle",
"reddit",
"reddit-square",
"refresh",
"renren",
"reorder",
"repeat",
"reply",
"reply-all",
"retweet",
"rmb",
"road",
"rocket",
"rotate-left",
"rotate-right",
"rouble",
"rss",
"rss-square",
"rub",
"ruble",
"rupee",
"save",
"scissors",
"search",
"search-minus",
"search-plus",
"send",
"send-o",
"share",
"share-alt",
"share-alt-square",
"share-square",
"share-square-o",
"shield",
"shopping-cart",
"sign-in",
"sign-out",
"signal",
"sitemap",
"skype",
"slack",
"sliders",
"smile-o",
"sort",
"sort-alpha-asc",
"sort-alpha-desc",
"sort-amount-asc",
"sort-amount-desc",
"sort-asc",
"sort-desc",
"sort-down",
"sort-numeric-asc",
"sort-numeric-desc",
"sort-up",
"soundcloud",
"space-shuttle",
"spinner",
"spoon",
"spotify",
"square",
"square-o",
"stack-exchange",
"stack-overflow",
"star",
"star-half",
"star-half-empty",
"star-half-full",
"star-half-o",
"star-o",
"steam",
"steam-square",
"step-backward",
"step-forward",
"stethoscope",
"stop",
"strikethrough",
"stumbleupon",
"stumbleupon-circle",
"subscript",
"suitcase",
"sun-o",
"superscript",
"support",
"table",
"tablet",
"tachometer",
"tag",
"tags",
"tasks",
"taxi",
"tencent-weibo",
"terminal",
"text-height",
"text-width",
"th",
"th-large",
"th-list",
"thumb-tack",
"thumbs-down",
"thumbs-o-down",
"thumbs-o-up",
"thumbs-up",
"ticket",
"times",
"times-circle",
"times-circle-o",
"tint",
"toggle-down",
"toggle-left",
"toggle-right",
"toggle-up",
"trash-o",
"tree",
"trello",
"trophy",
"truck",
"try",
"tumblr",
"tumblr-square",
"turkish-lira",
"twitter",
"twitter-square",
"umbrella",
"underline",
"undo",
"university",
"unlink",
"unlock",
"unlock-alt",
"unsorted",
"upload",
"usd",
"user",
"user-md",
"users",
"video-camera",
"vimeo-square",
"vine",
"vk",
"volume-down",
"volume-off",
"volume-up",
"warning",
"wechat",
"weibo",
"weixin",
"wheelchair",
"windows",
"won",
"wordpress",
"wrench",
"xing",
"xing-square",
"yahoo",
"yen",
"youtube",
"youtube-play",
"youtube-square"
			];
			options[1] = "fa";
		} else {
			icons = [
				"blank",
				"standard",
				"aside",
				"image",
				"gallery",
				"video",
				"status",
				"quote",
				"link",
				"chat",
				"audio",

				/* Social icons */
				"github",
				"dribbble",
				"twitter",
				"facebook",
				"facebook-alt",
				"wordpress",
				"googleplus",
				"linkedin",
				"linkedin-alt",
				"pinterest",
				"pinterest-alt",
				"flickr",
				"vimeo",
				"youtube",
				"tumblr",
				"instagram",
				"codepen",
				"polldaddy",
				"googleplus-alt",
				"path",
				"skype",
				"digg",
				"reddit",
				"stumbleupon",
				"pocket",

				/* Meta icons */
				"comment",
				"category",
				"tag",
				"time",
				"user",
				"day",
				"week",
				"month",
				"pinned",

				/* Other icons */
				"search",
				"unzoom",
				"zoom",
				"show",
				"hide",
				"close",
				"close-alt",
				"trash",
				"star",
				"home",
				"mail",
				"edit",
				"reply",
				"feed",
				"warning",
				"share",
				"attachment",
				"location",
				"checkmark",
				"menu",
				"refresh",
				"minimize",
				"maximize",
				"404",
				"spam",
				"summary",
				"cloud",
				"key",
				"dot",
				"next",
				"previous",
				"expand",
				"collapse",
				"dropdown",
				"dropdown-left",
				"top",
				"draggable",
				"phone",
				"send-to-phone",
				"plugin",
				"cloud-download",
				"cloud-upload",
				"external",
				"document",
				"book",
				"cog",
				"unapprove",
				"cart",
				"pause",
				"stop",
				"skip-back",
				"skip-ahead",
				"play",
				"tablet",
				"send-to-tablet",
				"info",
				"notice",
				"help",
				"fastforward",
				"rewind",
				"portfolio",
				"heart",
				"code",
				"subscribe",
				"unsubscribe",
				"subscribed",
				"reply-alt",
				"reply-single",
				"flag",
				"print",
				"lock",
				"bold",
				"italic",
				"picture",

				/* Generic shapes */
				"uparrow",
				"rightarrow",
				"downarrow",
				"leftarrow"
			];
			options[1] = 'genericon';
		};
	};
	font_set();

	function build_list($popup,$button,clear) {
	  $list = $popup.find('.icon-picker-list');
	  if (clear==1) { $list.empty(); // clear list //
	  }
	  for (var i in icons) {
		  $list.append('<li data-icon="'+icons[i]+'"><a href="#" title="'+icons[i]+'"><span class="'+options[0]+' '+options[1]+'-'+icons[i]+'"></span></a></li>');
	  };
				$('a', $list).click(function(e) {
					e.preventDefault();
					var title = $(this).attr("title");
					$target.val(options[0]+"|"+options[1]+"-"+title);
					$button.removeClass().addClass("icon-picker "+options[0]+" "+options[1]+"-"+title);
					removePopup();
				});
	};

			function removePopup(){
				$(".icon-picker-container").remove();
			}


			$button = $('.icon-picker');
			$button.each( function() {
				$(this).on('click.iconPicker', function() {
					createPopup($(this));
				});
			});


			function createPopup($button) {
				$target = $($button.data('target'));
				$popup = $('<div class="icon-picker-container"> \
						<div class="icon-picker-control"></div> \
						<ul class="icon-picker-list"></ul> \
					</div>')
					.css({
						'top': $button.offset().top,
						'left': $button.offset().left
					});
				build_list($popup,$button,0);
				var $control = $popup.find('.icon-picker-control');
				$control.html('<p>Select Font: <select><option value="dashicons">Dashicons</option><option value="lni">Line Icons</option><option value="fa">Font Awesome</option></select></p>'+
				'<a data-direction="back" href="#"><span class="dashicons dashicons-arrow-left-alt2"></span></a> '+
				'<input type="text" class="" placeholder="Search" />'+
				'<a data-direction="forward" href="#"><span class="dashicons dashicons-arrow-right-alt2"></span></a>'+
				'');

				$('select', $control).on('change', function(e) {
					e.preventDefault();
					if (this.value != options[0]) {
						options[0] = this.value;
						font_set();
						build_list($popup,$button,1);
					};
				});

				$('a', $control).click(function(e) {
					e.preventDefault();
					if ($(this).data('direction') === 'back') {
						//move last 25 elements to front
						$('li:gt(' + (icons.length - 26) + ')', $list).each(function() {
							$(this).prependTo($list);
						});
					} else {
						//move first 25 elements to the end
						$('li:lt(25)', $list).each(function() {
							$(this).appendTo($list);
						});
					}
				});

				$popup.appendTo('body').show();

				$('input', $control).on('keyup', function(e) {
					var search = $(this).val();
					if (search === '') {
						//show all again
						$('li:lt(25)', $list).show();
					} else {
						$('li', $list).each(function() {
							if ($(this).data('icon').toString().toLowerCase().indexOf(search.toLowerCase()) !== -1) {
								$(this).show();
							} else {
								$(this).hide();
							}
						});
					}
				});



				$(document).mouseup(function (e){
					if (!$popup.is(e.target) && $popup.has(e.target).length === 0) {
						removePopup();
					}
				});
			}
	}


	$(function() {
		$('.icon-picker').iconPicker();
	});

}(jQuery));
