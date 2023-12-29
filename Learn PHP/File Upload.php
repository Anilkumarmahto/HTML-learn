<?php
  if(isset($_FILES['image'])){


  $file_name = $_FILES['image']['name'];
  $file_size = $_FILES['image']['size'];
  $file_tmp = $_FILES['image']['tmp_name'];
  $file_type = $_FILES['image']['type'];

  if(move_uploaded_file($file_tmp,"upload-image/". $file_name)){
    echo "Successfully uploaded.";
  }else {
    echo "Could not upload the file.";
  }
  }

 ?>

<!DOCTYPE html>
<html lang="en" dir="ltr">
  <head>
    <meta charset="utf-8">
    <title></title>
  </head>
  <body>
    <form action="" method="post" enctype="multipart/form-data">
      <input type="file" name="image"/><br><br>
      <input type="submit" />
    </form>
  </body>
</html>
