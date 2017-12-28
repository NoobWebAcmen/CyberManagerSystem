

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
        <!--[if lt IE 9]>
            <script src="http://html5shim.googlecode.com/svn/trunk/html5.js"></script>
        <![endif]-->
        <script src="../vendors/modernizr-2.6.2-respond-1.1.0.min.js"></script>
        <script src="../vendors/xlsx.full.min.js"></script>   
        <link href="../assets/styles.css" rel="stylesheet" media="screen">
        
    </head>
    <?php  
        require_once '../cookies/common.php';
        checkUserValidate();
    ?> 
    
    <body>
    
        <div class="navbar navbar-fixed-top">
            <div class="navbar-inner">
                <div class="container-fluid">
                    <a class="btn btn-navbar" data-toggle="collapse" data-target=".nav-collapse"> <span class="icon-bar"></span>
                     <span class="icon-bar"></span>
                     <span class="icon-bar"></span>
                    </a>
                    <a class="brand" href="../index/index.php">Cyber后台管理系统V1.0</a>
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
        <div class="container-fluid map"> 
                <!--/span-->
                <div class="span9 map_width" id="content">
                    <div class="row-fluid clear">
                           <div id="powderSideBar" class="fl powederSideBarClass">
                                <div id="powderIdInfo" class="powderIdInfoClass">
                                    <p class="powderP">炮弹ID</p>
                                    <p class="powderP" id="powderIdOfP">000001</p>
                                </div>
                                <div id="ChariotInfo" class="ChariotInfoClass">
                                    <a href="javascript:;" id="ChariotInfoA">战车发射周期</a>
                                </div>
                                <div id="bulletOptionInfo" class="bulletOptionInfoClass">
                                    <a href="javascript:;" id="bulletOptionInfoA" class="showPicMode"></a>
                                    <p>弹头生命周期</p>
                                </div>
                            <!-- 动态添加div块段 -->

                                <div id="bulletOption1" class="bulletName clear">
                                    <a href="javascript:;" id="bulletOptionA" class="showPicMode fl"></a>
                                    <p id="bulletName1" class="bulletNames fl">弹头1</p>

                                    <div id="bulletOptionCondition1" class="bulletCondtion clear">
                                        <a href="javascript:;" id="bulletOptionConditionA" class="showPicMode fl"></a>
                                        <p class="bulletNames fl" id="bulletNamesOfP">轨迹阶段1</p>
                                        
                                        <div id="bulletOptionConditionInfo" class="bulletCondtionInfo">
                                            <a href="javascript:;" id="pathTrail1">运动轨迹</a>
                                            <a href="javascript:;" id="triggerConditon1">触发条件1</a>
                                            <a href="javascript:;" id="triggerConditon2">触发条件2</a>
                                            <!-- 在此处添加触发条件 -->
                                            <a href="javascript:;" id="addTriggerCondition">+ 添加条件</a>
                                            
                                        </div>
                                    </div>
                                        <!-- 此处添加轨迹阶段2或更多 -->
                                </div>

                                    <!-- 此处添加弹头2或更多 -->
                               
                        <!-- 动态添加div块段结束 -->

                                <div id="bulletBottomBtn">
                                    <button>预览</button>
                                    <button>导出数据</button>
                                    <button>返回主页</button>
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
                                                </ul>
                                                
                                            </div> 
                                        </div>  
                                    </div>
                                </div>
                            </div>
                            <!-- 运动轨迹模块 -->
                            <div id="trailOfMove" class="fl parentHiddTag hidd trailOfMoveClass">
                                <div id="trailSel">
                                    <select  id="trailSelect">
                                        <!-- <option value="0">请选择运动轨迹</option> -->
                                        <option value="trailMove1" >飞行</option>
                                        <option value="trailMove2" >滚动</option>
                                        <option value="trailMove3" >弹跳</option>
                                        <option value="trailMove4" >粘着</option>
                                    </select>
                                </div>

                                <form method="post" action="">                      <!-- 表单提交1 -->
                                    
                                <div id="flyControlContent" class="hiddTag hidd flyControlContentClass">
                                    <!-- 飞行控制 -->
                                    <div class="flyControlDiv">
                                        <p class="flyControlP">起始点</p>
                                        <select class="flyControlSel specialSel1">
                                            <option value="beginSel1">偏移坐标</option>
                                            <option value="beginSel2">绝对坐标</option>
                                        </select>
                                        <label for="" class="flyBeginLab">x: </label>
                                        <input type="text" id="flyContorlBeginInpX" class="flyBeginInpAxies"/>
                                        <label for="" class="flyBeginLab">y: </label>
                                        <input type="text" id="flyContorlBeginInpY" class="flyBeginInpAxies"/>
                                    </div>
                                    <div class="flyControlDiv">
                                        <p class="flyControlP">角度</p>
                                        <select class="flyControlSel specialSel">
                                            <option value="vendor1">偏移方向</option>
                                            <option value="vendor2">绝对方向</option>
                                            
                                        </select>
                                        <input type="text" id="flyContorlVendorInpX" class="flyBeginAxies"/>

                                    </div>
                                    <div class="flyControlDiv">
                                        <p class="flyControlP">速度</p>
                                        <select class="flyControlSel specialSel">
                                            <option value="strength1">偏移速度</option>
                                            <option value="strength2">绝对速度</option>
                                        </select>
                                        <input type="text" id="flyContorlStrengthInpX" class="flyBeginAxies"/>
                                        
                                    </div>
                                    <div class="flyControlDiv">
                                        <p class="flyControlP">飞行模式</p>
                                        <select class="flyControlSel">
                                            <option value="isGravity">抛物线</option>
                                            <option value="notGravity">直线</option>
                                        </select>
                                    </div>
                                    <div class="flyControlDiv">
                                        <p class="flyControlP">阻力影响</p>
                                        <input type="text" id="flyContorlResisInpX" class="flyBeginAxies"/>
                                    </div>
                                    <div class="flyControlDiv">
                                        <p class="flyControlP">跟踪效果</p>
                                        <select class="flyControlSel">
                                            <option value="isTrack">是</option>
                                            <option value="notTrack">否</option>
                                        </select>
                                    </div>
                                </div>
                                <div id="rollControl" class="hiddTag hidd rollControlClass">
                                    <!-- 滚动控制 -->
                                    <div class="rollControlList">
                                        <p class="rollControlP">距离</p>
                                        <input type="text" id="rollControlInp" class="rollInp"/>
                                    </div>
                                    <div class="rollControlList">
                                        <p class="rollControlP">速度</p>
                                        <input type="text" id="rollControlInp" class="rollInp"/>
                                    </div>
                                </div>
                                <div id="jumpControl" class="hiddTag hidd jumpControlClass">
                                    <!-- 弹跳控制 -->
                                    <div class="jumpControlList">
                                        <p class="jumpControlP">弹力度</p>
                                        <input type="text" id="jumpControlInp" class="jumpInp"/>
                                    </div>
                                    <div class="jumpControlList">
                                        <p class="jumpControlP">阻力值</p>
                                        <input type="text" id="elasticControlInp" class="jumpInp" readOnly="readOnly"/>
                                    </div>
                                </div>
                                <div id="snapControl" class="hiddTag hidd snapControlClass">
                                    <!-- 黏着 -->
                                    <p class="triggerResultOptionP">无</p>
                                </div>

                                </form>
                                
                                <div id="flyControlBottom">
                                        <button class="flyControlBtn">保存</button>
                                        <button class="flyControlBtn">重填</button>
                                </div>
                                    
                            </div>
                                <!-- 触发条件 -->
                            <div id="triggerConditionMod1" class="clear parentHiddTag hidd triggerConditionModClass">
                                    <div id="triggerConditons1" class="clear triggerConditonsClass"> 
                                        <div class="triggerSel triggerTop fl">
                                            <p class="triggerConditonP fl" id="triggerConditonsP">触发条件1</p><!-- 此处文字根据点击触发条件模块改变-->
                                            <select name="" id="triggerSelect" class="triggerSelection">
                                                <option value="01">------请选择条件-------</option>
                                                <option value="triggerSel1">时间</option>
                                                <option value="triggerSel2">行进距离</option>
                                                <option value="triggerSel3">接触(地形)</option>
                                                <option value="triggerSel4">接触(战车)</option>
                                            </select>
                                        </div>
                                        <a href="javascript:;" id="triggerCondition1" class="triggerResultA fr triggerResultAEx"><img src="../images/page1/u99.png" alt=""></a>
                                        <form action="" method="post" class="parentHiddTag">    <!-- 表单验证2 -->
                                           
                                            <div class="triggerShowInfo brotherHiddTagTop clear"id="timeInfo">
                                                <p class="triggerP fl">时长</p>
                                                <input type="text" class="triggerInp fr"/>
                                            </div>
                                            <div class="triggerShowInfo brotherHiddTagTop clear" id="distanceInfo">
                                                <p class="triggerP fl">行进距离</p>
                                                <input type="text" class="triggerInp fr"/>
                                            </div>
                                            <div class="triggerShowInfo brotherHiddTagTop" id="pathInfo">
                                            
                                            </div>
                                            <div class="triggerShowInfo  brotherHiddTagTop clear" id="charitoInfo">
                                                <input type="checkbox" id="charitoCheck1" class="chk fl" /> 
                                                <label for="charitoCheck1" class="fl labelLeft"></label> <p class="charitoLabel_p fl">敌方战车</p>
                                                <input type="checkbox" id="charitoCheck2" class="chk fl" /> 
                                                <label for="charitoCheck2" class="fl"></label> <p class="charitoLabel_p fl">友方战车</p>
                                            </div>

                                        </form>

                                    </div>

                                    <div id="triggerConditionResult" class="clear triggerConditionResultClass">
                                        <p class="triggerConditonP triggerConditionPExtra">触发结果</p>
                                        <div id="triggerResultSideBar" class="fl">
                                            <ul id="triggerResultSideList" class="triggerResultSideListClass">
                                                <li id="triggerResultLi1" class="triggerResultLis">触发结果1</li>
                                                <li id="triggerResultLi2" class="triggerResultLis">触发结果2</li>
                                                <li id="triggerResultLi3" class="triggerResultLis">触发结果3</li>
                                                <li id="triggerResultLi4" class="triggerResultLis">触发结果4</li>
                                                <li id="triggerResultLi0" class="triggerResultLis">[添加]</li>
                                            </ul>
                                        </div>
                                        
                                        <div id="triggerResultOption1" class="fl brotherHiddTag hidd triggerResultOptionClass">
                                            <div id="triggerResultOptionTop" class="triggerResultOptionTopClass">
                                                <p class="triggerConditonP triggerConditionPExtra" id="triggerConditonP1"></p> <!-- 触发结果名字与侧边栏文字相同-->
                                                <select class="triggerResultSelect" id="triggerResultSel">
                                                    <option value="0">----请选择触发结果----</option>
                                                    <option value="triggerResult1">运动轨迹</option>
                                                    <option value="triggerResult2">效果(值)</option>
                                                    <option value="triggerResult3">添加BUFF</option>
                                                    <option value="triggerResult4">效果(地形)</option>
                                                    <option value="triggerResult5">效果(美术)</option>
                                                    <option value="triggerResult6">ADD</option>
                                                    <option value="triggerResult7">END</option>
                                                </select>
                                                <a href="javascript:;" id="triggerResult1" class="triggerResultA"><img src="../images/page1/u99.png" alt=""></a>
                                            </div>
                                            <form action="" method="post">
                                                <div id="triggerResultOptionBottom" class="brotherHiddTag hidd triggerResultOptionBottomClass">
                                                    <div id="triggerOfTrail" class="brotherHiddTag hidd">
                                                        <p class="triggerResultOptionP">已成功添加"轨迹阶段2"</p><!--轨迹阶段名符合更改-->
                                                    </div>
                                                    <div id="triggerOfEffectOfValue" class="brotherHiddTag hidd">
                                                        <div id="effectOfValue1" class="effectOfValue">
                                                            <p class="triggerOfP">影响范围</p>
                                                            <input type="text" class="triggerOfInp" id="triggerOfInp1">
                                                        </div>
                                                        <div id="effectOfValue2" class="effectOfValue">
                                                            <p class="triggerOfP">影响对象</p>
                                                            <input type="checkbox" id="charitoCheck3" class="chk" /> 
                                                            <label for="charitoCheck3" class="effectOfValue_label"></label> <p class="effectOfValue_p">敌方战车</p>
                                                            <input type="checkbox" id="charitoCheck4" class="chk" /> 
                                                            <label for="charitoCheck4" class="effectOfValue_label"></label> <p class="effectOfValue_p">友方战车</p>
                                                        </div>
                                                        <div id="effectOfValue3" class="effectOfValue">
                                                            <p class="triggerOfP">值类型</p>  
                                                            <select name="" id="effectOfValueSel1" class="effectOfValue_sel">
                                                                <option value="triggerValue1">HP</option>
                                                                <option value="triggerValue2">护盾</option>
                                                                <option value="triggerValue3">电量</option>
                                                            </select>
                                                        </div>
                                                        <div id="effectOfValue4" class="effectOfValue">
                                                            <p class="triggerOfP ">值</p>
                                                            <input type="text" class="triggerOfInp triggerOfInpExtra" id="triggerOfInp2"/>
                                                        </div>
                                                        <div id="effectOfValue5" class="effectOfValue">
                                                            <p class="triggerOfP">伤害属性</p>  
                                                            <select name="" id="effectOfValueSel2" class="effectOfValue_sel  effectOfValue_selExtra">
                                                                <option value="triggerHurt1">动能</option>
                                                                <option value="triggerHurt2">热能</option>
                                                                <option value="triggerHurt3">电磁</option>
                                                                <option value="triggerHurt3">腐蚀</option>
                                                            </select>
                                                        </div>
                                                    </div>
                                                    <div id="triggerOfAddBuff" class="brotherHiddTag hidd">
                                                        <div id="addBuffOfValue1" class="effectOfValue">
                                                            <p class="triggerOfP">影响范围</p>
                                                            <input type="text" class="triggerOfInp" id="triggerOfInp3">
                                                        </div>
                                                        <div id="addBuffOfValue2" class="effectOfValue">
                                                            <p class="triggerOfP">影响对象</p>
                                                            <input type="checkbox" id="charitoCheck5" class="chk" /> 
                                                            <label for="charitoCheck5" class="effectOfValue_label"></label> <p class="effectOfValue_p">敌方战车</p>
                                                            <input type="checkbox" id="charitoCheck6" class="chk" /> 
                                                            <label for="charitoCheck6" class="effectOfValue_label"></label> <p class="effectOfValue_p">友方战车</p>
                                                        </div>
                                                        <div id="addBuffOfValue3" class="effectOfValue">
                                                            <p class="triggerOfP">BUFF ID</p>
                                                            <input type="text" class="triggerOfInp" id="triggerOfInp4">
                                                        </div>
                                                    </div>
                                                    <div id="triggerOfTerrianOfValue" class="brotherHiddTag hidd">
                                                        <div id="terrianOfValue1" class="effectOfValue">
                                                            <p class="triggerOfP">破坏范围</p>
                                                            <input type="text" class="triggerOfInp" id="triggerOfInp5">
                                                        </div>
                                                        <div id="terrianOfValue2" class="effectOfValue">
                                                            <p class="triggerOfP">边缘类型</p>
                                                            <select class="effectOfValue_sel  effectOfValue_selExtra">
                                                                <option value="">---请选择破坏地图类型---</option>
                                                                <!-- 后面添加破坏类型 -->
                                                            </select>
                                                        </div>
                                                    </div>
                                                    <div id="triggerOfArtOfValue" class="brotherHiddTag hidd">
                                                        <div id="ArtOfValue1" class="effectOfValue">
                                                            <p class="triggerOfP">美术资源</p>
                                                            <input type="text" class="triggerOfInp" id="triggerOfInp6">
                                                        </div>
                                                    </div>
                                                    <div id="triggerOfAddBullet" class="brotherHiddTag hidd">
                                                        <input class="bars_buttonExt" id="bars_button2" type="button" value="ADD"/>
                                                        <div id="bulletAddList1" >
                                                            <ul class="bulletAddUl clear " id="bulletAddInfoUl1">
                                                                <!-- 添加的子弹头显示部分 -->
                                                            </ul>
                                                        </div> 
                                                    </div>
                                                    <div id="triggerOfEnd" class="brotherHiddTag hidd">
                                                        <p class="triggerResultOptionP">结束</p>
                                                    </div>

                                                </div>
                                            </form>
                                             <div id="triggerResultBtn">
                                                <button class="triggerResultOfBtn">保存</button>
                                                <button class="triggerResultOfBtn">重设</button>
                                             </div>  
                                        </div>
                                    </div>
                            </div>
                    </div>
                </div>
        </div>

    </div>
        <!--/.fluid-container-->
        
        <script type="text/javascript" src="cavas_js/jCanvaScript.1.5.18.min.js"></script>
        <script src="../vendors/jquery-1.9.1.min.js"></script>
        <script src="../assets/zxx.drag.1.0-min.js"></script>
        <script src="../bootstrap/js/bootstrap.min.js"></script>
        <script src="../vendors/easypiechart/jquery.easy-pie-chart.js"></script>
        <script src="../assets/scripts.js"></script>
        <script src="../canvas_map/cavas_js/canvas_bullet.js"></script>
        <script src="../canvas_map/cavas_js/getVal.js"></script>
        
        
    </body>
</html>


