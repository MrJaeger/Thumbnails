$(function () {
	var main_height, main_width, select_height, select_width, select_x, select_y, file_name;
	var options = {
		beforeSubmit: validate,
		type: 'json',
		success: output_update
	};
	$('#upload_form').ajaxForm(options);
	$('#thumbnail_upload_button').click(function(e) {
		if(select_height === undefined) {
			return false;
		} else {
			var image_info = {
				width: select_width,
				height: select_height,
				x: select_x,
				y: select_y,
				name: file_name
			}
			$.post("./upload_thumbnail.php", image_info, function(image_name) {
				var new_thumbnail = "<li><img style=\"margin-top: 10px;\" src=\"assets/thumbnails/" + image_name + "\" /></li>";
				$('#thumbnail_list').append(new_thumbnail);
			});
		}
	});

	function validate(data, jqForm, options) {
		$('#status').html("");
		var image_reg_exp = /((.\.png$)|(.\.jpg$)|(.\.gif$))/;
		if(data.length != 1 || !data[0]["value"]["fileName"].match(image_reg_exp)) {
			var failure = "<p>Sorry we were not able to upload the file you requested</p>";
			$("#status").append(failure);
			return false;
		} else {
			$('[class^=imgareaselect]').remove();
			return true;
		}
	}

	function output_update(data, sText, xhr, $form) {
		var success = "<p>Picture successfully uploaded!</p>";
		var img_data = $.parseJSON(data);
		var main_image = "<img id=\"main\" src=\"assets/full_size/" + img_data["name"] + "\" />";
		var thumbnail_image = "<img style=\"position: relative;\" src=\"assets/full_size/" + img_data["name"] + "\" />";
		file_name = img_data["name"];
		main_height = img_data["height"];
		main_width = img_data["width"];
		$('#status').append(success)
		$('#thumbnail_list').html("");
		$('#uploaded').html("").append(main_image);
		$('#uploaded #main').imgAreaSelect({aspectRatio: '1:1', onSelectChange: update_thumbnail});
		$('#thumbnail > img').remove();
		$('#thumbnail').append(thumbnail_image);
		$('#thumbnail_upload_button').css({'top': '170px', 'left': '110px'});
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
		select_height = selection.height;
		select_width = selection.width;
		select_x = selection.x1;
		select_y = selection.y1;
	}
});