var httpHost = window.location.origin+'/'+window.location.pathname.split('/')[1];
$('#search-input-head').keyup(function(e){
	e.preventDefault();
    var dInput = $('#search-input-head').val();
	console.log(dInput);
	var url = $('#url').val();
    $.ajax({
		type     : 'POST',
		url      : httpHost+'/core/ajax.php',
		data: {
		   dInput:dInput,
		   url : url
		},
		dataType : "text",
		 beforeSend : function(response){
		 //$('#page').html("<center><img src='images/ajax-loader-line.gif'></center>")
		},
		success : function(response){
		//console.log(response);
		//$('#content-area').html(response)	
		if($.trim(response) !==""){
			$('#content-area').html(response)	
		}
		else{
			location.reload();
		}
		},
		
	})
});