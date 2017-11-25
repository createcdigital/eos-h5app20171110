var app = app || {};

/*-- html5-template
====================================================== */
app.template = function(){};

/* loader */
app.template.loader = function(){};
app.template.loader.init= function(paraArrary,isFirst){
    // loader
    var getSource = function(){
        var res = [];

        if(isFirst)
        {
            res.push("img/share-icon.jpg");
            res.push("img/transparent.png");
        }

        for (var i=0;i<paraArrary.length;i++)
        {
            res.push(paraArrary[i]);
        }

        return res;
    }

    new mo.Loader(getSource(),{
        loadType : 1,
        minTime : 300,
        onLoading : function(count,total){
            console.log('onloading:single loaded:',arguments)
            if(isFirst)
            {
                $(".loader h1").html('LOADING ('+Math.round(count/total*100)+'%)');
            }
        },
        onComplete : function(time){
            console.log('oncomplete:all source loaded:',arguments);
            if(isFirst)
            {
                app.template.loader.destory();
                app.template.loader.done_callback.call();
            }
        }
    });
};
app.template.loader.done_callback = function(){};

app.template.loader.destory = function(){
    $(".loader").remove();
};

/* Landscape */
app.template.Landscape = function(){};
app.template.Landscape.init= function(){
    var Landscape = new mo.Landscape({
        pic: 'js/motion/landscape.png',
        picZoom: 3,
        mode:'portrait',//portrait,landscape
        prefix:'Shine'
    });
};

/* pageslide swiper */
app.template.swiper = function(){};
app.template.swiper.mySwiper = {};
app.template.swiper.init = function(){
    app.template.loader.done_callback = app.template.swiper.bind;
};
app.template.swiper.bind = function(){
    $(".swiper-container").css("display", "block");

    app.template.swiper.mySwiper = new Swiper ('.swiper-container', {
        speed:800,
        lazyLoading : true,
        lazyLoadingInPrevNext : true,
        effect : 'fade',
        fade:{
            crossFade:false
        },
        onInit: function(swiper){ //Swiper2.x的初始化是onFirstInit
            swiperAnimateCache(swiper); //隐藏动画元素
            swiperAnimate(swiper); //初始化完成开始动画

            app.template.swiper.on_pageslideend(0);
        },
        onSlideChangeStart: function(swiper){
            swiperAnimate(swiper); //每个slide切换结束时也运行当前slide动画

            app.template.swiper.on_pageslideend(swiper.activeIndex);
            app.template.swiper.mySwiper.lockSwipes();
        }
    });

    app.template.swiper.lock();
};
app.template.swiper.lock = function(){
    app.template.swiper.mySwiper.lockSwipes();
};
app.template.swiper.on_pageslideend = function(index){};

app.template.swiper.next = function(){
    app.template.swiper.mySwiper.unlockSwipes();
    app.template.swiper.mySwiper.slideNext();
};

app.template.swiper.prev = function(){
    app.template.swiper.mySwiper.unlockSwipes();
    app.template.swiper.mySwiper.slidePrev();
};

app.template.swiper.to = function(index){
    app.template.swiper.mySwiper.unlockSwipes();
    app.template.swiper.mySwiper.slideTo(index,100,true);
};

app.template.touch = function(){};
app.template.touch.init = function(){

    // fastclick
    FastClick.attach(document.body);

    document.body.addEventListener("touchmove", function(e) {
        //e.stopPropagation();  // 阻止事件传递
        e.preventDefault();     // 阻止浏览器默认动作(网页滚动)
    });

    $("body").on("doubleTap longTap swipeLeft swipeRight", function(e){
        // e.stopPropagation();  // 阻止事件传递
        // e.preventDefault();   // 阻止浏览器默认动作(网页滚动)
        return false;
    });
};

app.template.data = {};
app.template.data.add = function(key, value){
    app.template.data[key] = value;
};
app.template.data.get = function(key){
    return app.template.data[key];
};

/*-- tools
====================================================== */
app.tools = function(){};
app.tools.random = function(n, m){
    var c = m-n+1;
    return Math.floor(Math.random() * c + n);
};

app.tools.getpageurlwithoutparam = function(){
    var url = window.location.href;
    return url.substring(0, url.indexOf("?"));
};

