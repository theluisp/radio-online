<?php 

require_once "Routes.php";
class bootApp  extends baseController
{ 
        
        function getRequest()
        {
			$uri = $this->SetRequest();
			return Route($uri[0]);
        }

}

$app = new bootApp;

$request = $app->getRequest();

$load = new getResponse;
$load->load($request);

?>