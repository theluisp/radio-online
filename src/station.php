<?php
$load = new Station;
$data = $load->GetAllStations21();
?>

<div id="search-results"></div>
	<div class="radio-section" id="content-area">
	<h2>Todas las emisoras hispanas</h2>
		<?php if($data){?>
		<div class="row">
			
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
							
                             <div class="hap-player-artist">
                             </div>
						</div>
					</div>
				</div>
			</div>
			<!-- PLAYLIST LIST -->
			<div id="hap-playlist-list">
				 <div id="playlist-audio2">
					<?php 
					$x = 1;
					foreach($data as $val){ 
					if(!empty($val['thumbnailImage'])){
						$img = "assets/images/radios/".$val['thumbnailImage'];
					}else{
						$img = "assets/images/radio.png";
					}
					?>
					<li class="item-<?=$x?> hap-playlist-item" data-type="<?=$val['type'] =="mp3" ? "audio" : "hls"?>" data-<?=$val['type']?>="<?=$val['stream']?>" data-artist="" data-title="<?=$val['title']?>" data-thumb="<?=$img?>" data-share="" data-website="" data-description="">
						 <a class="hap-link" href="#" title="Like"><i class="hap-icon hap-icon-heart"></i></a>
					 </li>
					<?php $x++; }
					if(sizeof($data) < 37){
						for($i = sizeof($data)+1; $i<= 37; $i++){
							$image = "assets/images/radio.png";
							echo '<li class="item-'.$i.' hidden hap-playlist-item" data-type="" data-mp3="" data-artist="" data-title="" data-thumb="'.$image.'" data-share="">
							 <a class="hap-link" href="#" title="Like"><i class="hap-icon hap-icon-heart"></i></a>
						 </li>';
						}
					}
					?>
				 </div>
			</div>
		</div>
		<?php } ?>
	</div>
</div>
	
                    
