<!doctype html>
<html>
<head><title>PHP CRUD</title></head>
<body>
  <h2>Create User</h2>
  <form method="post" action="index.php">
    Email: <input type="email" name="email" required><br><br>
    Password: <input type="password" name="password" required><br><br>
    <button type="submit">Save</button>
  </form>

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

</body>
</html>
