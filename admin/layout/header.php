<div class="qz-wrapper">
<div class="qz-sidebar">
    <div class="qz-logo">
	<a href="<?=siteUrl;?>"><h3 style="padding:30px;color:#fff;"><?=title?></h3></a> 
    </div>
    <nav>
        <ul id="metismenu" class="nav navbar-nav">
            <li class="<?=$_REQUEST['q']=="" ? "qz-active": ""; ?>"><a href="<?=siteUrl;?>"><span class="flaticon-dashboard"></span>Dashboard </a></li>
            <li class="<?=$_REQUEST['q']=="genres" ? "qz-active": ""; ?>"><a class="userlist-image" href="<?=siteUrl?>genres"><span class="flaticon-menu"></span>Genres </a></li>
			<li class="<?=$_REQUEST['q']=="stations" ? "qz-active": ""; ?>"><a href="<?=siteUrl;?>station"><span class="flaticon-menu"></span>Stations </a></li>
			<li class="<?=$_REQUEST['q']=="setting" ? "qz-active": ""; ?>"><a href="<?=siteUrl;?>setting"><span class="flaticon-settings-work-tool"></span>Settings </a></li>
			<li class="<?=$_REQUEST['q']=="adssetting" ? "qz-active": ""; ?>"><a href="<?=siteUrl;?>adssetting"><span class="flaticon-settings-work-tool"></span>Ads Settings </a></li>
			<li class="<?=$_REQUEST['q']=="account" ? "qz-active": ""; ?>"><a href="<?=siteUrl;?>account"><span class="flaticon-settings-work-tool"></span>Account Setting </a></li>
        </ul>

    </nav>

</div>
<!-- Start main content -->
    <div class="qz-main-content">
        <!-- Start top bar -->
<div class="qz-topbar">
    <div class="container-fluid">
        <div class="row">
            <div class="col-xl-9 col-lg-8 col-md-7 col-12">
                <!--form action="{{route('qsSearch')}}" class="qz-search-from">
                    <button type="submit" class="btn btn-primary qz-search-btn">
                        <span class="flaticon-magnifying-glass"></span>
                    </button>
                    <div class="form-group">
                        <input type="text" required name="item" class="form-control" placeholder="Search here anything">
                    </div>
                </form-->
            </div>
            <div class="col-xl-3 col-lg-4 col-md-5 col-12 mt-md-0 mt-5">
                <div class="btn-group d-md-inline-flex d-flex justify-content-left">
                    <button type="button" class="btn btn-secondary dropdown-toggle qz-user-profile-btn" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                         <?=ucfirst($_SESSION['name'])?><span class="flaticon-angle-arrow-down"></span>
                        <span class="qz-user-avater">
                            <img src="<?=siteUrl?>assets/images/avatar.jpg" alt="" class="img-fluid">

                        </span>
                    </button>
                    <div class="dropdown-menu dropdown-menu-right" x-placement="bottom-end" style="position: absolute; will-change: transform; top: 0px; left: 0px; transform: translate3d(151px, 40px, 0px);">
                        
                        <a href="javascript:void(0);" onclick="logoff();" class="dropdown-item">Logout</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>