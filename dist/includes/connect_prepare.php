<?php


$conn_prepare = new mysqli('localhost','root','','flow_cv') or die("Couldn't connect to db");

if($conn_prepare->connect_error)
{
    die("connection failed" . $conn_prepare->connect_error);
}
?>