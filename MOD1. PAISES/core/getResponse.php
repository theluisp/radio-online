<?php 

class getResponse extends baseController 
{
     
      function load($request)
      {
      	 $this->loadView($request);
      }


      function Auth()
      {
      	 error_reporting(1);
      	 $data = $this->getDataRequest();
      	 if(!empty($_SERVER['HTTP_X_REQUESTED_WITH']) && strtolower($_SERVER['HTTP_X_REQUESTED_WITH']) == 'xmlhttprequest') : 
			$this->users;
			$name = $data->username;
			$pass = $data->password;
            $qry = $this->db->query("select * from users where username ='$name'");
			$qry->execute();
            $value = $qry->fetchAll();
            $val = $value[0];	
			$hash = $val['password'];	
	        $auth = password_verify($pass, $hash);
         if($name == $val["username"] && $pass == $auth) :
                     $_SESSION['logs']  = true;
                     $_SESSION['name']  = $val['first_name'].' '.$val['last_name'];
                     $_SESSION['id']  = $val['id'];
					 echo "Successfully Login"; 
                 else : 
                 	 echo "<h5 style='color:red;'>Email or Password does not match</h5>"; 
               endif;
   
         else :

      	 endif;
      }
		function Sign()
      {
      	  $data = $this->getDataRequest(); 
		  $fname = $data->first_name;			
		  $lname = $data->last_name;				
		  $username = $data->email;			
		  $password = $data->password;			
		  $name = $fname." ".$lname;			
		  $options = ['cost' => 10];			
		  $pass = password_hash($password, PASSWORD_BCRYPT, $options);           
		 $get = $this->db->query("select * from users where username ='$username'");	$get->execute();            
		 $count = $get->rowCount();
		  if($count > 0) :                 
		  echo "<h5 style='color:red;'>Email alredy exist</h5>";                 
		  else : 					
		  $query = $this->db->query("insert into users (first_name,last_name,username,password)values ('$fname','$lname','$username','$pass')");                 	                 	
		  $lastid = $this->db->lastInsertId();
          $names = strtolower($name);
           $slug   = $lastid.'-'.$names;
            $data   = str_replace(" ","-", $slug);
            $datas = str_replace("'","",$data);
            $da = str_replace("/","",$datas);
            $dat = str_replace('"',"",$da);
            $al = str_replace("&","",$dat);
            $als = str_replace('"','',$al);
            $alias = str_replace("?","",$als);
            $update = $this->db->query("update users set alias = '$alias' where id = '$lastid'");
		  $query = $this->db->query("select * from users where id ='$lastid'");	
		  $query->execute();
		  $value = $query->fetchAll();					
		  $vals = $value[0];						
		  $_SESSION['logs']  = true;                    
		  $_SESSION['name']  = $vals['first_name'].' '.$vals['last_name'];  
		  $_SESSION['id']  = $vals['id'];
		  echo "Successfully Registered";
		  endif;  
      }
	  
	  function Update(){
		  error_reporting(0);
		  $data = $this->getDataRequest(); 
		  $fname = $data->fname;
		  $lname = $data->lname;
		  $keyword = $data->keyword;
		  $bio = $data->bio;
		  $country = $data->country;
		  $Your_gender = $data->Your_gender;
		  $profile_date_day = $data->profile_date_day;
		  $profile_date_month = $data->profile_date_month;
		  $profile_date_year = $data->profile_date_year;
		  $birth = $profile_date_day.'-'.$profile_date_month.'-'.$profile_date_year;
		  $folderPath = "../assets/images/users/";
		   if(!empty($_FILES['upfile']['name'])){
			   $imgfile=rand(0,99999)."_".$_FILES['upfile']['name'];
			   $get = $this->getBy("users","id =".$data->id);
			   $datas = $get[0];
			   
			   if($datas['thumbnailImage']!="")
				{
				unlink($folderPath.$datas['thumbnailImage']);
				}
				 $tpath = $folderPath . $imgfile;
				 $pic = $this->compress_image($_FILES["upfile"]["tmp_name"], $tpath, 80);
			   }else{
				  $imgfile = $data->upfile;
			   }
          echo  $this->db->query("update users set first_name = '".$fname."',last_name='".$lname."' ,keyword='".$keyword."' ,bio='".$bio."' ,thumbnailImage='".$imgfile."' ,location='".$country."',gender='".$Your_gender."' ,birthday='".$birth."' where id =".$data->id) ? '<div class="alert alert-success alert-dismissable"><a href="#" class="close" data-dismiss="alert" aria-label="close">&times;</a><strong>Successfully</strong> Profile Updated</div>' : '<div class="alert alert-danger alert-dismissable"><a href="#" class="close" data-dismiss="alert" aria-label="close">&times;</a><strong>Fail</strong> Updated Request Fail</div>';
             
			
	  }
	  function CreatePlaylist(){
		 $data = $this->getDataRequest();
		 $uid = $data->uid;
		 $pname = $data->pname;
         $select = $this->db->query("select * from playlists where playlist_name = '$pname' and uid = '$uid'");
		 $select->execute();
      	 $count = $select->rowCount();
         if($count > 0){
			echo 'already';
		 }else{
			  echo $this->db->query("insert into playlists (playlist_name,uid)values('$pname','$uid')") ? 'success' : 'fail';
				$lastid = $this->db->lastInsertId();
				$names = strtolower($pname);
				$slug   = $lastid.'-'.$names;
				$data   = str_replace(" ","-", $slug);
				$datas = str_replace("'","",$data);
				$da = str_replace("/","",$datas);
				$dat = str_replace('"',"",$da);
				$al = str_replace("&","",$dat);
				$als = str_replace('"','',$al);
				$alias = str_replace("?","",$als);
				$update = $this->db->query("update playlists set alias = '$alias' where id = '$lastid'");
		 }		 
		  
	  }
	  
	  function EditPlaylist(){
		  $data = $this->getDataRequest();
		   if(!empty($_SERVER['HTTP_X_REQUESTED_WITH']) && strtolower($_SERVER['HTTP_X_REQUESTED_WITH']) == 'xmlhttprequest') : 
			$pname = $data->pname;
			$pid = $data->pid;
			$slug   = $pid.'-'.$pname;
			$data   = str_replace(" ","-", $slug);
			$datas = str_replace("'","",$data);
			$da = str_replace("/","",$datas);
			$dat = str_replace('"',"",$da);
			$al = str_replace("&","",$dat);
			$als = str_replace('"','',$al);
			$alss = str_replace('%','',$als);
			$alias = str_replace("?","",$alss);
		  $update = $this->db->query("update playlists set playlist_name = '$pname' , alias = '$alias' where id = '$pid'");
		  if($update){
			  $response = ['status' => "success",'alias' => $alias,'link'=>"playlist"];
		  }else{
			  $response = ['status' => "fail"];
		  }
		  echo json_encode($response);
		  endif;
	  }
	  function DelPlaylist(){
		  $data = $this->getDataRequest();
		   if(!empty($_SERVER['HTTP_X_REQUESTED_WITH']) && strtolower($_SERVER['HTTP_X_REQUESTED_WITH']) == 'xmlhttprequest') : 
			$pid = $data->pid;
			$uid = $data->uid;
		  $delete = $this->db->query("delete from playlists where id = '$pid' and uid='$uid'");
		  if($delete){
			  $response = ['status' => "success",'link'=>"myplaylist"];
		  }else{
			  $response = ['status' => "fail"];
		  }
		  echo json_encode($response);
		  endif;
	  }
	  
      function logout()
      {
      	   session_destroy();
      }


}
?>