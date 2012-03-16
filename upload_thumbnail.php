<?php

require('./helpers/SimpleImage.php');

list($width, $height, $x, $y, $name) = $_POST;

$thumbnail = new SimpleImage();
$thumbnail->load("assets/full_size/".$name);

echo $_POST['name'];

?>