app.tools.getbaseurl = function(){
    var url = window.location.href;
    return url.substring(0, url.lastIndexOf("/") + 1);
};

app.tools.gotourl = function(url){
    window.location.href = url;
};

app.tools.geturlparam = function(param){
    var reg = new RegExp("(^|&)" + param + "=([^&]*)(&|$)", "i");
    var r = window.location.search.substr(1).match(reg);
    if (r != null)
        return unescape(r[2]);
    else
        return undefined;
};

app.tools.substr = function(str, len){
    if(str.length > len)
        str = str.substring(0, len) + "...";

    return str;
};

app.tools.platform = function(){};
app.tools.platform.os = "";
app.tools.platform.debug = ""; // 强制开始指定os模式
app.tools.platform.init = function(){
    var u = navigator.userAgent;

    if(u.indexOf('Android') > -1 || u.indexOf('Linux') > -1)
        app.tools.platform.os = "android";
    else if(!!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/))
        app.tools.platform.os = "ios";

    if(app.tools.platform.debug == "ios")
        app.tools.platform.os = "ios";
    else if(app.tools.platform.debug == "android")
        app.tools.platform.os = "android";
};

/*-- audio player
====================================================== */
app.audio = function(){};
app.audio.player = undefined;
app.audio.status = "";
app.audio.init = function(){
    app.audio.player = $("#audio-player");

    $(".audio-icon").on("touchend", function(){
        if(app.audio.player[0].paused)
        {
            app.audio.play();
            $(".audio-icon").addClass("audio-icon-animation");
        }
        else
        {
            app.audio.pause();
            $(".audio-icon").removeClass("audio-icon-animation");
        }
    });

    app.template.loader.done_callback2 = app.audio.show;
};


app.audio.show = function(){
    $(".audio-icon").css({"display": "block"});
    $(".audio-icon").addClass("audio-icon-animation");
    app.audio.play();
};

app.audio.play = function(){
    app.audio.player[0].play();
    if(!app.audio.player[0].paused)
        app.audio.status = "play";
};

app.audio.pause = function(){
    app.audio.status = "pause";
    app.audio.player[0].pause();
};

app.audio.stop = function(){
    app.audio.player.attr("src", "");
    app.audio.player[0].load();
};

app.audio.changesong = function(src){
    app.audio.player.attr("src", src);
    app.audio.player[0].load();

    if(app.audio.status == "play")
       app.audio.play();
};

app.audio.play_tap = function(){
    if(app.audio.status == "play")
        $("#audio-player-tap")[0].play();
};


/*-- p1
====================================================== */
app.p1 = function(){};
app.p1.init = function(){
};
app.p1.bind_touch_event = function(){
    $(".p1 .btn-1").on("touchend", function(){
        app.template.swiper.next();
    });
};

app.p1.show_e2_animation = function(){
};

app.p1.show_e2_overlay = function(){
};

app.p1.destory = function(){
    var aar = ["img/p2/e-1.png",
        "img/p2/e-2-2.png",
        "img/p2/e-3-2.png",
        "img/p2/e-4-2.png",
        "img/p2/e-7.png"];
    app.template.loader.init(aar,false);
};


