


//�����
function Move(){
    var timer = null;
        var sidebar = document.getElementById('sidebar');
        timer=setInterval(function(){
            if(sidebar.offsetLeft==-31){
                clearInterval(timer);
            }else{sidebar.style.left=sidebar.offsetLeft-1+'px';}
    },30)

    setTimeout(function(){delyopen()},1000);
}
function delyopen(){ document.getElementById('open').style.display="block";}

function Moveopen(){
    var timer = null;
    var sidebar = document.getElementById('sidebar');
    timer=setInterval(function(){
        if(sidebar.offsetLeft==0){
            clearInterval(timer);
        }else{sidebar.style.left=sidebar.offsetLeft+1+'px';}
    },30)
    document.getElementById('open').style.display="none";
}

function closeSidebar(){
    var close = document.getElementById('sidebar').style.display="none";
}

function MM_over(mmObj) {
    var mSubObj = mmObj.getElementsByTagName("div")[0];
    mSubObj.style.display = "block";
    mSubObj.style.backgroundColor = "write";

}
function MM_out(mmObj) {
    var mSubObj = mmObj.getElementsByTagName("div")[0];
    mSubObj.style.display = "none";

}

//������
function seach_show(){
    document.getElementsByClassName("list")[0].style.display="block";
}
function seach_hide(){
    document.getElementsByClassName("list")[0].style.display="none";
}



//ͼƬ�л�,��ʵûʲô�ã����Ǻ���Ӳ��ֻ������չʾ�������ĺ�����ô�ö�ʱ��
function timedely(s){
    setTimeout(function(){changeover(s)},1000);
}
function changeover(s){
        document.getElementsByClassName("bgout")[0].style.backgroundImage="url(img/bg"+s+".jpg)";
}
//����������
function showmenu(li){
    var show = li.getElementsByClassName("nav_in")[0].style.display="block";
    var white =document.getElementsByClassName("white")[0].style.display="block";
}
function hidemenu(li){
    var hide = li.getElementsByClassName("nav_in")[0].style.display="none";
    var white =document.getElementsByClassName("white")[0].style.display="none";
}
//���˵���
function hidesecond(){
    document.getElementsByClassName("second_nav")[0].style.display="none";
    document.getElementsByClassName("search_sencon_nav")[0].style.display="block";
}
function showsecond(){
    document.getElementsByClassName("second_nav")[0].style.display="block";
    document.getElementsByClassName("search_sencon_nav")[0].style.display="none";
}
//�����
function showcontend(i) {
    for(var j=0;j<5;j++){
    if(j!=i){
        document.getElementById(j).style.display="none";
        document.getElementById(i).style.display="block";
    }
}
    document.getElementsByClassName("sidecontend")[0].style.display = "block";
}
function closecontend(){
    document.getElementsByClassName("sidecontend")[0].style.display = "none";
}
//�������
window.onload= function(){
    var move = document.getElementById("facility1");
    var list = move.getElementsByTagName("a");
    for(var i = 0;i<list.length;i++){
        list[i].onmouseover=function(){
            var _this = this.getElementsByTagName('i')[0];
            Moves(_this,{top:-25,opacity:0},function(){
                _this.style.top=20+'px';
                Moves(_this,{top:1,opacity:100});
            });

    }
    }
}
//�����˶���ܣ�����Ч����
function getStyle(obj, attr){
    if(obj.currentStyle)    {
        return obj.currentStyle[attr];
    }else{
        return getComputedStyle(obj, false)[attr];
    }
}
function Moves(obj,json,fn){
    //ֹͣ��һ�ζ�ʱ��
    clearInterval(obj.timer);
    //����ÿһ�������˶��Ķ�ʱ��
    obj.timer = setInterval(function(){
        //�ж�ͬʱ�˶���־
        var bStop = true;
        for(var attr in json){
            //ȡ��ǰֵ
            var iCur = 0;
            if(attr == 'opacity'){
                iCur = parseInt(parseFloat(getStyle(obj, attr))*100);
            }else{
                iCur = parseInt(getStyle(obj,attr));
            }
            //�����ٶ�
            var iSpeed = (json[attr] - iCur) / 8;
            iSpeed = iSpeed > 0 ? Math.ceil(iSpeed) : Math.floor(iSpeed);
            //���ͬʱ�����־
            if(iCur != json[attr]){
                bStop = false;
            }
            //�������ԣ���ȡ����Ч��
            if(attr=='opacity'){
                iCur += iSpeed
                obj.style.filter='alpha(opacity:' + iCur + ')';
                obj.style.opacity=iCur / 100;
            }
            else{
                obj.style[attr]=iCur+iSpeed+'px';
            }
        }
        //���ֹͣ
        if(bStop){
            clearInterval(obj.timer);
            if(fn) fn();
        }
    },30)
}