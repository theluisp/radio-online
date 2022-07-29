<?php 
$con = mysqli_connect("localhost","appleonx_radiohe","Q;]nGJuv~6ae","appleonx_radiohere");

$data = $con->query("select * from station where station.status = 1 order by view desc limit 10");
while($row = $data ->fetch_assoc()){
  $set['station'][] = $row;


}
$vals = json_encode($res,JSON_HEX_TAG | JSON_HEX_APOS | JSON_HEX_QUOT | JSON_HEX_AMP | JSON_UNESCAPED_UNICODE );
 echo $vals;

?>