/*-- p2
====================================================== */
app.p2 = function(){};
app.p2.init = function(){
};
app.p2.bind_touch_event = function(){

    var hdValue="";
    $(".p2 .e-2").on("click", function(){
        hdValue=$(this).attr("value");
        $(".p2 .e-2-img").attr("src","img/p2/e-2-2.png");
        $(".p2 .e-3-img").attr("src","img/p2/e-3-1.png");
        $(".p2 .e-4-img").attr("src","img/p2/e-4-1.png");
     });
    $(".p2 .e-3").on("click", function(){
        hdValue=$(this).attr("value");
        $(".p2 .e-2-img").attr("src","img/p2/e-2-1.png");
        $(".p2 .e-3-img").attr("src","img/p2/e-3-2.png");
        $(".p2 .e-4-img").attr("src","img/p2/e-4-1.png");
     });
    $(".p2 .e-4").on("click", function(){
        hdValue=$(this).attr("value");
        $(".p2 .e-2-img").attr("src","img/p2/e-2-1.png");
        $(".p2 .e-3-img").attr("src","img/p2/e-3-1.png");
         $(".p2 .e-4-img").attr("src","img/p2/e-4-2.png");
     });

    $(".p2 .btn-1").on("touchend", function(){
        if(hdValue=="" || hdValue==null || hdValue== undefined)
        {
            alert("请选择！");
            return false;
        }
        app.template.swiper.to(parseInt(hdValue));
    });
    
};
app.p2.destory = function(nextIndex){
    if(nextIndex==3)
    {
        var aar = ["img/p3/e-1.png",
            "img/p3/e-2.png",
            "img/p3/e-3.png",
            "img/p3/e-5.png",
            "img/p3/e-6.png",
            "img/p3/e-9.png",
            "img/p3/e-10.png",
            "img/p3/e-11.png"];
        app.template.loader.init(aar,false);
    }
    else if(nextIndex==4) {
        var aar = ["img/p4/e-1.png",
            "img/p4/e-2.png",
            "img/p4/e-3.png",
            "img/p4/e-4.png",
            "img/p4/e-5.png",
            "img/p4/e-6.png",
            "img/p3/e-9.png"];
        app.template.loader.init(aar,false);
    }else if(nextIndex==5)
    {
        var aar = ["img/p5/e-1.png",
            "img/p5/e-2.png",
            "img/p5/e-3.png",
            "img/p5/e-4.png",
            "img/p5/e-5.png",
            "img/p5/e-6.png"];
        app.template.loader.init(aar,false);
    }
};
/*-- p3
====================================================== */
app.p3 = function(){};
app.p3.init = function(){
};
app.p3.bind_touch_event = function(){
    $(".p3 .btn-1").on("touchend", function(){
        app.template.swiper.to(5);
    });
};
app.p3.destory = function(){
};
/*-- p4
====================================================== */
app.p4 = function(){};
app.p4.init = function(){
};
app.p4.bind_touch_event = function(){
    $(".p4 .btn-1").on("touchend", function(){
        app.template.swiper.to(6);
    });
};
app.p4.destory = function(){
};
/*-- p5
====================================================== */
app.p5 = function(){};
app.p5.init = function(){
};
app.p5.bind_touch_event = function(){
    $(".p5 .btn-1").on("touchend", function(){
        app.template.swiper.to(7);
    });
};
app.p5.destory = function(){
};
/*-- p6
====================================================== */
app.p6 = function(){};
app.p6.init = function(){
};
app.p6.bind_touch_event = function(){
    $(".p6 .e-1").on("touchend", function(){
        app.template.swiper.to(8);
        $("#p9img").attr("src", $("#p9img").attr("data-src")).removeAttr("data-src");
    });
    $(".p6 .e-2").on("touchend", function(){
        app.template.swiper.to(9);
        $("#p10img").attr("src", $("#p10img").attr("data-src")).removeAttr("data-src");
    });
};
app.p6.destory = function(nextIndex){
    if(nextIndex==9)
    {
        var aar = ["img/p9/p9.gif"];
        app.template.loader.init(aar,false);
    }else if(nextIndex==10)
    {
        var aar = ["img/p10/p10.gif"];
        app.template.loader.init(aar,false);
    }

};
/*-- p7
====================================================== */
app.p7 = function(){};
app.p7.init = function(){
};
app.p7.bind_touch_event = function(){
    $(".p7 .e-1").on("touchend", function(){
        app.template.swiper.to(10);
        $("#p11img").attr("src", $("#p11img").attr("data-src")).removeAttr("data-src");
    });
    $(".p7 .e-2").on("touchend", function(){
        app.template.swiper.to(11);
        $("#p12img").attr("src", $("#p12img").attr("data-src")).removeAttr("data-src");
    });
};
app.p7.destory = function(nextIndex){
    if(nextIndex==9)
    {
        var aar = ["img/p11/p1.gif"];
        app.template.loader.init(aar,false);
    }else if(nextIndex==10)
    {
        var aar = ["img/p12/p13.gif"];
        app.template.loader.init(aar,false);
    }
};
/*-- p8
====================================================== */
app.p8 = function(){};
app.p8.init = function(){
};
app.p8.bind_touch_event = function(){
    $(".p8 .e-1").on("touchend", function(){
        app.ChatStr(3,'.p19',false);
        app.template.swiper.to(12);
        $("#p13img").attr("src", $("#p13img").attr("data-src")).removeAttr("data-src");
    });
    $(".p8 .e-2").on("touchend", function(){
        app.template.swiper.to(13);
        $("#p14img").attr("src", $("#p14img").attr("data-src")).removeAttr("data-src");
    });
};
app.p8.destory = function(nextIndex){
    if(nextIndex==9)
    {
        var aar = ["img/p13/p3.gif"];
        app.template.loader.init(aar,false);
    }else if(nextIndex==10)
    {
        var aar = ["img/p14/p14.gif"];
        app.template.loader.init(aar,false);
    }
};


