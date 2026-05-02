<?php
session_start();
include '../database.php';

if (!isset($_SESSION['admin'])) {
    header("Location: login.php");
    exit();
}

if ($_SERVER["REQUEST_METHOD"] == "POST") {

    $place_name   = trim($_POST["place_name"]);
    $region_type  = trim($_POST["region_type"]);
    $description  = trim($_POST["description"]);
    $features     = trim($_POST["features"]);
    $activities   = trim($_POST["activities"]);
    $landmarks    = trim($_POST["landmarks"]);

    function cityFolder($name)
    {
        $name = trim($name);

        $name = preg_replace('/\s+/u', '-', $name);

        $name = preg_replace('/[^\p{Arabic}a-zA-Z0-9\-]/u', '', $name);

        return strtolower($name);
    }

    $folder = cityFolder($place_name);

    $uploadDir = "../images/" . $folder . "/";

    if (!is_dir($uploadDir)) {
        mkdir($uploadDir, 0777, true);
    }

    function uploadImage($inputName, $number, $uploadDir, $folder)
    {
        if (!empty($_FILES[$inputName]["name"])) {

            $ext = pathinfo($_FILES[$inputName]["name"], PATHINFO_EXTENSION);

            $newName = $number . "." . strtolower($ext);

            move_uploaded_file(
                $_FILES[$inputName]["tmp_name"],
                $uploadDir . $newName
            );

            return $folder . "/" . $newName;
        }

        return "";
    }

    $main_image = uploadImage("main_image", 1, $uploadDir, $folder);
    $gallery1   = uploadImage("gallery1",   2, $uploadDir, $folder);
    $gallery2   = uploadImage("gallery2",   3, $uploadDir, $folder);
    $gallery3   = uploadImage("gallery3",   4, $uploadDir, $folder);

    $sql = "INSERT INTO places
    (place_name, region_type, description, features, activities, landmarks, main_image, gallery1, gallery2, gallery3)
    VALUES
    ('$place_name','$region_type','$description','$features','$activities','$landmarks','$main_image','$gallery1','$gallery2','$gallery3')";

    mysqli_query($conn, $sql);

    header("Location: dashboard.php?success=added");
    exit();
}
?>

<!DOCTYPE html>
<html lang="ar" dir="rtl">

<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>إضافة مكان جديد</title>

<link rel="stylesheet" href="../css/main.css">
<link rel="stylesheet" href="../css/add.css">
</head>

<body>

<header>
<nav class="navbar admin-navbar-simple">

<div class="logo">لوحة المشرف</div>

<div class="admin-navbar-actions">
<button id="nightModeBtn" class="night-btn">🌙 الوضع الليلي</button>
</div>

</nav>
</header>

<main class="add-container">

<div class="page-head">
<h1>إضافة مكان جديد</h1>

<a href="dashboard.php" class="btn-back-dashboard">
العودة للوحة التحكم
</a>
</div>

<form id="addForm" method="POST" enctype="multipart/form-data" class="add-form">

<div class="form-group">
<label>اسم المكان *</label>
<input type="text" name="place_name" required>
</div>

<div class="form-group">
<label>الصورة الرئيسية *</label>
<input type="file" name="main_image" required>
</div>

<div class="form-group">
<label>الوصف *</label>
<textarea name="description" rows="5" required></textarea>
</div>

<div class="form-group">
<label>التصنيف *</label>
<select name="region_type" required>
<option value="">اختر التصنيف</option>
<option>وسطى</option>
<option>شرقية</option>
<option>غربية</option>
<option>جنوبية</option>
<option>شمالية</option>
</select>
</div>

<div class="form-group">
<label>المميزات *</label>
<input type="text" name="features" required>
</div>

<div class="form-group">
<label>الأنشطة *</label>
<input type="text" name="activities" required>
</div>

<div class="form-group">
<label>أفضل المعالم زيارة *</label>
<textarea name="landmarks" rows="4" required></textarea>
</div>

<div class="form-group">
<label>صورة المعرض الأولى *</label>
<input type="file" name="gallery1" required>
</div>

<div class="form-group">
<label>صورة المعرض الثانية *</label>
<input type="file" name="gallery2" required>
</div>

<div class="form-group">
<label>صورة المعرض الثالثة *</label>
<input type="file" name="gallery3" required>
</div>

<button type="submit" class="btn-save-update">
إضافة المكان
</button>

</form>

</main>

<footer>
<p>© اكتشف السعودية — جامعة الملك سعود</p>
</footer>

<script src="../JS/main.js"></script>

</body>
</html>
