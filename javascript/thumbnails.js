$(function () {
	var options = {
		beforeSubmit: validate,
		success: output_update
	};
	$('#upload_form').ajaxForm(options);
});

function validate(data, jqForm, options) {
	if(data.length != 1 || !data[0]["value"]["fileName"].match(/((.\.png$)|(.\.jpg$)|(.\.gif$))/)) {
		console.log("WRONG");
		return false;
	} else {
		console.log("OK");
		return true;
	}
}

function output_update() {

}