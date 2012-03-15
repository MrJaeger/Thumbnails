$(function () {
	var options = {
		beforeSubmit: validate,
		success: output_update
	};
	$('#upload_form').ajaxForm(options);
});

function validate(data, jqForm, options) {
	console.log("DATA", data[0]);
	return false;
}

function output_update() {

}