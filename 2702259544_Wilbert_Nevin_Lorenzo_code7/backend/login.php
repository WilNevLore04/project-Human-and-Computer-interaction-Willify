<?php
@include 'db.php';

session_start();

if(isset($_SESSION['user_id'])) {
    header("Location: ../html/index.html"); // Redirect ke halaman utama jika sudah login
    exit();
}

if(!$db) {
    die("Connection failed: " . $db->connect_error);
}
if (isset($_POST['submit'])) {
    $email = $_POST['email'];
    $password = md5($_POST['password']);

    $result = $db->query("SELECT * FROM users WHERE email='$email'");
    if ($result->num_rows > 0) {
        $user = $result->fetch_assoc();
        if ($password == $user['password']) {
            // Login berhasil
            $_SESSION['user_id'] = $user['id'];
            $_SESSION['user_name'] = $user['name'];
            header("Location: ../html/index.html"); // Redirect ke halaman utama setelah login
            exit();
        } else {
            echo "<script>alert('Password salah!');</script>";
            header('Location: ../html/login.html'); // Redirect kembali ke halaman login
        }
    } else {
        echo "<script>alert('Email tidak ditemukan!');</script>";
        header('Location: ../html/login.html'); // Redirect kembali ke halaman login
    }
} else {
    header("Location: ../html/login.html"); // Redirect ke halaman login jika akses langsung
}
?>