<?php 
 session_start();
define('hostname','localhost');
define('dbuser','root');
define('dbpass','mysql');
define('dbname','radio');

/***********************************************************************************/
// global variable
define("SYS","system");
define("APP","core");

$http = ((!empty($_SERVER['HTTPS']) && $_SERVER['HTTPS'] != 'off') || $_SERVER['SERVER_PORT'] == 443) ? "https://" : "http://";
$host  = $http.$_SERVER['HTTP_HOST'].str_replace(basename($_SERVER['SCRIPT_NAME']),"",$_SERVER["SCRIPT_NAME"]);
define('title','Online Radios');
define("siteUrl",$host);
define("loadAPP","bootstrap");
define("EXT",".php");
define("view","src");
define('template',"layout");
define("htmlTemplate",'system/lib');



?>
