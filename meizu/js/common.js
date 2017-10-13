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
var loginUname=sessionStorage.getItem("loginName")||localStorage.getItem("loginName");
var loginUid=sessionStorage.getItem("loginUid")||localStorage.getItem("loginUid");
$('.header-box').on('mouseenter','header .login_box',function(){
    if(loginUid){
        $('.user-info').css('display','block');
    }else{
        $('.login-sub-box').css('display','block');
    }
    $(this).addClass('hover');
});
$('.header-box').on('mouseleave','.login_box',function(){
    if(loginUid){
        $('.user-info').css('display','none');
    }else {
        $('.login-sub-box').css('display', 'none');
    }
    $(this).removeClass('hover');
});

//退出

$('.header-box').on('click','.loginOut',function(){
    $('.user-info').css('display','none');
    loginUid=null;
    sessionStorage.clear();
    localStorage.clear();
});
//顶部动画效果
var flag=true;
$('.header-box').on('mouseenter','li',function(e){
    var data = $(this).attr('data-nav');
    if(data){
        $(data).css('display','block');
        $(data+' .data_list li').addClass('animate');
    }
});
$('.header-box').on('mouseleave','li',function(e){
    var data = $(this).attr('data-nav');
    if(data){
        $(data).css('display','none');
        $('.data_list li').removeClass('animate');
    }
});
$('.header-box').on('mouseenter','.nav_sub_box li',function(e){
    $(this).siblings().children().css('opacity','0.6');
    $(this).children().css('opacity','1');
});
$('.header-box').on('mouseleave','.nav_sub_box li',function(e){
    $(this).parent().children('li').children().css('opacity', '1');
});

};