/*-- p9
 ====================================================== */
app.p9 = function(){};
app.p9.init = function(){
    $("#p9img").on('load', function () {
        if(this.complete)
        {
            function show1() {
                app.template.swiper.to(14);
            }
            setTimeout(show1,2000);
        }
    });
};
app.p9.bind_touch_event = function(){
    // $(".p9 .btn-1").on("touchend", function(){
    //     app.template.swiper.to(14);
    // });
};
app.p9.destory = function(){
    var aar = ["img/p15/e-1.png",
                "img/p15/e-2.png",
                "img/p15/e-3.png",
                "img/p15/e-4.png",
                "img/p15/e-5.png",
                "img/p15/e-6.png",
                "img/p15/e-7.png",
                "img/p15/e-8.png",
                "img/p15/e-9.png",
                "img/p15/e-10.png",
                "img/p15/e-11.png",
                "img/p15/e-12.png"];
    app.template.loader.init(aar,false);
};
/*-- p10
 ====================================================== */
app.p10 = function(){};
app.p10.init = function(){
    $("#p10img").on('load', function () {
        if(this.complete) {
            function show2() {
                app.template.swiper.to(15);
            }
            setTimeout(show2, 2000);
        }
    });
};
app.p10.bind_touch_event = function(){
    // $(".p10 .btn-1").on("touchend", function(){
    //     app.template.swiper.to(15);
    // });
};
app.p10.destory = function(){
    var aar = ["img/p16/e-1.png",
        "img/p16/e-2.png",
        "img/p16/e-3.png",
        "img/p16/e-4.png",
        "img/p16/e-5.png",
        "img/p16/e-6.png",
        "img/p16/e-7.png",
        "img/p16/e-8.png",
        "img/p16/e-9.png",
        "img/p16/e-10.png",
        "img/p16/e-11.png",
        "img/p16/e-12.png",
        "img/p16/e-13.png"];
    app.template.loader.init(aar,false);
};
/*-- p11
 ====================================================== */
app.p11 = function(){};
app.p11.init = function(){
    $("#p11img").on('load', function () {
        if(this.complete) {
            function show3() {
                app.template.swiper.to(16);
            }
            setTimeout(show3, 2000);
        }
    });
};
app.p11.bind_touch_event = function(){
    // $(".p11 .btn-1").on("touchend", function(){
    //     app.template.swiper.to(16);
    // });
};
app.p11.destory = function(){
    var aar = ["img/p17/e-1.png",
        "img/p17/e-2.png",
        "img/p17/e-3.png",
        "img/p17/e-4.png",
        "img/p17/e-5.png",
        "img/p17/e-6.png"];
    app.template.loader.init(aar,false);
};
/*-- p12
 ====================================================== */
app.p12 = function(){};
app.p12.init = function(){
    $("#p12img").on('load', function () {
        if(this.complete) {
            function show4() {
                app.template.swiper.to(17);
            }
            setTimeout(show4, 2000);
        }
    });
};
app.p12.bind_touch_event = function(){
    // $(".p12 .btn-1").on("touchend", function(){
    //     app.template.swiper.to(17);
    // });
};
app.p12.destory = function(){
    var aar = ["img/p18/e-1.png",
        "img/p18/e-2.png",
        "img/p18/e-3.png",
        "img/p18/e-4.png",
        "img/p17/e-6.png"];
    app.template.loader.init(aar,false);
};
/*-- p13
 ====================================================== */
