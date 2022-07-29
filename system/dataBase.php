<?php 
session_start();
error_reporting(0);
ini_set('display_errors', 'On');
ini_set('memory_limit','800M');
class dataBase
{ 
     

      protected $db;
      protected $session;

	  function __construct()
	  {
	      
	      try{
          $this->db = new PDO("mysql:host=".hostname.";dbname=".dbname,dbuser,dbpass,array(PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION)); 
          
        
	      }
	      catch(PDOException $ex)
	      {
	          
	          die(json_encode(array('outcome' => false, 'message' => 'Unable to connect'))); 
	      }
	  }
	    
}
?>