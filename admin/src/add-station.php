 
 <div class="qz-page-title">
        <div class="container-fluid">
            <div class="row">
                <div class="col-12">
                    <div class="d-flex justify-content-between align-items-center">
                        <h2>Add Station</h2>
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
									<div class="col-md-6">
										<div class="form-group">
											<label>* Station Name</label>
											<div class="colsm">
											<input type="text" class="form-control" name="title" placeholder="Station Name">
											</div>
										</div>
									</div>
									<div class="col-md-6">
										<div class="form-group">
											<label>* Streaming Url</label>
											<div class="colsm">
											<input type="text" class="form-control" name="stream" placeholder="http://equinox.shoutca.st:8183/stream">
											</div>
											
										</div>
									</div>
								</div>
								<div class="row">
									<div class="col-md-6">
										<div class="form-group">
											<label>* Country</label>
											<div class="colsm">
											<select class="form-control" name="country">
											<option value=""></option>
										<?php
											$query = $this->db->query("select * from countries");
											$query->execute();
											$data = $query->fetchAll();
											foreach($data as $country):
											  ?>
												<option value="<?=$country['country_id']?>"><?=$country['country_name']?></option>
											<?php
											endforeach; 
											?>
											</select>
											</div>
										</div>
									</div>
									<div class="col-md-6">
										<div class="form-group">
											<label>* Description</label>
											<div class="colsm">
											<textarea class="form-control" name="description" id="editor" placeholder="Description"></textarea>
											</div>
										</div>
									</div>
								</div>
								<div class="row">
									<div class="col-md-6">
										<div class="form-group">
											<label>* Stream Type</label>
											<div class="colsm">
											<select class="form-control" name="type">
												<option value=""></option>
												<option value="mp3">Mp3</option>
												<option value="hls">M3u8</option>
											</select>
											</div>
										</div>
									</div>
									<div class="col-md-6">
										<div class="form-group">
											<label>* Select Genre</label>
											<div class="colsm">
											<select data-placeholder="Select genre" class="form-control" name="cat_id" tabindex="2">
											<option value=""></option>
											<?php 
											$query = $this->db->query("select * from genres");
											$query->execute();
											$data = $query->fetchAll(); 
											foreach($data as $key=>$genres) :
											?>
											<option value="<?=$genres['id']?>"><?= $genres['category_name'];?></option>
											<?php 
											endforeach;
											?>
											</select>
											</div>
										</div>
									</div>
								</div>
								<div class="row">
									<div class="col-md-12">
										<div class="form-group">
											<label>Station Banner</label>
											<div class="colsm">
											<input id="upfile" type="file" name="uploadfile" class="file" data-theme="fas" required>
											</div>
										</div>
									</div>
								</div>
                                <div class="row">
                                    <div class="col-lg-6">
									<button type="submit" onclick="Save('station')"; class="btn btn-primary" name="signup" value="Sign up">
                                      Add new station                                     </button>
                                    </div>
                                </div>
                            </form>
					</div>
				</div>
                </div>
            </div>
        </div>
    </div>
	
	