<?php
error_reporting(E_ERROR | E_WARNING | E_PARSE);

// Notificar E_NOTICE también puede ser bueno (para informar de variables
// no inicializadas o capturar errores en nombres de variables ...)
error_reporting(E_ERROR | E_WARNING | E_PARSE | E_NOTICE);

// Notificar todos los errores excepto E_NOTICE
error_reporting(E_ALL ^ E_NOTICE);

// Notificar todos los errores de PHP (ver el registro de cambios)
error_reporting(E_ALL);

// Notificar todos los errores de PHP
error_reporting(-1);

// Lo mismo que error_reporting(E_ALL);
ini_set('error_reporting', E_ALL);

$id=$_COOKIE["usuario"];

$servername = "localhost";
$database = "radio"; 
$username = "root";
$password = "mysql";


$sql = "mysql:host=$servername;dbname=$database;";
$dsn_Options = [PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION];
try { 
  $my_Db_Connection = new PDO($sql, $username, $password, $dsn_Options);
 
} catch (PDOException $error) {
  echo 'Connection error: ' . $error->getMessage();
}


$usuario=$_COOKIE["usuario"];


$query = $my_Db_Connection->prepare
    ("select * from favourite join station on station.id = favourite.station_id where favourite.user_id = '$id' ");
		$query->execute();
		$data = $query->fetchAll();
 
  



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
<style>
                    #lpm {
                        width: 274px;
                        height: 274px;
                    }
                </style>
<link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>

<div id="search-results"></div>
<div class="radio-section" id="content-area">
    <h2>TUS ESTACIONES FAVORITAS </h2>
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
        <div id="hap-playlist-list">
            <div id="playlist-audio2" >
                <?php 
					$x = 1;
					foreach($data as $val){ 
					if(!empty($val['thumbnailImage'])){
						$img = siteUrl."assets/images/radios/".$val['thumbnailImage'];
					}else{
							echo "<div class='col-md-12'><h1 style='text-align:center;padding-top:190px'>Station Not Found</h1></div>";
					}
					?><style>
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


                <li style=" " class="item-<?=$x?> href hap-playlist-item" data-type="<?=$val['type'] =="mp3" ? "audio" : "hls"?>" data-<?=$val['type']?>="<?=$val['stream']?>" data-artist=" <?php $valuet=$val['id'];  
                         echo " <div ><a class='hap-link'  href= ../src/insertar.php?variablex=$valuet title='Eliminar favoritos' ><i style='position:static;
	top:190px;
	left:90px;
	width:108px;
	height:30px;
	
    background:#005f79;' class='hap-icon hap-icon-heart' ></i></a></div>";
                        ?>" data-title="<?php echo '<br><br><br>'.$value=$val['title'];
                    
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
					if(sizeof($data) < 37){
						for($i = sizeof($data)+1; $i<= 37; $i++){
							$image = siteUrl."assets/images/radio.png";
							echo '<li class="item-'.$i.' hidden hap-playlist-item" data-type="" data-mp3="" data-artist="" data-title="" data-thumb="'.$image.'" data-share="">
							 <a class="hap-link" href="#" title="Guardar favoritos"><image src="../baseline_favorite_white_18dp.png"/></a>
						 </li>';
						}
					}
					?>
            </div>
        </div>
        <?php }else{
				echo "<div class='col-md-12'><h1 style='text-align:center;padding-top:180px'>No tienes estaciones favoritas</h1></div>";
    
    echo'asd';
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