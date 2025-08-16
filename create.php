<?php
include 'db.php';

if(isset($_POST['email']) && isset($_POST['password'])){
  $email = $_POST['email'];
  $pass = $_POST['password'];

  $sql = "INSERT INTO users (email, password) VALUES ('$email', '$pass')";
  if($conn->query($sql) === TRUE){
    echo "New user created successfully!";
  } else {
    echo "Error: " . $conn->error;
  }
}
?>

