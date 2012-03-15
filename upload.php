<?php

require('./helpers/SimpleImage.php');

$MAX_WIDTH = 900;
$file_name = $_FILES['image_file']['name'];
$img = $_FILES['image_file']['tmp_name'];

$upload = new SimpleImage($img);

if($upload->getWidth(); > $MAX_WIDTH) {
	$upload->resizeToWidth($MAX_WIDTH);
}

$target_path = "assets/full_size/".$file_name;

if(move_uploaded_file($upload->output(), $target_path)) {
    echo "OK";
} else{
    echo "ERROR";
}

?>