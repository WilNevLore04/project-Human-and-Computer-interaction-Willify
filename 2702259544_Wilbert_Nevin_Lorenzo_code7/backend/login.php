<?php
session_start();

// Koneksi ke database
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "willify_db";

// Buat koneksi
$conn = mysqli_connect($servername, $username, $password, $dbname);

// Cek koneksi
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $email = $_POST['email'];
    $password = $_POST['password'];

    // Query untuk mengecek user
    $sql = "SELECT * FROM users WHERE email='$email'";
    $result = $conn->query($sql);

    if ($result->num_rows > 0) {
        // Ambil data user
        $row = $result->fetch_assoc();

        // Cek apakah password benar
        if (password_verify($password, $row['password'])) {
            // Set session
            $_SESSION['user_id'] = $row['id'];
            $_SESSION['user_name'] = $row['name'];
            echo "Login sukses! Selamat datang, " . $row['name'];
            // Redirect ke halaman utama atau dashboard
            header("Location: /html/index.html");
            exit();
        } else {
            echo "Password salah!";
        }
    } else {
        echo "Email tidak terdaftar!";
    }
}

$conn->close();
?>
