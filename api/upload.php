<?php

require('../helpers/SimpleImage.php');

$MAX_WIDTH = 900;
$file_name = $_FILES['image_file']['name'];
$img = $_FILES['image_file']['tmp_name'];
$data = array();
$img_regexp = '/((.\.png$)|(.\.jpg$)|(.\.gif$))/';

if(preg_match($img_regexp, $file_name)) {
	$upload = new SimpleImage();
	$upload->load($img);

	if($upload->getWidth() > $MAX_WIDTH) {
		$upload->resizeToWidth($MAX_WIDTH);
	}

	$upload->save("../assets/full_size/".$file_name, $upload->image_type);

	$data['name'] = $file_name;
	$data['width'] = $upload->getWidth();
	$data['height'] = $upload->getHeight();
} else {
	$data['error'] = "This is not a valid file to upload";
}

echo json_encode($data);

?>