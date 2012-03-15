$(function () {
	var options = {
		beforeSubmit: validate,
		success: output_update
	};
	$('#upload_form').ajaxForm(options);
});

function validate(data, jqForm, options) {
	console.log(data);
	var imageRegExp = /((.\.png$)|(.\.jpg$)|(.\.gif$))/;
	if(data.length != 1 || !data[0]["value"]["fileName"].match(imageRegExp)) {
		return false;
	} else {
		return true;
	}
}

function output_update(data, sText, xhr, $form) {
	console.log(""+data);
}