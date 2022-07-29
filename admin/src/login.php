<?php
$load = new load;
	if($load->isLogin())
	{
	echo ("<script>location.href='/'</script>");
	}
	else
	{	
?>
<body class="user-body">


<!-- Start user area -->
<div class="container">
    <div class="row" id="loginbox">
        <div class="col-lg-12">
            <div class="card">
                <div class="card-body">
                    <div class="row text-center">
                        <div class="col-lg-4 offset-lg-4">
                           
                            <div class="qz-user-title">
                                <h1 id="show">Sign in</h1>
                            </div>
                            <form method="post" role="form" action="" id="loginForm" method="POST">
                            <div class="form-group">
                                    <input type="email" name="username" class="form-control" placeholder="Enter email" required>
                                    <div class="qz-input-icon">
                                        <span class="flaticon-mail"></span>
                                    </div>
                                </div>
                                <div class="form-group">
                                    <input type="password" name="password" class="form-control" placeholder="Password" required>
                                    <div class="qz-input-icon">
                                        <span class="flaticon-lock"></span>
                                    </div>
                                </div>
                                <button type="submit" name="sub" onclick="login()" class="btn btn-primary btn-block">Sign in</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
<style>
.col-md-4.offset-4.logo img {
    width: 50%;
}
</style>
<?php 
	}
?>