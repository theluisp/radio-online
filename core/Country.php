<?php

class Country extends baseController{
	function GetCountry(){
		$query = $this->db->query("select * from countries");
		$query->execute();
		$data = $query->fetchAll();
		return $data;
	
		$query->execute();
		$data = $query->fetchAll();
		return $data;
	}
	

	function GetCountryByslug($id){
		$query = $this->db->query("select * from countries where country_name = '$id'");
		$query->execute();
		$data = $query->fetchAll();
		return $data;
	}
	function GetCountryByCatid($id){
		$query = $this->db->query("select * from station where country_id = '$id' order by country_id desc");
		$query->execute();
		$data = $query->fetchAll();
		return $data;
	}
    
	
}



?>
