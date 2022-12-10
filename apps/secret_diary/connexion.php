<?php
    define("DB_HOST", "localhost");
    define("DB_USER", "id11204818_youcefmegoura");
    define("DB_PASS", "24712300a");
    define("DB_NAME", "id11204818_secret_diary");

    // Create connection
    $conn = mysqli_connect(DB_HOST, DB_USER, DB_PASS, DB_NAME);

    // Check connection
    if (!$conn) {
        die("Connection failed: " . mysqli_connect_error());
    }