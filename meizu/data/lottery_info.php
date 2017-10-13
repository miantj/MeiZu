<?php
  header('Content-Type:application/json;charset=utf-8');
    require("init.php");
    $sql = "select lottery_ID,uname,lottery_gift_name from lottery,mz_user where mz_user.uid=lottery.lottery_uid order by lottery_ID desc";
    mysqli_query($conn,'set names utf8');
    $result = mysqli_query($conn,$sql);
    $output=[];
      while(($row=mysqli_fetch_assoc($result))!==null){
        $output[]=$row;
      }
      echo json_encode($output);