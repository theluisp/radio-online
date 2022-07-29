<?php 

class Genre extends baseController
{
	  function add()
	  {
          
          $data = $this->getDataRequest();
             
             if(!empty($data->catname)) :
			 $folderPath = "../../assets/images/genres/";
             $imgfile=rand(0,99999)."_".$_FILES['uploadfile']['name'];
			 $location = $folderPath . $imgfile; 
             $pic = $this->compress_image($_FILES["uploadfile"]["tmp_name"], $location,80);
             $query = $this->db->prepare("insert into
             genres (category_name,thumbnailImage) values(:category_name,:thumbnailImage)");
             $query->bindParam(':category_name',$data->catname);
             $query->bindParam(':thumbnailImage',$imgfile);
             $query->execute();
			 $lastid = $this->db->lastInsertId();
             $slug   = $lastid.'-'.strtolower($data->catname);
             $data   = str_replace(" ","-", $slug);
			 $datas = str_replace("'","",$data);
			 $data = str_replace("/","",$datas);
			 $datas = str_replace('"',"",$data);
			 $al = str_replace("&","",$datas);
			 $als = str_replace('"','',$al);
			 $alss = str_replace('%','',$als);
			 $alias = str_replace("?","",$alss);
                
              $update = $this->db->query("update genres set alias ='".$alias."' where id=".$lastid);	
              echo $query ? json_encode(["status"=>"success"]) :  json_encode(["status"=>"fail"]);
          else : 
            
            echo '<div class="alert alert-danger alert-dismissable"><a href="#" class="close" data-dismiss="alert" aria-label="close">&times;</a><strong>Enter</strong> Genre Name</div>';
        endif;

	  }
     
        function Remove()
          {
			  
              $data = $this->getDataRequest();
              $folderPath = "../../assets/images/genres/";
              $get = $this->getBy("genres","id =".$data->id);
			  $datas = $get[0];
			  if($datas['thumbnailImage']!="")
				{
			     unlink($folderPath.$datas['thumbnailImage']);
			   }
              $qry = $this->db->query("delete from genres where id =".$data->id);
              
              echo $qry ? json_encode(["status"=>"success"]) :  json_encode(["status"=>"fail"]);
          }

          function Update()
          {
			  $data = $this->getDataRequest();
              $folderPath = "../../assets/images/genres/";
               $name = !empty($data->catname) ? $data->catname : "";
               if(!empty($_FILES['uploadfile']['name'])){
				   $imgfile=rand(0,99999)."_".$_FILES['uploadfile']['name'];
				   $get = $this->getBy("genres","id =".$data->id);
				   $datas = $get[0];
				   
				   if($datas['thumbnailImage']!="")
					{
					unlink($folderPath.$datas['thumbnailImage']);
					}
				   $location = $folderPath . $imgfile; 
                   $pic = $this->compress_image($_FILES["uploadfile"]["tmp_name"], $location,80);
			   }else{
				  $imgfile = $data->upfile;
			   } 
              $update =  $this->db->query("update genres set category_name = '".$name."',thumbnailImage='".$imgfile."' where id =".$data->id);
			  echo $update ? json_encode(["status"=>"success"]) :  json_encode(["status"=>"fail"]);

            
          }
		  function Upstatus()
          {
			 
			 $data = $this->getDataRequest();

             $get = $this->getBy("genres","id =".$data->id);
			 $data = $get[0];
			 
             if($data['featured'] == "0" ){
				 $val = "1";
			 }else{
				$val = "0";
			 }
			$query = $this->db->query("update genres set featured = '".$val."' where id = ".$data['id']);
			echo $query ? json_encode(["status"=>"success"]) :  json_encode(["status"=>"fail"]);
			
			//print_r($query);
          }
		  function UpActive()
          {
			 $data = $this->getDataRequest();
             $get = $this->getBy("genres","id =".$data->id);
			 $data = $get[0];
             if($data['status'] == "0" ){
				 $val = "1";
			 }else{
				$val = "0";
			 }
			$query = $this->db->query("update genres set status = '".$val."' where id = ".$data['id']);
			echo $query ? json_encode(["status"=>"success"]) :  json_encode(["status"=>"fail"]);
			
			//print_r($query);
          }

}
?>