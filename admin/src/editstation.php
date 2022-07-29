 
 <div class="qz-page-title">
        <div class="container-fluid">
            <div class="row">
                <div class="col-12">
                    <div class="d-flex justify-content-between align-items-center">
                        <h2>Edit station</h2>
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
							$edit   = $base->getBy('station',"id = $id");
							$load = new load;
							?>
                            <form id="updateForms" role="form" method="post" class="form-horizontal" enctype="multipart/form-data">
							<?php foreach($edit as $station):?>
								<div class="row">
									<div class="col-md-12">
										<div class="form-group">
											<label>Station Name</label>
											  <input type="text" class="form-control" name="title" value="<?= $station['title']?>">
										</div>
									</div>
								</div>
								<div class="row">
									<div class="col-md-6">
										<div class="form-group">
											<label>Streaming Url</label>
											  <input type="text" class="form-control" name="stream" value="<?= $station['stream']?>">
											
										</div>
									</div>
									<div class="col-md-6">
										<div class="form-group">
											<label>Stream Type</label>
											  <select data-placeholder="Stream Type" class="chosen-select form-control" name="type" tabindex="2">
												<option value=""></option>
												<option value="mp3" <?=$station['type']=="mp3" ? 'selected': '' ?>>Mp3</option>
												<option value="hls" <?=$station['type']=="hls" ? 'selected': '' ?>>M3u8</option>
											</select>
										</div>
									</div>
								</div>
								<div class="row">
									<div class="col-md-12">
										<div class="form-group">
											<label>Description</label>
											  <textarea class="form-control" rows="5" name="description"><?= $station['description']?></textarea>
										</div>
									</div>
								</div>
								<div class="row">
									<div class="col-md-6">
										<div class="form-group">
											<label>Country</label>
										  <select class="chosen-select form-control" name="country" tabindex="2">
											<option value=""></option>
											<?php
											$query = $this->db->query("select * from countries");
											$query->execute();
											$data = $query->fetchAll();
											foreach($data as $country):
											if($country['country_id'] == $station['country_id']){
											$selected = 'selected="selected"';
											echo '
											<option value="'.$country['country_id'].'"'.$selected.'>'.$country['country_name'].'</option>';}else{
												echo '
											<option value="'.$country['country_id'].'">'.$country['country_name'].'</option>';
											}
										$i++;
										endforeach;
										?>
										</select>
										</div>
									</div>
									<div class="col-md-6">
										<div class="form-group">
											<label>Genre Name</label>
										  <select data-placeholder="Choose genre tags..." class="chosen-select form-control" name="cat_id" tabindex="2">
											<option value=""></option>
											<?php
											$query = $this->db->query("select * from genres");
											$query->execute();
											$data = $query->fetchAll();
											$i = 1;
											foreach($data as $genres):
											
											
											if($genres['id'] == $station['cat_id']){
											$selected = 'selected="selected"';
											echo '
											<option value="'.$genres['id'].'"'.$selected.'>'.$genres['category_name'].'</option>';}else{
												echo '
											<option value="'.$genres['id'].'">'.$genres['category_name'].'</option>';
											}
										$i++;
										endforeach;
										?>
										</select>
										</div>
									</div>
								</div>
								<div class="row">
									<div class="col-md-6">
										<div class="form-group">
											 <label>Station Image</label>
											  <div class="fileupload_block" style="    width: 100%;float: left;">
												<input type="hidden" value="<?= $station['thumbnailImage']?>" name="upfile">
												<div class="fileupload_img" style="    padding: 10px;"><img type="image" src="../../assets/images/radios/<?= $station['thumbnailImage']?>" id="imgsrc" class="avatars" alt="Station image" width="50%" height="auto"></div>
											  </div><br/>
											  <div class="fileva btn btn-primary">
											  <input type="file" name="uploadfile" value="" class="inputva d-block form-control file-upload" id="fileupload">
											  Change Image</div>
										</div>
									</div>
								</div>
                                <div class="row">
                                    <div class="col-lg-12">
                                     <input type="hidden" name="id" value="<?=$station['id']?>">
									<input type="submit" name="" value="Update" class="btn btn-primary btn-block" onclick="update('station')">
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
	
	