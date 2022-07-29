<?php
$baseC = new load;
$idC = $baseC->getID();
$genreC = new Country;
$genC = $genreC->GetCountryByslug($idC);
$dataC = $genreC->GetCountryByCatid($genC[0]['country_id']);
$cookiecrisp= $_COOKIE["usuario"];

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
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>


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
        <div id="hap-playlist-list">
            <div id="playlist-audio2" style='background-color:red;'>
                <?php 
					$x = 1;
					foreach($dataC as $val){ 
					if(!empty($val['thumbnailImage'])){
						$img = siteUrl."assets/images/radios/".$val['thumbnailImage'];
					}else{
						$img = siteUrl."assets/images/";
					}
					?><style>
                    #lpm {
                        width: 274px;
                        height: 274px;
                    }
                </style>

                <li style=" background: url('http://thegoodgirlsnyc.com/holly/images/tabarrow.png') no-repeat 50% 24px;" class="item-<?=$x?> href hap-playlist-item" data-type="<?=$val['type'] =="mp3" ? "audio" : "hls"?>" data-<?=$val['type']?>="<?=$val['stream']?>" data-artist=" <?php $valuet=$val['id'];  
                        echo " <div ><a class='hap-link'  href=../src/insertar.php?variablex=$valuet title='Guardar favoritos' onclick='visualiza_formulario()' ><i style='position:absolute;
	top:310px;
	left:0px;
	width:108px;
	height:30px;
	
    background:#005f79;' class='hap-icon hap-icon-heart' ></i></a> 
                        
                       
                        </div>";
                        ?>" data-title="<?php echo '<br>'.$value=$val['title'];
                    
                    ?>" data-thumb="<?=$img?>" data-share="">



                    <script type="text/javascript">
                        $(document).ready(function() {
                            $("#EnviarXX").click(function() {
                                var formulario = $("#frminformacion").serializeArray();
                                $.ajax({
                                    type: "POST",
                                    dataType: 'json',
                                    url: "../src/insertar.php?variablex=<?php echo $valuet;?>",
                                    data: formulario,
                                }).done(function(respuesta) {
                                    $("#mensaje").html(respuesta.mensaje);
                                });
                            });


                        });
                    </script>
                </li>
                <?php $x++; } 
					if(sizeof($dataC) < 37){
						for($i = sizeof($dataC)+1; $i<= 37; $i++){
							$image = siteUrl."assets/images/radio.png";
							echo '<li class="item-'.$i.' hidden hap-playlist-item" data-type="" data-mp3="" data-artist="" data-title="" data-thumb="'.$image.'" data-share="">
							 <a class="hap-link" href="#" title="Like"><image src="../baseline_favorite_white_18dp.png"/></a>
						 </li>';
						}
					}
					?>
            </div>
        </div>
        <?php }else{
				echo "<div class='col-md-12'><h1 style='text-align:center;padding-top:150px'>Station Not Found</h1></div>";
			} ?>
        <div id="radio">
            <!-- player code -->
            <div class="hap-wrapper playerside">
                <div class="hap-player-thumb"></div>
                <div class="hap-info" style="backgorund-color:black;">
                    <div class="hap-player-title" style="backgorund-color:black;"></div>

                    <div class="hap-player-artist" style="backgorund-color:black;"></div>

                </div><br>
                <div class="hap-player-holder">
                    <div class="hap-player-controls">
                        <div class="hap-prev-toggle hap-contr-btn"><i class="hap-icon hap-icon-step-backward"></i></div>
                        <div class="hap-playback-toggle hap-contr-btn"><i class="hap-icon hap-icon-play"></i></div>
                        <div class="hap-next-toggle hap-contr-btn"><i class="hap-icon hap-icon-step-forward"></i></div>

                        <div class="hap-volume-seekbar">
                            <div class="hap-volume-bg">
                                <div class="hap-volume-level">
                                    <div class="hap-volume-drag"></div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
        <!-- PLAYLIST LIST -->

    </div>

</div>

</div>