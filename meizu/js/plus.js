window.onload=function() {
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
    setTimeout(function(){$(window).scrollTop(0)});
/////////头部headderJS//////////
    (function(){
   //弹出框鼠标移入样式
    var li=$(".pro_ul li");
    var ul=$(".pro_ul");
    for(var k=0;k<li.length;k++){
        (function(i){
            //鼠标移出样
            li[i].onmouseout=function(){
                (function(){
                    for(var j=0;j<li.length;j++)
                        li[j].className="";
                })();
                //鼠标移入样式
                li[i].onmouseover=function(){
                    (function(){
                        for(var j=0;j<li.length;j++)
                            li[j].className=" opacity";
                    })();
                    //鼠标悬停样式
                    this.className="";
                };
            };
        })(k)
    }
    //灰色导航弹出
    var probe =document.querySelectorAll(".probe>span");//找到菜单按钮
    var menu = document.querySelectorAll(".subnav_menu")[0];//找到菜单
    var styles=document.querySelectorAll(".subnav_menu>ul>li");
    //子导航点击显示/隐藏
    for (var i = 1; i < probe.length; i++)
        probe[i].onclick = function () {
            //设置条件选择显示\隐藏
            if (this.nextElementSibling== null){
                //改变按钮样式
                this.previousElementSibling
                    .style.cssText = "display: inline-block;";
                this.style.cssText = "display: none;";
                //点击隐藏
                menu.style.cssText="height:0;";
               menu.firstElementChild.style.cssText = "display: none;";
        }else{
                //改变按钮样式
            this.nextElementSibling
            .style.cssText="display: inline-block;";
                this.style.cssText = "display: none;";
                //点击显示
                menu.style.cssText = "height:128px;";
                menu.firstElementChild.style.cssText = "display: inline-block;";
            }
        }
//子导航图标,点击样式改变
        for(var l=0;l<styles.length;l++){
            (function(i){
                styles[i].onclick=function(){
                    (function(){
                        for(var j=0;j<styles.length;j++)
                            styles[j].className="";
                    })();
                    this.className="styles";
                }
            })(l)
        }
})();
////////////////////为右侧原点绑定点击和滚动事件/////////////
(function(){
    var $div=$("#container .slider");//找到右侧原点
    var $ul=$(".slider_controller>li");
    var status=0;
    var sum=0;
    var th=0;

    $($ul).click(function() {
        //找点当前原点
        var $sum=$(".slider_controller>li.actives").attr('data-index');
        var $data=$(this).attr('data-index');//获得自定义属性
        //保护动画判断是否执行完毕
        if(status===0&&$data!==th){
            status=1;
        //判断点击元素的位置在当前元素的上还剩下
            if($data>$sum){
                //点击当前元素上方轮播时执行动画
                $("li.actives").removeClass("actives");
                $(this).addClass("actives");
                $($div[$data]).siblings().removeClass("active h_top top");
                $($div[$data]).addClass("active h_top");
                $($div[$data]).prev().addClass("active top");
            } else{
                //点击当前元素下方轮播时执行动画
                $("li.actives").removeClass("actives");
                $(this).addClass("actives");
                $($div[$data]).siblings().removeClass("active h_btm btm");
                $($div[$data]).addClass("slider active h_btm");
                $($div[$data]).next().addClass("active btm");
    }
        //动画结束后清除动画和绑定事件
        $div[$data].addEventListener("animationend",function ll(){
            for(var i=0;i<$div.length;i++){
                $($div[i]).removeClass("active h_top h_btm btm top");
            }
            //定位到当前点击轮播
            $($div[$data]).addClass("active");
            //清除绑定事件
            $div[$data].removeEventListener('animationend',ll);
            status=0;
            th=$data;
            var $sum=$(".slider_controller>li.actives").attr('data-index');
            frames($sum);
        },false);
        }
        sum=$data;
    });
//////判断滚轮事件///////////////////
    var $head=$("#head");
    var $widget=$("#widget");
    var kk= 0,ss= 0,count= 0,bn= 0;
    $(document).on("mousewheel DOMMouseScroll", function (e) {
        // chrome & ie
        var delta = (e.originalEvent.wheelDelta && (e.originalEvent.wheelDelta > 0 ? 1 : -1)) ||
            (e.originalEvent.detail && (e.originalEvent.detail > 0 ? -1 : 1));  // firefox
        var $ul=$(".slider_controller>li");
        //获取所有轮播
        var $div=$("#container .slider");
        //保护动画判断动画是否执行完毕
            // 向上滚时
            if (delta > 0) {
                //判断滚动条高度
                var $scroll=document.body.scrollTop||document.documentElement.scrollTop||window.pageYOffset;
                if($scroll<450&&bn==1){
                    var timer = setInterval(function() {
                            //当inx比scrollTop大，也就是滚动条还在scrollTop下方
                            $scroll -= 20;
                            //当inx的值小于scrollTop也就是在滚动条上方，不需要再滚动
                            if ($scroll <0) {
                                clearInterval(timer);
                                timer = null;
                            }
                        document.body.scrollTop=$scroll;
                        document.documentElement.scrollTop=$scroll;
                        window.pageYOffset=$scroll;
                        $("body").scrollTop($scroll);
                        },20);
                    //隐藏滚动条
                    $("body").addClass("ove");
                    status = 0;
                    bn=0;
                    count=0;
                    }
                if(status===0) {
                    count += 1;
                    //新增ss判断是否已经执行了一次隐藏nav，如果已经执行一次就不执行，直到切换图片才再次置0
                    if (sum == 0 && ss == 0 && count > 8) {
                        $($head).css({
                            visibility: "visible",
                            height: "80px"
                        });
                        $($widget).css("top", "80px");
                        $(".slider_controller").css({visibility: "hidden", opacity: 0});
                        kk = 1;
                    }

                if (sum > 0&&count>8) {
                     sum--;
                    $($ul[sum]).siblings().removeClass("actives");
                    $($ul[sum]).addClass("actives");
                    $($div[sum]).siblings().removeClass("active h_btm btm");
                    $($div[sum]).addClass("active h_btm");
                    $($div[sum]).next().addClass("active btm");
                    status=1;
                    count=0;
                }
            }
            } else if (delta < 0) {
                // 向下滚时
                if(count>8&&sum==9&&bn==0){
                    $("body").removeClass("ove");
                    status = 1;
                    bn=1;
                }
                if(status===0) {
                count+=1;
                if (sum == 0&&kk==1&&count>8) {
                    $($head).css({
                        visibility: "hidden",
                        height: "0"
                    });
                    $($widget).css("top", "-65px");
                    $(".slider_controller").css({visibility:"visible",opacity:1});
                    ss=0;//执行一次隐藏nav
                    count=0;
                }
                if (sum < $div.length - 1&&kk==0&&count>8) {
                    sum++;
                    $($ul[sum]).siblings().removeClass("actives");
                    $($ul[sum]).addClass("actives");
                    $($div[sum]).siblings().removeClass("active h_top top");
                    $($div[sum]).addClass("active h_top");
                    $($div[sum]).prev().addClass("active top");
                    status=1;
                    ss=0;//置0
                    count=0;
                    }
                kk=0;
            }


        }

            //动画结束后清除动画和绑定事件
            $div[sum].addEventListener("animationend", function ll() {
                for (var i = 0; i < $div.length; i++) {
                    $($div[i]).removeClass("active h_top h_btm btm top");
                }
                //定位到当前轮播
                $($div[sum]).addClass("active");
                //清除绑定事件
                $div[sum].removeEventListener('animationend', ll);
                status = 0;
                var $sum=$(".slider_controller>li.actives").attr('data-index');
                th=$sum;
                frames($sum);
            }, false);

    });


})();

///////////各轮播动画事件///////////////////////
    function frames(e){
        //轮播1
        if(e==0){
            $($(".full_bg")[0]).addClass("jq1");
            $($(".phone")).addClass("jq1 jq2");
            $($(".pull_bg")).addClass("jq1");
            $($(".f29")[0]).addClass("jq1");
        }else{
            $($(".full_bg")[0]).removeClass("jq1");
            $($(".phone")).removeClass("jq1 jq2");
            $($(".pull_bg")).removeClass("jq1");
            $($(".f29")[0]).removeClass("jq1");
        }
        //轮播2
        if(e==1){
            $($(".bg1")).addClass("jq1");
            $($(".bg2")[0]).addClass("jq1");
            $($(".h1")).addClass("jq1 jq2");
            $($(".p2")).addClass("jq1 jq2");
            $($(".li1")).addClass("jq1 jq2");
            $($(".more2")).addClass("jq1 jq2");
        }else{
            $($(".bg1")).removeClass("jq1");
            $($(".bg2")).removeClass("jq1");
            $($(".h1")).removeClass("jq1 jq2");
            $($(".p2")).removeClass("jq1 jq2");
            $($(".li1")).removeClass("jq1 jq2");
            $($(".more2")[0]).removeClass("jq1 jq2");
        }
        //轮播3
        if(e==2){
            $($(".feel_desc .p")).addClass("jq1 jq2");
            $($(".feel_desc .p1")).addClass("jq1 jq2");
        }else{
            $($(".feel_desc .p")).removeClass("jq1 jq2");
            $($(".feel_desc .p1")).removeClass("jq1 jq2");
        }
        //轮播4
        if(e==3){
            $($(".screen_desc .p")).addClass("jq1 jq2");
            $($(".screen_desc .p1")).addClass("jq1 jq2");
            $($(".screen_desc .more")[1]).addClass("jq1");
        }else{
            $($(".screen_desc .p")).removeClass("jq1 jq2");
            $($(".screen_desc .p1")).removeClass("jq1 jq2");
            $($(".screen_desc .more")[1]).removeClass("jq1");
        }
        //轮播5
        if(e==4){
            $($(".camera_desc .p")).addClass("jq1 jq2");
            $($(".camera_desc .p1")).addClass("jq1 jq2");
            $($(".camera_desc .more")).addClass("jq1 jq2");
            $($(".li2")).addClass("jq1 jq2");
        }else{
            $($(".camera_desc .p")).removeClass("jq1 jq2");
            $($(".camera_desc .p1")).removeClass("jq1 jq2");
            $($(".camera_desc .more")).removeClass("jq1 jq2");
            $($(".li2")).removeClass("jq1 jq2");
        }
        //轮播6
        if(e==5){
            $($(".hf_desc .p")).addClass("jq1 jq2");
            $($(".hf_desc .p1")).addClass("jq1 jq2");
        }else{
            $($(".hf_desc .p")).removeClass("jq1 jq2");
            $($(".hf_desc .p1")).removeClass("jq1 jq2");
        }
        //轮播7
        if(e==6){
            $($(".m3_desc .p")).addClass("jq1 jq2");
            $($(".m3_desc .p1")).addClass("jq1 jq2");
        }else{
            $($(".m3_desc .p")).removeClass("jq1 jq2");
            $($(".m3_desc .p1")).removeClass("jq1 jq2");
        }
        //轮播8
        if(e==7){
            $($(".mtouch_desc2 .p")).addClass("jq1 jq2");
            $($(".mtouch_desc2 .p1")).addClass("jq1 jq2");
            $($(".mtouch_desc2 .graph")).addClass("img-1");
            $($(".mtouch_desc2 .sub_besc")).addClass("jq1");
            $($(".vtl_center img")).addClass("jq2");
        }else{
            $($(".mtouch_desc2 .p")).removeClass("jq1 jq2");
            $($(".mtouch_desc2 .p1")).removeClass("jq1 jq2");
            $($(".mtouch_desc2 .graph")).removeClass("img-1");
            $($(".mtouch_desc2 .sub_besc")).removeClass("jq1");
            $($(".vtl_center img")).removeClass("jq2");
        }
        //轮播9
        if(e==8){
            $($(".type_desc .p")).addClass("jq2 jq1");
            $($(".type_desc .p1")).addClass("jq2 jq1");
        }else{
            $($(".type_desc .p")).removeClass("jq2 jq1");
            $($(".type_desc .p1")).removeClass("jq2 jq1");
        }
        //轮播10
        if(e==9){
            $($(".battery_desc .p")).addClass("jq2 jq1");
            $($(".battery_desc .p1")).addClass("jq2 jq1");
        }else{
            $($(".battery_desc .p")).removeClass("jq2 jq1");
            $($(".battery_desc .p1")).removeClass("jq2 jq1");
        }
    }

    //页面加载完成先调用一次
    $($(".full_bg")[0]).addClass("jq1");
    $($(".phone")).addClass("jq1 jq2");
    $($(".pull_bg")).addClass("jq1");
    $($(".f29")[0]).addClass("jq1");

};