<?php
session_start();

$error = "";

if ($_SERVER["REQUEST_METHOD"] == "POST") {

    $username = trim($_POST["username"]);
    $password = trim($_POST["password"]);

    if ($username == "admin" && $password == "1234") {

        $_SESSION["admin"] = true;
        header("Location: dashboard.php");
        exit();

    } else {
        $error = "اسم المستخدم أو كلمة المرور غير صحيحة";
    }
}
?>

<!DOCTYPE html>
<html lang="ar" dir="rtl">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>تسجيل دخول المشرف</title>

<link href="https://fonts.googleapis.com/css2?family=Tajawal:wght@400;500;700;800&display=swap" rel="stylesheet">
<link rel="stylesheet" href="../css/main.css">
<link rel="stylesheet" href="../css/login.css">
</head>

<body class="login-page">

<header>
<nav class="navbar admin-navbar-simple">

<div class="logo">لوحة المشرف</div>

<div class="admin-navbar-actions">
<a href="../project/index.html" class="btn-back-dashboard">زيارة الموقع</a>
</div>

</nav>
</header>

<main class="login-shell">

<form method="POST" class="login-card">

<h1>تسجيل دخول المشرف</h1>

<?php if($error != "") { ?>
<div id="loginErrorMessage" class="login-error-message" style="display:block;">
<?php echo $error; ?>
</div>
<?php } ?>

<div class="form-group">
<label for="username">اسم المستخدم</label>
<input type="text" name="username" id="username" placeholder="مثال : admin" required>
<small class="error-message"></small>
</div>

<div class="form-group">
<label for="password">كلمة المرور</label>
<input type="password" name="password" id="password" placeholder="أدخل كلمة المرور" required>
<small class="error-message"></small>
</div>

<button type="submit" class="btn-login">دخول</button>

</form>

</main>

<footer>
<p>© اكتشف السعودية — جامعة الملك سعود</p>
</footer>

<script src="../JS/main.js"></script>

</body>
</html>