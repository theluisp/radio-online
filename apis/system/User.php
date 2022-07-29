<?php 
require "db.php";
class User extends db
{
   
	function __construct()
	{
		parent::__construct();
		
	}
	function loginuser(){
    $email = $_REQUEST['email'];
    $password = $_REQUEST['password'];
    $sql = $this->db->query("SELECT * from users where email ='$email'");
	$rowCount = $sql->num_rows;
	if($rowCount > 0):
	$get= $sql->fetch_assoc();
	$hash = $get['password'];	
	$auth = password_verify($pass, $hash);
	if ($pass != $auth){
	    $set['message'] = 'Password dost not match';
        $set['success']=0;
	}
	else{
		unset($get['password']);
		$path_uploads='uploads/avatars/';
		$profilepic = $path_uploads.$get['image'];
		$set['message'] = 'Login Successfull';
        $set['success']=1;
        $set['result']['userdata']= array_merge($get,array('image'=>$profilepic));
	}  
	else:
	    $set['message'] = 'username does not match';
        $set['success']=0;
	endif;
	echo json_encode($set,JSON_HEX_TAG | JSON_HEX_APOS | JSON_HEX_QUOT | JSON_HEX_AMP | JSON_UNESCAPED_UNICODE);
	}
	
	function registeruser(){
    $fname = $_REQUEST['fname'];
    $lname = $_REQUEST['lname'];
    $email =$_REQUEST['email'];
    $q= $this->db->query("select * from users where email = '$email'");
    $num = $q->num_rows;
     	if($num >0) :
              $set['message']='This username or email already registered';
              $set['success']=0;
        else : 
     $options = ['cost' => 10];			
	 $password = password_hash($_REQUEST['password'], PASSWORD_BCRYPT, $options); 
     $country = $_REQUEST['country'];
     $dob = $_REQUEST['dob'];
     $gender = $_REQUEST['gender'];
     if($_REQUEST['userimage']!=null) :
     $base=$_REQUEST['userimage'];
		$binary=base64_decode($base);
		header('Content-Type: bitmap; charset=utf-8');
		$time=time();
		$imgt=$time.'.jpg';
		$file = fopen("../uploads/avatars/".$imgt, 'wb');
		$img=fwrite($file,$binary);
		fclose($file); 
		else :
          $imgt='default.png';
			endif;
		$query = $this->db->query("insert into users(email,password,first_name,last_name,DOB,country,image,gender) value('$email','$password','$fname','$lname','$dob','$country','$imgt','$gender')"); 
		if($query) :
		  $lastid = mysqli_insert_id($this->db);
		  $query  = $this->db->query("select * from users where idu = '$lastid'");
	        $path_uploads='uploads/avatars/';
	    	while($row = $query->fetch_assoc())
			{
			 unset($row['password']);
			$profilepic = $path_uploads.$row['image'];
			$data = array_merge($row,array('image'=>$profilepic));
			}
          $set['message'] = 'Registeration Successfull';
          $set['success']=1;
          $set['result']['userdata'] = $data;
		else :
          $set['message'] = 'Registeration Fail';
          $set['success']=0;
		endif; 
		endif;
		echo json_encode($set,JSON_HEX_TAG | JSON_HEX_APOS | JSON_HEX_QUOT | JSON_HEX_AMP | JSON_UNESCAPED_UNICODE);
	}
	
}

?>