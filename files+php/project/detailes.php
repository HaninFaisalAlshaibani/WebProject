<?php
include '../database.php';

$id = isset($_GET["id"]) ? intval($_GET["id"]) : 0;

if ($id > 0) {
    $result = mysqli_query($conn, "SELECT * FROM places WHERE id=$id");
    $row = mysqli_fetch_assoc($result);
} else {
    $result = mysqli_query($conn, "SELECT * FROM places ORDER BY id ASC LIMIT 1");
    $row = mysqli_fetch_assoc($result);
}

if (!$row) {
    die("المكان غير موجود");
}
?>

<!DOCTYPE html>
<html lang="ar" dir="rtl">

<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title><?php echo $row['place_name']; ?></title>

<link rel="stylesheet" href="../css/main.css">
<link rel="stylesheet" href="../css/details.css">
</head>

<body>

<header>
<nav class="navbar">

<div class="logo">اكتشف السعودية</div>

<ul class="nav-links">
<li><a href="index.html">الرئيسية</a></li>
<li><a href="gallery.php">معرض المناطق</a></li>
<li><a href="details.php?id=<?php echo $row['id']; ?>" class="active">التفاصيل</a></li>
<li><a href="../admin/login.php">دخول المشرف</a></li>
</ul>

<button id="nightModeBtn" class="night-btn">🌙 الوضع الليلي</button>

</nav>
</header>

<main class="details-shell">

<section class="details-hero-card">
<img
id="mainImage"
src="../images/<?php echo htmlspecialchars($row['main_image']); ?>"
alt="<?php echo htmlspecialchars($row['place_name']); ?>"
>
</section>

<section class="details-info-card">
<h1 id="placeTitle"><?php echo $row['place_name']; ?></h1>

<p id="placeDescription">
<?php echo $row['description']; ?>
</p>
</section>

<section class="quick-info-card">

<h2>معلومات سريعة</h2>

<div class="quick-info-grid">

<div class="quick-info-item">
<strong>التصنيف:</strong>
<span><?php echo $row['region_type']; ?></span>
</div>

<div class="quick-info-item">
<strong>المميزات:</strong>
<span><?php echo $row['features']; ?></span>
</div>

<div class="quick-info-item">
<strong>الأنشطة:</strong>
<span><?php echo $row['activities']; ?></span>
</div>

</div>

</section>

<section class="landmarks-card">

<h2>أبرز المعالم</h2>

<ul class="landmarks-list">
<li><?php echo $row['landmarks']; ?></li>
</ul>

</section>

<section class="gallery-card">

<h2>معرض الصور</h2>

<div class="thumb-grid">

<?php if (!empty($row['gallery1'])) { ?>
<img class="thumb active-thumb"
src="../images/<?php echo htmlspecialchars($row['gallery1']); ?>">
<?php } ?>

<?php if (!empty($row['gallery2'])) { ?>
<img class="thumb"
src="../images/<?php echo htmlspecialchars($row['gallery2']); ?>">
<?php } ?>

<?php if (!empty($row['gallery3'])) { ?>
<img class="thumb"
src="../images/<?php echo htmlspecialchars($row['gallery3']); ?>">
<?php } ?>

</div>

</section>

</main>

<footer>
<p>© اكتشف السعودية — جامعة الملك سعود</p>
</footer>

<script src="../JS/main.js"></script>
<script src="../JS/details.js"></script>

</body>
</html>
