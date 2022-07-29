<?php 

class load extends baseController{

	  function CountTable($set)
	  {
           $table = "emn_".$set;
           
           $query = $this->db->prepare("select * from ".$table);

           $query->execute();

           return $query->rowCount();
	  }



	  function isLogin()
	  {
	  	  if(isset($_SESSION['logs'])) : 
               return true;
               else : 
               	 return false;
	  	  	endif;
	  }
}

?>
