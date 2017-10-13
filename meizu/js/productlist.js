(function(){
    //下拉加载更多
//pageNo 参数表示:当前页码
    var section = $(".section_phone");
    function loadProduct(pageNo) {
        //1:发送ajax请求
        $.ajax({
            type: 'POST',
            data: {pageNo: pageNo},
            url: 'data/product_list_02.php',
            success: function (data) {
                //3:接字符串
                var html = "";
                $.each(data, function (i, p) {
                    if (!`${p.pnameo}`) {
                        html += `
                <li class="section_p">
                    <div class="section_pi">
                    <img src="${p.pic}"/>
                    <span>
                    <a href="#">
                    ${p.pname}
                    </a>
                    </span>
                    </div>
                 </li>
                        `;
                    } else {
                        html += `
<li>
        <a href="#">
                <dl>
                <dt>
                <img src="${p.pic}"/>
                </dt>
                <dd>${p.pname}</dd>
                <dd>${p.pnameo}</dd>
                <dd class="nav_home_red">${p.price}</dd>
                </dl>
                </a>
        <i ${p.class}></i>
</li>
        `;
                        section.eq(pageNo - 1).removeClass('img');
                    }
                    ;
                });
                //htmls+=html;
                section.eq(pageNo - 1).html(html);
            }
        });

    };

    //头部手机弹出框
    $('.top_2_nav').on('mouseover', 'li', function(){
        //获取鼠标移入元素的下标
        var $index=$(this).index();
        var $top=$($('.pro_ul')[$index]);
        var $li=$top.children("li");
        var $leg= $li.children().length;
        if($leg==0){
            $.ajax({
                type: 'POST',
                data: {pro_count:$index},
                url:"data/product_list_04.php",
                success:function(data){
                    var html='';
                    $.each(data, function (i, p){
                        html=`
                        <a href="plus.html">
                        <p>
                        <img src="${p.pic}" />
                        </p>
                        <p>${p.pname}</p>
                        <p class="nav_home_red">${p.price}</p>
                        </a>
                        `
                        $($li[i]).html(html);
                    });
                }
            });
        }
    });

    //轮播产品弹出框
     $('.nav_dis ul').on('mouseover', 'li', function(){
        //获取点击的元素
       var $t=$(this)
            .children('.dis_classify')
            .children('.dis_sj_left');
         var $count=$(this).index();
         var $leg= $t.children("a").length;
         //如果div内没有内容就发送请求
         if($leg==0||$leg==7){
         $.ajax({
             type: 'POST',
             data: {pro_count:$count},
             url:"data/product_list_03.php",
             success:function(data){
                 var html='';
                 $.each(data, function (i, p){
                     if(!`${p.pic}`){
                         html+=`
                     <a href="plus.html" class="sj_left_title">
                        ${p.pname}
                     </a>`
                     }else{
                         html+=`
                     <a href="plus.html">
                         <img src="${p.pic}">
                         <div>
                             ${p.pname}
                         </div>
                         </a>
                `
                     }
                });
                     $($t[0]).html(html);
             }
         })}
     });

//2:再次发送 ajax请求获取总页数
//拼接字符串

    $.ajax({
        url: "data/product_pagetotal_01.php",
        success: function (data) {
            var pageTotal = data.page;
            //拼接字符串
            var count = 0;
            var t = 0;
            $(window).scroll(function () {
                if ($(window).scrollTop() + $(window).height() + (1200/(count+1)) > $(document).height()) {
                    console.log(count);
                    t++;
                    if (t > 8) {
                        count++;
                        t = 0;
                        if (count <= pageTotal) {
                            for (var i = 1; i <= count; i++) {
                                loadProduct(i);
                            }
                        }
                        //(count>3)&&(count=0);
                    }
                }
            });
        }
    });
    //添加商城客户列表
    if(sessionStorage['loginName']||localStorage['loginName']!==undefined){
        $(".top_right_nav ").html(
            `
                <li>
                    <a href="lottery.html" class="tb">
                    我的收藏<i></i>
                    </a>
                </li>
                <li>
                    <a href="lottery.html">
                    我的订单
                    </a>
                </li>
                <li >
                    <a href="lottery.html" style="color: #00c3f5;overflow: hidden;width:90px;">
                        用户：${sessionStorage['loginName']||localStorage['loginName']}
                    </a>
                </li>
        `

        );
    };

})();