app.p13 = function(){};
app.p13.init = function(){
    $("#p13img").on('load', function () {
        if(this.complete) {
            function show5() {
                app.template.swiper.to(18);
            }
            setTimeout(show5, 2000);
        }
    });
};
app.p13.bind_touch_event = function(){
    // $(".p13 .btn-1").on("touchend", function(){
    //     app.template.swiper.to(18);
    // });
};
app.p13.destory = function(){
    var aar = ["img/p19/e-1.png",
        "img/p19/e-2.png",
        "img/p19/e-3.png",
        "img/p5/e-4.png",
        "img/p5/e-6.png",
        "img/p19/e-4.png"];
    app.template.loader.init(aar,false);
};
/*-- p14
 ====================================================== */
app.p14 = function(){};
app.p14.init = function(){
    $("#p14img").on('load', function () {
        if(this.complete) {
            function show6() {
                app.template.swiper.to(19);
            }
            setTimeout(show6, 2000);
        }
    });
};
app.p14.bind_touch_event = function(){
    // $(".p14 .btn-1").on("touchend", function(){
    //     app.template.swiper.to(19);
    // });
};
app.p14.destory = function(){
    var aar = ["img/p20/e-1.png",
        "img/p20/e-2.png",
        "img/p20/e-3.png",
        "img/p5/e-4.png",
        "img/p5/e-6.png",
        "img/p19/e-4.png"];
    app.template.loader.init(aar,false);
};








/*-- p15
====================================================== */
app.p15 = function(){};
app.p15.init = function(){
    app.ChatStr(3,'.p15',true);
};
app.p15.bind_touch_event = function(){
    $(".p15 .btn-1").on("touchend", function(){
        app.template.swiper.to(20);
    });
};
app.p15.destory = function(){
    var aar = ["img/p21/e-1.png",
        "img/p21/e-2.png",
        "img/p21/e-3.png",
        "img/p21/e-4.png",
        "img/p21/e-5.png",
        "img/p21/e-6.png"];
    app.template.loader.init(aar,false);
};
/*-- p16
====================================================== */
app.p16 = function(){};
app.p16.init = function(){
};
app.p16.bind_touch_event = function(){
    $(".p16 .btn-1").on("touchend", function(){
        app.template.swiper.to(21);
    });
};
app.p16.destory = function(){
    var aar = ["img/p22/e-1.png",
        "img/p22/e-2.png",
        "img/p22/e-3.png",
        "img/p21/e-4.png",
        "img/p21/e-5.png",
        "img/p21/e-6.png"];
    app.template.loader.init(aar,false);
};
/*-- p17
====================================================== */
app.p17 = function(){};
app.p17.init = function(){
};
app.p17.bind_touch_event = function(){
    $(".p17 .btn-1").on("touchend", function(){
        app.template.swiper.to(22);
    });
};
app.p17.destory = function(){
    var aar = ["img/p23/e-1.png",
        "img/p23/e-2.png",
        "img/p23/e-3.png",
        "img/p21/e-4.png",
        "img/p21/e-5.png",
        "img/p21/e-6.png"];
    app.template.loader.init(aar,false);
};
/*-- p18
====================================================== */
app.p18 = function(){};
app.p18.init = function(){
};
app.p18.bind_touch_event = function(){
    $(".p18 .btn-1").on("touchend", function(){
        app.template.swiper.to(23);
    });
};
app.p18.destory = function(){
    var aar = ["img/p24/e-1.png",
        "img/p24/e-2.png",
        "img/p24/e-3.png",
        "img/p21/e-4.png",
        "img/p21/e-5.png",
        "img/p21/e-6.png"];
    app.template.loader.init(aar,false);
};
/*-- p19
====================================================== */
app.p19 = function(){};
app.p19.init = function(){
};
app.p19.bind_touch_event = function(){
    $(".p19 .btn-1").on("touchend", function(){
        app.template.swiper.to(24);
    });
};
app.p19.destory = function(){
    var aar = ["img/p25/e-1.png",
        "img/p25/e-2.png",
        "img/p25/e-3.png",
        "img/p21/e-4.png",
        "img/p21/e-5.png",
        "img/p21/e-6.png"];
    app.template.loader.init(aar,false);
};
/*-- p20
====================================================== */
app.p20 = function(){};
app.p20.init = function(){
};
app.p20.bind_touch_event = function(){
    $(".p20 .btn-1").on("touchend", function(){
        app.template.swiper.to(25);
    });
};
app.p20.destory = function(){
    var aar = ["img/p26/e-1.png",
        "img/p26/e-2.png",
        "img/p26/e-3.png",
        "img/p21/e-4.png",
        "img/p21/e-5.png",
        "img/p21/e-6.png"];
    app.template.loader.init(aar,false);
};





