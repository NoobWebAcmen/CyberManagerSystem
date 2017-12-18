<?php
// 此文件编写对emp表的各种操作 实现分页

    require_once '../common/SQLHelper.class.php';
    require_once 'Emp.class.php';
    require_once '../common/ViewHelper.class.php';
    class EmpService{
        private $sqlHelper;
        private $viewHelper;
        //创建实例对象
        function __construct(){
            $this->sqlHelper=new SQLHelper;
            $this->viewHelper=new ViewHelper;
        }


        //完成分页
        function getPaging($paging){ 
              
           
            $sql1="select * from emp  order by id asc limit ".($paging->pageNow-1)*$paging->pageSize.",".$paging->pageSize;
            
            $sql2="select count(*) from emp";
            
        
            $this->viewHelper->excute_dql_paging($sql1,$sql2,$paging);
            $this->sqlHelper->close_connect();
        }

        //按条件查询页面
        function searchPaging($paging,$id,$name,$grade,$email,$salary){
            
            $sql1="select * from  emp where id='$id' or name like '$name' or grade='$grade' or email like '$email'or salary='$salary' limit ".($paging->pageNow-1)*$paging->pageSize.",".$paging->pageSize;
            
            $sql2="select count(*) from (select * from emp where id='$id'or name like '$name' or grade='$grade'or email like '$email'or salary='$salary') as total";
           
            $this->viewHelper->excute_dql_paging_1($sql1,$sql2,$paging);
            $this->sqlHelper->close_connect();
        }

        //根据输入的id删除用户
        function delEmpById($id){
            $sql="delete from emp where id=$id";
            return $this->sqlHelper->excute_dml($sql);
        }

        //添加用户
        function addEmp($name,$grade,$email,$salary){
            $sql="insert into emp (name,grade,email,salary) values('$name','$grade','$email','$salary')";
            $res=$this->sqlHelper->excute_dml($sql);
            $this->sqlHelper->close_connect();
            return $res;

        }

        //修改用户
        function updataEmp($id,$name,$grade,$email,$salary){
            $sql="update emp set name='$name' , grade=$grade ,email='$email',salary=$salary where id=$id";
            $res=$this->sqlHelper->excute_dml($sql);
            $this->sqlHelper->close_connect();
            return $res;

        }

        //查询用户信息
        function searchEmp($id,$name,$grade,$email,$salary){
            $sql="select * from  emp where id like '$id' or name like '$name' or grade like '$grade' or email like '$email'or salary like '$salary'";
            
            $res=$this->sqlHelper->excute_dql2($sql);
            $this->sqlHelper->close_connect();
            return $res;

        }

        //修改用户,根据一个id获取到一个雇员的信息
       function getEmpById($id){
           $sql="select *from emp where id=$id";
           $arr=$this->sqlHelper->excute_dql2($sql);
           $this->sqlHelper->close_connect();
           
           $emp=new Emp();
           $emp->setId($arr[0]['id']);
           $emp->setName($arr[0]['name']);
           $emp->setGrade($arr[0]['grade']);
           $emp->setEmail($arr[0]['email']);
           $emp->setSalary($arr[0]['salary']);
           return $emp;
       }



    }
    




?>