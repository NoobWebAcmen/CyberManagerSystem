<?php


function getLastTime(){
    
    
    if(!empty($_COOKIE['lastVisit'])){
        echo "你上次登陆时间是".$_COOKIE['lastVisit'];
        //更新时间
        setcookie("lastVisit",date("Y-m-d  H:i:s"),time()+24*3600*30);
    }else{
        //说明用户是第一次登陆
        echo "你是第一次登陆";
        //更新时间
        setcookie("lastVisit",date("Y-m-d  H:i:s"),time()+24*3600*30);
    }
}

    function getCookieVal($key){
        if(empty($_COOKIE[$key])){
            return "";
        }else{
            return $_COOKIE[$key];
        }
    }
    function checkUserValidate(){
        session_start();
        if(empty($_SESSION['loginuser']))
        {
            header("Location:../login/login.php?errno=2");
        }
    }
    function showUserName(){
        session_start();
       echo $_SESSION['loginuser'];
    }

    function logOut(){
        session_start();
        
        if(isset($_SESSION['loginuser'])){
            session_unset();//free all session variable
            session_destroy();//销毁一个会话中的全部数据
            setcookie(session_name(),'',time()-3600);//销毁与客户端的卡号
            header('location:../admin/ok.php');
        }else{
            header('location:../admin/err.php');
        }
    }
        
?>