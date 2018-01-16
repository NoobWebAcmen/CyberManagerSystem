<?php

//查询该目录下有多少个json文件
$search_dir = 'userData';
$arr = scandir($search_dir);
$all = count($arr)-2;    //总共多少的文件
$json = count(preg_grep("/\.json$/",$arr));    //共有多少json文件
$html = count(preg_grep("/\.html$/",$arr));    //共有多少html文件
$id = $_REQUEST['id'];
$flag = $_REQUEST['flag'];

if(empty($id)){
    $file = getfiles($search_dir);
    echo(json_encode($file));
}else{
    if($flag == 1){
        //返回json type
        $filename1 = 'bullets'.$id.'.json';

        $jsonArr = readFiles($filename1,$search_dir);
        echo ($jsonArr);
    }else if($flag == 2){
        //返回html type
        $filename2 = 'bullets'.$id.'html'.'.html';
        $htmlVal = readFiles($filename2,$search_dir);
        echo ($htmlVal);
    }
    
}

/** 读取文件,返回文件内容
* @param {*} filename 文件名
* @param {*} search_dir 路径名
*/    
function readFiles($filename,$search_dir){
    $path = $search_dir.'/'.$filename;
    // return $path;
    $handle = fopen($path, "r");
    $contents = fread($handle, filesize ($path));
    return $contents;
    fclose($handle);
}

/** 找到后缀名为json的所有文件
* @param {*} path 路径
* 
*/
function getfiles( $path , &$files = array() ){
    if ( !is_dir( $path ) ) return null;
    $handle = opendir( $path );
    while ( false !== ( $file = readdir( $handle ) ) ) {
        if ( $file != '.' && $file != '..' ) {
            $path2 = $file;
            if ( is_dir( $path2 ) ) {
                getfiles( $path2 , $files );
            } else {
                if ( preg_match( "/\.(json)$/i" , $file ) ) {
                    $files[] = $path2;
                }
            }
        }
    }
    return $files;
}









?>