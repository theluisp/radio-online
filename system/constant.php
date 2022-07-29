<?php 
// database connection
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

define("siteUrl",$host);

define("loadAPP","bootstrap");

define("EXT",".php");

define("view","src");

define('template',"includes");

define("htmlTemplate",'system/lib');

    $mysqli = mysqli_connect(hostname,dbuser,dbpass,dbname);
    $data = $mysqli->query("select * from tbl_setting");
    $num = $data->num_rows;
    if($num > 0){
    $row = $data->fetch_assoc();
    define('Adstop',$row['adstop']);
    define('Adsright',$row['adsright']);
    define('Adsbottom',$row['adsbottom']);
    define('TITLE',$row['title']);
    define('DESC',$row['description']);
    define('LOGO',$row['logo']);
    define('TRACKING_ID',$row['tracking_id']);
    define('EMAIL',$row['email']);
    }
?>
