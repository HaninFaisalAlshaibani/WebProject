<?php
include '../database.php';

$id = isset($_GET["id"]) ? intval($_GET["id"]) : 0;
$row = null;

if ($id > 0) {
    $result = mysqli_query($conn, "SELECT * FROM places WHERE id=$id");
    $row = mysqli_fetch_assoc($result);
}

$placesResult = mysqli_query($conn, "SELECT * FROM places ORDER BY id ASC");
?>

<!DOCTYPE html>
<html lang="ar" dir="rtl">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

<title><?php echo $row ? htmlspecialchars($row['place_name']) : "اختيار مكان"; ?></title>

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
<li><a href="details.php" class="active">التفاصيل</a></li>
<li><a href="../admin/login.php">دخول المشرف</a></li>
</ul>

<button id="nightModeBtn" class="night-btn">🌙 الوضع الليلي</button>

</nav>
</header>

<?php if (!$row) { ?>

<main class="details-shell">

<section class="details-info-card">
<h1>اختر مكان لعرض التفاصيل</h1>
<p>من هذه الصفحة يمكنك اختيار مدينة أو منطقة لعرض معلوماتها وصورها ومعالمها.</p>
</section>

<section class="details-choice-grid">

<?php while($place = mysqli_fetch_assoc($placesResult)) { ?>

<a href="details.php?id=<?php echo $place['id']; ?>" class="details-choice-card">

<img src="../images/<?php echo htmlspecialchars($place['main_image']); ?>">

<div class="details-choice-content">
<h2><?php echo htmlspecialchars($place['place_name']); ?></h2>
<p><?php echo htmlspecialchars($place['region_type']); ?></p>
</div>

</a>

<?php } ?>

</section>

</main>

<?php } else { ?>

<main class="details-shell">

<section class="details-hero-card">
<img id="mainImage"
src="../images/<?php echo htmlspecialchars($row['main_image']); ?>">
</section>

<section class="details-info-card">
<h1><?php echo htmlspecialchars($row['place_name']); ?></h1>
<p><?php echo htmlspecialchars($row['description']); ?></p>
</section>

<section class="quick-info-card">

<h2>معلومات سريعة</h2>

<div class="quick-info-grid">

<div class="quick-info-item">
<strong>التصنيف:</strong>
<span><?php echo htmlspecialchars($row['region_type']); ?></span>
</div>

<div class="quick-info-item">
<strong>المميزات:</strong>
<span><?php echo htmlspecialchars($row['features']); ?></span>
</div>

<div class="quick-info-item">
<strong>الأنشطة:</strong>
<span><?php echo htmlspecialchars($row['activities']); ?></span>
</div>

</div>

</section>

<section class="landmarks-card">
<h2>أبرز المعالم</h2>
<ul class="landmarks-list">
<li><?php echo htmlspecialchars($row['landmarks']); ?></li>
</ul>
</section>

<section class="gallery-card">

<h2>معرض الصور</h2>

<div class="thumb-grid">

<?php if($row['gallery1']) { ?>
<img class="thumb active-thumb" src="../images/<?php echo $row['gallery1']; ?>">
<?php } ?>

<?php if($row['gallery2']) { ?>
<img class="thumb" src="../images/<?php echo $row['gallery2']; ?>">
<?php } ?>

<?php if($row['gallery3']) { ?>
<img class="thumb" src="../images/<?php echo $row['gallery3']; ?>">
<?php } ?>

</div>

</section>

</main>

<?php } ?>

<footer>
<p>© اكتشف السعودية — جامعة الملك سعود</p>
</footer>

<script src="../JS/main.js"></script>
<script src="../JS/details.js"></script>

</body>
</html>
