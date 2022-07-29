<?php
class Genre extends baseController{
	function GetGenres(){
		$query = $this->db->query("select * from genres");
		$query->execute();
		$data = $query->fetchAll();
		return $data;
	}
	function GetgenresByslug($id){
		$query = $this->db->query("select * from genres where alias = '$id'");
		$query->execute();
		$data = $query->fetchAll();
		return $data;
	}
	function GetStationByCatid($id){
		$query = $this->db->query("select * from station where cat_id = '$id' order by id desc");
		$query->execute();
		$data = $query->fetchAll();
		return $data;
	}
	
	
	
}



?>