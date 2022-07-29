<?php 
class Account extends baseController
{
          function Update()
          {
            $data = $this->getDataRequest();
            $name = !empty($data->name) ? $data->name : "";
            $username = !empty($data->username) ? $data->username : "";
            $pass = !empty($data->pass) ? $data->pass : "";
            $cpass = !empty($data->cpass) ? $data->cpass : "";
            if($pass !==""){
               if($cpass !== $pass){
                echo json_encode(["status"=>"notmatch"]);    
                }
                else{ 
                    $options = ['cost' => 10];			
		        	$pwd = password_hash($pass, PASSWORD_BCRYPT, $options);
                    $update = $this->db->query("update admin_user set name = '".$name."',username='".$username."',password='".$pwd."' where id =".$data->id);
                    echo $update ? json_encode(["status"=>"success"]) :  json_encode(["status"=>"fail"]);
                    session_destroy();
                }
            }else{
            $update = $this->db->query("update admin_user set name = '".$name."',username='".$username."' where id =".$data->id);
		    echo $update ? json_encode(["status"=>"success"]) :  json_encode(["status"=>"fail"]);
          }
          }
}
?>