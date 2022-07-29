<?php 
require_once "App.php";
$base  = new getResponse;
$session = $base->sessionTokens();
//print_r($session->islogin);
$uri = $base->setRequest();
$session->isLogin = true;

switch ($uri[2]) {
	
	case 'testing' :
     print_r($uri);
    	break;

        case 'log' :
        if($uri[3]=='login') :
          $base->Auth();
      elseif($uri[3] =='signout') :
          $base->logout();
        endif;
        break;
		case 'genre' :
		$Genre  = new Genre;
		if($uri[3] =='add') :
			$Genre->add();
			elseif($uri[3]=='delete') : 
			$Genre->Remove();
			elseif($uri[3] == 'update') :
			$Genre->Update();
			elseif($uri[3] == 'featured') :
			$Genre->Upstatus();
			elseif($uri[3] == 'active') :
			$Genre->UpActive();
		endif;
		break;
		case 'station' :
		$Station  = new Station;
		if($uri[3] =='add') :
			$Station->add();
			elseif($uri[3]=='delete') : 
			$Station->Remove();
			elseif($uri[3] == 'update') :
			$Station->Update();
			elseif($uri[3] == 'featured') :
			$Station->Upstatus();
			elseif($uri[3] == 'active') :
			$Station->UpActive();
		endif;
		break;
		case 'setting' :
		$Setting  = new Setting;
		if($uri[3] =='add') :
			$Setting->add();
			elseif($uri[3]=='delete') : 
			$Setting->Remove();
			elseif($uri[3] == 'update') :
			$Setting->Update();
			elseif($uri[3] == 'featured') :
			$Setting->Upstatus();
			elseif($uri[3] == 'active') :
			$Setting->UpActive();
		endif;
		break;
		case 'adssetting' :
		$Adssetting  = new Adssetting;
		if($uri[3] =='add') :
			$Adssetting->add();
			elseif($uri[3]=='delete') : 
			$Adssetting->Remove();
			elseif($uri[3] == 'update') :
			$Adssetting->Update();
			elseif($uri[3] == 'featured') :
			$Adssetting->Upstatus();
			elseif($uri[3] == 'active') :
			$Adssetting->UpActive();
		endif;
		break;
		case 'account' :
		$Account  = new Account;
		if($uri[3] =='update'):
			$Account->Update();
		endif;
		break;
	default:
	 echo json_encode(["error"=>"response not found"]);
		break;
}

?>
