<?php
$genre = new Genre;
$data = $genre->GetGenres();

?>
<div id="search-results"></div>
	<div class="radio-section" id="content-area">
		<h2>Géneros</h2>
		<div class="container">
			<div id="gens">
				<div class="row">
				<?php foreach($data as $val){
				if(!empty($val['thumbnailImage'])){
					$img = "assets/images/genres/".$val['thumbnailImage'];
				}else{
					$img = "assets/images/genres/default.jpg";
				}
				?>
				<figure  class="col-md-2 col-xs-6">
					<a href="<?=siteUrl?>genre/<?=$val['alias']; ?>">
						<div class="inner">
							<img class="genre-img" src="<?=$img?>" alt="<?=$val['category_name']; ?>">
						</div>
						<span class="title"><?=$val['category_name']?></span>
					</a>
				</figure>
				<?php } ?>
				</div>
			</div>
		</div>
	</div>
	</div>
	     
