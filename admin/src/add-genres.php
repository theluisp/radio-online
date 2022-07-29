 <div class="qz-page-title">
        <div class="container-fluid">
            <div class="row">
                <div class="col-12">
                    <div class="d-flex justify-content-between align-items-center">
                        <h2>Add Genre</h2>
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
								<div class="form-group">
									<label><span class="text-danger">*</span> Category Name</label>
									<div class="colsm">
										<input type="text" class="form-control" name="catname" id="catname" placeholder="Category Name" required>
									</div>
								</div>
								  <!--div class="form-group">
									<label class="col-sm-2 control-label"><span class="text-danger">*</span> Streaming Url</label>
									<div class="col-sm-12">
									  <input type="text" class="form-control" name="stream" placeholder="Meta Keywords">
									  
									</div>
								  </div-->
								<div class="form-group">
									<label>Cover Image <span class="text-danger">*</span></label>
									<div class="colsm">
										<input id="upfile" type="file" name="uploadfile" class="file" data-theme="fas" required>
									</div>
								</div>
								<div class="form-group">
								  
									<div class="col-sm-12">
									  <button type="submit" onclick="Save('genre')"; class="btn btn-primary" name="add" value="Add Genre">
                                      Add new genre                                     </button>
									</div>
							    </div> 
                           </form>
						</div>
					</div>
                </div>
            </div>
        </div>
    </div>
	
	