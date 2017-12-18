<?php
/* 
* 该文件主要用于接受用户的增删改查请求，并调用某个service类完成任务，再决定跳转到什么页面去
*/
    require_once 'EmpService.class.php';
    $empService=new EmpService();
    
    //判断用户是要分页还是要删除某个雇员
    if(!empty($_REQUEST['flag'])){
        
        //接收flag值
        $flag=$_REQUEST['flag'];
            if ($flag=="del") {
             //如果传的del，说明是要删除某个id雇员
            
            $id=$_REQUEST['id'];
            
            if($empService->delEmpById($id)==1){
                header("Location:ok.php");
                exit();
            }else{
                header("Location:err.php");
                exit();
            }
        }else if($flag=="addemp"){
            //如果传的addemp，则用户希望添加雇员信息
            
            //接收数据
            $name=$_POST['name'];
            $grade=$_POST['grade'];
            $email=$_POST['email'];
            $salary=$_POST['salary'];
            
            //完成添加到数据库
            $res=$empService->addEmp($name,$grade,$email,$salary);
            if($res==1){
                header("Location:ok.php");
                exit();
            }else{
                header("Location:err.php");
                exit();
            }
        }else if($flag=="updataemp"){
            //如果传的是updataemp，则用户希望修改雇员信息
            
            //接收数据
            $id=$_POST['id'];
            $name=$_POST['name'];
            $grade=$_POST['grade'];
            $email=$_POST['email'];
            $salary=$_POST['salary'];
            //完成修改->数据库.
            $res=$empService->updataEmp($id,$name,$grade,$email,$salary);
            if($res==1){
                header("Location: ok.php");
                exit();
            }else{
                //失败!
                header("Location: error.php");
                exit();
            }
        }else if($flag=="searchemp"){
            $id=$_POST['id'];
            $name=$_POST['name'];
            $grade=$_POST['grade'];
            $email=$_POST['email'];
            $salary=$_POST['salary'];
            $res=$empService->searchEmp($id,$name,$grade,$email,$salary);
            if(empty($res)==1){
                header("Location: err.php");
                
            }else{
                
                header("Location: searchPage.php");
                
            }
            
        }
    }
    















?>