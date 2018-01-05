/**
 * 战车发射周期点击事件，点击显示战车发射周期块,并添加子弹1
 */
$('#ChariotInfoA').click(function(){
	show($('#ChariotOptions'),1);
});


$('#ChariotInfoA').one('click',function(){
	addBullet(1);
	getAddBulletInfo(1,1);
	addDelLiClick(document.getElementById('BulletDel1'));
	
});

/**
 * 战车发射周期输入框改变 
 */
$('.bars_input').keydown(function(e){
		
	if(e.keyCode == "13"){
	$(this).val(this.value);
	if(scale.btn.style.left){
		scale.btn.style.left = 0 + 'px';
		scale.step.style.width = 0 +'px';
		scale.title.innerHTML = 0;
	}	
	}
});

/**
 * 战车发射周期里点击ADD，添加子弹头列表,添加数据
 */
$('#bars_button1').click(function(){
	bulletInfo.bulNum += 1;
	addModList(bulletInfo.bulNum,$('#bulletAddInfoUl'));
	addBullet(bulletInfo.bulNum);
	getAddBulletInfo(bulletInfo.bulNum,1);
	console.log(bulletInfo.bulletsData);
});

/**
 * 导出数据按钮
 */
$('#downloadData').click(function(){
		if(bulletInfo.Tip(3) == true){
			funDownload(bulletInfo.bulletsData,'bulletConfig.lua',1);
		}else{
			funDownload(bulletInfo.bulletsData,'bulletConfig.lua',2);
		}
		
	
});


/**
 * 返回主页按钮
 */
$('#home').click(function(){
	window.location.href='../index/index.php';
})