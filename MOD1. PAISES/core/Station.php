<?php

class Station extends baseController{
	
	function GetAllStation($id = null){
		$query = $this->db->query("select * from station where alias NOT IN('$id') order by RAND() limit 10");
		$query->execute();
		$data = $query->fetchAll();
		return $data;
	}
	
	function GetStationsGen(){
		$query = $this->db->query("select DISTINCT cat_id from station");
		$query->execute();
		$data = $query->fetchAll();
		return $data;
	}
	function GetFeatureStation(){
		$query = $this->db->query("select * from station where featured = '1' order by id desc");
		$query->execute();
		$data = $query->fetchAll();
		return $data;
	}
	function GetRandStation(){
		$query = $this->db->query("select * from station order by RAND()");
		$query->execute();
		$data = $query->fetchAll();
		return $data;
	}
	function GetCatName($id){
		$query = $this->db->prepare("select * from genres where id ='$id'");
		$query->execute();
		$datas = $query->fetchAll();
		return $data = $datas[0];
		  
	  }
	  function GetStnbyId($id){
		$query = $this->db->query("select * from station where alias = '$id'");
		$query->execute();
		$data = $query->fetchAll();
		return $data;
	}
	  function StationFavcount($id){
		$query = $this->db->query("select * from favourite_stations where station_id = '$id'");
		$query->execute();
		$data = $query->rowCount();
		return $data;
	}
	  function getFavStaion($id){
		$query = $this->db->query("select * from favourite_stations join station on station.id = favourite_stations.station_id where favourite_stations.uid = '$id'");
		$query->execute();
		$data = $query->fetchAll();
		return $data;
	}
function GetAllStations21(){
		$query = $this->db->query("select * from station");
		$query->execute();
		$data = $query->fetchAll();
		return $data;
	}
function GetStationByslug($id){
		$query = $this->db->query("select * from station where alias = '$id'");
		$query->execute();
		$data = $query->fetchAll();
		return $data;
	}
	function GetStation21ByCatid($id){
		$query = $this->db->query("select * from station where id = '$id' order by id desc");
		$query->execute();
		$data = $query->fetchAll();
		return $data;
	}
	


}
?>