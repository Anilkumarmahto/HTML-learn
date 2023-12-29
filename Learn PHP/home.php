<!DOCTYPE html>
<html lang="en" dir="ltr">
  <head>
    <meta charset="utf-8">
    <title>Basic Layout</title>
    <link rel="stylesheet" href="style.css">
  </head>
  <body>
      <div id="wrapper">
        <?php include 'header.php' ?>
          <div id="content">
            <h2>Sub Heading</h2>

            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>

            <ul id="list">
              <li>Lorem Ipsum is simply dummy text.</li>
              <li>Lorem Ipsum is simply dummy text.</li>
              <li>Lorem Ipsum is simply dummy text.</li>
              <li>Lorem Ipsum is simply dummy text.</li>
              <li>Lorem Ipsum is simply dummy text.</li>
            </ul>
          </div>

          <?php include 'sidebar.php' ?>
          <?php include 'footer.php' ?>


      </div>
  </body>
</html>
