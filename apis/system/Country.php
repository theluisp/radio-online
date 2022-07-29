<?php 
require "db.php";
class Country extends db
{
   
	function __construct()
	{
		parent::__construct();
		
	}
	function countrylist(){
        $offset = $_REQUEST['offset'];
        $pagecount = $_REQUEST['page'];
        $limit=($_REQUEST['page']-1) * $offset;
        $query = $this->db->query("select * from countries order by country_id ASC limit $limit,$offset");
        $results = $this->db->query("select * from countries");
            $nums = $results->num_rows;
            $total = ($nums - ($limit + $offset));
            $page = $nums / $offset;
            $pages = ceil($page);
            if($total > 0 ){
            $total = $total;
            }
            else{
            $total = 0;
            }
	    if($query->num_rows>0) :
		  while($row = $query->fetch_assoc()) :
		    $img = 'images/countries/'.$row['flag_pic'];
		    $set['status'] =  1;
		    $set['message'] = 'Data Found'; 
		    $set['result']['trackLeft'] = $total;
			$set['result']['totaltrack'] = $nums;
			$set['result']['page'] = intval($pagecount);
			$set['result']['total_pages'] = $pages;
			$set['result']['stations'][] = array_merge($row,array('flag_pic'=>$img));
		  endwhile;
		 else : 
			$set['status']  =  0;
			$set['result']['trackLeft'] = $total;
            $set['result']['totaltrack'] = $nums;
            $set['result']['page'] = intval($pagecount);
            $set['result']['total_pages'] = $pages; 
		    $set['message'] = 'Data Not Found';
 		  endif;
		 echo json_encode($set,JSON_HEX_TAG | JSON_HEX_APOS | JSON_HEX_QUOT | JSON_HEX_AMP | JSON_UNESCAPED_UNICODE);
	}
}

?>