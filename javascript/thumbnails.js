$(function () {
	$('#upload_form').submit( function (data, e) {
		console.log(data, e);
		return false;
	});
});