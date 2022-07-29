<?php 

class load extends baseController{

	  function CountTable($set)
	  {
           $table = $set;        
           $query = $this->db->prepare("select * from ".$table."");
           $query->execute();
           return $query->rowCount();
	  }
	  
	  function GetAllstsation(){
		 $query = $this->db->prepare("select * from station order by id desc");
         $query->execute();
		 $val = $query->fetchAll();
		 return $val;
	 }
	  function GetStLimited(){
		 $query = $this->db->prepare("select * from station order by id desc limit 5");
         $query->execute();
		 $val = $query->fetchAll();
		 return $val;
	 }
	  function GetSetting(){
		 $query = $this->db->prepare("select * from tbl_setting where id =1");
         $query->execute();
		 $val = $query->fetchAll();
		 return $val;
	 }
	  function GetAdminSetting(){
		 $query = $this->db->prepare("select * from admin_user where id =1");
         $query->execute();
		 $val = $query->fetchAll();
		 return $val;
	 }
	 
	  function isLogin()
	  {
	  	  if(isset($_SESSION['loggs'])) : 
               return true;
               else : 
               	 return false;
	  	  	endif;
	  }
}

?>
