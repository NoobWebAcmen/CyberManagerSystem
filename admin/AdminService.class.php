<?php
// 此文件编写对admin表的各种操作,增删改查
    require_once '../common/SQLHelper.class.php';
    class AdminService{
        //提供一个验证用户是否合法的方法
        public function checkAdmin($name,$password){
            $sql="select password,name from admin where name='$name' ";
            print_r($sql);
            //创建SQLHelper对象
            $sqlHelper=new SQLHelper();
            $res=$sqlHelper->excute_dql($sql);
            if($row=mysqli_fetch_assoc($res)){
                if(md5($password)==$row['password']){
                    return $row['name'];
                }
            }
            mysqli_free_result($res);
            $sqlHelper->close_connect();
            return false;
            
        }
        
        
    }



?>