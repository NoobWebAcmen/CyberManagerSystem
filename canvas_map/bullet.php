

<!DOCTYPE html>
<html class="no-js">
    
    <head>
    <!-- <meta charset="UTF-8"> -->
        <title>CyberManagerV1.0</title>

        <!-- Bootstrap -->
        <link href="../bootstrap/css/bootstrap.min.css" rel="stylesheet" media="screen">
        <link href="../bootstrap/css/bootstrap-responsive.min.css" rel="stylesheet" media="screen">
        <link href="../vendors/easypiechart/jquery.easy-pie-chart.css" rel="stylesheet" media="screen">
        <link href="../images/cyber.ico" rel="shortcut icon" />
        <!-- HTML5 shim, for IE6-8 support of HTML5 elements -->
        <link href="../assets/styles.css" rel="stylesheet" media="screen">
        
    </head>
    <?php  
        require_once '../cookies/common.php';
        checkUserValidate();
    ?> 
    
    <body >
        
        <div class="navbar navbar-fixed-top" >
            <div class="navbar-inner">
                <div class="container-fluid">
                    <a class="btn btn-navbar" data-toggle="collapse" data-target=".nav-collapse"> <span class="icon-bar"></span>
                     <span class="icon-bar"></span>
                     <span class="icon-bar"></span>
                    </a>
                    <a class="brand" href="../index/index.php">坦克后台工具</a>
                    <div class="nav-collapse collapse">
                        <ul class="nav pull-right">
                            <li class="dropdown">
                                <a href="#" role="button" class="dropdown-toggle" data-toggle="dropdown" id="whatever"> <i class="icon-user"></i><?php showUserName();?><i class="caret"></i></a>
                                <ul class="dropdown-menu">
                                    <li>
                                        <a tabindex="-1" href="#">个人资料</a>
                                    </li>
                                    <li class="divider"></li>
                                    <li>
                                        <a tabindex="-1" href="#">修改密码</a>
                                    </li>
                                    <li>
                                        <a tabindex="-1" href="../login/logout.php">切换账号</a>
                                    </li>
                                    <li>
                                        <a tabindex="-1" href="../login/logout.php">退出登录</a>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                        <ul class="nav">
                            <li class="active">
                                <a href="#">主页</a>
                            </li>
                            <li class="dropdown">
                                <a href="#" data-toggle="dropdown" class="dropdown-toggle">功能 <b class="caret"></b>

                                </a>
                                <ul class="dropdown-menu" id="menu1">
                                    <li>
                                        <a href="#">Tools <i class="icon-arrow-right"></i>

                                        </a>
                                        <ul class="dropdown-menu sub-menu">
                                            <li>
                                                <a href="#">Reports</a>
                                            </li>
                                            <li>
                                                <a href="#">Logs</a>
                                            </li>
                                            <li>
                                                <a href="#">Errors</a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li>
                                        <a href="#">SEO Settings</a>
                                    </li>
                                    <li>
                                        <a href="#">Other Link</a>
                                    </li>
                                    <li class="divider"></li>
                                    <li>
                                        <a href="#">Other Link</a>
                                    </li>
                                    <li>
                                        <a href="#">Other Link</a>
                                    </li>
                                </ul>
                            </li>
                            <li class="dropdown">
                                <a href="#" role="button" class="dropdown-toggle" data-toggle="dropdown">扩展应用 <i class="caret"></i>

                                </a>
                                <ul class="dropdown-menu">
                                    <li>
                                        <a tabindex="-1" href="#">Blog</a>
                                    </li>
                                    <li>
                                        <a tabindex="-1" href="#">News</a>
                                    </li>
                                    <li>
                                        <a tabindex="-1" href="#">Custom Pages</a>
                                    </li>
                                    <li>
                                        <a tabindex="-1" href="#">Calendar</a>
                                    </li>
                                    <li class="divider"></li>
                                    <li>
                                        <a tabindex="-1" href="#">FAQ</a>
                                    </li>
                                </ul>
                            </li>
                         
                    </div>
                    <!--/.nav-collapse -->
                </div>
            </div>
        </div>
       
        <div class="container-fluid map" id = "mainContent"> 
                <!--/span-->
                <div class="span9 map_width" id="content">
                    <div class="row-fluid clear">
                        <div id="powderSideBar" class="fl powederSideBarClass">
                            <div id="powderIdInfo" class="powderIdInfoClass">
                                <p class="powderP">炮弹ID</p>
                                <p class="powderP" id="powderIdOfP"><?php echo $_GET['id'] ?></p>
                            </div>
                            <div id="topBar">
                                <div id="ChariotInfo" class="ChariotInfoClass">
                                    <a href="javascript:;" id="ChariotInfoA">战车发射周期</a>
                                </div>
                           
                                <div id="bulletOptionInfo" class="bulletOptionInfoClass">
                                    <a href="javascript:;" id="bulletOptionInfoA" class="showPicMode"></a>
                                    <p>弹头生命周期</p>
                                </div>
                                
                            </div>
                            
                            <div id="bulletBottomBtn">
                                    <button id="saveData">保存数据</button>
                                    <button id="downloadData">导出数据</button>
                                    <button id="home">继续添加炮弹</button>
                            </div>
                        </div>
                        <div id="bulletsMod_1" class = "fl parentHiddTag hidd ChariotOptionsClass"> 
                            <p id="bulletsModP_1" class="flyControlP">弹头1</p>
                            <div id="speedMod_1" class="flyControlDiv">
                                <p class="flyControlP1 P2">初速度</p>
                                <input type="text" id="speedModInp_1" class="flyBeginAxies" />
                            </div>
                            <div id="sizeSel_1" class="flyControlDiv">
                                <p class="flyControlP1 P5">弹头形状</p>
                                <select id="sizSel_1">
                                    <option value="size1">圆形</option>
                                    <option value="size2">方块</option>
                                </select>
                            </div>
                            <div id="cycleMod_1" class="flyControlDiv">
                                <p class="flyControlP1 P4">半径</p>
                                <input type="text"  id="cycle_1">
                            </div>
                            <div id="sizeMod_1" class="flyControlDiv ">
                                <p class="flyControlP1 P3">宽 高</p>
                                <label for="" class="flyBeginLab widthLab">W: </label>
                                <input type="text" id="sizeModWid_1" class="flyBeginInpAxies widthInp" readonly="readonly"/>
                                <label for="" class="flyBeginLab heightLab">H: </label>
                                <input type="text" id="sizeModHei_1" class="flyBeginInpAxies heightInp" readonly="readonly"/>
                            </div>
                            <div id="massMod_1" class="flyControlDiv">
                                <p class="flyControlP1 P4">质量</p>
                                <input type="text" id="massModInp_1" class="flyBeginAxies" />
                            </div>
                            <div id="rotationMomentMod_1" class="flyControlDiv">
                                <p class="flyControlP1 P5">旋转速度</p>
                                <input type="text" id="rotationMomentModInp_1" class="flyBeginAxies" />
                            </div>
                            <div id="imgSrc_1" class="flyControlDiv imgSrcDiv">
                                <p class="flyControlP1 P5">图片资源</p>
                                <input type="file" id="filesSrc_1" name="files[]" multiple />
                                <span id="fileSpan_1" class="fileSpan"></span>
                                <input type="text" id="filesName_1" class="fileName"/>
                            </div>
                            <div id="saveMod_1">
                                <button class="flyControlBtn" id="resetModBtn_1">重填</button>
                            </div>
                        </div>
                        <div id="ChariotOptions" class="fl parentHiddTag hidd ChariotOptionsClass">
                            <h1>战车发射周期</h1>
                            <div class ="bulletControlBar clear ">
                                <div class="grade_warp">  
                                    <div class="User_ratings User_grade">  
                                        <div class="ratings_bars">  
                                            <span id="title0">0</span>  
                                            <span class="bars_10">0</span>  
                                            <div class="scale" id="bar0">  
                                                <div></div>  
                                                <span id="btn0"></span>  
                                            </div>  
                                            <span class="bars_10">
                                            <input type="text" class="bars_input" value= "20" id="barsInp1"/>   
                                            </span>  
                                        </div>
                                        <div>
                                            <button class="bars_button" id="bars_button1">Add</button>
                                        </div> 
                                        <div id="bulletAddList" >
                                            <ul class="bulletAddUl clear " id="bulletAddInfoUl">
                                            <!-- 添加的子弹头显示部分 -->
                                                <li class="clear" id="BulletList1">
                                                    <label class="bars_info_label fl" id="Bullet1">弹头1</label>
                                                    <input type="text" class="bars_info_input fl" id="bars_info_input_1" tag="1" value="0">
                                                    <a class="bars_info_button fr" id="BulletDel1">
                                                        <img src="../images/page1/u99.png" />
                                                    </a>
                                                </li>
                                            </ul>
                                        </div> 
                                    </div>  
                                </div>
                            </div>
                        </div>
                        <div id="trailOfMove_0_0" class="fl parentHiddTag hidd trailOfMoveClass ">
                            <div id="trailSel" class="clear">
                                <select  id="trailSelect_0_0">
                                    <!-- <option value="0">请选择运动轨迹</option> -->
                                    <option value="trailMove1" >飞行</option>
                                    <option value="trailMove2" >滚动</option>
                                    <option value="trailMove3" >弹跳</option>
                                    <option value="trailMove4" >粘着</option>
                                </select>
                            </div>

                            <form method="post" action="">                      <!-- 表单提交1 -->
                                
                            <div id="flyControlContent_0_0" class="hiddTag hidd flyControlContentClass">
                                <!-- 飞行控制 -->
                                <div class="flyControlDiv" id="flyDiv1_0_0">
                                    <p class="flyControlP">起始点</p>
                                    <select class="flyControlSel specialSel1" id="flyBegin_0_0">
                                        <option value="beginSel3">继承</option>
                                        <option value="beginSel1">偏移坐标</option>
                                        <option value="beginSel2">绝对坐标</option>
                                        
                                    </select>
                                    <label for="" class="flyBeginLab">x: </label>
                                    <input type="text" id="flyContorlBeginInpX_0_0" class="flyBeginInpAxies" readonly="readonly"/>
                                    <label for="" class="flyBeginLab">y: </label>
                                    <input type="text" id="flyContorlBeginInpY_0_0" class="flyBeginInpAxies" readonly="readonly"/>
                                </div>
                                <div class="flyControlDiv" id="flyDiv2_0_0">
                                    <p class="flyControlP">飞行角度</p>
                                    <select class="flyControlSel" id="flyVen_0_0">
                                        <option value="vendor3">继承</option>
                                        <option value="vendor1">偏移方向</option>
                                        <option value="vendor2">绝对方向</option>
                                        
                                    </select>
                                    <input type="text" id="flyContorlVendorInpX_0_0" class="flyBeginAxies flyBeginEx" readonly="readonly"/>

                                </div>
                                <div class="flyControlDiv" id="flyDiv3_0_0">
                                    <p class="flyControlP">飞行速度</p>
                                    <select class="flyControlSel" id="flySpeed_0_0">
                                        <option value="strength3">继承</option>
                                        <option value="strength1">偏移速度</option>
                                        <option value="strength2">绝对速度</option>
                                        
                                    </select>
                                    <input type="text" id="flyContorlStrengthInpX_0_0" class="flyBeginAxies flyBeginEx" readonly="readonly"/>
                                    
                                </div>
                                <div class="flyControlDiv flyExtra" id="flyDiv4_0_0">
                                    <p class="flyControlP">飞行模式</p>
                                    <select class="flyControlSel" id="flyMode_0_0">
                                        <option value="isGravity">抛物线</option>
                                        <option value="notGravity">直线</option>
                                    </select>
                                </div>
                                <div class="flyControlDiv flyExtra" id="flyDiv5_0_0">
                                    <p class="flyControlP">飞行阻力</p>
                                    <input type="text" id="flyContorlResisInpX_0_0" class="flyBeginAxies" />
                                </div>
                                <div class="flyControlDiv flyExtra" id="flyDiv6_0_0">
                                    <p class="flyControlP">跟踪效果</p>
                                    <select class="flyControlSel" id="flyTrack_0_0">
                                        <option value="notTrack">否</option> 
                                        <option value="isTrack">是</option>
                                    </select>
                                </div>
                                <div class="flyControlDiv flyExtra" id="flyDiv7_0_0">
                                    <p class="flyControlP">旋转方式</p>
                                    <select class="flyControlSel" id="flyRotateMod_0_0">
                                        <option value="notRotate">不旋转</option>
                                        <option value="rotateSelf">自旋转</option>
                                        <option value="rotateOfAngel">随角度旋转</option>
                                    </select>
                                </div>
                                <div class="trackValue " id="flyDiv8_0_0">
                                    <label class="trackValueLab">检测范围</label>
                                    <input type="text" class="trackValueInp" id="trackArea_0_0">
                                    <label class="trackValueLab">追踪角度</label>
                                    <input type="text" class="trackValueInp" id="trackAngle_0_0">
                                    <label class="trackValueLab">检测目标</label>
                                    <select class="trackValueSel" id="trackTarget_0_0">
                                        <option value="anemy">敌方</option>
                                        <option value="partner">友方</option>
                                        <option value="both">双方</option>
                                    </select>
                                </div>
                            </div>
                            <div id="rollControl_0_0" class="hiddTag hidd rollControlClass">
                                <!-- 滚动控制 -->
                                <div class="rollControlList" id="rollDiv2_0_0">
                                    <p class="rollControlP">滚动速度</p>
                                    <input type="text" id="rollControlInp2_0_0" class="rollInp" />
                                </div>
                                <div class="flyControlDiv" id="rollDiv3_0_0">
                                    <p class="flyControlP">旋转方式</p>
                                    <select class="flyControlSel" id="rollRotateMod_0_0">
                                        <option value="notRotate">不旋转</option>
                                        <option value="rotateSelf">自旋转</option>
                                        <option value="rotateOfAngel">随角度旋转</option>
                                    </select>
                                </div>
                            </div>
                            <div id="jumpControl_0_0" class="hiddTag hidd jumpControlClass">
                                <!-- 弹跳控制 -->
                                <div class="jumpControlList" id="jumpDiv3_0_0">
                                    <p class="jumpControlP">弹力度</p>
                                    <input type="text" id="jumpControlInp_0_0" class="jumpInp" />
                                </div>
                                <div class="jumpControlList" id="jumpDiv4_0_0">
                                    <p class="jumpControlP">阻力值</p>
                                    <input type="text" id="elasticControlInp_0_0" class="jumpInp" />
                                </div>
                                <div class="flyControlDiv" id="jumpDiv5_0_0">
                                    <p class="flyControlP">旋转方式</p>
                                    <select class="flyControlSel" id="jumpRotateMod_0_0">
                                        <option value="notRotate">不旋转</option>
                                        <option value="rotateSelf">自旋转</option>
                                        <option value="rotateOfAngel">随角度旋转</option>
                                    </select>
                                </div>
                            </div>
                            <div id="snapControl_0_0" class="hiddTag hidd snapControlClass">
                                <!-- 黏着 -->
                                <p class="triggerResultOptionP">无</p>
                            </div>

                            </form>
                                
                            <div id="flyControlBottom_0_0">
                                    <button class="flyControlBtn" id="resetFlyBtn_0_0">重填</button>
                            </div>
                                    
                        </div>
                            <!-- 触发条件 -->
                        <div id="triggerConditionMod_0_0_0" class="clear parentHiddTag hidd triggerConditionModClass">
                            <div id="triggerConditons_0_0_0" class="clear triggerConditonsClass"> 
                                <div class="triggerSel triggerTop fl">
                                    <p class="triggerConditonP fl" id="triggerConditonsP_0_0_0">触发条件1
                                    <span class="triggerAddP">&nbsp;&nbsp;1_1</span>
                                    </p><!-- 此处文字根据点击触发条件模块改变-->
                                    <select name="" id="triggerSelect_0_0_0" class="triggerSelection">
                                        <option value="01">------请选择条件-------</option>
                                        <option value="triggerSel1">时间</option>
                                        <option value="triggerSel2">行进距离</option>
                                        <option value="triggerSel3">接触(地形)</option>
                                        <option value="triggerSel4">接触(战车)</option>
                                    </select>
                                </div>
                                <a href="javascript:;" id="triggerCondition_0_0_0" class="triggerResultA fr triggerResultAEx"><img src="../images/page1/u99.png" alt=""></a>
                                <form action="" method="post" class="parentHiddTag">    <!-- 表单验证2 -->
                                    
                                    <div class="triggerShowInfo brotherHiddTagTop clear"id="timeInfo_0_0_0">
                                        <p class="triggerP fl">时长</p>
                                        <input type="text" class="triggerInp fr" id="time_0_0_0" />
                                    </div>
                                    <div class="triggerShowInfo brotherHiddTagTop clear" id="distanceInfo_0_0_0">
                                        <p class="triggerP fl">行进距离</p>
                                        <input type="text" class="triggerInp fr" id="input_0_0_0" />
                                    </div>
                                    <div class="triggerShowInfo brotherHiddTagTop" id="pathInfo_0_0_0">
                                    
                                    </div>
                                    <div class="triggerShowInfo  brotherHiddTagTop clear" id="charitoInfo_0_0_0">
                                        <input type="checkbox" id="charitoChecka_0_0_0" class="chk fl" /> 
                                        <label for="charitoChecka_0_0_0" class="fl labelLeft"></label> <p class="charitoLabel_p fl">敌方战车</p>
                                        <input type="checkbox" id="charitoCheckb_0_0_0" class="chk fl" /> 
                                        <label for="charitoCheckb_0_0_0" class="fl"></label> <p class="charitoLabel_p fl">友方战车</p>
                                    </div>

                                </form>

                            </div>

                            <div id="triggerConditionResult_0_0_0" class="clear triggerConditionResultClass">
                                <p class="triggerConditonP triggerConditionPExtra">触发结果</p>
                                <div id="triggerResultSideBar_0_0_0" class="fl">
                                    <ul id="triggerResultSideList_0_0_0" class="triggerResultSideListClass">
                                        <li id="triggerResultLi1_0_0_0" class="triggerResultLis">触发结果1</li>
                                        <li id="triggerResultLi2_0_0_0" class="triggerResultLis">触发结果2</li>
                                        <li id="triggerResultLi0_0_0_0" class="triggerResultLis">[添加]</li>
                                    </ul>
                                </div>
                                
                                <div id="triggerResultOption_1_0_0_0" class="fl brotherHiddTag hidd triggerResultOptionClass">
                                    <div id="triggerResultOptionTop_1_0_0_0" class="triggerResultOptionTopClass">
                                        <p class="triggerConditonP triggerConditionPExtra" id="triggerConditonP_1_0_0_0"></p> <!-- 触发结果名字与侧边栏文字相同-->
                                        <select class="triggerResultSelect" id="triggerResultSel_1_0_0_0">
                                            <option value="0">----请选择触发结果----</option>
                                            <option value="triggerResult1">运动轨迹</option>
                                            <option value="triggerResult2">效果(值)</option>
                                            <option value="triggerResult3">添加BUFF</option>
                                            <option value="triggerResult4">效果(地形)</option>
                                            <option value="triggerResult5">效果(美术)</option>
                                            <option value="triggerResult6">ADD</option>
                                            <option value="triggerResult7">END</option>
                                        </select>
                                        <a href="javascript:;" id="triggerResult_1_0_0_0" class="triggerResultA"><img src="../images/page1/u99.png" alt=""></a>
                                    </div>
                                    <form action="" method="post">
                                        <div id="triggerResultOptionBottom_1_0_0_0" class="brotherHiddTag hidd triggerResultOptionBottomClass">
                                            <div id="triggerOfTrail_1_0_0_0" class="brotherHiddTag hidd">
                                                <p class="triggerResultOptionP" id = 'triP_1_0_0_0'></p><!--轨迹阶段名符合更改-->
                                            </div>
                                            <div id="triggerOfEffectOfValue_1_0_0_0" class="brotherHiddTag hidd">
                                                <div id="effectOfValuea_1_0_0_0" class="effectOfValue">
                                                    <p class="triggerOfP">影响范围</p>
                                                    <input type="text" class="triggerOfInp" id="triggerOfInpa_1_0_0_0" >
                                                </div>
                                                <div id="effectOfValueb_1_0_0_0" class="effectOfValue">
                                                    <p class="triggerOfP">影响对象</p>
                                                    <input type="checkbox" id="charitoCheckc_1_0_0_0" class="chk" /> 
                                                    <label for="charitoCheckc_1_0_0_0" class="effectOfValue_label"></label> <p class="effectOfValue_p">敌方战车</p>
                                                    <input type="checkbox" id="charitoCheckd_1_0_0_0" class="chk" /> 
                                                    <label for="charitoCheckd_1_0_0_0" class="effectOfValue_label"></label> <p class="effectOfValue_p">友方战车</p>
                                                </div>
                                                <div id="effectOfValuec_1_0_0_0" class="effectOfValue">
                                                    <p class="triggerOfP">值类型</p>  
                                                    <select name="" id="effectOfValueSela_1_0_0_0" class="effectOfValue_sel">
                                                        <option value="triggerValue0">请选择值类型</option>
                                                        <option value="triggerValue1">HP</option>
                                                        <option value="triggerValue2">护盾</option>
                                                        <option value="triggerValue3">电量</option>
                                                    </select>
                                                </div>
                                                <div id="effectOfValued_1_0_0_0" class="effectOfValue">
                                                    <p class="triggerOfP ">值</p>
                                                    <input type="text" class="triggerOfInp triggerOfInpExtra" id="triggerOfInpb_1_0_0_0" />
                                                </div>
                                                <div id="effectOfValuee_1_0_0_0" class="effectOfValue">
                                                    <p class="triggerOfP">伤害属性</p>  
                                                    <select name="" id="effectOfValueSelb_1_0_0_0" class="effectOfValue_sel  effectOfValue_selExtra">
                                                        <option value="triggerHurt0">请选择伤害属性</option>
                                                        <option value="triggerHurt1">动能</option>
                                                        <option value="triggerHurt2">热能</option>
                                                        <option value="triggerHurt3">电磁</option>
                                                        <option value="triggerHurt4">腐蚀</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div id="triggerOfAddBuff_1_0_0_0" class="brotherHiddTag hidd">
                                                <div id="addBuffOfValuea_1_0_0_0" class="effectOfValue">
                                                    <p class="triggerOfP">影响范围</p>
                                                    <input type="text" class="triggerOfInp" id="triggerOfInpc_1_0_0_0" >
                                                </div>
                                                <div id="addBuffOfValueb_1_0_0_0" class="effectOfValue">
                                                    <p class="triggerOfP">影响对象</p>
                                                    <input type="checkbox" id="charitoChecke_1_0_0_0" class="chk" /> 
                                                    <label for="charitoChecke_1_0_0_0" class="effectOfValue_label"></label> <p class="effectOfValue_p">敌方战车</p>
                                                    <input type="checkbox" id="charitoCheckf_1_0_0_0" class="chk" /> 
                                                    <label for="charitoCheckf_1_0_0_0" class="effectOfValue_label"></label> <p class="effectOfValue_p">友方战车</p>
                                                </div>
                                                <div id="addBuffOfValuec_1_0_0_0" class="effectOfValue">
                                                    <p class="triggerOfP">BUFF ID</p>
                                                    <input type="text" class="triggerOfInp" id="triggerOfInpd_1_0_0_0" >
                                                </div>
                                            </div>
                                            <div id="triggerOfTerrianOfValue_1_0_0_0" class="brotherHiddTag hidd">
                                                <div id="terrianOfValuea_1_0_0_0" class="effectOfValue">
                                                    <p class="triggerOfP">破坏范围</p>
                                                    <input type="text" class="triggerOfInp" id="triggerOfInpe_1_0_0_0" >
                                                </div>
                                                <div id="terrianOfValueb_1_0_0_0" class="effectOfValue">
                                                    <p class="triggerOfP">边缘类型</p>
                                                    <select class="effectOfValue_sel  effectOfValue_selExtra">
                                                        <option value="">---请选择破坏地图类型---</option>
                                                        <!-- 后面添加破坏类型 -->
                                                    </select>
                                                </div>
                                            </div>
                                            <div id="triggerOfArtOfValue_1_0_0_0" class="brotherHiddTag hidd">
                                                <div id="ArtOfValue_1_0_0_0" class="effectOfValue_art">
                                                    <input type="file" id="filesSrc_1_0_0_0" name="files[]" multiple  class="fileSrcInp"/>
                                                    <input type="text" id="filesName_1_0_0_0" class="fileName1"/>
                                                    <span id="fileSpan_1_0_0_0" class="fileSpan1"></span>
                                                </div>
                                            </div>
                                            <div id="triggerOfAddBullet_1_0_0_0" class="brotherHiddTag hidd">
                                                <input class="bars_buttonExt" id="bars_button_1_0_0_0" type="button" value="ADD"/>
                                                <div id="bulletAddList1_1_1_1" >
                                                    <ul class="bulletAddUl clear " id="bulletAddInfoUl_1_0_0_0">
                                                        <!-- 添加的子弹头显示部分 -->
                                                    </ul>
                                                </div> 
                                            </div>
                                            <div id="triggerOfEnd_1_0_0_0" class="brotherHiddTag hidd">
                                                <p class="triggerResultOptionP">结束</p>
                                            </div>

                                        </div>
                                    </form>
                                        <div id="triggerResultBtn_1_0_0_0">
                                            <button class="triggerResultOfBtn" id="triggerResBtn_1_0_0_0">重设</button>
                                        </div>  
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

        </div>
    </div>
        <!--/.fluid-container-->
    </body >

        <script type="text/javascript" src="cavas_js/jCanvaScript.1.5.18.min.js"></script>
        <script src="../vendors/jquery-1.9.1.min.js"></script>
        <script src="../assets/zxx.drag.1.0-min.js"></script>
        <script src="../bootstrap/js/bootstrap.min.js"></script>
        <script src="../vendors/easypiechart/jquery.easy-pie-chart.js"></script>
        <script src="../canvas_map/cavas_js/getVal.js"></script>
        <script src="../canvas_map/cavas_js/addResponse.js"></script>
        <script src="../canvas_map/cavas_js/addMod.js"></script>
        <script src="../canvas_map/cavas_js/addEvent.js"></script>
        <script src="../canvas_map/cavas_js/mainScripts.js"></script>
        <script src="../canvas_map/cavas_js/bullet_proto.js"></script>
        <script src="../common/baseTools.js"></script>
        
</html>


