<?php

require('./helpers/SimpleImage.php');

$MAX_WIDTH = 900;
$file_name = $_FILES['image_file']['name'];
$img = $_FILES['image_file']['tmp_name'];

$results = array();
array_push($results, getimagesize($img));

$upload = new SimpleImage();
$upload->load($img);

if($upload->getWidth() > $MAX_WIDTH) {
	$upload->resizeToWidth($MAX_WIDTH);
}
array_push($results, getimagesize($img));

echo print_r($results);

$target_path = "assets/full_size/".$file_name;

if(move_uploaded_file($upload->image, $target_path)) {
    echo "OK";
} else{
    echo "ERROR";
}

?>