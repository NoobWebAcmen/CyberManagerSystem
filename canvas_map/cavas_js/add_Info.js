function addTriggerResult(obj,num){
    /***************************添加元素********************************************8 */
    var elm_divWrap = document.createElement('div');
      var elm_divSel = document.createElement('div');
        var elm_divSel_p = document.createElement('p');
            elm_divSel_p.innerHTML = obj.innerHTML;
        var elm_divSel_sel = document.createElement('select');
        
            var elm_divSel_sels = ["----请选择触发结果----","运动轨迹","效果(值)","添加BUFF","效果(地形)","效果(美术)","ADD","END"];
            for(var i = 0 ;i < 8; ++i ){
                var elm_divSel_options = new Array();
                elm_divSel_options[i]= document.createElement('option');
                elm_divSel_options[i].setAttribute('value','triggerResult'+i);
                elm_divSel_options[i].innerHTML = elm_divSel_sels[i];
                elm_divSel_sel.append(elm_divSel_options[i]);
                
            }
        var elm_divSel_a = document.createElement('a');
            var elm_divSel_a_img = document.createElement('img');
      
      
    var elm_form = document.createElement('form');
        var elm_formDiv = document.createElement('div');
            var elm_formDiv_trail = document.createElement('div');
                var elm_formDiv_trailP = document.createElement('p');
            var elm_formDiv_effect = document.createElement('div');
                var elm_formDiv_effect1 = document.createElement('div');
                    var elm_formDiv_effect1_p = document.createElement('p');
                    var elm_formDiv_effect1_inp = document.createElement('input');
                var elm_formDiv_effect2 = document.createElement('div');
                    var elm_formDiv_effect2_p = document.createElement('p');
                    var elm_formDiv_effect2_inp1 = document.createElement('input');
                    var elm_formDiv_effect2_lab1 = document.createElement('label');
                    var elm_formDiv_effect2_inp2 = document.createElement('input');
                    var elm_formDiv_effect2_lab2 = document.createElement('label');
                var elm_formDiv_effect3 = document.createElement('div');
                    var elm_formDiv_effect3_p = document.createElement('p');
                    var elm_formDiv_effect3_sel = document.createElement('select');
                        var elm_formDiv_effect3_sels = ["HP","护盾","电量"];
                        for(var i = 0 ;i < 3; ++i ){
                            var elm_formDiv_effect3_options = new Array();
                            elm_formDiv_effect3_options[i]= document.createElement('option');
                            elm_formDiv_effect3_options[i].setAttribute('value','triggerValue'+i);
                            elm_formDiv_effect3_options[i].innerHTML = elm_formDiv_effect3_sels[i];
                            elm_formDiv_effect3_sel.append(elm_formDiv_effect3_options[i]);
                        }
                var elm_formDiv_effect4 = document.createElement('div'); 
                    var elm_formDiv_effect4_p = document.createElement('p');
                    var elm_formDiv_effect4_inp = document.createElement('input');
                var elm_formDiv_effect5 = document.createElement('div');
                    var elm_formDiv_effect5_p = document.createElement('p');
                    var elm_formDiv_effect5_sel = document.createElement('select');
                        var elm_formDiv_effect5_sels = ["动能","热能","电磁","腐蚀"];
                        for(var i = 0 ;i < 4; ++i ){
                            var elm_formDiv_effect5_options = new Array();
                            elm_formDiv_effect5_options[i]= document.createElement('option');
                            elm_formDiv_effect5_options[i].setAttribute('value','triggerHurt'+i);
                            elm_formDiv_effect5_options[i].innerHTML = elm_formDiv_effect5_sels[i];
                            elm_formDiv_effect5_sel.append(elm_formDiv_effect5_options[i]);
                        }
            var elm_formDiv_buff = document.createElement('div');
                var elm_formDiv_buff1 = document.createElement('div');
                    var elm_formDiv_buff1_p = document.createElement('p');
                    var elm_formDiv_buff1_inp = document.createElement('input');
                var elm_formDiv_buff2 = document.createElement('div');
                    var elm_formDiv_buff2_p = document.createElement('p');
                    var elm_formDiv_buff2_inp1 = document.createElement('input');
                    var elm_formDiv_buff2_lab1 = document.createElement('label');
                    var elm_formDiv_buff2_inp2 = document.createElement('input');
                    var elm_formDiv_buff2_lab2 = document.createElement('label');
                var elm_formDiv_buff3 = document.createElement('div');
                    var elm_formDiv_buff3_p = document.createElement('p');
                    var elm_formDiv_buff3_inp = document.createElement('input');
                
    
            var elm_formDiv_terri = document.createElement('div');
                var elm_formDiv_terri1 = document.createElement('div');
                    var elm_formDiv_terri1_p = document.createElement('p');
                    var elm_formDiv_terri1_inp = document.createElement('input');
                var elm_formDiv_terri2 = document.createElement('div');
                    var elm_formDiv_terri2_p = document.createElement('p');
                    var elm_formDiv_terri2_sel = document.createElement('select');
                        var elm_formDiv_terri2_options =document.createElement('option');
            var elm_formDiv_art = document.createElement('div');   
                var elm_formDiv_art1 = document.createElement('div');
                    var elm_formDiv_art1_p = document.createElement('p');
                    var elm_formDiv_art1_inp = document.createElement('input');
            var elm_formDiv_add = document.createElement('div');
            var elm_formDiv_end = document.createElement('div');
                var elm_formDiv_end_p = document.createElement('p');
    
    var elm_divBtn = document.createElement('div');
    
    
    
    /*******************************给元素添加样式 ***************************************/
    elm_divWrap.setAttribute('id','triggerResultOption' + num);
    elm_divWrap.setAttribute('class','fl brotherHiddTag hidd triggerResultOptionClass');
        elm_divSel.setAttribute('class','triggerResultOptionTopClass');
            elm_divSel_p.setAttribute('class','triggerConditonP triggerConditionPExtra');
            elm_divSel_sel.setAttribute('class','triggerResultSelect');
            elm_divSel_sel.setAttribute('id','triggerResultSel' + num);
            elm_divSel_a.setAttribute('id','triggerResult1' + num);
            elm_divSel_a.setAttribute('class','triggerResultA');
                elm_divSel_a_img.setAttribute('src','../images/page1/u99.png');
        
        
        
        elm_form.setAttribute('action','');//补
            elm_form.setAttribute('method','post');
            elm_formDiv.setAttribute('id','triggerResultOptionBottom');
            elm_formDiv.setAttribute('class','brotherHiddTag hidd triggerResultOptionBottomClass');
                elm_formDiv_trail.setAttribute('class','brotherHiddTag hidd');
                elm_formDiv_trail.setAttribute('id','triggerOfTrail' + num);
    /*************************************元素添加进块************************************************ */
    $('#triggerResultOption1').append(elm_divWrap);

    elm_divWrap.append(elm_divSel);
        elm_divSel.append(elm_divSel_p);
        elm_divSel.append(elm_divSel_sel);
        elm_divSel.append(elm_divSel_a);
        elm_divSel_a.append(elm_divSel_a_img);

    elm_divWrap.append(elm_form);

    elm_divWrap.append(elm_divBtn);
   
}