<?php

echo $FILES['image_file'];
echo $FILES['uploadedfile'];

$target_path = "assets/full_size/";

$target_path .= $FILES['image_file']['name'];

exit();

if(move_uploaded_file($_FILES['image_file']['tmp_name'], $target_path)) {
    echo "The file ".  basename( $_FILES['image_file']['name']). 
    " has been uploaded";
} else{
    echo "There was an error uploading the file, please try again!";
}

?>