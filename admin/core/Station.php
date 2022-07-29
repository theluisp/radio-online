<?php 

class Station extends baseController
{
	  function add()
	  {
          
          $data = $this->getDataRequest();
             
             if(!empty($data->title)) :
			 $folderPath = "../../assets/images/radios/";
             $imgfile=rand(0,99999)."_".$_FILES['uploadfile']['name'];
			 //$this->upload($location); 
			 $tpath = $folderPath . $imgfile;
			 $pic = $this->compress_image($_FILES["uploadfile"]["tmp_name"], $tpath,80);
             $query = $this->db->prepare("insert into
             station (title,description,thumbnailImage,country_id,cat_id,stream,type) values(:title,:description,:thumbnailImage,:country_id,:cat_id,:stream,:type)");
             $query->bindParam(':title',$data->title);
			 $query->bindParam(':description',$data->description);
			 $query->bindParam(':thumbnailImage',$imgfile);
			 $query->bindParam(':country_id',$data->country);
             $query->bindParam(':cat_id',$data->cat_id);
             $query->bindParam(':stream',$data->stream);
             $query->bindParam(':type',$data->type);
             $query->execute();
              $lastid = $this->db->lastInsertId();
             $slug   = strtolower($data->title);
             $data   = str_replace(" ","-", $slug);
			 $datas = str_replace("'","",$data);
			 $data = str_replace("/","",$datas);
			 $datas = str_replace('"',"",$data);
			 $al = str_replace("&","",$datas);
			 $als = str_replace('"','',$al);
			 $alss = str_replace('%','',$als);
			 $alias = str_replace("?","",$alss);
                
              $update = $this->db->query("update station set alias ='".$alias."' where id=".$lastid);
			  echo $query ? json_encode(["status"=>"success"]) :  json_encode(["status"=>"fail"]);
          else : 
            
            echo '<div class="alert alert-danger alert-dismissable"><a href="#" class="close" data-dismiss="alert" aria-label="close">&times;</a><strong>Enter</strong> Station Name</div>';
        endif;

	  }
     
        function Remove()
          {
			  
              $data = $this->getDataRequest();
              $folderPath = "../../assets/images/radios/";
              $get = $this->getBy("station","id =".$data->id);
			  $datas = $get[0];
			  if($datas['thumbnailImage']!="")
				{
			     unlink($folderPath.$datas['thumbnailImage']);
			   }
              $qry = $this->db->query("delete from station where id =".$data->id);
              
              echo $qry ? json_encode(["status"=>"success"]) :  json_encode(["status"=>"fail"]);
          }

          function Update()
          {
			  $data = $this->getDataRequest();
              $folderPath = "../../assets/images/radios/";
               $name = !empty($data->title) ? $data->title : "";
               $description = !empty($data->description) ? $data->description : "";
               $stream = !empty($data->stream) ? $data->stream : "";
               $type = !empty($data->type) ? $data->type : "";
               $cat_id = !empty($data->cat_id) ? $data->cat_id : "";
               $country = !empty($data->country) ? $data->country : "";
               if(!empty($_FILES['uploadfile']['name'])){
				   $imgfile=rand(0,99999)."_".$_FILES['uploadfile']['name'];
				   $get = $this->getBy("station","id =".$data->id);
				   $datas = $get[0];
				   
				   if($datas['thumbnailImage']!="")
					{
					unlink($folderPath.$datas['thumbnailImage']);
					}
				   //$location = $folderPath . $imgfile; 
                   //$this->upload($location);
				 $tpath1 = $folderPath . $imgfile;
				 $pic1=$this->compress_image($_FILES["uploadfile"]["tmp_name"], $tpath1,80);
			   }else{
				  $imgfile = $data->upfile;
			   } 
              $update = $this->db->query("update station set title = '".$name."',description='".$description."' ,thumbnailImage='".$imgfile."' ,country_id='".$country."',stream='".$stream."',type='".$type."',cat_id='".$cat_id."' where id =".$data->id);
			  echo $update ? json_encode(["status"=>"success"]) :  json_encode(["status"=>"fail"]);

            
          }
		  function Upstatus()
          {
			 $data = $this->getDataRequest();
             $get = $this->getBy("station","id =".$data->id);
			 $data = $get[0];
             if($data['featured'] == "0" ){
				 $val = "1";
			 }else{
				$val = "0";
			 }
			$query = $this->db->query("update station set featured = '".$val."' where id = ".$data['id']);
			echo $query ? json_encode(["status"=>"success"]) :  json_encode(["status"=>"fail"]);
          }
		  function UpActive()
          {
			 $data = $this->getDataRequest();
             $get = $this->getBy("station","id =".$data->id);
			 $data = $get[0];
             if($data['status'] == "0" ){
				 $val = "1";
			 }else{
				$val = "0";
			 }
			$query = $this->db->query("update station set status = '".$val."' where id = ".$data['id']);
			echo $query ? json_encode(["status"=>"success"]) :  json_encode(["status"=>"fail"]);
          }

}
?>