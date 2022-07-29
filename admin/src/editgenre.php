 
 <div class="qz-page-title">
        <div class="container-fluid">
            <div class="row">
                <div class="col-12">
                    <div class="d-flex justify-content-between align-items-center">
                        <h2>Edit genre</h2>
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
							<?php
							$base   = new load;
							$id     = $base->getID();
							$edit   = $base->getBy('genres',"id = $id");
							?>
                            <form id="updateForms" role="form" method="post" class="form-horizontal" enctype="multipart/form-data">
							<?php foreach($edit as $genres):?>
								<div class="form-group">
										<div class="col-sm-12">
										  <div class="row">
											  <label>Category Name</label>
											  <input type="text" class="form-control" name="catname" value="<?= $genres['category_name']?>">
										  </div>
										</div>
									  </div>
									   <input type="hidden" name="id" value="<?= $id ?>">
									   <div class="form-group">
											  <label>Cover Image</label>
											  <div class="fileupload_block">
												<input type="hidden" value="<?= $genres['thumbnailImage']?>" name="upfile">
												<div class="fileupload_img"><img type="image" src="../../assets/images/genres/<?= $genres['thumbnailImage']?>" id="imgsrc" class="avatars" alt="Genre image" width="250"></div>
											  </div><br/>
											  <div class="fileva btn btn-sm btn-primary">
											  <input type="file" name="uploadfile" value="" class="inputva d-block form-control file-upload" id="fileupload">
											  Change Image</div>
									    </div>
									  <div class="form-group">
										 <div class="col-sm-12">
										 <input type="submit" name="" value="Update" class="btn btn-info" onclick="update('genre')">
									   </div>
									  </div>
									  <div class="form-group">
										 <div class="col-sm-12">
											<div id="show"></div>
										 </div>
									 </div>
								<?php endforeach;?>
                            </form>
					</div>
				</div>
                </div>
            </div>
        </div>
    </div>
	
	