 
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
									<div class="col-md-12">
										<div class="form-group">
											<label>Top ads script</label>
											<textarea class="form-control" rows="10" name="adstop" placeholder="Description"><?=$val['adstop']?></textarea>
										</div>
									</div>
								</div>
								<div class="row">
									<div class="col-md-12">
										<div class="form-group">
											<label>Right ads script</label>
											<textarea class="form-control" rows="10" name="adsright" placeholder="Description"><?=$val['adsright']?></textarea>
										</div>
									</div>
								</div>
								<div class="row">
									<div class="col-md-12">
										<div class="form-group">
											<label>Bottom ads script</label>
											<textarea class="form-control" name="adsbottom" rows="10" placeholder="Description"><?=$val['adsbottom']?></textarea>
										</div>
									</div>
								</div>
								<input type="hidden" name="id" value="<?=$val['id']?>">
								<?php endforeach; ?>
                                <div class="row">
                                    <div class="col-lg-12">
										<div class="form-group">
											<button type="submit" onclick="update('adssetting')"; class="btn btn-primary" name="signup" value="Sign up" style="width: 100%;">Update Setting</button>
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
	
	