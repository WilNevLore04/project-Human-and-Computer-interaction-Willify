<?php
// Koneksi ke database MySQL
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "willify_db";

// Buat koneksi
$conn = mysqli_connect ($servername, $username, $password, $dbname);

// Cek koneksi
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Ambil data dari form
    $name = $_POST['name'];
    $email = $_POST['email'];
    $password = password_hash($_POST['password'], PASSWORD_DEFAULT); // Enkripsi password
    $dob = $_POST['dob'];
    $gender = $_POST['gender'];
    $country = $_POST['country'];

    // Cek apakah email sudah terdaftar
    $check_email = "SELECT * FROM users WHERE email='$email'";
    $result = $conn->query($check_email);
    if ($result->num_rows > 0) {
        echo "Email sudah terdaftar!";
    } else {
        // Masukkan data pengguna ke database
        $sql = "INSERT INTO users (name, email, password, gender, dob, country)
                VALUES ('$name', '$email', '$password', '$gender', '$dob', '$country')";

        if ($conn->query($sql) === TRUE) {
            echo "Registrasi berhasil!";
            // Redirect ke halaman login atau berikan pesan sukses
            header("Location: /html/login.html");  // Redireksi ke halaman login setelah registrasi
            exit();
        } else {
            echo "Error: " . $sql . "<br>" . $conn->error;
        }
    }
}

$conn->close();
?>
