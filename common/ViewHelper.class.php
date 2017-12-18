<?php
    // 该类是一个视图工具类，给别的类提供服务,最底层，最通用
    // 完成对视图输出的操作
    require_once '../common/SQLHelper.class.php';
    
    
    class ViewHelper{
        private $sqlHelper;

         //创建实例对象
         function __construct(){
             $this->sqlHelper=new SQLHelper;
         }



         /**
          * 此函数用于创建分页块
          * @$sql1 显示符合条件的sql语句
          * @$sql2 统计所查询的条数
          * @$paging paging对象 
          */
        public function excute_dql_paging($sql1,$sql2,$paging){
            
            $res=mysqli_query($this->sqlHelper->conn,$sql1) or die(mysqli_error($this->sqlHelper->conn)); //查询到要分页的数据
            
            $arr=array();
            while ($row=mysqli_fetch_assoc($res)) { //将res转移到数组中
                $arr[]=$row;
            }
            
            mysqli_free_result($res);
            $GLOBALS["pageSize"]=$paging->pageSize;
            $res2=mysqli_query($this->sqlHelper->conn,$sql2) or die(mysqli_error($this->sqlHelper->conn));
            if($row=mysqli_fetch_row($res2)){  //取得总共的表的行数，此处为212行
                $paging->pageCount=ceil($row[0]/$paging->pageSize);  //pageSize 是传进来的值
                $paging->rowCount=$row[0];         //共有212行
            }
            
            mysqli_free_result($res2);

            //把导航信息封装到Paging对象中
            
            if($paging->pageNow>=1){
                $pre=$paging->pageNow-1;
                $navigate= "<a href='{$paging->gotourl}&pageNow=$pre' class='page_a'>上一页</a>"; 
            }
            $page_whole=10;
            $start=floor(($paging->pageNow-1)/$page_whole)*$page_whole+1;
            
            
            $index=$start;
           
                $navigate.= "<a href='{$paging->gotourl}&pageNow=".($start-1)."'  class='page_a'><<<</a>";
            
            
            for (; $start <$index+10 ; $start++) { 
                
                
                $navigate.= "<a href='{$paging->gotourl}&pageNow=$start' class='page_a'>$start</a>";
                if($start>=$paging->pageCount)
                    break;
                
            }
            
            
                $navigate.= "<a href='{$paging->gotourl}&pageNow=$start'  class='page_a'>>>></a>";
                
            
            if($paging->pageNow<$paging->pageCount)
            {
                $next=$paging->pageNow+1;
                $navigate.="<a href='{$paging->gotourl}&pageNow=$next' class='page_a'>下一页</a>"; //  .=连续定义变量，将变量连接在一起
            }
                $navigate.= "&nbsp &nbsp &nbsp &nbsp 当前页 {$paging->pageNow} /共 {$paging->pageCount} 页";

            $paging->res_array=$arr;   //将数据赋值给paging
            $paging->navigate=$navigate;

        }






        /**
         * 此函数专门用于传递不带?pageNow的a标签
         */
        public function excute_dql_paging_1($sql1,$sql2,$paging){
            
            $res=mysqli_query($this->sqlHelper->conn,$sql1) or die(mysqli_error($this->sqlHelper->conn)); //查询到要分页的数据
            
            $arr=array();
            while ($row=mysqli_fetch_assoc($res)) { //将res转移到数组中
                $arr[]=$row;
            }
        
            mysqli_free_result($res);

            $res2=mysqli_query($this->sqlHelper->conn,$sql2) or die(mysqli_error($this->sqlHelper->conn));
            if($row=mysqli_fetch_row($res2)){  //取得总共的表的行数，此处为212行
                $paging->pageCount=ceil($row[0]/$paging->pageSize);  //pageSize 是传进来的值
                $paging->rowCount=$row[0];         //共有212行
            }
            
            mysqli_free_result($res2);

            //把导航信息封装到Paging对象中
            
            if($paging->pageNow>=1){
                $pre=$paging->pageNow-1;
                $navigate= "<a href='{$paging->gotourl}pageNow=$pre' class='page_a'>上一页</a>"; 
            }
            $page_whole=10;
            $start=floor(($paging->pageNow-1)/$page_whole)*$page_whole+1;
            
            
            $index=$start;
           
                $navigate.= "<a href='{$paging->gotourl}pageNow=".($start-1)."'  class='page_a'><<<</a>";
            
            
            for (; $start <$index+10 ; $start++) { 
                
                
                $navigate.= "<a href='{$paging->gotourl}pageNow=$start' class='page_a'>$start</a>";
                if($start>=$paging->pageCount)
                    break;
                
            }
            
            
                $navigate.= "<a href='{$paging->gotourl}pageNow=$start'  class='page_a'>>>></a>";
                
            
            if($paging->pageNow<$paging->pageCount)
            {
                $next=$paging->pageNow+1;
                $navigate.="<a href='{$paging->gotourl}pageNow=$next' class='page_a'>下一页</a>"; //  .=连续定义变量，将变量连接在一起
            }
                $navigate.= "&nbsp &nbsp &nbsp &nbsp 当前页 {$paging->pageNow} /共 {$paging->pageCount} 页";

            $paging->res_array=$arr;   //将数据赋值给paging
            
            $paging->navigate=$navigate;
        }
        /**
         * 此函数用于查询到select选框的值
         * @formName 表示type=submit的name值
         * @selectName 表示select选框的name值
         */
        
           
      
    
    }


?>