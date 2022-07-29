<?php 

class users extends baseController
{
     function GetUserPlaylist($id){
		$query = $this->db->prepare("select * from playlists where uid ='$id'");
		$query->execute();
		$data = $query->fetchAll();
		return $data;  
		  
	  }
     function GetPlaylistbyId($id){
		$query = $this->db->prepare("select * from playlists where alias ='$id'");
		$query->execute();
		$data = $query->fetch(PDO::FETCH_ASSOC);
		return $data;  
		  
	  } 
     function GetSongsByPid($id){
		$query = $this->db->prepare("select * from playlist_data where pid ='$id'");
		$query->execute();
		$data = $query->fetchAll();
		return $data; 
	 } 
	function GetAllSongs($id){
		$query = $this->db->prepare("select * from music where id ='$id'");
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
	  function GetAlbumbyId($id){
		$query = $this->db->query("select * from albums where alias = '$id'");
		$query->execute();
		$data = $query->fetchAll();
		return $data;
	}
	function GetAlbumId($id){
		$query = $this->db->query("select * from albums where id = '$id'");
		$query->execute();
		$data = $query->fetchAll();
		return $data;
	}
	function GetArtistId($id){
		$query = $this->db->query("select * from artists where id = '$id'");
		$query->execute();
		$data = $query->fetchAll();
		return $data;
	}
	
	function GetsongData($id){
		$query = $this->db->query("select * from playlists join playlist_data on playlist_data.pid = playlists.id join music on music.id = playlist_data.mid join artists on artists.id = music.art_id where playlists.id = '$id' order by music.id desc");
		$query->execute();
		$data = $query->fetchAll();
		return $data;
	}
	
}
?>