<?php 
unset($_REQUEST['G_ENABLED_IDPS'],$_REQUEST['PHPSESSID']);  
class db 
{
	   protected $db;
	   protected static $dbs;
	   function __construct()
	   {
		      require_once "../system/constant.php";
		      $mysqli = mysqli_connect(hostname,dbuser,dbpass,dbname);
		      $this->db  = $mysqli;
			  $this->db->set_charset("utf8");
		     
	   }
}

?>