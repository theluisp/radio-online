<?php
$country = new Country;
$data = $country->GetCountry();

?>
<div id="search-results"></div>
	<div class="radio-section" id="content-area">
		<h2>Todos los paises</h2>
		<div class="container">
			<div id="count">
				<div class="row">
				<?php foreach($data as $val){
				if(!empty($val['flag_pic'])){
					$img = "images/countries/".$val['flag_pic'];
				}else{
					$img = "images/countries/default.jpg";
				}
				?>
				<figure  class="col-md-2 col-xs-6">
					<a href="<?=siteUrl?>countries/<?=$val['country_name']; ?>">
						<div class="inner">
							<img class="genre-img" src="<?=$img?>" alt="<?=$val['flag_pic']; ?>">
						</div>
						<span class="title"><?=$val['country_name']?></span>
					</a>
				</figure>
				<?php } ?>
				</div>
			</div>
		</div>
	</div>
	</div>
	
                    
