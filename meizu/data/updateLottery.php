<?php
 header('Content-Type:text/plain;charset=utf-8');
    require("init.php");
    $uid = $_REQUEST['uid'];
    $level = $_REQUEST['level'];
    $sql = "insert into lottery values(null,'$uid','$level')";
    if($uid!=null&&$level!=null){
    mysqli_query($conn,'set names utf8');
    mysqli_query($conn,$sql);
    }