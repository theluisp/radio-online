<?php 
class Adssetting extends baseController
{
          function Update()
          {
			  $data = $this->getDataRequest();
              $folderPath = "../../assets/images/logo/";
               $adstop = !empty($data->adstop) ? $data->adstop : "";
               $adsright = !empty($data->adsright) ? $data->adsright : "";
               $adsbottom = !empty($data->adsbottom) ? $data->adsbottom : "";
                
              $update = $this->db->query("update tbl_setting set adstop = '".$adstop."',adsright='".$adsright."' ,adsbottom='".$adsbottom."' where id =".$data->id);
			  echo $update ? json_encode(["status"=>"success"]) :  json_encode(["status"=>"fail"]);
          }
}
?>