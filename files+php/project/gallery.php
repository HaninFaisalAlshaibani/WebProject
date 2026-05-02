<?php
include '../database.php';

$sql = "SELECT * FROM places ORDER BY id ASC";
$result = mysqli_query($conn, $sql);

$total = mysqli_num_rows($result);
?>

<!DOCTYPE html>
<html lang="ar" dir="rtl">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>معرض المناطق | اكتشف السعودية</title>

  <link rel="stylesheet" href="../css/main.css">
  <link rel="stylesheet" href="../css/gallery.css">
</head>

<body class="gallery-page">

<header>
  <nav class="navbar">

    <div class="logo">اكتشف السعودية</div>

    <ul class="nav-links">
      <li><a href="index.html">الرئيسية</a></li>
      <li><a href="gallery.php" class="active">معرض المناطق</a></li>
      <li><a href="details.php">التفاصيل</a></li>
      <li><a href="../admin/login.php">دخول المشرف</a></li>
    </ul>

    <button id="nightModeBtn" class="night-btn">🌙 الوضع الليلي</button>

  </nav>
</header>

<section class="gallery-hero">
  <div class="gallery-hero-overlay"></div>

  <div class="gallery-hero-content">
    <p class="gallery-kicker">Discover Saudi Arabia</p>
    <h1>معرض المناطق</h1>

    <p class="gallery-subtitle">
      استكشف مدن ومناطق المملكة العربية السعودية
    </p>
  </div>
</section>

<main class="gallery-shell">

<section class="gallery-header-block">

<div class="gallery-header-copy">
<div>
<h2>وجهات مختارة من المملكة</h2>

<p>
ابحث عن مدينة أو منطقة، واختر التصنيف المناسب لعرض النتائج بشكل أسرع.
</p>
</div>
</div>

<div class="gallery-controls">

<div class="control-field">
<label for="searchInput">البحث</label>

<input
type="text"
id="searchInput"
placeholder="ابحث عن مدينة أو منطقة"
/>
</div>

<div class="control-field">
<label for="regionFilter">التصنيف</label>

<select id="regionFilter">
<option value="all">كل المناطق</option>
<option value="وسطى">وسطى</option>
<option value="شرقية">شرقية</option>
<option value="غربية">غربية</option>
<option value="جنوبية">جنوبية</option>
<option value="شمالية">شمالية</option>
</select>
</div>

</div>

<div class="results-bar">
<span id="resultsCount">
عدد النتائج: <?php echo $total; ?>
</span>
</div>

</section>

<section class="gallery-grid" id="galleryGrid">

<?php while($row = mysqli_fetch_assoc($result)) { ?>

<a
href="details.php?id=<?php echo $row['id']; ?>"
class="place-card"
data-region="<?php echo htmlspecialchars($row['region_type']); ?>"
>

<div class="place-card-image">

<img
src="../images/<?php echo htmlspecialchars($row['main_image']); ?>"
alt="<?php echo htmlspecialchars($row['place_name']); ?>"
>

<span class="place-badge">
<?php echo htmlspecialchars($row['region_type']); ?>
</span>

</div>

<div class="place-card-body">

<h3><?php echo htmlspecialchars($row['place_name']); ?></h3>

<p><?php echo htmlspecialchars($row['description']); ?></p>

</div>

</a>

<?php } ?>

</section>

<p id="emptyState" class="gallery-empty" hidden>
لا توجد نتائج مطابقة.
</p>

</main>

<footer>
<p>© اكتشف السعودية — جامعة الملك سعود</p>
</footer>

<script src="../JS/main.js"></script>
<script src="../JS/gallery.js"></script>

</body>
</html>