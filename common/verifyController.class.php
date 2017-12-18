<?php
    
public function verifyUserName(){

    $username = trim(isset($_REQUEST['username']) ? $_REQUEST)['username'] : '');

    switch ($this->_verifyUserName($username)) {
        case 0:
            $this->sendByAjax(array('message'=>'用户名验证成功！'));
            break;
        case 1:
            $this->sendByAjax(array('code'=>1,'message'=>'用户名不合法'));
        
 
        default:
            break;
    }
}

public function _verifyUserName($username){
    if(strlen($username) < 3) || strlen($username) > 16){
        return 1;
    }else{
        return 0;
    }
   
}


?>