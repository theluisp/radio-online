

var httpHost = window.location.origin+'/'+window.location.pathname.split('/')[1]+"/admin";
//console.log(httpHost);

function login()
{
      $('#loginForm').on('submit',function(e){
         e.preventDefault();

         $.ajax({
             
              type : 'POST',
              url  :  httpHost+'/core/api/auth/log/login',
              data : $(this).serialize(),
              dataType : 'Json',
              beforeSend : function (response)
              {
                   $('#show').html("<img src='assets/images/brand/lang.gif' width='50px'>");
                   $('#txt').hide();
              },
              success : function(response){
                if(response.status =="success") 
                {
                  $('#show').html("<h3>"+response.message+"</h3>");
                  setTimeout(function(){
                    
                         window.location.reload();
                       },3000);
                  
                }
                else
                {
                  $('#show').html("<h3 style='color:red;'>"+response.message+"</h3>");
                }
              }

         })
      })
}




function logoff()
{
 

   $.ajax({
      type : 'POST',
      url  : httpHost+'/core/api/auth/log/signout',
      success : function(response){
          location.reload();
      }
   })

}

$('#cats').on('change',function(){
        var catid = $(this).val();
		alert(catid);
        if(cats){
		$.ajax({
        type : "POST",
        url  : httpHost+'/core/ajax.php',
        data : 'cat='+catid,
        dataType : 'text',
        success:function(html){
		$('#subcat').html(html); 
                }
            }); 
        }else{
            $('#subcat').html('<option value="">Select Category First</option>'); 
        }

    })
$(document).ready(function() {

    var readURL = function(input) {
        if (input.files && input.files[0]) {
            var reader = new FileReader();

            reader.onload = function (e) {
                $('.avatars').attr('src', e.target.result);
            }
    
            reader.readAsDataURL(input.files[0]);
        }
    }
    
     
    $(".file-upload").on('change', function(){
        readURL(this);
    });
});

function upstatus(id,type){
	
	$.ajax({
		type     : 'POST',
		url      : httpHost+'/core/api/0/'+type+'/featured',
		data: 'id='+id,
		dataType : 'json',
		success: function(result){
			console.log(result);
		if (result.status == "success") {
			$.notify({
			title: "<strong>Success:</strong> ",
			icon: 'glyphicon glyphicon-user',
			message: "updated successfully"
		
			},{animate:{
			enter: "animated fadeInUp",
			exit: "animated fadeOutDown"
			},type:'success'});
			setInterval(function () {
			//location.reload();
			 }, 3000);
		}else{
			$.notify({
			title: "<strong>Failed:</strong> ",
			icon: 'glyphicon glyphicon-user',
			message: "Failed to update"
		
			},{animate:{
			enter: "animated fadeInUp",
			exit: "animated fadeOutDown"
			},type:'danger'});
		}
		//$("#loads").load(" #loads");
	  }
	  });
}

function upactive(id,type){
	$.ajax({
		type     : 'POST',
		url      : httpHost+'/core/api/0/'+type+'/active',
		data: 'id='+id,
		dataType : 'json',
		success: function(result){
			console.log(result);
		if (result.status == "success") {
			$.notify({
			title: "<strong>Success:</strong> ",
			icon: 'glyphicon glyphicon-user',
			message: "updated successfully"
		
			},{animate:{
			enter: "animated fadeInUp",
			exit: "animated fadeOutDown"
			},type:'success'});
			setInterval(function () {
			location.reload();
			 }, 3000);
		}else{
			$.notify({
			title: "<strong>Failed:</strong> ",
			icon: 'glyphicon glyphicon-user',
			message: "Failed to update"
		
			},{animate:{
			enter: "animated fadeInUp",
			exit: "animated fadeOutDown"
			},type:'danger'});
		}
		//$("#loads").load(" #loads");
	  }
	  });
}


