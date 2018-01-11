<?php
/*
* 接收用户数据 1.name 2.password 3.获取是否用户选中了复选框
*/ 
    require_once '../admin/AdminService.class.php';
    $name=$_POST['name'];
    
    $password=$_POST['password'];
    $checkCode=$_POST['checkcode'];
    $remember=$_POST['keep'];
    

    
    session_start();
	if($checkCode!=$_SESSION['myCheckCode']){
        header("Location: ../index.php?errno=3");
		exit();
    }
    
    if($remember == 1){
        setcookie("name",$name,time()+24*7*2*3600);
        setcookie("password",$password,time()+24*7*2*3600);
    }else{
        setcookie("name",$name,time()-24*7*2*3600);
        setcookie("password",$password,time()-24*7*2*3600);
    }
    

    

//实例化一个AdminService的方法
    $adminService=new AdminService();
    $name=$adminService->checkAdmin($name,$password);
	if($name!=""){
		//把登陆信息写入cookie 'loginname':$name
		//把登陆表 把登陆的人ip name..
		//合法
		session_start();
        $_SESSION['loginuser']=$name;
		header("Location:../index/index.php?name=$name"); 
		exit();
    }else{
        header("Location:../index.php?errno=1");
        exit();
}






?>