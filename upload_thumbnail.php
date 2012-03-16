<?php

require('./helpers/SimpleImage.php');

list($width, $height, $x, $y, $name) = 

$thumbnail = new SimpleImage();
$thumbnail->load("assets/full_size/".$name);

echo print_r($_POST);

?>