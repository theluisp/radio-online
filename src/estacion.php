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
			<!-- player code -->   
			<div class="hap-wrapper playerside">
				<!--div class="hap-player-thumb">Imagen grande no responsive</div>-->
<div class="img-box">
						
<img id="radio-logo" src="<?=$img?>" alt="Bol Punjabi Radio" height="66" importance="high" width="96" itemprop="image">
					</div>
					


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
			
 <script>
            var haps_player;  
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
                hap_player = $("#hap-wrapper").hap(settings);

            });
        </script>
        <!-- PLAYLIST LIST -->
        <div id="hap-playlist-list" >
             <div id="playlist-audio2">
                <div class="hap-playlist-item" data-type="<?=$data['type'] =="mp3" ? "audio" : "hls"?>" data-<?=$data['type']?>="<?=$data['stream']?>"  data-title="<?=$data['title']?>" data-thumb="<?=$img?>"  data-artist=" <?php $valuet=$data['id'];  
    
                        
                      echo " <div ><a class='hap-link'  href= src/insertar.php?variablex=$valuet title='Guardar favoritos' ><i style='position:static;
	top:300px;
	left:100px;
	width:58px;
	height:28px;
	
    background:#005f79;' class='hap-icon hap-icon-heart'></i></a></div>";
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


<!--ZONA PERFIL Y EMISORAS RELACIONADAS-->
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
         
