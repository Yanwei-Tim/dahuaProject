$(function(){
	var $nav=$('.dahua_nav li[class*="pro_menu"]');
	var box=$('div[class*="pro_box"]');
/*	var conter=function(name){
		this.fun=function(){*/
		$nav.each(function(idx,domEle){
			var $domEle=$(domEle);//遍历每个元素
			var $l=$(box[idx]);
			$(this).hover(function(){
				$l.slideDown().siblings().hide();
			},function(){
				$l.hide();
			});
			$l.hover(function(){
				$(this).show()
			},function(){
				$(this).slideUp();
			})
			
		})

	//搜索框弹出
	$('.dahua_nav li:last-child ').hover(function(){
		$('.dahua_search').animate({'height':'80px'},300);
	},function(){
		$('.dahua_search').animate({'height':'0'},300);
	})

	// }
 // }
/*	var ms=new conter(nav);
	var ls=new conter(box);
	ms.fun();
	ls.fun();*/

	//视频部分
	$(".videos").hover(function(){
		$(this).stop().animate({marginTop : -20	}, 200);
	}, function(){
		$(this).stop().animate({marginTop : 0}, 200);
	});
	//视频模态框
	$(".video_poster").click(function () {
		$('.video_modal').css('display','block');
	})
	$(".video_close").click(function () {
		$('.video_modal').css('display',"none");
	});
	//旋转放大
	(function(){
	var $box=$("li[class^='sol_box']");
	var dec=$("li[class^='sol_box'] .box h4");
	var txt=$(".text_active");
	var img=$("li[class^='sol_box'] .box img");
	$box.each(function (idx) {
		var $d=$(dec[idx]);
		var $t=$(txt[idx]);
		var $i=$(img[idx]);
		$(this).hover(function(){
			$d.css("display","none");
			$(this).css("transform","rotate(360deg)");
			$t.css("display","inline-block");
			
			$i.css("transform","scale(1.5)");
			},function(){
				$(this).css("transform","rotate(0deg)");
				$i.css("transform","scale(1)");
				$t.css("display","none");
				$d.css("display","block");
			});
		
	});
})()


	$('[class^="core-img"]').hover(function () {
		$(this).children('.core-modal').fadeIn(500);
	},function(){
		$(this).children('.core-modal').fadeOut(300);
	})
});
//回到顶部
window.onscroll=function(){
    var oScroll=document.getElementById('getTop');
    // var winH=document.body.clientHeight;
    var scrollT=parseInt(document.body.scrollTop)||parseInt(document.documentElement.scrollTop)||parseInt(window.pageYOffset);  
    var time=null;
    var speed=0;
    if(scrollT>0){
        oScroll.style.display='block';
    }else{
        oScroll.style.display='none';
    }
    oScroll.onclick=function(){
        time=setInterval(function(){
        speed=Math.ceil(scrollT/50);
        console.log(scrollT);
            if(scrollT>0){
                scrollT-=speed;
                document.body.scrollTop=scrollT;
                document.documentElement.scrollTop=scrollT;
                window.pageYOffset=scrollT;
            }else{
                clearInterval(time)
            }
        },10)
    }
}


//轮播广告控制器
/*$(function(){
	var app=angular.module('dahua',['ng']);


	app.controller('carouselCrtl',["$scope","$http",function ($scope,$http) {
		$http.get('data/navPic.php')
			.success(function (data) {
				$scope.picList=data;
				// console.log($scope.picList)
			})
	}])
})*/
$(function () {
	$.get('data/navPic.php',function (list) {
		var html="";
		$.each(list,function (i,p) {
			if(i==0) {
				html += `
				<div class="item active">
                        <img src="img/${p.pic}" alt="">
                    </div>				
			`;
			}
			if(i>0){
				html += `
				<div class="item">
                        <img src="img/${p.pic}" alt="">
                    </div>
                    `;
			}
			$('#myCarousel>.carousel-inner').html(html);
		})
	})
});
//新品速度数据加载
$(function () {
	$.get('data/proPic.php',function (list) {
		var html="";
		$.each(list,function (i,p) {
				html += `
				<dl class="pro_list2">
                            <dt><img src="img/${p.pro_pic}" alt=""></dt>
                            <dd class="pro_name">${p.pro_name}</dd>
                            <dd  class="pro_model">${p.pro_model}</dd>
                            <dd class="pro_dec">${p.pro_dec}</dd>
                            <dd  class="pro_more"><a href="">点击更多>></a></dd>
                        </dl>			
			`;
			});
			$('#myCarousel2>.carousel-inner .item').html(html);
			// $('#myCarousel2 .carousel-inner .item').html(html);
		})
	});

