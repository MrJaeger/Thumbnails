<?php

require('./helpers/SimpleImage.php');

list($width, $height, $x, $y, $name) = $_POST;

$thumbnail = new SimpleImage();
$thumbnail->load("assets/full_size/".$name);

echo print_r(array($width, $height, $x, $y, $name));

?>