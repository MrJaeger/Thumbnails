$(function () {
	var options = {
		beforeSubmit: validate,
		type: 'json',
		success: output_update
	};
	$('#upload_form').ajaxForm(options);
});

function validate(data, jqForm, options) {
	var imageRegExp = /((.\.png$)|(.\.jpg$)|(.\.gif$))/;
	if(data.length != 1 || !data[0]["value"]["fileName"].match(imageRegExp)) {
		return false;
	} else {
		return true;
	}
}

function output_update(data, sText, xhr, $form) {
	var imgData = $.parseJSON(data);
	if(imgData["error"] === undefined) {
		var appended_image = "<img src=\"assets/full_size/" + imgData["name"] + "\" />";
		$('#uploaded').append(appended_image);
	}
}