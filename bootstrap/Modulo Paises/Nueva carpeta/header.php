 <?php 
	$base   = new load;
	$id     = $base->getID();			 
	$detail = $base->getBy('station',"alias = '$id'",false);           		   	
	$data = $detail[0];
    ?>
<!doctype html>
<html lang="es">
<head prefix="og: http://ogp.me/ns#">
    <meta charset="UTF-8">
    <title><?=TITLE?></title>
    <meta name="application-name" content="<?=siteUrl?>">
    <meta name="description" content="<?=isset($data['description']) ? $data['description'] : DESC ?>">
    <meta name="referrer" content="origin-when-cross-origin">
    <meta name="theme-color" content="#002029">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta property="fb:admins" content="100002936790534">
    <meta property="og:locale" content="es_ES">
    <meta property="og:url" content="<?=isset($data['alias']) ? siteUrl.$data['alias'] : siteUrl?>">
    <meta property="og:title" content="<?=isset($data['title']) ? $data['title'] : TITLE?>">
    <meta property="og:site_name" content="<?=siteUrl?>">
    <meta property="og:description" content="<?=isset($data['description']) ? $data['description'] : DESC?>">
    <meta property="og:image" content="<?=isset($data['thumbnailImage']) ? siteUrl.'assets/images/radios/'.$data['thumbnailImage'] : siteUrl.'assets/images/logo/'.LOGO ?>">
    <meta property="og:type" content="Music">
    <meta name="twitter:image" content="<?=isset($data['thumbnailImage']) ? siteUrl.'assets/images/radios/'.$data['thumbnailImage'] : siteUrl.'assets/images/logo/'.LOGO ?>">
    <link rel="preload" href="https://cdn.webrad.io/fonts/icomoon.woff2" as="font" type="font/woff2" crossorigin="anonymous">
    <link rel="shortcut icon" href="<?=siteUrl?>assets/images/countries/espana.ico">
    <link rel="stylesheet" href="<?=siteUrl?>assets/css/bootstrap.min.css">
    <link rel="stylesheet" href="<?=siteUrl?>assets/css/main-4.0.13.min.css">
	<link rel="stylesheet" type="text/css" href="<?=siteUrl?>assets/css/hap-fontawesome.css"/>
	<link rel="stylesheet" type="text/css" href="<?=siteUrl?>assets/css/haps-fontawesome.css"/>
	<link rel="stylesheet" type="text/css" href="<?=siteUrl?>assets/css/jquery.mCustomScrollbar.css" media="all" /><!-- playlist scroll -->
	<link rel="stylesheet" type="text/css" href="<?=siteUrl?>assets/css/metro2.css" />
	<link rel="stylesheet" type="text/css" href="<?=siteUrl?>assets/css/poster.css" />
	<script src="<?=siteUrl?>assets/js/jquery-3.2.1.min.js"></script>
<!---google analytic code------>
<script async="" src="https://www.googletagmanager.com/gtag/js?id=<?=TRACKING_ID?>"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', '<?=TRACKING_ID?>');
</script>
<!---google analytic code end------>

<!-- Quantcast Choice. Consent Manager Tag v2.0 (for TCF 2.0) -->
<script type="text/javascript" async="true">
(function() {
    var host = 'www.themoneytizer.com';
    var element = document.createElement('script');
    var firstScript = document.getElementsByTagName('script')[0];
    var url = 'https://quantcast.mgr.consensu.org'
        .concat('/choice/', '6Fv0cGNfc_bw8', '/', host, '/choice.js')
    var uspTries = 0;
    var uspTriesLimit = 3;
    element.async = true;
    element.type = 'text/javascript';
    element.src = url;

    firstScript.parentNode.insertBefore(element, firstScript);

    function makeStub() {
        var TCF_LOCATOR_NAME = '__tcfapiLocator';
        var queue = [];
        var win = window;
        var cmpFrame;

        function addFrame() {
            var doc = win.document;
            var otherCMP = !!(win.frames[TCF_LOCATOR_NAME]);

            if (!otherCMP) {
                if (doc.body) {
                    var iframe = doc.createElement('iframe');

                    iframe.style.cssText = 'display:none';
                    iframe.name = TCF_LOCATOR_NAME;
                    doc.body.appendChild(iframe);
                } else {
                    setTimeout(addFrame, 5);
                }
            }
            return !otherCMP;
        }

        function tcfAPIHandler() {
            var gdprApplies;
            var args = arguments;

            if (!args.length) {
                return queue;
            } else if (args[0] === 'setGdprApplies') {
                if (
                    args.length > 3 &&
                    args[2] === 2 &&
                    typeof args[3] === 'boolean'
                ) {
                    gdprApplies = args[3];
                    if (typeof args[2] === 'function') {
                        args[2]('set', true);
                    }
                }
            } else if (args[0] === 'ping') {
                var retr = {
                    gdprApplies: gdprApplies,
                    cmpLoaded: false,
                    cmpStatus: 'stub'
                };

                if (typeof args[2] === 'function') {
                    args[2](retr);
                }
            } else {
                queue.push(args);
            }
        }

        function postMessageEventHandler(event) {
            var msgIsString = typeof event.data === 'string';
            var json = {};

            try {
                if (msgIsString) {
                    json = JSON.parse(event.data);
                } else {
                    json = event.data;
                }
            } catch (ignore) {}

            var payload = json.__tcfapiCall;

            if (payload) {
                window.__tcfapi(
                    payload.command,
                    payload.version,
                    function(retValue, success) {
                        var returnMsg = {
                            __tcfapiReturn: {
                                returnValue: retValue,
                                success: success,
                                callId: payload.callId
                            }
                        };
                        if (msgIsString) {
                            returnMsg = JSON.stringify(returnMsg);
                        }
                        event.source.postMessage(returnMsg, '*');
                    },
                    payload.parameter
                );
            }
        }

        while (win) {
            try {
                if (win.frames[TCF_LOCATOR_NAME]) {
                    cmpFrame = win;
                    break;
                }
            } catch (ignore) {}

            if (win === window.top) {
                break;
            }
            win = win.parent;
        }
        if (!cmpFrame) {
            addFrame();
            win.__tcfapi = tcfAPIHandler;
            win.addEventListener('message', postMessageEventHandler, false);
        }
    };

    if (typeof module !== 'undefined') {
        module.exports = makeStub;
    } else {
        makeStub();
    }

    var uspStubFunction = function() {
        var arg = arguments;
        if (typeof window.__uspapi !== uspStubFunction) {
            setTimeout(function() {
                if (typeof window.__uspapi !== 'undefined') {
                    window.__uspapi.apply(window.__uspapi, arg);
                }
            }, 500);
        }
    };

    var checkIfUspIsReady = function() {
        uspTries++;
        if (window.__uspapi === uspStubFunction && uspTries < uspTriesLimit) {
            console.warn('USP is not accessible');
        } else {
            clearInterval(uspInterval);
        }
    };

    if (typeof window.__uspapi === 'undefined') {
        window.__uspapi = uspStubFunction;
        var uspInterval = setInterval(checkIfUspIsReady, 6000);
    }
})();
</script>
<!-- End Quantcast Choice. Consent Manager Tag v2.0 (for TCF 2.0) -->

