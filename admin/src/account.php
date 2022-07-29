 
 <div class="qz-page-title">
        <div class="container-fluid">
            <div class="row">
                <div class="col-12">
                    <div class="d-flex justify-content-between align-items-center">
                        <h2>Account Settings</h2>
                        <span class="sidebarToggler">
                            <i class="fa fa-bars d-lg-none d-block"></i>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- End page title -->
    <!-- Start content area  -->
    <div class="qz-content-area">
        <div class="card add-category">
            <div class="card-body">
                <div class="container-fluid">
                    <div class="row">
                        <div class="col-lg-8 offset-2">
                            <form id="updateForms" role="form" method="post" class="form-horizontal" enctype="multipart/form-data">
								<?php
								$load = new load;
								$data = $load->GetAdminSetting();
								foreach($data as $val):
								?>
								<div class="row">
									<div class="col-md-12">
										<div class="form-group">
											<label>Name</label>
											<div class="colsm">
											<input type="text" name="name" value="<?=$val['name']?>" class="form-control">
											</div>
										</div>
									</div>
									<div class="col-md-12">
										<div class="form-group">
											<label>Username</label>
											<div class="colsm">
											<input type="email" name="username" value="<?=$val['username']?>" class="form-control">
											</div>
										</div>
									</div>
									<div class="col-md-12">
										<div class="form-group">
											<label>New Password</label>
											<div class="colsm">
											<input type="password" name="pass" value="" class="form-control" placeholder="************">
											</div>
											
										</div>
									</div>
									<div class="col-md-12">
										<div class="form-group">
											<label>Confirm Password</label>
											<div class="colsm">
											<input type="password" name="cpass" value="" class="form-control" placeholder="************">
											</div>
										</div>
									</div>
								</div>
								<input type="hidden" name="id" value="<?=$val['id']?>">
								<?php endforeach; ?>
                                <div class="row">
                                    <div class="col-lg-12">
										<div class="form-group">
											<button type="submit" onclick="update('account')"; class="btn btn-primary" name="signup" value="Sign up" style="width: 100%;">Update Setting</button>
										</div>
                                    </div>
                                </div>
							</form>
						</div>
					</div>
                </div>
            </div>
        </div>
    </div>
	
	