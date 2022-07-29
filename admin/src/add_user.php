 <div class="qz-page-title">
        <div class="container-fluid">
            <div class="row">
                <div class="col-12">
                    <div class="d-flex justify-content-between align-items-center">
                        <h2>Add User</h2>
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
                        <div class="col-lg-12">
                            <form id="signupForm" role="form" method="post" class="form-horizontal" enctype="multipart/form-data">
								<div class="row">
									<div class="col-md-12">
										<div class="form-group">
											<label>Name<span class="text-danger">*</span></label>
											<div class="colsm">
											<input type="text" name="name" value="" class="form-control" placeholder="Name">
											</div>
										</div>
									</div>
								</div>
								<div class="row">
									<div class="col-md-6">
										<div class="form-group">
											<label>Username<span class="text-danger">*</span></label>
											<div class="colsm">
											<input type="email" name="username" value="" class="form-control" placeholder="doe@email.com">
											</div>
										</div>
									</div>
									<div class="col-md-6">
										<div class="form-group">
											<label>Password<span class="text-danger">*</span></label>
											<div class="colsm">
											<input type="password" name="password" value="" class="form-control" placeholder="*******">
											</div>
										</div>
									</div>
								</div>
                                <div class="row">
                                    <div class="col-lg-6">
                                     <button type="submit" onclick="Save('user')"; class="btn btn-primary" name="signup" value="Sign up">
                                      Add new user                                     </button>
                                    </div>
                                </div>
                            </form>
					</div>
				</div>
                </div>
            </div>
        </div>
    </div>
	
	