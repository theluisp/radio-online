 
 <div class="qz-page-title">
        <div class="container-fluid">
            <div class="row">
                <div class="col-12">
                    <div class="d-flex justify-content-between align-items-center">
                        <h2>Settings</h2>
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
                            <form id="updateForms" role="form" method="post" class="form-horizontal" enctype="multipart/form-data">
								<?php
								$load = new load;
								$data = $load->GetSetting();
								foreach($data as $val):
								?>
								<div class="row">
									<div class="col-md-6">
										<div class="form-group">
											<label>Site Title</label>
											<div class="colsm">
											<input type="text" name="title" value="<?=$val['title']?>" class="form-control">
											</div>
										</div>
									</div>
									<div class="col-md-6">
										<div class="form-group">
											<label>Email Address</label>
											<div class="colsm">
											<input type="email" name="email" value="<?=$val['email']?>" class="form-control">
											</div>
										</div>
									</div>
								</div>
								<div class="row">
									<div class="col-md-6">
										<div class="form-group">
											<label>Contact Number</label>
											<div class="colsm">
											<input type="number" name="contact" value="<?=$val['contact']?>" class="form-control">
											</div>
											
										</div>
									</div>
									<div class="col-md-6">
										<div class="form-group">
											<label>Google Analytic Tracking Id</label>
											<div class="colsm">
											<input type="text" name="trackid" value="<?=$val['tracking_id']?>" class="form-control" placeholder="UA-103647849-2">
											</div>
										</div>
									</div>
								</div>
								<div class="row">
									<div class="col-md-12">
										<div class="form-group">
											<label>Site Description</label>
											<div class="colsm">
											<textarea class="form-control" name="description" id="editor" placeholder="Description"><?=$val['description']?></textarea>
											</div>
										</div>
									</div>
								</div>
								<input type="hidden" name="id" value="<?=$val['id']?>">
								<div class="row">
									<div class="col-md-12">
										<div class="form-group">
											  <label>Site Logo</label>
											  <div class="fileupload_block">
												<input type="hidden" value="<?= $val['logo']?>" name="upfile">
												<div class="fileupload_img"><img type="image" src="../assets/images/logo/<?= $val['logo']?>" id="imgsrc" class="avatars" alt="Genre image" width="250"></div>
											  </div><br/>
											  <div class="fileva btn btn-sm btn-primary">
											  <input type="file" name="uploadfile" value="" class="inputva d-block form-control file-upload" id="fileupload">
											  Change Logo</div>
									    </div>
									</div>
								</div>
								<?php endforeach; ?>
                                <div class="row">
                                    <div class="col-lg-12">
										<div class="form-group">
											<button type="submit" onclick="update('setting')"; class="btn btn-primary" name="signup" value="Sign up" style="width: 100%;">Update Setting</button>
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
	
	