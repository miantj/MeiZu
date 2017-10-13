<?php
  header('Content-Type:text/plain;charset=utf-8');
  require("init.php");
  $uid = $_REQUEST['loginUid'];
  $date = $_REQUEST['date'];
  $count =$_REQUEST['count'];
  $sql = "select * from lottery_count where cTime='$date'and cUserID='$uid'";
  mysqli_query($conn,'set names utf8');
  $result= mysqli_query($conn,$sql);
  if($row=mysqli_fetch_assoc($result)){
    $sql = "update lottery_count set cLeaveTimes=$count where cTime='$date'and cUserID=$uid";
    mysqli_query($conn,$sql);
    echo "1";
  }else{
    $sql = "insert into lottery_count values(null,'$date',$uid,$count)";
    mysqli_query($conn,$sql);
    echo "2";
  }