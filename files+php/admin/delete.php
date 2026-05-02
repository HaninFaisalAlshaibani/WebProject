<?php
session_start();
include '../database.php';

if (!isset($_SESSION['admin'])) {
    header("Location: login.php");
    exit();
}

if (isset($_GET['id'])) {
    $id = $_GET['id'];

    $sql = "DELETE FROM places WHERE id=$id";
    mysqli_query($conn, $sql);
}

header("Location: dashboard.php?success=deleted");
exit();
?>