<?php
$base = new load;
$id = $base->getID();
$st = new Station();
$datas = $st->GetStnbyId($id);
$data = $datas[0];
if(!empty($data['thumbnailImage'])){
	$img = siteUrl."assets/images/radios/".$data['thumbnailImage'];
	}else{
	$img = siteUrl."assets/images/radios/default.jpg";
	}
?>

<div id="search-results"></div>
<div class="twocolumns" id="content-area">
	<div class="content-col">
		<div id="radio">
			<!--div id="radio-track">
				<div class="left-box">
					<div class="img-box">
						<img id="radio-logo" src="<?=$img?>" alt="Bol Punjabi Radio" height="66" importance="high" width="96" itemprop="image">
					</div>
					<div class="text-box">
						<strong class="title" id="radio-title"><?=$data['title']?></strong>
						<span class="fm-text" id="radio-frequency"></span>
					</div>
				</div>
			</div-->
			 <!-- player code -->   
        <div id="haps-wrapper">
            <div class="haps-player-thumb"></div>
            <div class="haps-player-holder">
                <div class="haps-info">
                    <div class="haps-player-artist"></div>
                    <div class="haps-player-title"></div>
                </div>
                <div class="haps-share-toggle haps-contr-btn">
                    <div class="haps-share-holder">
                        <div class="haps-share-item haps-contr-btn" data-type="tumblr" data-tooltip="Share on Tumblr"><i class="hab-icon hap-icon-tumblr-square"></i></div>
                        <div class="haps-share-item haps-contr-btn" data-type="twitter" data-tooltip="Share on Twitter"><i class="hab-icon haps-icon-twitter-square"></i></div>
                        <div class="haps-share-item haps-contr-btn" data-type="facebook" data-tooltip="Share on Facebook"><i class="hab-icon haps-icon-facebook-square"></i></div>
                    </div>
                    <i class="haps-icon haps-icon-share-alt"></i>
                </div>
                <div class="haps-player-controls">
                    <!--div class="haps-prev-toggle haps-contr-btn"><i class="haps-icon haps-icon-backward"></i></div-->
                    <div class="haps-playback-toggle haps-contr-btn"><i class="haps-icon haps-icon-play"></i></div>
                    <!--div class="haps-next-toggle haps-contr-btn"><i class="haps-icon haps-icon-forward"></i></div-->
                    <div class="haps-volume-wrapper">
                        <div class="haps-volume-toggle haps-contr-btn"><i class="haps-icon haps-icon-volume-up"></i></div>
                        <div class="haps-volume-seekbar">
                             <div class="haps-volume-bg">
                                <div class="haps-volume-level"></div>
                             </div>
                        </div>
                    </div>
                </div>
            </div> 
			<div class="haps-tooltip"></div>  
        </div>   
		<script>

            var hap_player;  
            jQuery(document).ready(function($){
                var settings = {
                    instanceName:"poster",
                    sourcePath:"",
                    activePlaylist:"#playlist-audio2",
                    activeItem:0,
                    volume:0.5,
                    autoPlay:true,
                    preload:"auto",
                    randomPlay:false,
                    loopingOn:true,
                    soundCloudAppId:"",
                    facebookAppId:"382963205750322"
                };
                hap_player = $("#haps-wrapper").haps(settings);

            });
        </script>
        <!-- PLAYLIST LIST -->
        <div id="haps-playlist-list">
             <div id="playlist-audio2">
                <div class="haps-playlist-item" data-type="<?=$data['type'] =="mp3" ? "audio" : "hls"?>" data-<?=$data['type']?>="<?=$data['stream']?>" data-artist="" data-title="<?=$data['title']?>" data-thumb="<?=$img?>"></div>
                
             </div>
             
        </div>	
		</div>
		<div class="text-holder">
		<h2>Pérfil</h2>
			<p><?=$data['description']?></p>
		</div>
		<div class="img-holder">
			<h2>Todos los comentarios</h2>
			<div class="fb-comments" data-href="<?=siteUrl?>single-station/<?=$id?>" data-width="" data-numposts="5"></div>
		</div>
	</div>
	<aside id="sidebar">
		<h3>Emisoras relacionadas</h3>
		<ul class="list">
			<?php $all = $st->GetAllStation($data['id']);
			foreach($all as $value): 
			if(!empty($value['thumbnailImage'])){
				$img = siteUrl."assets/images/radios/".$value['thumbnailImage'];
				}else{
				$img = siteUrl."assets/images/radios/default.jpg";
			}
			?>
			<li>
				<a href="<?=siteUrl?>single-station/<?=$value['alias']?>">
					<div class="img-box">
						<img src="<?=$img?>" alt="Tamil Olli India" height="45" importance="high" width="66">
					</div>
					<div class="text-box">
						<strong class="title"><?=$value['title']?></strong>
						<span class="fm-text"><?=$value['description']?></span>
					</div>
				</a>
			</li>
			<?php endforeach; ?>
		</ul>
	</aside>
</div>
</div>
                    
