<?php

$servername = "localhost";
$database = "radio"; 
$username = "root";
$password = "mysql";


$sql = "mysql:host=$servername;dbname=$database;";
$dsn_Options = [PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION];
try { 
  $my_Db_Connection = new PDO($sql, $username, $password, $dsn_Options);
 
} catch (PDOException $error) {
  echo 'Connection error: ' . $error->getMessage();
}
$varf= $_GET["variablex"];

$usuario=$_COOKIE["usuario"];

$my_Insert_StatementSelect = $my_Db_Connection->prepare("SELECT * FROM favourite where station_id=$varf AND user_id=$usuario ");
   $my_Insert_StatementSelect->execute(); 
$rows = $my_Insert_StatementSelect->rowCount();
if($rows>0){
  $my_Insert_Statement0 = $my_Db_Connection->prepare("DELETE FROM favourite where station_id=$varf AND user_id=$usuario ");
  $my_Insert_Statement0->execute(); 
}

else{

$my_Insert_Statement1 = $my_Db_Connection->prepare("INSERT INTO favourite ( station_id, user_id, status) VALUES ($varf,$usuario,1)");

$my_Insert_Statement1->execute();
}
  $respuesta = new stdClass();
     echo "<script type='text/javascript'>";
    echo "window.history.back(-1)";
    echo "</script>";

 
  



?>