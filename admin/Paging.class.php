<?php
/*
$pageNow  显示第几页 用户输入
$pageCount 共有多少页  程序计算得出
$rowCount 共有多少记录 数据库获取
$pageSize 每页显示多少记录 

*/
    class Paging{
    public $pageSize ;
    public $res_arry;  //显示的数据
    public $rowCount;
    public $pageNow ;
    public $pageCount;
    public $navigate;
    public $gotourl;   //表示把分页请求提交给哪个页面
    
    
    public $selection; 
    
    }

    

?>