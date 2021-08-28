<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the installation.
 * You don't have to use the web site, you can copy this file to "wp-config.php"
 * and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * MySQL settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://wordpress.org/support/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'EgyptWood' );

/** MySQL database username */
define( 'DB_USER', 'root' );

/** MySQL database password */
define( 'DB_PASSWORD', 'root' );

/** MySQL hostname */
define( 'DB_HOST', 'localhost' );

/** Database charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** The database collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication unique keys and salts.
 *
 * Change these to different unique phrases! You can generate these using
 * the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}.
 *
 * You can change these at any point in time to invalidate all existing cookies.
 * This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         'yO[$:-5qEPkb.G`PsczLw59A|?h-iuGC+{0:vf3~VDCD%uf 8yJp2_B!:F2g=m0c' );
define( 'SECURE_AUTH_KEY',  'r4 C}wiD%cazG=*I5U^9k9n}CmQVx2Li$bj@=EL1*G<[Q[rw@$ZF44IN[Fj&{U,G' );
define( 'LOGGED_IN_KEY',    'i9Pdhqo>ngWzi=b`/gG+:yeu,ugEDxd*_Hpr9a!N!++|Ob0&<y!/ZS%Y U%sO?-!' );
define( 'NONCE_KEY',        'A<)lQqv2N[uW_0JN ~Lzx%E_Pfn$*4V8*@$d?[lg,[DTJ<{]om.x8jBcfW WFa+d' );
define( 'AUTH_SALT',        'jRA~K(Y<^8@`_g{[#WiLD9)*5`P+@n9kdO;{kE#e)W~o=zgV1bOCSIXCoCR<g{1#' );
define( 'SECURE_AUTH_SALT', ';H|~eus,G^Lz_=?udIPuG`p<sGo$2W8qS+N1 <3cK3#-K$Q9w`,FW.6M-U{R&*r&' );
define( 'LOGGED_IN_SALT',   '[E|Y*+8$PqE^Ok%&#UJP-t<qrQ4]Lt(t~s<bOZXA|j)?,HuYi{b|_?ctylDPu?9X' );
define( 'NONCE_SALT',       'TblZO>kwY+!SzPV!(n.sr#m`8Dc(yk2Dpma?d5a8[KO*LdJ~^PX:#[{wX. r9eeo' );

/**#@-*/

/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_egyptwood';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://wordpress.org/support/article/debugging-in-wordpress/
 */
define( 'WP_DEBUG', false );

/* Add any custom values between this line and the "stop editing" line. */



/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
