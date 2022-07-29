<?php
$load = new load;
?>
<!-- Start wrapper -->

     <div class="qz-page-title">
        <div class="container-fluid">
            <div class="row">
                <div class="col-12">
                    <div class="d-flex justify-content-between align-items-center">
                        <h2>Stations</h2>
                        <span class="sidebarToggler">
                            <i class="fa fa-bars d-lg-none d-block"></i>
                        </span>
						<div class="d-flex align-items-center">
						<a href="<?=siteUrl?>add-station"><button class="btn btn-primary px-3">Add new Station</button></a>
						<span class="sidebarToggler ml-4">
							<i class="fa fa-bars d-lg-none d-block"></i>
						</span>
						</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- End page title -->

    <!-- Start content area  -->
    <div class="qz-content-area">
        <div class="card">
            <div class="card-body">
                <div class="container-fluid">
                    <div class="row">
                        <div class="col-12">
                            <!-- <div class="table-responsive"> -->
                            <table id="category-table" class="table category-table table-bordered text-center mb-0 dataTable no-footer dtr-inline" role="grid" aria-describedby="category-table_info" style="width: 987px;">
                                <thead>
									<tr>
									  <th>#</th>
									  <th>Stations Name</th>
									  <th>Image</th>
									  <th>Streaming Url</th>
									  <th>Featured</th>
									  <th>Status</th>
									  <th>Actions</th>
									</tr>
								  </thead>
                                <tbody>                         
                                                                
                                     
							 <?php 
							  $data = $load->GetAllstsation();
							  $x =1;
							  foreach($data as $key=>$station) :
								?>
									<tr>
									  <td><?=$x;?></td>
									  <td><?=$station['title'];?></td>
									  <td><img src="../assets/images/radios/<?=$station['thumbnailImage']?>" width="50" height="50"></td>
									  <td><?=$station['stream'];?></td>
									  <td>
									  <label class="switch">
										  <input type="checkbox" name="chk" class="chk" <?php if($station['featured'] == "1"){echo "checked='checked'";} ?> value="<?php echo $station['id'];?>" onchange='upstatus(<?php echo $station['id']?>,"station")'>
										  <div class="slider round"></div>
									 </label>
									  </td>
									  <td><span class="<?=$station['status'] =="1" ? "text-success" : "text-danger" ;?>"><?=$station['status'] =="1" ? "Active" : "Inactive" ;?></span></td>
									  <td>
										<ul class="d-flex justify-content-center">
											<a href="<?=siteUrl?>edit-station/<?=$station['id']?>" title="Edit" ><li class="qz-edit"><span class="flaticon-pencil"></span></li></a>
											
											<a href="javascript:void(0);" onclick="upactive('<?=$station['id']?>','station')" title="<?=$station['status'] =="1" ? "Dectivate" : "Activate" ;?>">
											<li class="ml-2" style="color:<?=$station['status'] =="1" ? "#27C24C" : "#FC9C2C" ;?>"><span class="flaticon-check-mark"></span></li>
											</a>
											<a href="javascript:void(0);" data-toggle="tooltip" title="Delete" onclick="del('<?=$station['id']?>','station')">
											<li class="ml-2 qz-close"><span class="flaticon-error"></span></li></a>
										</ul>
									</td>
									</tr>
								    <?php 
									 $x++;
									 endforeach;
									?>
								</tbody>
                            </table>
                            <!-- </div> -->
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- End content area  -->
</div>
<!-- End wrapper -->
