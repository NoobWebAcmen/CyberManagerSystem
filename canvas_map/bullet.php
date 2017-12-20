

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
                           <div id="powderSideBar" class="fl">
                                <div id="powderIdInfo" >
                                    <p class="powderP">炮弹ID</p>
                                    <p class="powderP">000001</p>
                                </div>
                                <div id="ChariotInfo">
                                    <a href="javascript:;" id="ChariotInfoA">战车发射周期</a>
                                </div>
                                <div id="bulletOptionInfo">
                                    <a href="javascript:;" id="bulletOptionInfoA" class="showPicMode"></a>
                                    <p>弹头生命周期</p>
                                </div>
                            <!-- 动态添加div块段 -->

                                <div id="bulletOption1" class="bulletName clear">
                                    <a href="javascript:;" id="bulletOptionA" class="showPicMode fl"></a>
                                    <p id="bulletName1" class="bulletNames fl">弹头1</p>

                                    <div id="bulletOptionCondition1" class="bulletCondtion clear">
                                        <a href="javascript:;" id="bulletOptionConditionA" class="showPicMode fl"></a>
                                        <p class="bulletNames fl">轨迹阶段1</p>
                                        
                                        <div id="bulletOptionConditionInfo" class="bulletCondtionInfo">
                                            <a href="javascript:;" id="pathTrail1">运动轨迹</a>
                                            <a href="javascript:;" id="triggerConditon1">触发条件1</a>
                                            <a href="javascript:;" id="triggerConditon2">触发条件2</a>
                                            <a href="javascript:;" id="addTriggerCondition">+ 添加条件</a>
                                            <!-- 在此处添加触发条件 -->
                                        </div>
                                    </div>

                                    <div>
                                        <!-- 此处添加轨迹阶段2或更多 -->
                                    </div>

                                </div>

                                <div>
                                    <!-- 此处添加弹头2或更多 -->
                                </div>
                        <!-- 动态添加div块段结束 -->

                                <div id="bulletBottomBtn">
                                    <button>预览</button>
                                    <button>导出数据</button>
                                    <button>返回主页</button>
                                </div>
                           </div>
                            <div id="ChariotOptions" class="fl ">
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
                                                <input type="text" class="bars_input" value= "20"/>   
                                                </span>  
                                            </div>
                                            <div>
                                                <button class="bars_button">Add</button>
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
                            <div id="trailOfMove" class="fl">
                                <div id="trailSel">
                                    <select  id="trailSelect">
                                        <option value="trailMove1">飞行</option>
                                        <option value="trailMove2">滚动</option>
                                        <option value="trailMove3">弹跳</option>
                                        <option value="trailMove4">粘着</option>
                                    </select>
                                </div>
                                <div id="flyControlContent">
                                    <!-- 飞行控制 -->
                                    <div class="flyControlDiv">
                                        <p class="flyControlP">起始点</p>
                                        <select class="flyControlSel specialSel1">
                                            <option value="beginSel1">延续</option>
                                            <option value="beginSel2">坐标</option>
                                            <option value="beginSel3">偏移坐标</option>
                                        </select>
                                        <input type="text" id="flyContorlBeginInp" class="flyBeginInp"/>
                                    </div>
                                    <div class="flyControlDiv">
                                        <p class="flyControlP">方向</p>
                                        <select class="flyControlSel specialSel">
                                            <option value="vendor1">延续</option>
                                            <option value="vendor2">坐标</option>
                                            <option value="vendor3">偏移坐标</option>
                                        </select>
                                        <input type="text" id="flyContorlVendorInp"class="flyBeginInp"/>
                                    </div>
                                    <div class="flyControlDiv">
                                        <p class="flyControlP">力度</p>
                                        <select class="flyControlSel specialSel">
                                            <option value="strength1">延续</option>
                                            <option value="strength2">坐标</option>
                                        </select>
                                        <input type="text" id="flyContorlStrenthInp" class="flyBeginInp"/>
                                    </div>
                                    <div class="flyControlDiv">
                                        <p class="flyControlP">重力影响</p>
                                        <select class="flyControlSel">
                                            <option value="isGravity">是</option>
                                            <option value="notGravity">否</option>
                                        </select>
                                    </div>
                                    <div class="flyControlDiv">
                                        <p class="flyControlP">阻力影响</p>
                                        <select class="flyControlSel">
                                            <option value="isResistance">是</option>
                                            <option value="notResistance">否</option>
                                        </select>
                                    </div>
                                    <div class="flyControlDiv">
                                        <p class="flyControlP">跟踪效果</p>
                                        <select class="flyControlSel">
                                            <option value="isTrack">是</option>
                                            <option value="notTrack">否</option>
                                        </select>
                                    </div>
                                </div>
                                <div id="rollControl">
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
                                <div id="jumpControl">
                                    <!-- 滚动控制 -->
                                    <div class="jumpControlList">
                                        <p class="jumpControlP">弹力度</p>
                                        <input type="text" id="jumpControlInp" class="jumpInp"/>
                                    </div>
                                    <div class="jumpControlList">
                                        <p class="jumpControlP">受重力度</p>
                                        <input type="text" id="jumpControlInp" class="jumpInp"/>
                                    </div>
                                </div>
                                <div id="flyControlBottom">
                                        <button class="flyControlBtn">保存</button>
                                        <button class="flyControlBtn">重填</button>
                                </div>
                                    
                            </div>
                                <!-- 触发条件 -->
                            <div id="triggerConditionMod1">
                                    <div id="triggerConditons1">
                                        <p class="triggerConditonP">触发条件1</p><!-- 此处文字根据点击触发条件模块改变-->
                                        <div class="triggerSel">
                                                <select name="" id="">
                                                    <option value="triggerSel1">时间</option>
                                                    <option value="triggerSel2">行进距离</option>
                                                    <option value="triggerSel3">接触(地形)</option>
                                                    <option value="triggerSel4">接触(战车)</option>
                                                </select>
                                        </div>
                                        <div class="triggerShowInfo">
                                            <p class="triggerP">时长</p>
                                            <input type="text" class="triggerInp"/>
                                        </div>
                                        <div class="triggerShowInfo">
                                            <p class="triggerP">行进距离</p>
                                            <input type="text" class="triggerInp"/>
                                        </div>
                                        <div class="triggerShowInfo">
                                           
                                        </div>
                                        <div class="triggerShowInfo">
                                            <label class="triggerLab">敌方战车</label>
                                            <input type="checkbox" value="" class="triggerLabInp"/>
                                            <label class="triggerLab">友方战车</label>
                                            <input type="checkbox" value="" class="triggerLabInp"/>
                                        </div>
    
                                    </div>
                                    <div id="triggerConditionResult">
                                        <p class="triggerConditonP">触发结果</p>
                                        <div id="triggerResultSideBar">
                                            <ul>
                                                <li>触发结果1</li>
                                                <li>触发结果2</li>
                                                <li>触发结果3</li>
                                                <li>触发结果4</li>
                                                <li>添加</li>
                                            </ul>
                                        </div>
                                        <div id="triggerResultOption">
                                            <div id="triggerResultOptionTop">
                                                <p>触发结果1</p> <!-- 触发结果名字与侧边栏文字相同-->
                                                <select>
                                                    <option value="0">选择触发结果</option>
                                                    <option value="triggerResult1">运动轨迹</option>
                                                    <option value="triggerResult2">效果(值)</option>
                                                    <option value="triggerResult3"> 添加BUFF</option>
                                                    <option value="triggerResult4">效果(地形)</option>
                                                    <option value="triggerResult5">效果(美术)</option>
                                                    <option value="triggerResult6">ADD</option>
                                                    <option value="triggerResult7">END</option>
                                                </select>
                                                <a href="javascript:;"><img src="../images/page1/u99.png" alt=""></a>
                                            </div>
                                            <div id="triggerResultOptionBottom">
                                                <div id="triggerOfNothing">
                                                    <p>无</p>
                                                </div>
                                                <div id="triggerOfTrail">
                                                    <p>已成功添加"轨迹阶段2"</p><!--轨迹阶段名符合更改-->
                                                </div>
                                                <div id="triggerOfValue">

                                                </div>
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
        
        
    </body>
</html>


