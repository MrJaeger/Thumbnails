$(function () {
	$('#upload_form').ajaxForm();
	$('#upload_form').submit(function () {
		var queryString = $('#myFormId').formSerialize(); 
		console.log(queryString);
		//$(this).ajaxSubmit();
		return false;
	});
});