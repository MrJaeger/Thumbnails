<?php

$file_name = $_FILES['image_file']['name'];
$img = $_FILES['image_file']['tmp_name'];

list($height, $width) = getimagesize($img);

echo $width;
exit();

$target_path = "assets/full_size/";

$target_path .= $file_name;

if(move_uploaded_file($img, $target_path)) {
    echo "OK";
} else{
    echo "ERROR";
}

?>