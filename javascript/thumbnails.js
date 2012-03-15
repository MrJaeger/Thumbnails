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
	console.log(typeof(data));
	console.log(data.name);
	console.log(data[0]);
	console.log(data[name]);
	console.log(data['name']);
	console.log(data["name"]);
	return false;
	if(data["error"] === undefined) {
		var appended_image = "<img src=\"assets/full_size/" + data["name"] + "\" />";
		$('#uploaded').append(appended_image);
	}
}