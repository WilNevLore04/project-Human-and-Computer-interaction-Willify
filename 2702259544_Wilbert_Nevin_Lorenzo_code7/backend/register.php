<?php
@include 'db.php';

session_start();

if(isset($_SESSION['user_id'])) {
    header("Location: ../html/index.html");  // Redirect ke halaman utama jika sudah login
    exit();
}

// Cek koneksi
if (!$db) {
    die("Connection failed: " . $db->connect_error);
}

if (isset($_POST['submit'])) {
    // Ambil data dari form
    $name = $_POST['name'];
    $email = $_POST['email'];
    $password = md5($_POST['password']); // Enkripsi password
    $dob = $_POST['dob'];
    $gender = $_POST['gender'];
    $country = $_POST['country'];


    // Cek apakah email sudah terdaftar
    $result = $db->query("SELECT * FROM users WHERE email='$email'");
    if ($result->num_rows > 0) {
        echo "<script>alert('Email sudah terdaftar!');</script>";
        header('Location: ../html/register.html');  // Redireksi kembali ke halaman register
    } else {
        // Masukkan data pengguna ke database
        $sql = "INSERT INTO users (name, email, password, gender, dob, country)
                VALUES ('$name', '$email', '$password', '$gender', '$dob', '$country')";

        if ($db->query($sql) === TRUE) {
            echo "<script>alert('Registrasi berhasil!');</script>";
            // Redirect ke halaman login atau berikan pesan sukses
            header("Location: ../html/login.html");  // Redireksi ke halaman login setelah registrasi
            exit();
        } else {
            echo "<script>alert('Gabisa');</script>";
            header('Location: ../html/register.html');  // Redireksi kembali ke halaman register
        }
    }
}
else {
    header("Location: ../html/register.html");  // Redireksi ke halaman register jika akses langsung
}

?>
