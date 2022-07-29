<?php 
class Setting extends baseController
{
          function Update()
          {
			  $data = $this->getDataRequest();
              $folderPath = "../../assets/images/logo/";
               $title = !empty($data->title) ? $data->title : "";
               $description = !empty($data->description) ? $data->description : "";
               $email = !empty($data->email) ? $data->email : "";
               $contact = !empty($data->contact) ? $data->contact : "";
               $trackid = !empty($data->trackid) ? $data->trackid : "";
               if(!empty($_FILES['uploadfile']['name'])){
				   $imgfile=rand(0,99999)."_".$_FILES['uploadfile']['name'];
				   $get = $this->getBy("tbl_setting","id =".$data->id);
				   $datas = $get[0];
				   
				   if($datas['logo']!="")
					{
					unlink($folderPath.$datas['logo']);
					}
				   //$location = $folderPath . $imgfile; 
                   //$this->upload($location);
				 $tpath1 = $folderPath . $imgfile;
				 $pic1=$this->compress_image($_FILES["uploadfile"]["tmp_name"], $tpath1,80);
			   }else{
				  $imgfile = $data->upfile;
			   } 
              $update = $this->db->query("update tbl_setting set title = '".$title."',description='".$description."' ,logo='".$imgfile."' ,contact='".$contact."',email='".$email."',tracking_id='".$trackid."' where id =".$data->id);
			  echo $update ? json_encode(["status"=>"success"]) :  json_encode(["status"=>"fail"]);
          }
}
?>