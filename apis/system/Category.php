<?php 
require "db.php";
class Category extends db
{
   
	function __construct()
	{
		parent::__construct();
		
	}
	function Catsall(){
        $query = $this->db->query("select * from genres where status = 1");
	    if($query->num_rows>0) :
		  while($row = $query->fetch_assoc()) :
		    $qry = $this->db->query("select * from station where cat_id = '".$row['id']."' and status = 1"); 
		    $count = $qry->num_rows;
		    $imgs = 'assets/images/genres/'.$row['thumbnailImage'];
		    $img =  str_replace(" ","%20",$imgs);  
		    $set['status'] =  1;
		    $set['message'] = 'Data Found'; 
			$set['result']['category'][] = array_merge($row,array('thumbnailImage'=>$img,'live'=>"$count"));
		  endwhile;
		 else : 
			$set['status']  =  0;
		    $set['message'] = 'Data Not Found';
 		  endif;
		 echo json_encode($set,JSON_HEX_TAG | JSON_HEX_APOS | JSON_HEX_QUOT | JSON_HEX_AMP | JSON_UNESCAPED_UNICODE);
	}
	
}

?>