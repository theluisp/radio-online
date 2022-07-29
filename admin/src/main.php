<?php
$load = new load;
?>
<!-- Start wrapper -->

        <!-- Start page title -->
    <div class="qz-page-title">
        <div class="container-fluid">
            <div class="row">
                <div class="col-12">
                    <div class="d-flex justify-content-between align-items-center">
                        <h2>Dashboard</h2>
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
        <div class="card">
            <div class="card-body">
                <div class="container-fluid">
                    <div class="row">
                        <div class="col-lg-12">
                            <div class="row">
                                <div class="col-lg-6 text-center">
                                    <div class="qz-status-bar qz-status-bar1">
                                        <h5 class="qz-blance"><?=$load->CountTable('station')?></h5>
                                        <h5 class="qz-total-qustions">Total Stations</h5>
                                    </div>
                                </div>
                                <div class="col-lg-6 text-center">
                                    <div class="qz-status-bar qz-status-bar2">
                                        <h5 class="qz-blance"><?=$load->CountTable('genres')?></h5>
                                        <h5 class="qz-total-qustions">Total Genres</h5>
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-12">
                                    <div class="qz-sec-title">
                                        <h5>Recently added stations</h5>
                                    </div>
                                    <div class="table-responsive category-table">
                                        <table class="table category-table text-center rounded table-bordered">
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
											$data = $load->GetStLimited();
											$x=1;
											foreach($data as $station):
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
											
											<tr class="qz-table-footer">
                                                <td colspan="2"><a href="<?=siteUrl?>add-station"><button class="btn btn-primary px-3">Add New Station</button></a></td>
                                                <td></td>
                                                <td colspan="4"><h5><a href="<?=siteUrl?>station">See All</a></h5></td>
                                            </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- End content area  -->	
   



   </div>
    <!-- End main content -->
</div>
<!-- End wrapper -->


