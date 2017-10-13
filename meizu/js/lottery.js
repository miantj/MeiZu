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
    var loginUname = sessionStorage.getItem("loginName") || localStorage.getItem("loginName");
    var loginUid = sessionStorage.getItem("loginUid") || localStorage.getItem("loginUid");
    var timer = null;
    $(function () {
        $('.header-box').load('data/header.php', function () {
            if (loginUid) {
                $('.user-name').text(loginUname);
                $('.login_no').addClass('hide');
                $('.login_yes').removeClass('hide');
            }
        });
        $('.footer-box').load('data/footer.php');
        drawLottery();
        getLotteryInfo();
        getLotteryTimes();
    });

    function drawLottery() {
        var canvas = $('#canvas')[0];
        var context = canvas.getContext('2d');
        var flag = true;
        var w = $('.draw-cont').width();
        var h = $('.draw-cont').height();
        canvas.width = w;
        canvas.height = h;
        var pan = new Image();
        pan.src = "img/lottery/pan.png";
        pan.onload = function () {
            context.drawImage(pan, w / 2 - pan.width / 2, h / 2 - pan.height / 2);
            context.translate(w / 2, h / 2);
            $('#bt-lottery').click(function () {
                var leaveTimes = parseInt($('.leave_times').html());
                if (!loginUid || leaveTimes <= 0) {
                    return
                }
                if (flag) {
                    leaveTimes -= 1;
                    //启动转盘
                    beginRoll(leaveTimes);
                }
            });
        };
        var level = '';
        //让转盘旋转
        function beginRoll(leaveTimes) {
            flag = false;
            var duration = Math.random() * 4000 + 3000;
            var deg = 0;
            var deg = 0;//已转角度
            var speed = 0;//当前速度
            var last = 0;//已转时长
            var maxspeed = parseInt(Math.random() * (38 - 25) + 25);//最大速度
            var timer = setInterval(function () {
                if (speed < maxspeed && last < maxspeed * 2 * 20) {
                    speed += .5;
                    console.log(1)
                } else if (speed > 0 && last > duration - maxspeed * 2 * 20) {
                    speed -= .5;
                    console.log(2)
                } else {
                    speed = maxspeed;
                    console.log(3)
                }
                deg += speed / 2;
                context.clearRect(-w / 2, -h / 2, w, h);
                context.rotate(deg * Math.PI / 180);
                context.drawImage(pan, -pan.width / 2, -pan.height / 2);
                context.rotate(-deg * Math.PI / 180);
                last += 20;
                if (last >= duration) {
                    clearInterval(timer);
                    timer = null;
                    flag = true;
                    deg %= 360;
                    if (deg >= 22.5 && deg < 67.5) {
                        level = "魅族定制背包";
                    } else if (deg >= 67.5 && deg < 112.5) {
                        level = "5煤球";
                    } else if (deg >= 112.5 && deg < 157.5) {
                        level = "蓝牙运动耳机";
                    } else if (deg >= 157.5 && deg < 202.5) {
                        level = "魅族直柄伞";
                    } else if (deg >= 202.5 && deg < 247.5) {
                        level = "路由器极速版";
                    } else if (deg >= 247.5 && deg < 292.5) {
                        level = "1煤球";
                    } else if (deg >= 292.5 && deg < 337.5) {
                        level = "猴年熊猫";
                    } else {
                        level = "20煤球";
                    }
                    setTimeout(function () {
                        $('.modal-lottery').css('display', 'block');
                        $('.gift-name').html(level);
                    }, 800);
                    updateLottery();
                    updateLotteryTimes(leaveTimes);
                }
            }, 20);
        }
        function updateLottery() {
            $.post('data/updateLottery.php', {uid: loginUid, level: level}, function () {
                $('.lottery-info').prepend($(`<
                li >
                < span
                class
                = "giftname c_blue" >${level} < / span >
                < em
                class
                = "uname" >${loginUname} < / em >
                < / li >`))
                ;
                clearInterval(timer);
                timer = null;
                beginSlide();
            });
        }
    }
    function getLotteryInfo() {
        $.get('data/lottery_info.php', function (data) {
            var html = '';
            for (var i = 0; i < data.length; i++) {
                html +=`<
                li >
                < span
            class
                = "giftname c_blue" >${data[i].lottery_gift_name} < / span >
                < em
            class
                = "uname" >${data[i].uname} < / em >
                < / li >`;
            }
            $('.lottery-info').html(html);
            beginSlide();
        })
    }
    function beginSlide() {
        timer = setInterval(function () {
            $('.lottery-info').animate({top: '-=47px'}, 500, function () {
                var list = $('.lottery-info li');
                var li = list.splice(0, 1);
                $('.lottery-info').append(li);
                $('.lottery-info').css('top', 0);
            });
        }, 1500);
    }
    $('.close').click(function () {
        $('.modal-lottery').css('display', 'none');
    });
//获取剩余抽奖次数
    function getLotteryTimes() {
        var date = new Date().toDateString();
        $.get('data/getLotteryTimes.php', {loginUid: loginUid, date: date}, function (data) {
            if (data === 'err') {
                updateLotteryTimes(5);
                $('.leave_times').html(5);
            } else {
                $('.leave_times').html(data.cLeaveTimes);
            }
        });
    }
//更新抽奖次数
    function updateLotteryTimes(n) {
        var date = new Date().toDateString();
        $.post('data/updateLotteryTimes.php', {loginUid: loginUid, date: date, count: n}, function (data) {
            $('.leave_times').html(n);
        })
    }
//退出
    $('.header-box').on('click', '.loginOut', function () {
        $('.user-info').css('display', 'none');
        loginUid = null;
        sessionStorage.clear();
        localStorage.clear();
        $('.login_no').removeClass('hide');
        $('.login_yes').addClass('hide');
    });
};