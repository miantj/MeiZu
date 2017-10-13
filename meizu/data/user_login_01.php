<?php
  header("content-type:application/json;charset=utf-8");
  //1:获取参数uname upwd
  @$uname = $_REQUEST['uname'];
  @$upwd = $_REQUEST['upwd'];
  //2:连接数据库 设置编码
  require("init.php");
  //3:创建sql    发送 sql
  $sql = " SELECT * FROM mz_user";
  $sql .= " WHERE uname='$uname'";
  $sql .= " AND upwd = '$upwd'";
  //4:抓取一行记录
  $result = mysqli_query($conn,$sql);
  $output=['code'=>0,'msg'=>null,'uid'=>null];
    	if($result===false){
    		$output['code']=1001;
    		$output['msg']='sql语法错误';
    	}else{
    		if($row=mysqli_fetch_assoc($result)){
    			$output['code']=1;
    			$output['uid']=$row['uid'];
    		}else{
    			$output['code']=-1;
    			$output['msg']="用户名或密码错误";
    		}
    	}
    	$str = json_encode($output);
    	echo $str;
?>