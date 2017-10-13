<?php
 //1:修改响应头格式 json
 header("content-type:application/json;charset=utf-8");
 //2:接收参数 类别名字
 @$name = $_REQUEST['phones'];
 @$pwd = $_REQUEST['pwd'];
 //3:连接数据库 ，设置编码
 require('init.php');
 //4:创建sql      发送sql
 $sql = "SELECT * FROM mz_user WHERE uname='$name'";
 $result = mysqli_query($conn,$sql);
 $rows=mysqli_fetch_assoc($result);
     if ($rows['uname']==$name) {
         echo '{"code":-2,"msg":"用户名已存在，请重新输入！"}';
     }else {
   $sql = "INSERT INTO mz_user VALUES(null,'$name','$pwd')";
    $result = mysqli_query($conn,$sql);
    if($result===true){
      echo '{"code":1,"msg":"添加成功"}';
    }else{
      echo '{"code":-1,"msg":"添加失败"}';
    }
        }
?>