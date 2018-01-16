<?php    

$save_dir = "userData";  
$bullet = $_REQUEST['bullets'];      //炮弹数据
$bulletHtml = $_REQUEST['bulletsHtml'];    //炮弹表现形式
$id = $_REQUEST['id'];


//创建目录

   if (trim($save_dir) == '') {  
        $save_dir = './';  
    }  
    if (0 !== strrpos($save_dir, '/')) {  
        $save_dir.= '/';  
    }  
    //创建保存目录  
    if (!file_exists($save_dir) && !mkdir($save_dir, 0777, true)) {  
        return false;  
    }  
    //写入文件
    if(!empty($bullet)){
        
        $fileName1 = $save_dir.'/'.'bullets'.$id.'.json';
        $res1 =file_put_contents($fileName1,json_encode($bullet),FILE_APPEND);
        if ($res1) {
            echo 'Write success!';
        } else {
            echo 'Write failed!';
        }
    }
    if(!empty($bulletHtml)){
        
        $fileName2 = $save_dir.'/'.'bullets'.$id.'html'.'.html';
        $res2 =file_put_contents($fileName2,$bulletHtml,FILE_APPEND);
        if ($res2) {
            echo 'Write success!';
        } else {
            echo 'Write failed!';
        }
    }






  
    
?>  