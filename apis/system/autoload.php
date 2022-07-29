<?php 

function __autoload($class)
{
      require_once "$class.php";
}
?>


<?php require_once "routes.php"; ?>