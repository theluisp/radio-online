<?php

/*
Generar cadena aleatoria en PHP con str_shuffle
@author parzibyte
*/

$cookiecrisp= $_COOKIE['usuario'];

if(!$_COOKIE['usuario']==""){
        echo 'lapm';
}
else{
    $caracteres = '1234567890';
for($x = 0; $x < 10; $x++){
	$aleatoria = substr(str_shuffle($caracteres), 0, 10);
}  
 setcookie("usuario", $aleatoria, time()+2538000); 

    
}



$baseC = new load;
$idC = $baseC->getID();
$genreC = new Country;
$genC = $genreC->GetCountryByslug($idC);
$dataC = $genreC->GetCountryByCatid($genC[0]['country_id']);

?>


<link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">

<div id="search-results"></div>
	<div class="radio-section" id="content-area">
		<h2><?=$genC[0]['country_name']?></h2>
		<div class="row">
		<?php if($dataC){?>
			<ul id="radios">
			<div class="hap-wrapper">	
				<div class="hap-playlist-holder">
					<div class="hap-playlist-inner">
						<div class="row">
							<div class="col-md-12">
								<div class="hap-playlist-content">
								</div>
							</div>
						</div>
					</div>
					<div class="hap-preloader"></div>
				</div>
				<div class="hap-tooltip"></div>	
			</div>                                  
		</ul> 
		<div id="radio">
			<!-- player code -->   
			<div class="hap-wrapper playerside">
				<div class="hap-player-thumb"></div>
					<div class="hap-info">
						<div class="hap-player-title"></div>
						<div class="hap-player-artist"></div>
					</div>
					<div class="hap-player-holder">
						<div class="hap-player-controls">
							<div class="hap-prev-toggle hap-contr-btn"><i class="hap-icon hap-icon-step-backward"></i></div>
							<div class="hap-playback-toggle hap-contr-btn"><i class="hap-icon hap-icon-play"></i></div>
							<div class="hap-next-toggle hap-contr-btn"><i class="hap-icon hap-icon-step-forward"></i></div>
							  
							<div class="hap-volume-seekbar">
								 <div class="hap-volume-bg">
									<div class="hap-volume-level"><div class="hap-volume-drag"></div></div>
								 </div>
							</div>
                            
                            <form action="../src/insertar.php" method = "post">
                                <input type="hidden" name="usuario" id="usuario" value="<?php 
                                                                       $_COOKIE['usuario'];    
                                                                           ?>">
                                <input type="hidden" name="id_estacion" value="">
                                <input type="hidden" name="status" value="">
                               
                               <button type="submit" style="border:1px solid transparent; background-color: transparent;" > <a href="#"> <i class="material-icons" style="font-size:35px;color:white">favorite</i></a> 
</button>
                          
</form>
                       
						</div>
					</div>
				</div>
			</div>
			<!-- PLAYLIST LIST -->
			<div id="hap-playlist-list">
				 <div id="playlist-audio2">
					<?php 
					$x = 1;
					foreach($dataC as $val){ 
					if(!empty($val['thumbnailImage'])){
						$img = siteUrl."assets/images/radios/".$val['thumbnailImage'];
					}else{
						$img = siteUrl."assets/images/radio.png";
					}
					?>
					<li class="item-<?=$x?> hap-playlist-item" data-type="<?=$val['type'] =="mp3" ? "audio" : "hls"?>" data-<?=$val['type']?>="<?=$val['stream']?>" data-artist="" data-title="<?=$val['title']?>" data-thumb="<?=$img?>" data-share="">
						 <a class="hap-link" href="#" title="Like"><i class="hap-icon hap-icon-heart"></i></a>
					 </li>
					<?php $x++; } 
					if(sizeof($dataC) < 37){
						for($i = sizeof($dataC)+1; $i<= 37; $i++){
							$image = siteUrl."assets/images/radio.png";
							echo '<li class="item-'.$i.' hidden hap-playlist-item" data-type="" data-mp3="" data-artist="" data-title="" data-thumb="'.$image.'" data-share="">
							 <a class="hap-link" href="#" title="Like"><i class="hap-icon hap-icon-heart"></i></a>
						 </li>';
						}
					}
					?>
				 </div>
			</div>
			<?php }else{
				echo "<div class='col-md-12'><h1 style='text-align:center;padding-top:150px'>Station Not Found</h1></div>";
			} ?>
		</div>
		
	</div>
</div>
	
                    