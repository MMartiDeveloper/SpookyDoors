<?php
$connect = new PDO('mysql:host=localhost;dbname=doors;charset=utf8', 'root', 'sa');

$query = "INSERT INTO score (position, points, name) VALUES (".$_POST['position'].", ".$_POST['points'].", '". $_POST['name']."')";
$statement = $connect->prepare($query);
$statement->execute();

echo $query;

?>
