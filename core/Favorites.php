<?php
$userR=$_COOKIE["usuario"];
class Favorites extends baseController{
	

function GetFavorites(){
		$query = $this->db->query("select * from favorites");
		$query->execute();
		$data = $query->fetchAll();
		return $data;
	
		$query->execute();
		$data = $query->fetchAll();
		return $data;
	}
// Crear La función Insertar
 function insertar($tblname,$form_data){
	$fields = array_keys($form_data);
	$sql="INSERT INTO ".$tblname."(".implode(',', $fields).")  VALUES('".implode("','", $form_data)."')";
	
	return db_query($sql);
}


//Seleccionar los datos de la tabla para mostrarlos.
function select_datos($tblname,$field_name,$field_id){
	$sql = "Select * from ".$tblname." where ".$field_name." = ".$field_id."";
	$db=db_query($sql);
	$GLOBALS['row'] = mysqli_fetch_object($db);
	return $sql;
}

    function GetFavoritesByslug($id){
		$query = $this->db->query("select * from favorites where user_id = $userR");
		$query->execute();
		$data = $query->fetchAll();
		return $data;
	}
	function GetFavoritesByCatid($id){
		$query = $this->db->query("select * from favourite join station on station.id = favourite.station_id where favourite.user_id = '$id'");
		$query->execute();
		$data = $query->fetchAll();
		return $data;
	}
    
    function getFavStaion($id){
		$query = $this->db->query("select * from favourite join station on station.id = favourite.station_id where favourite.user_id = '$id' ");
		$query->execute();
		$data = $query->fetchAll();
		return $data;
	}
}



?>
