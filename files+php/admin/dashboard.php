<?php
session_start();
include '../database.php';

$result = mysqli_query($conn, "SELECT * FROM places ORDER BY id ASC");

$successMsg = "";
if (isset($_GET['success'])) {
    if ($_GET['success'] === 'added')   $successMsg = "تمت إضافة السجل بنجاح ✓";
    if ($_GET['success'] === 'updated') $successMsg = "تم تحديث السجل بنجاح ✓";
    if ($_GET['success'] === 'deleted') $successMsg = "تم حذف السجل بنجاح ✓";
}
?>
<!DOCTYPE html>
<html lang="ar" dir="rtl">

<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>لوحة تحكم المشرف</title>

  <link href="https://fonts.googleapis.com/css2?family=Tajawal:wght@400;500;700&display=swap" rel="stylesheet" />
  <link rel="stylesheet" href="../css/main.css">
</head>

<body>

<header>
  <nav class="navbar admin-navbar-simple">
    <div class="logo">لوحة المشرف</div>

    <div class="admin-navbar-actions">
      <button id="nightModeBtn" class="night-btn">🌙 الوضع الليلي</button>
      <a href="logout.php" class="btn-logout admin-logout-link">تسجيل الخروج</a>
    </div>
  </nav>
</header>

<main class="dashboard-container">

  <h1>إدارة المحتوى</h1>
  <p>استخدم هذه الصفحة لإدارة محتوى الموقع من خلال عرض السجلات وإضافتها أو تعديل أو حذف المحتوى.</p>

  <div class="dashboard-actions">
    <a href="add.php" class="btn-add">+ إضافة محتوى جديد</a>
    <a href="../project/index.html" class="btn-add">معاينة الموقع</a>
  </div>

  <div id="successMessage" class="success-message" <?php if($successMsg) echo 'style="display:block;"'; ?>>
    <?php echo $successMsg; ?>
  </div>

  <table class="dashboard-table">
    <thead>
      <tr>
        <th>ID</th>
        <th>المنطقة</th>
        <th>التصنيف</th>
        <th>الوصف</th>
        <th>الإجراءات</th>
      </tr>
    </thead>

    <tbody>

<?php while($row = mysqli_fetch_assoc($result)) { ?>

<tr>
  <td><?php echo $row['id']; ?></td>
  <td><?php echo $row['place_name']; ?></td>
  <td><?php echo $row['region_type']; ?></td>
  <td><?php echo $row['description']; ?></td>
  <td>
    <a href="update.php?id=<?php echo $row['id']; ?>" class="btn-edit">تعديل</a>

    <a href="delete.php?id=<?php echo $row['id']; ?>"
       class="btn-delete"
       onclick="return confirm('هل أنت متأكد من الحذف؟');">
       حذف
    </a>
  </td>
</tr>

<?php } ?>

    </tbody>
  </table>

</main>

<footer>
  <p>© اكتشف السعودية — جامعة الملك سعود</p>
</footer>

<script src="../JS/main.js"></script>

</body>
</html>