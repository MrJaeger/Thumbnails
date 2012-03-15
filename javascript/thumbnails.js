$(function () {
	$('#upload_form').ajaxForm();
	$('#upload_form').submit(function () {
		//$(this).ajaxSubmit();
		return false;
	});
});