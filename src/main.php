<?php
$base = new load;
$id = $base->getID();
$genre = new Genre;
$gen = $genre->GetgenresByslug($id);
$data = $genre->GetStationByCatid($gen[0]['id']);

?>
<style>
    #lpm {
        width: 274px;
        height: 274px;
    }

    #guardar {
        width: 274px;
        height: 274px;
        color: #005f79;
    }
</style>
<link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js">
<div id="search-results"></div>
	<div class="radio-section" id="content-area">
		<h2><?=$gen[0]['category_name']?></h2>
		<div class="row">
		<?php if($data){?>
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
						$img = siteUrl."assets/images/radios/".$val['thumbnailImage'];
					}else{
						$img = siteUrl."assets/images/radio.png";
					}
					?>
					<li class="item-<?=$x?> hap-playlist-item" data-type="<?=$val['type'] =="mp3" ? "audio" : "hls"?>" data-<?=$val['type']?>="<?=$val['stream']?>" data-artist=" <?php $valuet=$val['id'];  
                        echo " <div ><a class='hap-link'  href=../src/insertar.php?variablex=$valuet title='Eliminar favoritos' onclick='visualiza_formulario()' ><i  style='position: absolute;
        top: 310px;
        left: 0px;
        width: 108px;
        height: 30px;

        background: #005f79;' class='hap-icon hap-icon-heart' ></i></a> 
                        
                       
                        </div>";
                        ?>" data-title="<?=$val['title']?>" data-thumb="<?=$img?>" data-share="">
						 <a class="hap-link" href="#" title="Like"><i class="hap-icon hap-icon-heart"></i></a> <script>

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
					 </li>
					<?php $x++; } 
					if(sizeof($data) < 37){
						for($i = sizeof($data)+1; $i<= 37; $i++){
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
<style>

</style>
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
                <div class="haps-playlist-item" data-type="<?=$data['type'] =="mp3" ? "audio" : "hls"?>" data-<?=$data['type']?>="<?=$data['stream']?>"  data-title="<?=$data['title']?>" data-thumb="<?=$img?>"  data-artist=" <?php $valuet=$data['id'];  
    
                        
                      echo " <div ><a class='hap-link'  href= src/insertar.php?variablex=$valuet title='Guardar favoritos' ><i style='position:absolute;
	top:460px;
	left:0px;
	width:98px;
	height:40px;
	
    background:black;' class='hap-icon hap-icon-heart'></i></a></div>";
                        ?>"></div>
                
             </div>
           <script type="text/javascript">
$(document).ready(function(){
  $("#EnviarXX").click(function(){
    var formulario = $("#frminformacion").serializeArray();
    $.ajax({
      type: "POST",
      dataType: 'json',
      url: "../src/insertar.php?variablex=<?php echo $valuet;?>",
      data: formulario,
    }).done(function(respuesta){
      $("#mensaje").html(respuesta.mensaje);
    });
  });
  
  
});
</script>	     
        </div>	
		</div>
		<div class="text-holder">
		<h2>Pérfil</h2>
			<p><?=$data['description']?></p>
		</div>
		<div class="img-holder">
			<h2>Todos los comentarios</h2>
			<div class="fb-comments" data-href="<?=siteUrl?><?=$id?>" data-width="" data-numposts="5"></div>
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
				<a href="<?=siteUrl?><?=$value['alias']; ?>">
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
                    
