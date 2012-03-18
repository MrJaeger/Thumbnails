$(function () {
	/*
		main_height: the height of the image being uploaded
		main_width: the width of the image being uploaded

		NOTE: Both main_height and main_width are what the size of the image on the page is.  If the image needed to be scaled down because
		the original image was too large, main_height and main_width reflect that.

		IMGAREA VARIABLES ---

		select_height: the height of the selector box
		select_width: the width of the selector box
		select_x: the x position of the top left corner of the selector box with respect to the image
		select_y: the y position of the top left corner of the selector box with respect to the image

		END IMGAREA VARIABLES ---

		file_name: the name of the file uploaded
	*/

	var main_height, main_width, select_height, select_width, select_x, select_y, file_name;

	/* Options for the Ajax Form helper */

	var options = {
		type: 'json',
		success: output_update
	};
	$('#upload_form').ajaxForm(options);

	/* When clicked the thumbnail upload button first checks if a selector box has been created (by checking if select_heigh has ever been set).
	   If it has the thumbnail image is uploaded. */

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
			$.post("api/upload_thumbnail.php", image_info, function(image_name) {
				var new_thumbnail = "<li><img style=\"margin-top: 10px;\" src=\"assets/thumbnails/" + image_name + "\" /></li>";
				$('#thumbnail_list').append(new_thumbnail);
			});
		}
	});

	/*  output_update is run after an image has been downloaded.  If the file was a legal file to be uploaded, it handles adding the image to the page as well as setting
	 	up the neccessary other elements for thumbnail creation.  Otherwise it appends an error message to the page. */

	function output_update(data, sText, xhr, $form) {
		if(data["error"] === undefined) {
		    $('[class^=imgareaselect]').remove();
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
		} else {
			console.log("error recieved");
			var failure = "<p>Sorry we were not able to upload the file you requested</p>";
			$("#status").append(failure);
		}
	}

	/*  update_thumbnail is run every time the selector box is moved or changes shape.  It updates the neccessary variables so that thumbnails
		may then be created based on the selector box */

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