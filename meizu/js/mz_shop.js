window.onload=function(){
    var timer = setInterval(function(){
        wid+=1;
        pgs.style.width=wid+'%';
        if( wid >=100){
            setTimeout(function(){
                pgs.style.display='none';
                clearInterval(timer)
            },500)
        }
    },30);
    window.select=HTMLElement.prototype.select=function(sel){
        var elem=(this==window?document:this)
            .querySelectorAll((sel));
        return elem==null?null : elem.length==1?elem[0]:elem;
    };
//弹出框鼠标移入样式
(function(){
    var li=select(".pro_li");
    for(var k=0;k<li.length;k++){
        (function(i){
            //鼠标移出样
            li[i].onmouseout=function(){
                (function(){
                    for(var j=0;j<li.length;j++)
                        li[j].className="pro_li";
                })();
                //鼠标移入样式
                li[i].onmouseover=function(){
                    (function(){
                        for(var j=0;j<li.length;j++)
                            li[j].className="pro_li opacity";
                    })();
                    //鼠标悬停样式
                    this.className="pro_li";

                };
            };
        })(k)
    }
})();
//热门推荐点击事件
(function() {
    var a = select(".lt>a");
    var box = document.getElementById("nav_home_box");

    a[1].onclick = function () {
        box.style.left = "-1240px";
        a[1].className = "ivb";
        a[0].className = "";
    };
    a[0].onclick = function () {
        box.style.left = "0px";
        a[0].className = "ivd";
        a[1].className = "";
    };
//热门推荐自动轮播
    var timer = setInterval(task, 5000);
    var i = 1;

    function task() {
        if (i == 2) {
            box.style.left = "0px";
            a[0].className = "ivd";
            a[1].className = "";
            i = 0
        }
        else {
            box.style.left = -1240 + "px";
            a[1].className = "ivb";
            a[0].className = "";
        }
        i++;
    }
//热门推荐停止器
var NavHomeGt=
    select(".nav_home_gt");
    NavHomeGt.onmouseover=function(){
        clearInterval(timer);
        timer=null;
    };
    NavHomeGt.onmouseout=function(){
        timer=setInterval(task,5000);
    };
})();
//广告轮播按钮
(function(){
var left=document.getElementsByClassName("slick_left")[0];
var  right=document.getElementsByClassName("slick_right")[0];
var bottom=select(".slick_bottom i");
var bg=select("#bg div");
var div=document.getElementById("bg_box");
var count=0;
function changeImg(){
    for(var i=0;i<bottom.length;i++){
        bottom[i].className="";
        bg[i].className="";
        bottom[count].className="action";
        bg[count].className="show";
    }
}
function lunbo(){
        if(count<bottom.length-1){
            count++;
        }else{count=0;}
    changeImg();
}


//点击事件
for(var j=0;j<bottom.length;j++){
    (function(i){
        bottom[i].onmouseover=function(){
            count=i;
            changeImg();
        }
    })(j)
}
left.onclick=function(){
    if(count!=0)
        count--;
    else
        count=bg.length-1;
    changeImg();
};
right.onclick=function(){
    if(count<bg.length-1){
        count++;
    }

    else
        count=0;
    changeImg();
};
    var timer=setInterval(lunbo,3000);
///鼠标移入停止
div.onmouseover=function(){
    clearInterval(timer);
   timer=null;
};
div.onmouseout=function(){
    timer=setInterval(lunbo,3000);
 };
})();
    //楼层跳转
(function(){
    var uli=select('.anchor1');
    var divs=select('.anchor');
    var scrollTop=document.body.scrollTop||document.documentElement.scrollTop||window.pageYOffset;
    var inx=0;
    var elev={
        min:0,
        max:0,
        height:0,//保存每个楼层高度
        //获取当前元素的offsetTop
        init:function(){
            //this.scrollTop用来记录每次滚动条稳定后的位置
            this.scrollTop=scrollTop;
            this.clickcheck();
        },
        selectHeight:function(elem){
            //获取元素的外部CSS属性
            var style=getComputedStyle(elem);
            var h=style.height;//获取高度
            var m=style.marginBottom;//获取margin-bottom高度
            this.height=parseInt(h)+parseInt(m);//总的高度 高度+margin-bottom
            this.min=20;
        },
        clickcheck:function(){
            for(var i=0;i<uli.length;i++){
                ( function(j){
                    uli[j].onclick=function(){
                        elev.selectHeight(divs[j]);
                        //当前元素距离body顶部的距离-（剩余页面距离的一半）
                        var scrollTop=divs[j].offsetTop-elev.min-50;
                        //inx用来设置滚动条的高度
                        var timer = setInterval(function(){
                            //当inx比scrollTop大，也就是滚动条还在scrollTop下方
                            inx=document.body.scrollTop||document.documentElement.scrollTop||window.pageYOffset;
                            if(scrollTop-inx<0){
                                inx-=50;
                                //当inx的值小于scrollTop也就是在滚动条上方，不需要再滚动
                                if(inx<scrollTop){
                                    clearInterval(timer);
                                    timer=null;
                                }
                            }
                            else{
                                //滚动条往下滚的情况
                                inx+=50;
                                if(inx>scrollTop){
                                    clearInterval(timer);
                                    timer=null;
                                }
                            }
                            document.body.scrollTop=inx;
                            document.documentElement.scrollTop=inx;
                            window.pageYOffset=inx;
                        },10);
                        elev.scrollTop=scrollTop;
                    };
                })(i)
            }
        }
    };
    elev.clickcheck();
        window.onscroll=function(){
            if((document.documentElement.scrollTop||document.body.scrollTop)>=600){
                select('#magnet_link').style.cssText="visibility: visible;opacity: 1;";
            }else{
                select('#magnet_link').style.cssText="visibility: hidden;opacity: 0;";
            }
            isscroll()
        };
    //回到顶部
        var a=select(".Top");
        a.onclick=function(){
            var timer=setInterval(function(){
                scrollTop=document.body.scrollTop||document.documentElement.scrollTop||window.pageYOffset;
                if(  scrollTop> 0) {
                    scrollTop-=
                        //判断滚动条的高度来选快慢
                        scrollTop>1500?( scrollTop /50):40;
                    //停止定时器
                    if ( scrollTop< 1) {
                        clearInterval(timer);
                    }
                }
                document.body.scrollTop=scrollTop;
                document.documentElement.scrollTop=scrollTop;
                window.pageYOffset=scrollTop;
            },10);

        };
//判断人为滚动条的高度
    function isscroll(){
        //begin滚动条的起始位置 end结束位置
        for(var i= 0;i<divs.length;i++) {

            (function(i){
                var begin = divs[i].offsetTop+535;
                var end = divs[i].offsetTop-150;
                scrollTop=document.body.scrollTop||document.documentElement.scrollTop||window.pageYOffset;
                if(scrollTop<=begin&&scrollTop>=end){
                    uli[i].style.cssText="background: #3db1fa;";
                }
                else{
                    uli[i].style.cssText="background:#c3c3c3;";
                }
            })(i)
        }
    }
})()








};


