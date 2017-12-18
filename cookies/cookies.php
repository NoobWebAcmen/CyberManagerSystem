<?php
    //用于保存cookies key-value-key-value-cookie valid time s 增
    setcookie("name","shunping",time()+3600);
    setcookie("password",md5("123456"),time()+3600);
    echo "保存成功！";
    //获取cookie 信息 查
    $name=$_COOKIE['name'];
    
    //更新cookie 信息 改
    setcookie("name","xiaoshagua",time()+3600);   //把键name修改为其他值

    //删除cookie信息 删
    //指定删除某个键,时间减去秒数，秒数大小无关
    setcookie("name","",time()-200);

    //删除所有cookie
    foreach($_COOKIE as $key=>$val){
        setcookie($key,"",time()-200);
    }

?>