<?php
error_reporting(E_ALL);
ini_set('display_errors',1);

session_start();
include '../database.php';

if (!isset($_SESSION['admin'])) {
    header("Location: login.php");
    exit();
}

$id = isset($_GET["id"]) ? intval($_GET["id"]) : 0;

$result = mysqli_query($conn,"SELECT * FROM places WHERE id=$id");
$row = mysqli_fetch_assoc($result);

if(!$row){
    die("السجل غير موجود");
}

if($_SERVER["REQUEST_METHOD"]=="POST"){

    $place_name  = $_POST["place_name"];
    $region_type = $_POST["region_type"];
    $description = $_POST["description"];
    $features    = $_POST["features"];
    $activities  = $_POST["activities"];
    $landmarks   = $_POST["landmarks"];

    $main_image = $row["main_image"];
    $gallery1   = $row["gallery1"];
    $gallery2   = $row["gallery2"];
    $gallery3   = $row["gallery3"];

    // Derive folder from place_name (same logic as add.php)
    $folder    = trim($place_name);
    $folder    = preg_replace('/\s+/u', '-', $folder);
    $folder    = preg_replace('/[^\p{Arabic}a-zA-Z0-9\-]/u', '', $folder);
    $folder    = strtolower($folder);
    $uploadDir = "../images/" . $folder . "/";

    if (!is_dir($uploadDir)) {
        mkdir($uploadDir, 0777, true);
    }

    function uploadImageUpdate($inputName, $number, $uploadDir, $folder) {
        if (!empty($_FILES[$inputName]["name"])) {
            $ext     = pathinfo($_FILES[$inputName]["name"], PATHINFO_EXTENSION);
            $newName = $number . "." . strtolower($ext);
            move_uploaded_file($_FILES[$inputName]["tmp_name"], $uploadDir . $newName);
            return $folder . "/" . $newName;
        }
        return null;
    }

    $new = uploadImageUpdate("main_image", 1, $uploadDir, $folder);
    if ($new !== null) $main_image = $new;

    $new = uploadImageUpdate("gallery1", 2, $uploadDir, $folder);
    if ($new !== null) $gallery1 = $new;

    $new = uploadImageUpdate("gallery2", 3, $uploadDir, $folder);
    if ($new !== null) $gallery2 = $new;

    $new = uploadImageUpdate("gallery3", 4, $uploadDir, $folder);
    if ($new !== null) $gallery3 = $new;

    $sql = "UPDATE places SET
    place_name='$place_name',
    region_type='$region_type',
    description='$description',
    features='$features',
    activities='$activities',
    landmarks='$landmarks',
    main_image='$main_image',
    gallery1='$gallery1',
    gallery2='$gallery2',
    gallery3='$gallery3'
    WHERE id=$id";

    mysqli_query($conn,$sql);

    header("Location: dashboard.php?success=updated");
    exit();
}
?>

<!DOCTYPE html>
<html lang="ar" dir="rtl">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>تحديث مكان</title>

<link rel="stylesheet" href="../css/main.css">
<link rel="stylesheet" href="../css/update.css">
</head>

<body class="update-page">

<header>
<nav class="navbar admin-navbar-simple">

<div class="logo">لوحة المشرف</div>

<div class="admin-navbar-actions">
<button id="nightModeBtn" class="night-btn">🌙 الوضع الليلي</button>
</div>

</nav>
</header>

<main class="update-shell">
  <div class="page-head">
    <h1>تحديث مكان</h1>

    <a href="dashboard.php" class="btn-back-dashboard">
      العودة للوحة التحكم
    </a>
  </div>
  <p class="update-subtitle">قم بتعديل البيانات الحالية</p>
</section>

<form method="POST" enctype="multipart/form-data" class="update-form-card">

<div class="form-group">
<label>اسم المكان</label>
<input type="text" name="place_name" value="<?php echo $row['place_name']; ?>">
</div>

<div class="form-group">
<label>التصنيف</label>
<select name="region_type">
<option <?php if($row["region_type"]=="وسطى") echo "selected"; ?>>وسطى</option>
<option <?php if($row["region_type"]=="شرقية") echo "selected"; ?>>شرقية</option>
<option <?php if($row["region_type"]=="غربية") echo "selected"; ?>>غربية</option>
<option <?php if($row["region_type"]=="جنوبية") echo "selected"; ?>>جنوبية</option>
<option <?php if($row["region_type"]=="شمالية") echo "selected"; ?>>شمالية</option>
</select>
</div>

<div class="form-group">
<label>الوصف</label>
<textarea name="description"><?php echo $row['description']; ?></textarea>
</div>

<div class="form-group">
<label>المميزات</label>
<input type="text" name="features" value="<?php echo $row['features']; ?>">
</div>

<div class="form-group">
<label>الأنشطة</label>
<input type="text" name="activities" value="<?php echo $row['activities']; ?>">
</div>

<div class="form-group">
<label>المعالم</label>
<textarea name="landmarks"><?php echo $row['landmarks']; ?></textarea>
</div>

<div class="form-group">
<label>تغيير الصورة</label>
<input type="file" name="main_image">
</div>

<button type="submit" class="btn-save-update">
حفظ التعديلات
</button>

</form>

</main>

<script src="../JS/main.js"></script>
</body>
</html>
