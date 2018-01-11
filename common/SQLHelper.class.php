<?php
// 该类是一个工具类，给别的类提供服务,最底层，最通用
// 完成对数据库的操作
    class SQLHelper{
        public $conn;
        public $dbname="gametool";
        public $username="Mr_Tang";
        public $password="tang123";
        public $host="localhost";

        //连接数据库
        public function __construct(){
            $this->conn=mysqli_connect($this->host,$this->username,$this->password);
            if(!$this->conn){
                die("连接失败".mysqli_error($this->conn));
            }
            mysqli_select_db($this->conn,$this->dbname);
        }
        public function connect(){
            $this->conn=mysqli_connect($this->host,$this->username,$this->password);
            if(!$this->conn){
                die("连接失败".mysqli_error($this->conn));
            }
            mysqli_select_db($this->conn,$this->dbname);
        }
       
        //执行sql语句
        public function excute_dql($sql){
            $res=mysqli_query($this->conn,$sql) or die(mysqli_error($this->conn));
            return $res;
        }
        
        //执行sql语句,返回一个数组
        public function excute_dql2($sql){
            $arr=array();
            $res=mysqli_query($this->conn,$sql) or die(mysqli_error($this->conn));
            $i=0;
            while ($row=mysqli_fetch_assoc($res)) {
                $arr[$i++]=$row;
            }
            mysqli_free_result($res);
            return $arr;
        }
        
        //关闭连接
        public function close_connect(){
            if(!empty($this->conn)){
                mysqli_close($this->conn);
            }
        }


        //执行dml语句
        public function excute_dml($sql){
            $b=mysqli_query($this->conn,$sql) or die(mysqli_error($this->conn));
            if(!$b){
                return 0;  //失败
            }else{
                if(mysqli_affected_rows($this->conn)>0)
                {
                    return 1;   //表示执行成功
                }else{
                    return 2;  //表示没有行收到影响
                }
            }
        }
        
        //考虑分页情况的查询
        /**
         * 查询多行数据记录
         * @tableName  数据表名
         * @condition  条件查询的sql语句
         * @startIndex 数据记录数组中的起始索引
         * @limitCount 数据记录的个数
         * @return     数据记录的数组
         */
        public function excute_get_rows($tableName, $condition, $startIndex, $limitCount) {
            $arr = array();
            if (is_string($tableName) && is_string($condition)) {
                $sql_str = "select * from ".$tableName." where ".$condition;
                if (!empty($startIndex) && is_integer($limitCount) && $limitCount >= 0) {
                    $sql_str .= " limit ".$startIndex.", ".$limitCount;
                }
                echo $sql_str;

                $res = mysqli_query($this->conn, $sql_str) or die(mysqli_error($this->conn)); //查询到要分页的数据
                while ($row = mysqli_fetch_assoc($res)) { //将res转移到数组中
                    $arr[] = $row;
                }
            }
            else {
                echo "excute_get_rows: arguments are invalied.";
            } 
            return $arr;
        }
    }
        
        



?>