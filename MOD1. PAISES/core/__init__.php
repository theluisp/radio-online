<?php 
require_once "App.php";

$base  = new getResponse;


$session = $base->sessionToken();
$session->islogin = true;
//print_r($session->islogin);


$uri     = $base->setRequest();


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
      elseif($uri[3] =='signup') :
          $base->Sign();
      elseif($uri[3] =='updateprofile') :
          $base->Update();
      elseif($uri[3] =='createplaylist') :
          $base->CreatePlaylist();
      elseif($uri[3] =='editplaylist') :
          $base->EditPlaylist();
      elseif($uri[3] =='delplaylist') :
          $base->DelPlaylist();
      elseif($uri[3] =='follow') :
          $base->Follows();
        endif;
        break;
	default:
	 echo json_encode(["error"=>"response not found"]);
		break;
}

?>