/*-- p21
 ====================================================== */
app.p21 = function(){};
app.p21.init = function(){
    //是否玩过游戏
    localStorage.setItem("IsPlayed", "true");
    app.ShareOp();
};
app.p21.bind_touch_event = function(){
    $(".p21 .btn-1").on("touchend", function(){
        app.template.swiper.to(1);
        app.ImgForGif.resetGif(9);
    });
    $(".p21 .btn-3").on("touchend", function(){
        window.location.href="http://yhg111.ren/iDif98";
    });
};
app.p21.destory = function(){
    var aar = ["img/p2/e-1.png",
        "img/p2/e-2-2.png",
        "img/p2/e-3-2.png",
        "img/p2/e-4-2.png",
        "img/p2/e-7.png"];
    app.template.loader.init(aar,false);
};
/*-- p22
 ====================================================== */
app.p22 = function(){};
app.p22.init = function(){
    app.ShareOp();
    //是否玩过游戏
    localStorage.setItem("IsPlayed", "true");
};
app.p22.bind_touch_event = function(){
    $(".p22 .btn-1").on("touchend", function(){
        app.template.swiper.to(1);
        app.ImgForGif.resetGif(10);
    });
    $(".p22 .btn-3").on("touchend", function(){
        window.location.href="http://yhg111.ren/iDif98";
    });
};
app.p22.destory = function(){
    var aar = ["img/p2/e-1.png",
        "img/p2/e-2-2.png",
        "img/p2/e-3-2.png",
        "img/p2/e-4-2.png",
        "img/p2/e-7.png"];
    app.template.loader.init(aar,false);
};
/*-- p23
 ====================================================== */
app.p23 = function(){};
app.p23.init = function(){
    app.ShareOp();
    //是否玩过游戏
    localStorage.setItem("IsPlayed", "true");
};
app.p23.bind_touch_event = function(){
    $(".p23 .btn-1").on("touchend", function(){
        app.template.swiper.to(1);
        app.ImgForGif.resetGif(11);
    });
    $(".p23 .btn-3").on("touchend", function(){
        window.location.href="http://yhg111.ren/iDif98";
    });
};
app.p23.destory = function(){
    var aar = ["img/p2/e-1.png",
        "img/p2/e-2-2.png",
        "img/p2/e-3-2.png",
        "img/p2/e-4-2.png",
        "img/p2/e-7.png"];
    app.template.loader.init(aar,false);
};
/*-- p24
 ====================================================== */
app.p24 = function(){};
app.p24.init = function(){
    app.ShareOp();
    //是否玩过游戏
    localStorage.setItem("IsPlayed", "true");
};
app.p24.bind_touch_event = function(){
    $(".p24 .btn-1").on("touchend", function(){
        app.template.swiper.to(1);
        app.ImgForGif.resetGif(12);
    });
    $(".p24 .btn-3").on("touchend", function(){
        window.location.href="http://yhg111.ren/iDif98";
    });
};
app.p24.destory = function(){
    var aar = ["img/p2/e-1.png",
        "img/p2/e-2-2.png",
        "img/p2/e-3-2.png",
        "img/p2/e-4-2.png",
        "img/p2/e-7.png"];
    app.template.loader.init(aar,false);
};
/*-- p25
 ====================================================== */
app.p25 = function(){};
app.p25.init = function(){
    app.ShareOp();
    //是否玩过游戏
    localStorage.setItem("IsPlayed", "true");
};
app.p25.bind_touch_event = function(){
    $(".p25 .btn-1").on("touchend", function(){
        app.template.swiper.to(1);
        app.ImgForGif.resetGif(13);
    });
    $(".p25 .btn-3").on("touchend", function(){
        window.location.href="http://yhg111.ren/iDif98";
    });
};
app.p25.destory = function(){
    var aar = ["img/p2/e-1.png",
        "img/p2/e-2-2.png",
        "img/p2/e-3-2.png",
        "img/p2/e-4-2.png",
        "img/p2/e-7.png"];
    app.template.loader.init(aar,false);
};
/*-- p26
 ====================================================== */
