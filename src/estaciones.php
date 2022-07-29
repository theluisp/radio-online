<?php
$country = new Station;
$data = $country->GetAllStations21();

?>
<div id="search-results"></div>
	<div class="radio-section" id="content-area">
		<h2>Todos las estaciones</h2>
		<div class="container">
			<div id="count">
				<div class="row">
				<?php 
                    
$conexion = mysqli_connect("localhost", "todoswze_use", "3VeiaT94ghE", "todoswze_radio-test");
$registro_por_pagina = 200;
$pagina = '';
if(isset($_GET["pagina"]))
{
 $pagina = $_GET["pagina"];
}
else
{
 $pagina = 1;
}

$start_from = ($pagina-1)*$registro_por_pagina;

$query = "SELECT * FROM station order by id DESC LIMIT $start_from, $registro_por_pagina";
$result = mysqli_query($conexion, $query);



?>

<div class="table-responsive">
    <table >
   
     <?php
	 $number=0;
     while($row = mysqli_fetch_array($result))
     {
		 $number++;
         if(!empty($row['thumbnailImage'])){
					$img = "assets/images/radios/".$row['thumbnailImage'];
				}else{
					$img = "images/countries/default.jpg";
				}
     ?>
    
      
         <td ><a href="<?=siteUrl?><?=$row['alias']; ?>"> <div style="padding: 20px;" align="center"><img class="genre-img"  style="width:150px; height:90px;" src="<?=$img?>" alt="<?=$row['thumbnailImage']; ?>">
         <br><div align="center" ><?php echo $row["title"];?></div></div>
             </a>   </td>    
     
     <?php
          if ($number==5||$number==10||$number==15||$number==20||$number==25||$number==30||$number==35||$number==40||$number==45||$number==50||$number==55||$number==60||$number==65||$number==70||$number==75||$number==80||$number==85||$number==90||$number==95||$number==100||$number==105||$number==110||$number==115||$number==120||$number==125||$number==130||$number==135||$number==140||$number==145||$number==150||$number==155||$number==160||$number==165||$number==170||$number==175||$number==180||$number==185||$number==190||$number==195){
        echo '<tr></tr>';}
        else{}
     }
       
     ?>
        
    </table>
    
     <div align="center">
  
    <?php
    $page_query = "SELECT * FROM station ORDER BY id DESC";
    $page_result = mysqli_query($conexion, $page_query);
    $total_records = mysqli_num_rows($page_result);
    $total_pages = ceil($total_records/$registro_por_pagina);
    $start_loop = $pagina;
    $diferencia = $total_pages - $pagina;
    if($diferencia <= 5)
    {
     $start_loop = 1;
    }
    $end_loop = $start_loop +10;
    if($pagina > 0)
    {
     echo "<b><a class='pagina' href='estaciones?pagina=1'>Primera<</a></b>";
     echo "<a class='pagina' href='estaciones?pagina=".($pagina - 1)."'><</a>";
    }
    for($i=$start_loop; $i<=$end_loop; $i++)
    {     
     echo "<a class='pagina' href='estaciones?pagina=".$i."'>".$i.','."</a>";
    }
    if($pagina <= $end_loop)
    {
     echo "<a class='pagina' href='estaciones?pagina=".($pagina + 1)."'>></a>";
     echo "<b><a class='pagina' href='estaciones?pagina=".$total_pages."'>>Última</a></b>";
    }
    
    
    ?>
    </div>
    <br /><br />

                    </div></div></div></div></div>

