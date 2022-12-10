<?php
  require 'lessc.inc.php';

  try {
      lessc::ccompile('input.less', 'out.css');
  } catch (exception $ex) {
      exit('lessc fatal error:
      '.$ex->getMessage());
  }
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="out.css">
    <link rel="icon" href="/favicon.png" sizes="16x16" type="image/png">
    <title>Meriem Megoura</title>
</head>
<body>
    
<div class="cake">
    <div class="velas">
      <div class="fuego"></div>
      <div class="fuego"></div>
      <div class="fuego"></div>
      <div class="fuego"></div>
      <div class="fuego"></div>
    </div>
    <div class="cobertura"></div>
    <div class="bizcocho"></div>
    <h1>Joyeux anniversaire</h1>
    <p><strong>Meriem Megoura</strong>  </p>
  </div>
  <footer></footer>
</body>
<script src="https://code.jquery.com/jquery-3.3.1.slim.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/howler/2.1.3/howler.core.min.js"></script>
<script src="js.js"></script>
</html>