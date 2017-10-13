<?php
  header('Content-Type:application/json;charset=utf-8');
  require("init.php");
  $uid = $_REQUEST['loginUid'];
  $date = $_REQUEST['date'];
  $sql = "select cLeaveTimes from lottery_count where cTime='$date'and cUserID=$uid";
  mysqli_query($conn,'set names utf8');
  $result= mysqli_query($conn,$sql);
  if($row=mysqli_fetch_assoc($result)){
    echo json_encode($row);
  }else{
    echo json_encode("err");
  }