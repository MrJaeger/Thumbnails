<?php

require('./helpers/SimpleImage.php');

$width = $_POST['width'];
$height = $_POST['height'];
$x = $_POST['x'];
$y = $_POST['y'];
//$name = $_POST['name'];
$name = "gobeldygook";
$id = uniqid();

$thumbnail = new SimpleImage();
$thumbnail->load("assets/full_size/".$name);

echo print_r($thumbnail);
exit();

$thumbnail->resize_within_image($width, $height, $x, $y);
$thumbnail->resizeToHeight(156);
$thumbnail->resizeToWidth(156);
$thumbnail->save("assets/thumbnails/".$id.$name, $upload->image_type);

?>