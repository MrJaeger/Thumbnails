$(function () {
	var main_height, main_width;
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
		$('[class^=imgareaselect]').remove();
		return true;
	}
}

function output_update(data, sText, xhr, $form) {
	var imgData = $.parseJSON(data);
	if(imgData["error"] === undefined) {
		main_height = imgData["height"];
		main_width = imgData["width"];
		var main_image = "<img id=\"main\" src=\"assets/full_size/" + imgData["name"] + "\" />";
		$('#uploaded').html("").append(main_image);
		$('#uploaded #main').imgAreaSelect({aspectRatio: '1:1', onSelectChange: update_thumbnail});
		var thumbnail_image = "<img style=\"position: relative;\" src=\"assets/full_size/" + imgData["name"] + "\" />"
		$('#thumbnail').html("").append(thumbnail_image);
	}
}

function update_thumbnail(img, selection) {
	var xScale = 156/selection.width;
	var yScale = 156/selection.height;
	$("#thumbnail > img").css({
		width: Math.round(xScale * main_width) + 'px',
		height: Math.round(yScale * main_height) + 'px',
		marginLeft: '-' + Math.round(xScale * selection.x1) + 'px',
		marginTop: '-' + Math.round(yScale * selection.y1) + 'px'
	});
}