<?php 
require "db.php";
class Favourite extends db
{
   
	function __construct()
	{
		parent::__construct();
		
	}
	function ListFavourite(){
        $uid = $_REQUEST['uid'];
        $fav = $this->db->query("select * from favourite where user_id ='$uid' and status = 1");
        $count = $fav->num_rows;
        if($count >0):
	       $query = $this->db->query("SELECT * FROM `favourite` LEFT JOIN station ON favourite.station_id = station.id WHERE favourite.user_id = '$uid' and favourite.status = 1 ORDER BY favourite.fav_id desc");
	       while($row = $query->fetch_assoc()) :
	        $imgs = 'assets/images/radios/'.$row['thumbnailImage'];
	        $img =  str_replace(" ","%20",$imgs);
			$set['status'] =  1;
		    $set['message'] = 'Data Found';
		    $set['count'] = $count;
		    $set['result']['favourite'][] = array_merge($row,array('thumbnailImage'=>$img));
		  endwhile;  
        else:
			$set['status'] =  0;
		    $set['message'] = 'Data Not Found';
               
        endif;
        echo json_encode($set,JSON_HEX_TAG | JSON_HEX_APOS | JSON_HEX_QUOT | JSON_HEX_AMP | JSON_UNESCAPED_UNICODE); 
	}
	
	function Checkfavourite(){
	    $uid = $_REQUEST['uid'];
	    $sid = $_REQUEST['sid'];
	    $posts = $this->db->query("select * from favourite where user_id ='$uid' and station_id = '$sid' and status = 1");
        if($posts->num_rows >0):
            $set['status'] =  1; 
			$set['message'] = 'Data Found';
        else:
            $set['status'] =  0;
			$set['message'] = 'Data Not Found';
        endif;
        echo json_encode($set,JSON_HEX_TAG | JSON_HEX_APOS | JSON_HEX_QUOT | JSON_HEX_AMP | JSON_UNESCAPED_UNICODE); 
	}
	
	function AddtoFav(){
	    $uid = $_REQUEST['uid'];
	    $sid = $_REQUEST['sid'];
	    $qry = $this->db->query("select * from favourite where user_id ='$uid' and station_id = '$sid'");
        if($qry->num_rows > 0):
            $row = $qry->fetch_assoc();
            if($row['status'] == 1){
                $val = 0;
            }else{
                $val = 1;
            }
            $update = $this->db->query("update favourite set status = '$val' where user_id ='$uid' and station_id = '$sid'");
            if($update):
				$set['status'] =  1;
				$set['message'] = 'favourite status updated successfully';
            else:
				$set['status'] =  0;
				$set['message'] = 'failed to update';
            endif;
        else:
            $insert = $this->db->query("insert into favourite (user_id,station_id,status)values('$uid','$sid','1')");
            if($insert):
				$set['status'] =  1;
				$set['message'] = 'favourite status updated successfully';
            else:
				$set['status'] =  0;
				$set['message'] = 'failed to update';
            endif;
        endif;
        echo json_encode($set,JSON_HEX_TAG | JSON_HEX_APOS | JSON_HEX_QUOT | JSON_HEX_AMP | JSON_UNESCAPED_UNICODE);
	}
	
	/****************************/
	
}
?>