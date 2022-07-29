<?php
require_once "../system/constant.php";
$mysqli =mysqli_connect(hostname,dbuser,dbpass,dbname);
 
if(isset($_POST["cat"]) && !empty($_POST["cat"])){
    //Get all state data
	$table = $_POST["cat"];
	$data = explode("/",$table);
	$table = $data[0];
	if($table == "emn_genres"){
	$query = $mysqli->query("SELECT * FROM $table ORDER BY id ASC");
    
    //Count total number of rows
    $rowCount = $query->num_rows;
    
    //Display states list
    if($rowCount > 0){
        echo '<option value="">Select Subcategory</option>';
        while($row = $query->fetch_assoc()){ 
            echo '<option value="'.$row['id'].'">'.$row['genreName'].'</option>';
        }
    }else{
        echo '<option value="">Subcategory not available</option>';
    }	
	}
	elseif($table == "emn_decades"){
	$query = $mysqli->query("SELECT * FROM $table ORDER BY id ASC");
    
    //Count total number of rows
    $rowCount = $query->num_rows;
    
    //Display states list
    if($rowCount > 0){
        echo '<option value="">Select Subcategory</option>';
        while($row = $query->fetch_assoc()){ 
            echo '<option value="'.$row['id'].'">'.$row['decadesName'].'</option>';
        }
    }else{
        echo '<option value="">Subcategory not available</option>';
    }
	}
	elseif($table == "emn_moods"){
	$query = $mysqli->query("SELECT * FROM $table ORDER BY id ASC");
    
    //Count total number of rows
    $rowCount = $query->num_rows;
    
    //Display states list
    if($rowCount > 0){
        echo '<option value="">Select Subcategory</option>';
        while($row = $query->fetch_assoc()){ 
            echo '<option value="'.$row['id'].'">'.$row['moodsName'].'</option>';
        }
    }else{
        echo '<option value="">Subcategory not available</option>';
    }
	}
    
}

?>