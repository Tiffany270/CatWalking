


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

//����������
function showmenu(li){
    var show = li.getElementsByClassName("nav_in")[0].style.display="block";
    var white =document.getElementsByClassName("white")[0].style.display="block";
}
function hidemenu(li){
    var hide = li.getElementsByClassName("nav_in")[0].style.display="none";
    var white =document.getElementsByClassName("white")[0].style.display="none";
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


function $(id){
    return typeof id==='string'?document.getElementById(id):id;
}

window.onload=tab;

function tab(){
    // ��ǰ������ʾ��ҳǩ������
    var index=0;
    var timer=null;

    // ��ȡ���е�ҳǩ��Ҫ�л�������
    var lis=$('bottom').getElementsByTagName('li');
    var divs=$('topside').getElementsByTagName('li');
    // ����ÿһ��ҳǩ�Ҹ����ǰ��¼�
    for(var i=0;i<lis.length;i++){
        lis[i].id=i;
        lis[i].onmouseover=function(){
            clearInterval(timer);
            changeOption(this.id);
        }
        lis[i].onmouseout=function(){
            timer=setInterval(autoPlay,2000);
        }
    }

    if(timer){
        clearInterval(timer);
        timer=null;
    }
    // ��Ӷ�ʱ�����ı䵱ǰ����������
    timer=setInterval(autoPlay,2000);

    function autoPlay(){
        index++;
        if(index>=lis.length){
            index=0;
        }
        changeOption(index);
    }

    function changeOption(curIndex){
        for(var j=0;j<lis.length;j++){
            lis[j].className='';
            divs[j].style.display='none';
        }
        // ������ʾ��ǰҳǩ
        lis[curIndex].className='current';
        divs[curIndex].style.display='block';
        index=curIndex;
    }
}

         
