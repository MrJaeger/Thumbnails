<?

class SimpleImage {
 
   public $image;
   public $image_type;
 
   function load($filename) {
      $image_info = getimagesize($filename);
      $this->image_type = $image_info["mime"];
      if( $this->image_type == "image/jpeg" ) {
         $this->image = imagecreatefromjpeg($filename);
      } elseif( $this->image_type == "image/gif" ) {
         $this->image = imagecreatefromgif($filename);
      } elseif( $this->image_type == "image/png" ) {
         $this->image = imagecreatefrompng($filename);
      }
   }

   function save($filename, $image_type="image/jpeg", $compression=75, $permissions=null) {
      if( $image_type == "image/jpeg" ) {
         imagejpeg($this->image,$filename,$compression);
      } elseif( $image_type == "image/gif" ) {
         imagegif($this->image,$filename);
      } elseif( $image_type == "image/png" ) {
         imagepng($this->image,$filename);
      }
      if( $permissions != null) {
         chmod($filename,$permissions);
      }
   }

   function output($image_type="image/jpeg") {
      if( $image_type == "image/jpeg" ) {
         imagejpeg($this->image);
      } elseif( $image_type == "image/gif" ) {
         imagegif($this->image);
      } elseif( $image_type == "image/png" ) {
         imagepng($this->image);
      }
   }

   function getWidth() {
      return imagesx($this->image);
   }

   function getHeight() {
      return imagesy($this->image);
   }

   function resizeToHeight($height) {
      $ratio = $height / $this->getHeight();
      $width = $this->getWidth() * $ratio;
      $this->resize($width,$height);
   }
 
   function resizeToWidth($width) {
      $ratio = $width / $this->getWidth();
      $height = $this->getheight() * $ratio;
      $this->resize($width,$height);
   }
 
   function scale($scale) {
      $width = $this->getWidth() * $scale/100;
      $height = $this->getheight() * $scale/100;
      $this->resize($width,$height);
   }

   function make_thumbnail($x,$y) {

   }
 
   function resize($width,$height,$x=0,$y=0) {
      $new_image = imagecreatetruecolor($width, $height);
      imagecopyresampled($new_image, $this->image, 0, 0, $x, $y, $width, $height, $this->getWidth(), $this->getHeight());
      $this->image = $new_image;
   }           
 
}

?>