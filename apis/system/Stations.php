<?php 
require "db.php";
class Stations extends db
{
   
	function __construct()
	{
		parent::__construct();
		
	}
	
	function allstations(){
	    $offset = $_REQUEST['offset'];
        $pagecount = $_REQUEST['page'];
        $limit=($_REQUEST['page']-1) * $offset;
        $query = $this->db->query("select * from station where status = 1 ORDER BY id DESC limit $limit,$offset");
        $results = $this->db->query("select * from station where status = 1");
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
		    $imgs = 'assets/images/radios/'.$row['thumbnailImage'];
		    $img =  str_replace(" ","%20",$imgs);
		    $set['status'] =  1;
		    $set['message'] = 'Data Found'; 
		    $set['result']['trackLeft'] = $total;
			$set['result']['totaltrack'] = $nums;
			$set['result']['page'] = intval($pagecount);
			$set['result']['total_pages'] = $pages;
			$set['result']['stations'][] = array_merge($row,array('thumbnailImage'=>$img));
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
	
	function StationsByCatId(){
	    $cid = $_REQUEST['cid'];
	    $offset = 10;
        $pagecount = $_REQUEST['page'];
        $limit=($_REQUEST['page']-1) * $offset;
        $query = $this->db->query("select * from station where cat_id = '$cid' and status = 1 ORDER BY id DESC limit $limit,$offset");
        $results = $this->db->query("select * from station where cat_id = '$cid' and status = 1");
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
		    $imgs = 'assets/images/radios/'.$row['thumbnailImage'];
		    $img =  str_replace(" ","%20",$imgs);
		    $set['status'] =  1;
		    $set['message'] = 'Data Found'; 
		    $set['result']['trackLeft'] = $total;
			$set['result']['totaltrack'] = $nums;
			$set['result']['page'] = intval($pagecount);
			$set['result']['total_pages'] = $pages;
			$set['result']['stations'][] = array_merge($row,array('thumbnailImage'=>$img));
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
	
	function StationsByCountry(){
	    $country_id = $_REQUEST['country_id'];
	    $offset = 10;
        $pagecount = $_REQUEST['page'];
        $limit=($_REQUEST['page']-1) * $offset;
        $query = $this->db->query("select * from station where country_id = '$country_id' and status = 1 ORDER BY id DESC limit $limit,$offset");
        $results = $this->db->query("select * from station where country_id = '$country_id' and status = 1");
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
		    $imgs = 'assets/images/radios/'.$row['thumbnailImage'];
		    $img =  str_replace(" ","%20",$imgs);
		    $set['status'] =  1;
		    $set['message'] = 'Data Found'; 
		    $set['result']['trackLeft'] = $total;
			$set['result']['totaltrack'] = $nums;
			$set['result']['page'] = intval($pagecount);
			$set['result']['total_pages'] = $pages;
			$set['result']['stations'][] = array_merge($row,array('thumbnailImage'=>$img));
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
	
	function featurestation(){
	    $query = $this->db->query("select * from station where status = 1 and featured = 1 limit 5");
	    if($query->num_rows>0) :
		  while($row = $query->fetch_assoc()) :
		    $imgs = 'assets/images/radios/'.$row['thumbnailImage'];
		    $img =  str_replace(" ","%20",$imgs);
		    $set['status'] =  1;
		    $set['message'] = 'Data Found'; 
			$set['result']['stations'][] = array_merge($row,array('thumbnailImage'=>$img));
		  endwhile;
		 else : 
			$set['status']  =  0;
		    $set['message'] = 'Data Not Found';
 		  endif;
		 echo json_encode($set,JSON_HEX_TAG | JSON_HEX_APOS | JSON_HEX_QUOT | JSON_HEX_AMP | JSON_UNESCAPED_UNICODE);
	}
	function newarrival(){
	    $query = $this->db->query("select * from station where status = 1 order by id desc limit 10");
	    if($query->num_rows>0) :
		  while($row = $query->fetch_assoc()) :
		    $imgs = 'assets/images/radios/'.$row['thumbnailImage'];
		    $img =  str_replace(" ","%20",$imgs);
		    $set['status'] =  1;
		    $set['message'] = 'Data Found'; 
			$set['result']['stations'][] = array_merge($row,array('thumbnailImage'=>$img));
		  endwhile;
		 else : 
			$set['status']  =  0;
		    $set['message'] = 'Data Not Found';
 		  endif;
		 echo json_encode($set,JSON_HEX_TAG | JSON_HEX_APOS | JSON_HEX_QUOT | JSON_HEX_AMP | JSON_UNESCAPED_UNICODE);
	}
	
	function searchstation(){
		$name = $_REQUEST['name'];
		$query = $this->db->query("select * from station where title LIKE '%$name%'");  
			if($query->num_rows > 0) :
			    while($val = $query->fetch_assoc()){ 
			    $imgs = 'assets/images/radios/'.$val['thumbnailImage'];
		        $img =  str_replace(" ","%20",$imgs);
				$set['message'] = 'success';
				$set['status']  = 1; 
				$set['result']['station'][] = array_merge($val,array('thumbnailImage'=>$img));
				}
			else:
				$set['message'] = 'Data not found';
				$set['status']  = 0; 
			endif;
		echo json_encode($set,JSON_HEX_TAG | JSON_HEX_APOS | JSON_HEX_QUOT | JSON_HEX_AMP | JSON_UNESCAPED_UNICODE);

	}
}

?>