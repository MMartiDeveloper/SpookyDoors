<?php
$connect = new PDO('mysql:host=localhost;dbname=doors;charset=utf8', 'root', 'sa');
$query = "SELECT * FROM score ORDER BY points desc LIMIT 5";
$statement = $connect->prepare($query);
$statement->execute();
$result = $statement->fetchAll();
$str = [];
  foreach($result as $row) {
    $str[]= $row;
}
echo json_encode($str);
?>
