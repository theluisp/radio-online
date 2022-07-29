<?php



$servername = "localhost";

$database = "todoswze_radio-test"; 

$username = "todoswze_use";

$password = "3VeiaT94ghE";



$sql = "mysql:host=$servername;dbname=$database;";
$dsn_Options = [PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION];
try { 
  $my_Db_Connection = new PDO($sql, $username, $password, $dsn_Options);
 
} catch (PDOException $error) {
  echo 'Connection error: ' . $error->getMessage();
}
$varf= $_GET["variablex"];

$usuario=$_COOKIE["usuario"];


  $my_Insert_Statement0 = $my_Db_Connection->prepare("DELETE FROM favourite where station_id=$varf AND user_id=$usuario ");
  $my_Insert_Statement0->execute(); 

     echo "<script type='text/javascript'>";
    echo "window.history.back(-1)";
    echo "</script>";

 
  



?>