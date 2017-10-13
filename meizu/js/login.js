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
"use strict";
var divs=document.forms[0];
(function(){
    //多页效果
    //账号登陆验证
var as=document.querySelectorAll("#stn a");
as[1].onclick=function(){
    as[1].className="me";
    as[0].className="";
    divs.firstElementChild
        .nextElementSibling
        .style.zIndex=1;
    divs.lastElementChild
        .previousElementSibling
        .style.zIndex=10;
 };
    //手机登陆验证
as[0].onclick=function(){
    as[0].className="me";
    as[1].className="";
    divs.firstElementChild
        .nextElementSibling
        .style.zIndex=10;
    divs.lastElementChild
        .previousElementSibling
        .style.zIndex=1;
};
    //二维码扫描登陆
as[2].onclick=function(){
    if(as[2].className!=="code_c1"){
        as[2].className="code_c1";
        divs.lastElementChild
            .style.display="block";}
else{
    as[2].className="code_c";
        divs.lastElementChild
            .style.display="none";}
    };

})();
(function(){
//用reg测试当前文本框类容
var txtName=divs.username;
var txtPwd=divs.pwd;
var txtPhone=divs.phones;
var txtUser=divs.user;
var t=0,l=0;
var code=[];

//--- 生成动态密码
    var get=document.querySelector(".get");
//--- 获取验证码
    get.onclick=function(){
        createCode();
        //验证码验证
        txtUser.onblur=function(){
            validateCode(this);
        };
//验证码验证
        function validateCode(txt) {
            var inputCode=txt.value;
            var span=txt.parentElement
                .parentElement
                .firstElementChild;
            span.style.visibility='hidden';
            if(inputCode.length <= 0)
            {
                span.style.visibility='visible';
                span.innerHTML="请输入验证码！";
                t=0;
            }
            else if(inputCode.toUpperCase() != code.join("").toUpperCase())
            {
                span.className="info";
                span.style.visibility='visible';
                span.innerHTML="验证码错误";
                t=0;
            }
            else
            {
                span.style.visibility='hidden';
                t=1;
            }
        }
    };

     var createCode=function(){
        code=[];
        var codeLength = 4; //验证码的长度
        var codeChars = new Array(0, 1, 2, 3, 4, 5, 6, 7, 8, 9,
            'a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z',
            'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'); //所有候选组成验证码的字符，当然也可以用中文的
        for(var i = 0; i < codeLength; i++){
            var charNum = Math.floor(Math.random() * 52);
            code.push(codeChars[charNum]);
        }
         console.log('验证码:'+code.join(""));
         alert('验证码:'+code.join(""));
         return code;
};

//魅族账户验证
var val=function(txt,reg){
    var span=txt.parentElement
        .parentElement
        .firstElementChild;
        span.style.visibility='hidden';
    if(reg.test(txt.value)){
        span.style.visibility='hidden';

    }else{
        span.className="info";
        span.style.visibility='visible';
        span.innerHTML="账户格式错误";
    }
};
    //魅族密码验证
 var pwd=function(txt,reg){
        var span=txt.parentElement
            .parentElement
            .firstElementChild;
        span.style.visibility='hidden';
        if(reg.test(txt.value)){
            span.style.visibility='hidden';

        }else{
            span.className="info";
            span.style.visibility='visible';
            span.innerHTML="密码格式错误";
        }
    };
//手机号验证
var phone=function(txt,reg){
    var span=txt.parentElement
        .parentElement
        .firstElementChild;
    span.style.visibility='hidden';
    if(reg.test(txt.value)){
        span.style.visibility='hidden';
        l=1;
    }else{
            span.className="info";
            span.style.visibility='visible';
            span.innerHTML="手机号格式错误";
        l=0;
    }
};
//手机号验证
txtPhone.onblur=function(){
    phone(this,/^(\+86|0086)?\s*1[34578]\d{9}$/);
};
//魅族账号验证
txtName.onblur=function(){
    val(this,/^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$|^(\+86|0086)?\s*1[34578]\d{9}$/);
};
//账户密码验证
txtPwd.onblur=function(){
    pwd(this,/^\w{6,8}$/);
};
    var btn2=document.querySelectorAll(".form_bottom")[1];
    var btn=document.querySelectorAll(".form_bottom")[0];
//找到提交按钮,绑定单击事件
    btn2.onclick=function(e){
        if(t==1&&l==1){
            location.href = 'zm_shop.html';
        }else{
            e.preventDefault();
        }
    };
   btn.onclick=function(e){

        //2.1:获取用户名，密码
        var n = $("[name='username']").val();
        var p = $("[name='pwd']").val();
        //2.2:发送ajax $.ajax();
        if(val&&pwd) {
            $.ajax({
                type: 'POST',
                url: 'data/user_login_01.php',
                data: { uname : n , upwd: p},
                success: function (data) {
                    if (data.code < 0) {
                        //失败阻止提交
                        e.preventDefault();
                        $('.info').html(data.msg).css({'opacity': '1'});
                    } else {
                        if($('[name="checkbox1"]')[0].checked){
                            localStorage['loginName']=n;
                            localStorage.setItem('loginUid',data['uid']);
                        }else{
                            sessionStorage['loginName']=n;
                            sessionStorage.setItem('loginUid',data['uid']);
                        }
                        location.href = 'mz_shop.html';
                    }
                }
            });
        }else{
            e.preventDefault();
        }
    };

})();







};
