<?php
  header("content-type:application/json;charset=utf-8");
  require("init.php");
  @$count = $_REQUEST['pro_count'];
  $sql = "SELECT pname,pic,price FROM mz_top_product where style='$count'";
  $result = mysqli_query($conn,$sql);
   $rows = mysqli_fetch_all($result,MYSQLI_ASSOC);
   //5:转换json
   $str = json_encode($rows);
   //6:发送
   echo $str;
?>