</head>
<body class="ltr">
<div id="fb-root"></div>
<div id="fb-root"></div>
<script async defer crossorigin="anonymous" src="https://connect.facebook.net/en_GB/sdk.js#xfbml=1&version=v4.0"></script>
    <div id="wrapper">
        <header id="header">
            <div class="container">
                <div class="logo"><a href="<?=siteUrl?>"><img class="ico" src="<?=siteUrl?>assets/images/equalizer.gif" alt="<?=siteUrl?>" height="14" width="23">Radio hispana<span>Online</span></a></div>
                <div  id="loadads">
					<div class="add-box-top">
					<?=Adstop?>
					</div>
				</div>
            </div>
        </header>
		<main id="main">
			<div class="container">
				<section id="content">
					<div class="content-holder">
						<div class="head"><a class="menu-opener" href="#"><span>Menu</span></a>
							<form class="search-form" method="POST" id="searchForm">
								<div class="input-holder"><button type="submit" aria-label="Search" name="Search"><i class="icon-search"></i></button><input type="search" id="search-input-head" aria-label="Search" autocomplete="on" placeholder="Search" required spellcheck="false"></div>
								<input type="hidden" name="url" id="url" value="">
							</form>
                            
							<div class="social-links">
                                <a  href="<?=siteUrl?>favorites"><i class="material-icons" style="font-size:20px;color:#33A7AB;">favorite</i><small style="color:#33A7AB; ">Favoritos</small></a>
                                 <a href="#"><img src="https://img.icons8.com/emoji/24/000000/blue-heart.png"/><small>Recientemente escuchado</small></a>
                                <div class="fb-like fb_reset" data-href="<?=siteUrl?>" data-width="" data-layout="button_count" data-action="like" data-size="small" data-show-faces="false" data-share="true">
                                </div>
                                <iframe id="twitter-widget-0" scrolling="no" frameborder="0" allowtransparency="true" class="twitter-share-button twitter-share-button-rendered twitter-tweet-button" style="position: static; visibility: visible; width: 60px; height: 20px;" title="Twitter Tweet Button" src="https://platform.twitter.com/widgets/tweet_button.0639d67d95b7680840758b6833f06d87.en.html#dnt=false&amp;id=twitter-widget-0&amp;lang=en&amp;original_referer=<?=siteUrl?>size=m&amp;text=I%20am%20enjoying%20radio%20stations%20from%20India%20on&amp;time=1566275058195&amp;type=share&amp;url=<?=siteUrl?>&amp;via=indianradios" data-url="<?=siteUrl?>"></iframe>
                                
                            </div>
						</div>
						<span class="overlay"></span>
						<div class="menu-area" data-simplebar>
							<!--form class="search-form" action="#">
								<div class="input-holder"><button type="submit" aria-label="Search" name="Search"><i class="icon-search"></i></button><input type="search" id="search-input-menu" aria-label="Search" autocomplete="on" placeholder="Search any radio station" required
										spellcheck="false"></div>
							</form--->  
                            <div class="box active"><strong class="title"><a class="opener" href="#">Paises</a></strong><a class="more" href="<?=siteUrl?>country">Todos los paises</a>
					          <div class="slide" >
									<ul class="menu-list" id="menu">
										<?php 
										$country = new Country();
										$dataC = $country->GetCountry();
										foreach($dataC as $genresC){
										?>
										<li><a href="<?=siteUrl?>countries/<?=$genresC['country_id']; ?>"><?=$genresC['country_name']; ?></a></li>
										<?php } ?>
									</ul>
								</div>
							</div>
							<div class="box active"><strong class="title"><a class="opener" href="#">Géneros</a></strong><a class="more" href="<?=siteUrl?>genres">Todos los géneros</a>
					          <div class="slide">
									<ul class="menu-list" id="menu-slide">
										<?php 
										$gen = new Genre();
										$data = $gen->GetGenres();
										foreach($data as $genres){
										?>
<li><a href="<?=siteUrl?>genre/<?=$genres['alias']; ?>"><?=$genres['category_name']; ?></a></li>
										<?php } ?>
									</ul>
								</div>
							</div>
                          
						</div>
								