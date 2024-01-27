<?php

$server_name = "localhost";
$username = "root";
$password = "";
$dbname = "flow_cv";

$conn_PDO = new PDO("mysql:host=$server_name;dbname:=$dbname", $username, $password) or die("Couldn't connect to db");

$conn_PDO->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
?>