app.p26 = function(){};
app.p26.init = function(){
    app.ShareOp();
    //是否玩过游戏
    localStorage.setItem("IsPlayed", "true");
};
app.p26.bind_touch_event = function(){
    $(".p26 .btn-1").on("touchend", function(){
        app.template.swiper.to(1);
        app.ImgForGif.resetGif(14);
    });
    $(".p26 .btn-3").on("touchend", function(){
        window.location.href="http://yhg111.ren/iDif98";
    });
};
app.p26.destory = function(){
    var aar = ["img/p2/e-1.png",
        "img/p2/e-2-2.png",
        "img/p2/e-3-2.png",
        "img/p2/e-4-2.png",
        "img/p2/e-7.png"];
    app.template.loader.init(aar,false);
};

app.ShareOp = function () {
    var str_title="30s的反应力，测出你的个性！";
    var str_des="敢不敢花30秒，看看你的真个性？";
    if(localStorage.getItem("IsPlayed")=="true" || localStorage.getItem("IsPlayed"))
    {
        str_title="你眼中的我是这样的吗？";
        str_des="来看看我的真个性~";
        str_imgURL="http://www.createcdigital.com/createc-new/eos/img/share2.jpg"
    }
    // wx.ready(function () {
    //     wx.onMenuShareTimeline({
    //         title: str_title, // 分享标题
    //         link: 'http://www.createcdigital.com/createc-new/eos/index.php', // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
    //         imgUrl: 'http://www.createcdigital.com/createc-new/eos/img/share2.jpg', // 分享图标
    //         success: function () {
    //             _hmt.push(['_trackEvent', 'pengyouquan', 'fenxiang', 'literature']);
    //         },
    //         cancel: function () {
    //
    //         }
    //     });
    //
    //     wx.onMenuShareAppMessage({
    //         title: str_title, // 分享标题
    //         desc: str_des, // 分享描述
    //         link: 'http://www.createcdigital.com/createc-new/eos/index.php', // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
    //         imgUrl: 'http://www.createcdigital.com/createc-new/eos/img/share2.jpg', // 分享图标
    //         type: '', // 分享类型,music、video或link，不填默认为link
    //         dataUrl: '', // 如果type是music或video，则要提供数据链接，默认为空
    //         success: function () {
    //             _hmt.push(['_trackEvent', 'pengyou', 'fenxiang', 'literature']);
    //         },
    //         cancel: function () {
    //
    //         }
    //     })
    //});
};

/*-- GIF src reset
 ====================================================== */
app.ImgForGif=function () {};
app.ImgForGif.resetGif=function (index) {
    $("#p"+index+"img").attr("data-src", $("#p"+index+"img").attr("src")).removeAttr("src");
};

/*-- 聊天对话框
 ====================================================== */
app.ChatStr =function (num,a,others) {
    var a =a;
    //三句话
    if(num == 3 && !others ){
        setTimeout(function () {
            $(""+a+" .e-1").fadeIn(2000,function () {
                $(""+a+" .e-1").fadeOut();
                $(""+a+" .e-2").fadeIn(2000,function () {
                    $(""+a+" .e-2").fadeOut();
                    $(""+a+" .e-3").fadeIn(2000);
                })
            })
        },2000)
    }
    //4句话
    if(others ){
        if(num == 3){
            setTimeout(function () {
                $(""+a+" .e-5").fadeIn(2000,function () {
                    $(""+a+" .e-5").fadeOut();
                    $(""+a+" .e-6").fadeIn(2000,function () {
                        $(""+a+" .e-6").fadeOut();
                        $(""+a+" .e-7").fadeIn(2000);
                    })
                })
            },2000)
        }
        if(num == 4) {
            setTimeout(function () {
                $("" + a + " .e-5").fadeIn(2000, function () {
                    $("" + a + " .e-5").fadeOut();
                    $("" + a + " .e-6").fadeIn(2000, function () {
                        $("" + a + " .e-6").fadeOut();
                        $("" + a + " .e-6").fadeIn(2000, function () {
                            $("" + a + " .e-6").fadeOut();
                            $("" + a + " .e-7").fadeIn(2000);
                        });
                    })
                })
            }, 2000)
        }
    }
};