function Save(type){
			var events = $("#signupForm" );
			$( "#signupForm" ).validate( {
				rules: {
					name: "required",
					description: "required",
					catname: "required",
					title: "required",
					cat_id: "required",
					type: "required",
					country: "required",
					uploadfile: "required",
					stream: {
						required: true,
						url: true
					},
                					
				},
				submitHandler: function (form) {
				   $.ajax({
					type     : 'POST',
					url      : httpHost+'/core/api/0/'+type+'/add',
					data     : new FormData($(form)[0]),
					mimeType : "multipart/form-data",
					dataType : 'json',
				    success: function(result){
					console.log(result);
					if (result.status == "success") {
						$.notify({
						title: "<strong>Success:</strong> ",
						icon: 'glyphicon glyphicon-user',
						message: type+" created successfully"
					
						},{animate:{
						enter: "animated fadeInUp",
						exit: "animated fadeOutDown"
						},type:'success'});
						setInterval(function () {
						location.reload();
						 }, 3000);
						events[0].reset();
					}else{
						$.notify({
						title: "<strong>Failed:</strong> ",
						icon: 'glyphicon glyphicon-user',
						message: result
					
						},{animate:{
						enter: "animated fadeInUp",
						exit: "animated fadeOutDown"
						},type:'danger'});
					}
				  },
				  cache: false,
				  contentType: false,
			      processData: false
				  
				  });
				$(this).unbind('submit');
			
				},
				messages: {
					name: "This field is required.",
					catname: "This field is required.",
					stream: {
						required: "This field is required.",
						url: "Please enter a valid url."
					},
					title: "This field is required.",
					cat_id: "This field is required.",
					country: "This field is required.",
					type: "This field is required.",
					uploadfile: "This field is required.",
					
				},
				errorElement: "em",
				errorPlacement: function ( error, element ) {
					// Add the `help-block` class to the error element
					error.addClass( "help-block" );

					if ( element.prop( "type" ) === "file" ) {
						error.insertAfter( element.parent( "label" ) );
					} else {
						error.insertAfter( element );
					}
				},
				highlight: function ( element, errorClass, validClass ) {
					$( element ).parents( ".colsm" ).addClass( "has-error" ).removeClass( "has-success" );
				},
				unhighlight: function (element, errorClass, validClass) {
					$( element ).parents( ".colsm" ).addClass( "has-success" ).removeClass( "has-error" );
				}
				
			} );
			
} 

function del(id,type){
	if(confirm("Are you sure to delete this ?")){
	$.ajax({
		type     : 'POST',
		url      : httpHost+'/core/api/0/'+type+'/delete',
		data: 'id='+id,
		dataType : 'json',
		success: function(result){
		if (result.status == "success") {
			$.notify({
			title: "<strong>Success:</strong> ",
			icon: 'glyphicon glyphicon-user',
			message: "deleted successfully"
		
			},{animate:{
			enter: "animated fadeInUp",
			exit: "animated fadeOutDown"
			},type:'success'});
			setInterval(function () {
			location.reload();
			 }, 3000);
		}else{
			$.notify({
			title: "<strong>Failed:</strong> ",
			icon: 'glyphicon glyphicon-user',
			message: "Failed to delete"
		
			},{animate:{
			enter: "animated fadeInUp",
			exit: "animated fadeOutDown"
			},type:'danger'});
		}
		//$("#loads").load(" #loads");
	  }
	  });		
	
	}
}

function update(type)
{
  //$('#updateForms').on('submit',function(e){
  $(document).on('submit','#updateForms',function(e){
	 e.preventDefault();
	  var events = $(this);
	 $.ajax({
		type     : 'POST',
		url      : httpHost+'/core/api/0/'+type+'/update',
		data     : new FormData($(this)[0]),
		mimeType : "multipart/form-data",
		dataType : 'json',
		success: function(result){
	    //console.log(result);
		if (result.status == "success") {
			$.notify({
			title: "<strong>Success:</strong> ",
			icon: 'glyphicon glyphicon-user',
			message: type+" updated successfully"
		
			},{animate:{
			enter: "animated fadeInUp",
			exit: "animated fadeOutDown"
			},type:'success'});
			setInterval(function () {
			location.reload();
			}, 3000);
			events[0].reset();
		    }else if(result.status == "notmatch"){
    		    $.notify({
    			title: "<strong>Failed:</strong> ",
    			icon: 'glyphicon glyphicon-user',
    			message: "Password or confirm password not matched"
    		
    			},{animate:{
    			enter: "animated fadeInUp",
    			exit: "animated fadeOutDown"
    			},type:'danger'});
		    }
		    else
		    {
			$.notify({
			title: "<strong>Failed:</strong> ",
			icon: 'glyphicon glyphicon-user',
			message: "Failed to update "+type
		
			},{animate:{
			enter: "animated fadeInUp",
			exit: "animated fadeOutDown"
			},type:'danger'});
		}
	  },
	  cache: false,
	  contentType: false,
	  processData: false
	  
	  });
  });
}

$(document).ready(function () {
$("#upfile").fileinput({
        theme: 'fas',
        uploadUrl: '#', // you must set a valid URL here else you will get an error
        allowedFileExtensions: ['jpg','png','jpeg'],
        overwriteInitial: false,
        //allowedFileTypes: ['image', 'video', 'flash'],
        slugCallback: function (filename) {
            return filename.replace('(', '_').replace(']', '_');
        }
    });
});	


$(document).ready(function() {

    var readURL = function(input) {
        if (input.files && input.files[0]) {
            var reader = new FileReader();

            reader.onload = function (e) {
                $('.avatars').attr('src', e.target.result);
            }
    
            reader.readAsDataURL(input.files[0]);
        }
    }
    
     
    $(".file-upload").on('change', function(){
        readURL(this);
    });
});