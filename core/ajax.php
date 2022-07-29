<?php
require_once "../system/constant.php";
$mysqli =mysqli_connect(hostname,dbuser,dbpass,dbname);
 
/***************search result**************/
if(isset($_POST['dInput']) && !empty($_POST['dInput'])){
	$url = $_POST['url'];
	$search_string = trim($_POST['dInput']);
	$dInput = mysqli_real_escape_string($mysqli,$search_string);	
	$query = $mysqli->query("select * from station where title LIKE '%{$dInput}%'");
	$num = $query->num_rows;
	if($num > 0){
	echo '<div class="radio-section" id="content-area">
	<h2>Search results for "'.$dInput.'"</h2>
	<div class="container">
			<div id="gens">
				<div class="row">';
	while($row = $query->fetch_assoc()){
		if(!empty($row['thumbnailImage'])){
			$img = $url."assets/images/radios/".$row['thumbnailImage'];
		}else{
			$img = $url."assets/images/radios/default.jpg";
		}
		echo '<figure  class="col-md-2 col-sm-6 col-lg-2">
					<a href="'.$url.''.$row['alias'].'">
						<div class="inner">
							<img class="search-img" src="'.$img.'" alt="'.$row['title'].'">
						</div>
						<span class="title">'.$row['title'].'</span>
					</a>
				</figure>';
			}
			if($num < 36){
				for($i = $num+1; $i<= 36; $i++){
					$image = $url."assets/images/radio.png";
					echo '<figure  class="col-md-2 col-sm-6 col-lg-2 hidden">
    					<a href="">
    						<div class="inner">
    							<img class="search-img" src="'.$image.'" alt="'.$row['title'].'">
    						</div>
    						<span class="title">'.$row['title'].'</span>
    					</a>
    				</figure>';
				}
			}
		echo '</div></div></div></div>';
	}else{
		
		echo '<div class="radio-section" id="content-area">
		<h2>No results for "'.$dInput.'"</h2>
		<div class="container">
				<div id="gens">
					<div class="row">
					
		</div></div></div></div>';
		}
	
}
?>