/*-- for android
====================================================== */
var fuckandroid = {};
fuckandroid.app = function(){};
fuckandroid.app.p1 = function(){};
fuckandroid.app.p1.bind_touch_event = function(){
};

/*-- page init
====================================================== */
(function(){
    // 检测OS
    app.tools.platform.init();

    // 兼容android(如果开启android模式则重写响应函数用来)
    if(app.tools.platform.debug == "android"
     || app.tools.platform.os == "android")
    {
    }

    var aar = ["img/p1/e-11.png",
            "img/p1/e-2.png",
            "img/p1/e-3.png",
            "img/p1/e-4.png",
            "img/p1/e-5.png",
            "img/p1/e-6.png",
            "img/p1/e-7.png",
            "img/p1/e-10.png"];
    // 框架
    app.template.touch.init();
    app.template.swiper.init();
    app.template.loader.init(aar,true);
    app.template.Landscape.init();
    //app.audio.init();
    //tracking.pv_byfrom();


    /*   页面切换逻辑顺序图
    1,2------------>3----->6---->9----->15-------->21
                                10---->16-------->22

    1,2------------>4----->7--->11----->17-------->23
                                12----->18-------->24

    1,2------------>5---->8---->13----->19-------->25
                                14----->20-------->26
  */

    app.template.swiper.on_pageslideend = function(index){
        switch(index)
        {
            case 0:
                app.p1.init();
                break;
            case 1:
                app.p1.destory();
                app.p2.init();
                break;
            case 2:
                app.p2.destory(3);
                app.p3.init();
                break;
            case 3:
                app.p2.destory(4);
                app.p4.init();
                break;
            case 4:
                app.p2.destory(5);
                app.p5.init();
                break;
            case 5:
                app.p3.destory();
                app.p6.init();
                break;
            case 6:
                app.p3.destory();
                app.p7.init();
                break;
            case 7:
                app.p5.destory();
                app.p8.init();
                break;
            case 8:
                app.p6.destory(9);
                app.p9.init();
                break;
            case 9:
                app.p6.destory(10);
                app.p10.init();
                break;
            case 10:
                app.p7.destory(11);
                app.p11.init();
                break;
            case 11:
                app.p7.destory(12);
                app.p12.init();
                break;
            case 12:
                app.p8.destory(13);
                app.p13.init();
                break;
            case 13:
                app.p8.destory(14);
                app.p14.init();
                break;
            case 14:
                app.p9.destory();
                app.p15.init();
                break;
            case 15:
                app.p10.destory();
                app.p16.init();
                break;
            case 16:
                app.p11.destory();
                app.p17.init();
                break;
            case 17:
                app.p12.destory();
                app.p18.init();
                break;
            case 18:
                app.p13.destory();
                app.p19.init();
                break;
            case 19:
                app.p14.destory();
                app.p20.init();
                break;
            case 20:
                app.p15.destory();
                app.p21.init();
                break;
            case 21:
                app.p16.destory();
                app.p22.init();
                break;
            case 22:
                app.p17.destory();
                app.p23.init();
                break;
            case 23:
                app.p18.destory();
                app.p24.init();
                break;
            case 24:
                app.p19.destory();
                app.p25.init();
                break;
            case 25:
                app.p20.destory();
                app.p26.init();
                break;
        }
    };
    /* page init */
    app.p1.init();

    //点击事件初始化
    app.p1.bind_touch_event();
    app.p2.bind_touch_event();
    app.p3.bind_touch_event();
    app.p4.bind_touch_event();
    app.p5.bind_touch_event();
    app.p6.bind_touch_event();
    app.p7.bind_touch_event();
    app.p8.bind_touch_event();

    app.p9.bind_touch_event();
    app.p10.bind_touch_event();
    app.p11.bind_touch_event();
    app.p12.bind_touch_event();
    app.p13.bind_touch_event();
    app.p14.bind_touch_event();

    app.p15.bind_touch_event();
    app.p16.bind_touch_event();
    app.p17.bind_touch_event();
    app.p18.bind_touch_event();
    app.p19.bind_touch_event();
    app.p20.bind_touch_event();

    app.p21.bind_touch_event();
    app.p22.bind_touch_event();
    app.p23.bind_touch_event();
    app.p24.bind_touch_event();
    app.p25.bind_touch_event();
    app.p26.bind_touch_event();
})();

