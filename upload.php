<?php

require('./helpers/SimpleImage.php');

$MAX_WIDTH = 900;
$file_name = $_FILES['image_file']['name'];
$img = $_FILES['image_file']['tmp_name'];

$upload = new SimpleImage();
$upload->load($img);

if($upload->getWidth() > $MAX_WIDTH) {
	$upload->resizeToWidth($MAX_WIDTH);
}

$upload->save("assets/full_size/".$file_name, $upload->image_type);

$data = array();
$data['name'] = $file_name;

echo $data;

?>