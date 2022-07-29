	<div id="bottomads">						
		<div class="add-box-bottom">
			<?=Adsbottom?>
		</div>
	</div>
	</section>
	<div id="sideads">
		<div class="add-box-side">
		<?=Adsright?>
		</div>
	</div>
</div>
</main>
<script>
	var hap_player;  
	jQuery(document).ready(function($){
		
		var settings = {
			instanceName:"metro2",
			sourcePath:"",
			activePlaylist:"#playlist-audio2",
			activeItem:0,
			volume:0.5,
			autoPlay:false,
			preload:"auto",
			randomPlay:false,
			loopingOn:true,
			soundCloudAppId:"",
			usePlaylistScroll:true,
			playlistScrollOrientation:"vertical",
			playlistScrollTheme:"minimal",
			facebookAppId:"",
			useNumbersInPlaylist: false,
			numberTitleSeparator: ".  ",
			artistTitleSeparator: " - ",
			playlistItemContent:"thumb",
		};

		hap_player = $(".hap-wrapper").hap(settings);

	});
</script>	
	<footer id="footer">
		<div class="container">
			<ul class="socialnetworks">
				<li><a class="icon-facebook" href="https://www.facebook.com/" rel="nofollow noopener" target="_blank" title="Facebook"></a></li>
				<li><a class="icon-twitter" href="https://twitter.com/" rel="nofollow noopener" target="_blank" title="Twitter"></a></li>
			</ul>
			<ul class="footer-nav">
				<li><a href="<?=siteUrl?>include-your-radio" rel="nofollow">Incluya su radio</a></li>
				<li><a href="<?=siteUrl?>help" rel="nofollow">Ayuda</a></li>
				<li><a href="<?=siteUrl?>" rel="nofollow">Nuevas</a></li>
<li><a href="<?=siteUrl?>genres" rel="nofollow">Generos</a></li>
<li><a href="<?=siteUrl?>country" rel="nofollow">Paises</a></li>
<li><a href="<?=siteUrl?>station" rel="nofollow">Estaciones</a></li>
<li><a href="<?=siteUrl?>single-station" rel="nofollow">Singel</a></li>


				<li><a href="<?=siteUrl?>privacy-policy" rel="nofollow">Política de privacidad</a></li>
				<li><a href="mailto:kekomix700@hotmail.com">Contactar</a></li>
				<li><a href="<?=siteUrl?>dmca" rel="nofollow">DMCA</a></li>
			</ul>
		</div>
		<script src="<?=siteUrl?>assets/js/jquery.mobilenav.min.js" crossorigin="anonymous" defer></script>
			<script src="<?=siteUrl?>assets/js/bootstrap.min.js" crossorigin="anonymous" defer></script>
			<script src="<?=siteUrl?>assets/js/jquery.main-4.0.31.min.js" crossorigin="anonymous" defer></script>

			<script src="<?=siteUrl?>assets/js/jquery.touchSwipe.min.js"></script>
			<script src="<?=siteUrl?>assets/js/new.js"></script>
			<script src="<?=siteUrl?>assets/js/poster.js"></script>
			<script src="<?=siteUrl?>assets/js/custom.js"></script>
	</footer>
</div>
</body>
</html>
