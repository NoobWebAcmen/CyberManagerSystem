/**
 * 此文件用于载入炮弹具体内容的js动作
 */

/**
 * 战车发射周期点击
 */
var firstNum = loadVal.bulNum + 1;
$('#ChariotInfoA').click(function(){
    show($('#ChariotOptions'),1);
});

/**
 * 战车发射周期里点击ADD，添加子弹头列表,添加数据
 */
$('#bars_button1').click(function(){
	loadVal.bulNum += 1;
	addModList(loadVal.bulNum,$('#bulletAddInfoUl'),1,loadVal);
	addBullet(loadVal.bulNum,loadVal);
	getAddBulletInfo(loadVal.bulNum,1,loadVal);
});

/**
 * 回车输入炮弹发射周期时间框，改变表现形式，同时改变数据
 */
$('.bars_input').keydown(function(e){
		
	if(e.keyCode == "13"){
		$(this).val(this.value);
		changeDuration(this.value,loadVal);
		if(scale.btn.style.left){
			scale.btn.style.left = 0 + 'px';
			scale.step.style.width = 0 +'px';
			scale.title.innerHTML = 0;
		}
	}
});
/**
 * 导出数据按钮
 */
$('#downloadData').click(function(){
	if(loadVal.saveFlag){
		if(bulletInfo.Tip(3) == true){
			funDownload(loadVal.bulletsData,'bulletConfig.lua',1);
		}else{
			funDownload(loadVal.bulletsData,'bulletConfig.lua',2);
		}
		uselocalStorage(loadVal.bulletsData);
	}else{
		alert('请先点击保存数据');
	}
});
/**
 * 返回主页按钮
 */
$('#home').click(function(){
	window.location.href='bullet_index.php';
	loadVal.saveFlag = false;
});
$('#bulletOptionInfoA').click(function(){
	$(this).toggleClass("changePicMode");
    
});

$('#saveData').click(function(){
    
	for(var i = 1;i <= loadVal.bulNum; ++i ){
		getBulletsVal(i,loadVal);
		for(var j = 1;j <= loadVal.traNum ; ++j ){
			switchFlySel($('#trailSelect'+'_'+i+'_'+j),i-1,j-1,loadVal);
			getFlyValue(i-1,j-1,loadVal);
			for(var k = 1;k <= loadVal.triggerNum; ++k ){
				for(var l = 1;l <= loadVal.resultNum; ++l){
					getTriggerResult(l,i,j,k,loadVal);
				}
			}	
		}
	}
    loadVal.saveFlag = true;
    console.log(loadVal);
});
/**
 * 使用localStorage存储bullet的数据
 * @param {*} data 保存的Object对象
 * @param {*} id   弹头的id值
 */
function uselocalStorage(data){
	var id = data.id;
	var test=document.getElementsByTagName('html')[0].outerHTML;
	test=test.replace(new RegExp('<script[^]*>[\\s\\S]*?</'+'script>','gi'),'');
	var object = JSON.stringify(data);
	if (window.localStorage) {
		localStorage.setItem("bullets" + id, object);
		localStorage.setItem("bullets" + id +'html', test);
	} else {
		Cookie.write("bullets" + id, object);
		Cookie.write("bullets" +'html', test);	
	}
}


for(var i = 1;i <= firstNum - 1 ;++i){
	if(loadVal.bulletsData.bullets[i-1]){
		addBulletClick(i,loadVal);
	//弹头 
		loadBulletsVal(i,loadVal);
		addBulletAImgClick('#bulletOptionA','#bulletOption',i);
		for(var j = 1;j <= Object.keys(loadVal.bulletsData.bullets[i-1].cycles).length; ++j){
			if(loadVal.bulletsData.bullets[i-1].cycles[j-1]){
				
				addDelLiClick('#BulletDel' + i,loadVal);
				addTrialClick ('bulletOptionConditionInfo'+ '_' + i+'_'+j,i,j,loadVal);
				loadTrailMoveVal(i,j,loadVal);
				addAImgCliCK('bulletOptionConditionA'+ '_' + i+'_'+j,'bulletOptionConditionInfo'+ '_' + i + '_' + j);
				//运动轨迹
				for(var m = 1;m <= Object.keys(loadVal.bulletsData.bullets[i-1].cycles[j-1].triggers).length; ++m){
					//触发条件
					if(loadVal.bulletsData.bullets[i-1].cycles[j-1].triggers[m-1]){
						loadConditionVal(i,j,m,loadVal);
						addTriggerBottomClick1($('#triggerConditionMod'+'_'+m+'_'+i+'_'+j),m,i,j,loadVal);
						if($('#triggerConditons'+ '_' + m + '_' + i+'_'+j).length){
							switchTriggerSel($('#triggerConditons'+ '_' + m + '_' + i+'_'+j).children()["0"].children[1],m,i,j,loadVal);
						}
						
						for(var n = 1;n <= Object.keys(loadVal.bulletsData.bullets[i-1].cycles[j-1].triggers[m-1].effects).length; ++n){
						//触发结果
							if(loadVal.bulletsData.bullets[i-1].cycles[j-1].triggers[m-1].effects[n-1]){
								
								switchResultSel($('#triggerResultSel'+'_'+n+'_'+m+'_'+i+'_'+j),m,i,j,n,loadVal);
								addTiggerAddClick(m,i,j,n,loadVal)
								loadResultVal(i,j,m,n,loadVal);
							}
						}
					}
				}
			}
		}
	}
	
}