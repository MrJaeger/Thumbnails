$(function () {
	var options = {
		beforeSubmit: validate,
		success: output_update
	};
	$('#upload_form').ajaxForm(options);
});

function validate(data, jqForm, options) {
	var queryString = $('#upload_form').formSerialize(); 
	console.log("QUERY STRING", queryString);
	return false;
}

function output_update() {

}