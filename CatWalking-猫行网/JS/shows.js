


//侧边栏
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

//搜索条
function seach_show(){
    document.getElementsByClassName("list")[0].style.display="block";
}
function seach_hide(){
    document.getElementsByClassName("list")[0].style.display="none";
}



//图片切换,其实没什么用，还是很生硬，只是这里展示带参数的函数怎么用定时器
function timedely(s){
    setTimeout(function(){changeover(s)},1000);
}
function changeover(s){
        document.getElementsByClassName("bgout")[0].style.backgroundImage="url(img/bg"+s+".jpg)";
}
//顶部导航条
function showmenu(li){
    var show = li.getElementsByClassName("nav_in")[0].style.display="block";
    var white =document.getElementsByClassName("white")[0].style.display="block";
}
function hidemenu(li){
    var hide = li.getElementsByClassName("nav_in")[0].style.display="none";
    var white =document.getElementsByClassName("white")[0].style.display="none";
}
//左侧菜单条
function hidesecond(){
    document.getElementsByClassName("second_nav")[0].style.display="none";
    document.getElementsByClassName("search_sencon_nav")[0].style.display="block";
}
function showsecond(){
    document.getElementsByClassName("second_nav")[0].style.display="block";
    document.getElementsByClassName("search_sencon_nav")[0].style.display="none";
}
//侧边栏
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
//便民服务
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
   ac();
   bc();//box1
   cc();//box2
   dc();//box3
   
   //当季热玩
   function bc(){
	   var lis=document.getElementById("box1").getElementsByTagName("li");
	   var divs=document.getElementById("box1_co").getElementsByTagName("li");
	    for(var i=0;i<lis.length;i++){
            lis[i].id=i;
			lis[i].onmouseover=function(){
				for(var j=0;j<7;j++){
					divs[j].style.display="none";
					}
				divs[this.id].style.display="block";
				}
			}
	   }
	   
	   
	    function cc(){
	   var lis=document.getElementById("box2").getElementsByTagName("li");
	   var divs=document.getElementById("box2_right_co").getElementsByTagName("li");
	    for(var i=0;i<lis.length;i++){
            lis[i].id=i;
			lis[i].onmouseover=function(){
				for(var j=0;j<6;j++){//这里数字敏感
					divs[j].style.display="none";
					lis[j].className='';
					}
					lis[this.id].className='currents';
				divs[this.id].style.display="block";
				}
			}
	   }
	  
	  //自助旅行
	  function dc(){
		   var lis=document.getElementById("box3").getElementsByTagName("li");
		    var divs=document.getElementById("box3_co").getElementsByTagName("li");
		  for(var i=0;i<lis.length;i++){
			  lis[i].id=i;
			  lis[i].onmouseover=function(){
				  for(var j=0;j<7;j++){
					  divs[j].style.display="none";
					  lis[j].className='';
					  }
				  lis[this.id].className='current1';
				  divs[this.id].style.display='block';
				  
				  }			  
			  }
		  
		  
		  }
	  
	  
	  
	  

//tab切换
    function ac(){
        var index=0;
        var timer=null;
        var lis=document.getElementById("ac_tab").getElementsByTagName("li");
        var divs=document.getElementById("ac_list").getElementsByTagName("li");

        // 遍历所有的页签
        for(var i=0;i<lis.length;i++){
            lis[i].id=i;
            lis[i].onmouseover=function(){
                var that = this;//引用当前id
                //清除定时器
                if(timer){clearTimeout();timer=null;}

                timer=setTimeout(function(){
                    for(var j=0;j<7;j++){
                        lis[j].className='';
                        divs[j].style.display="none";
                    }
                    lis[that.id].className='current';
                    divs[that.id].style.display="block";

                },500)
              divs[this.id].style.display="block";

            }
        }
    }
}
         

//完美运动框架，淡出效果。
function getStyle(obj, attr){
    if(obj.currentStyle)    {
        return obj.currentStyle[attr];
    }else{
        return getComputedStyle(obj, false)[attr];
    }
}
function Moves(obj,json,fn){
    //停止上一次定时器
    clearInterval(obj.timer);
    //保存每一个物体运动的定时器
    obj.timer = setInterval(function(){
        //判断同时运动标志
        var bStop = true;
        for(var attr in json){
            //取当前值
            var iCur = 0;
            if(attr == 'opacity'){
                iCur = parseInt(parseFloat(getStyle(obj, attr))*100);
            }else{
                iCur = parseInt(getStyle(obj,attr));
            }
            //计算速度
            var iSpeed = (json[attr] - iCur) / 8;
            iSpeed = iSpeed > 0 ? Math.ceil(iSpeed) : Math.floor(iSpeed);
            //检测同时到达标志
            if(iCur != json[attr]){
                bStop = false;
            }
            //更改属性，获取动画效果
            if(attr=='opacity'){
                iCur += iSpeed
                obj.style.filter='alpha(opacity:' + iCur + ')';
                obj.style.opacity=iCur / 100;
            }
            else{
                obj.style[attr]=iCur+iSpeed+'px';
            }
        }
        //检测停止
        if(bStop){
            clearInterval(obj.timer);
            if(fn) fn();
        }
    },30)
}