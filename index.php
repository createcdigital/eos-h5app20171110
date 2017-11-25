<?php
require_once 'jssdk.php';
$jssdk = new Jssdk("wxd4f26aea63a05347", "ee83c1915b59d37aa47c14d9e590b052");
$signPackage = $jssdk->GetSignPackage();
$appId = $signPackage["appId"];
$timestamp = $signPackage["timestamp"];
$nonceStr = $signPackage["nonceStr"];
$signature = $signPackage["signature"];
?>
<!DOCTYPE html>
<html lang="en">
<!-- <html lang="en" manifest="app.appcache"> -->
<head>
    <meta charset="UTF-8">
    <title>eos</title>

    <meta name="format-detection" content="telephone=no" />
    <meta name="viewport" content="width=750, user-scalable=no"/>
    <meta name="apple-mobile-web-app-capable" content="yes" />
    <meta name="apple-mobile-web-app-status-bar-style" content="black" />
    <meta name="format-detection" content="telephone=no">
    <link rel="stylesheet" href="css/app.css?v=a69bacdcec1841aea678078d318b4709">
    <link rel="stylesheet" href="js/swiper/swiper.min.css?v=a69bacdcec1841aea678078d318b4709">
    <link rel="stylesheet" href="js/swiper/animate.min.css?v=a69bacdcec1841aea678078d318b4709">
    <script src="https://res.wx.qq.com/open/js/jweixin-1.2.0.js"></script>
</head>
<body>
<!-- loading -->
<div class="loader"><h1>LOADING ...</h1><span></span><span></span><span></span></div>

<!-- pagelist-->
<div class="swiper-container">

    <div class="swiper-wrapper">

        <div class="swiper-slide p1">
            <img class="swiper-lazy animated infinite jello e-1"  data-src="img/p1/e-11.png" alt="">
            <img class="swiper-lazy animated infinite zoomIn e-2"  data-src="img/p1/e-2.png" alt="">
            <img class="swiper-lazy animated infinite swing e-3"  data-src="img/p1/e-3.png" alt="">
            <img class="swiper-lazy animated infinite tada e-4"  data-src="img/p1/e-4.png" alt="">
            <img class="swiper-lazy animated infinite wobble e-5"  data-src="img/p1/e-5.png" alt="">
            <img class="swiper-lazy animated infinite rubberBand e-6"  data-src="img/p1/e-6.png" alt="">
            <img class="swiper-lazy animated infinite bounceOut e-7"  data-src="img/p1/e-7.png" alt="">
            <div class="btn-1 btn-default">
                <img class="swiper-lazy" data-src="img/p1/e-10.png" alt="">
                <div class="animated infinite fadeInLeft shou-left"></div>
                <div class="animated infinite fadeInRight shou-right"></div>
            </div>
        </div>
        <div class="swiper-slide p2">
            <div class="e-1-div e-2" value="2">
                <img class="swiper-lazy animated infinite rotateInDownRight e-1"  data-src="img/p2/e-1.png" alt="">
                <img class="swiper-lazy e-2-img" data-src="img/p2/e-2-2.png" alt="">
            </div>
            <div class="e-3" value="3">
                <img  class="swiper-lazy e-3-img" data-src="img/p2/e-3-2.png" alt="">
            </div>
            <div class="e-4" value="4">
                <img class="swiper-lazy e-4-img" data-src="img/p2/e-4-2.png" alt="">
            </div>
            <div class="btn-1 btn-default">
                <img class="swiper-lazy" data-src="img/p2/e-7.png" alt="">
                <div class="animated infinite fadeInLeft shou-left"></div>
                <div class="animated infinite fadeInRight shou-right"></div>
            </div>
        </div>
        <div class="swiper-slide p3">
            <img class="swiper-lazy animated infinite flash e-1 "  src="img/p3/e-1.png" alt="">
            <img  class="swiper-lazy ani e-2 " swiper-animate-effect="fadeInUp" swiper-animate-duration="1s" swiper-animate-delay="1s" data-src="img/p3/e-2.png" alt="">
            <img  class="swiper-lazy ani e-3 "  swiper-animate-effect="fadeInUp" swiper-animate-duration="1s" swiper-animate-delay="2s" data-src="img/p3/e-3.png" alt="">
            <img  class="swiper-lazy ani e-4 "  swiper-animate-effect="fadeInUp" swiper-animate-duration="1s" swiper-animate-delay="3s" data-src="img/p3/e-4.png" alt="">
            <img class="swiper-lazy animated infinite swing e-5 "  data-src="img/p3/e-5.png" alt="">
            <img class="swiper-lazy animated infinite tada e-6 "  data-src="img/p3/e-6.png" alt="">
            <div class="btn-1 btn-default">
                <img class="swiper-lazy" data-src="img/p3/e-9.png" alt="">
                <div class="animated infinite fadeInLeft shou-left"></div>
                <div class="animated infinite fadeInRight shou-right"></div>
            </div>
        </div>
        <div class="swiper-slide p4">
            <img class="swiper-lazy animated infinite flash  e-1 "  data-src="img/p4/e-1.png" alt="">
            <img class="swiper-lazy ani e-2" swiper-animate-effect="fadeInUp" swiper-animate-duration="0.5s" swiper-animate-delay="0.5s" data-src="img/p4/e-2.png" alt="">
            <img class="swiper-lazy ani e-3" swiper-animate-effect="fadeInUp" swiper-animate-duration="0.5s" swiper-animate-delay="1s" data-src="img/p4/e-3.png" alt="">
            <img class="swiper-lazy ani e-4" swiper-animate-effect="fadeInUp" swiper-animate-duration="0.5s" swiper-animate-delay="1.5s" data-src="img/p4/e-4.png" alt="">
            <img class="swiper-lazy ani e-5" swiper-animate-effect="fadeInUp" swiper-animate-duration="0.5s" swiper-animate-delay="2s" data-src="img/p4/e-5.png" alt="">
            <img class="swiper-lazy ani e-6" swiper-animate-effect="fadeInUp" swiper-animate-duration="0.5s" swiper-animate-delay="2.5s" data-src="img/p4/e-6.png" alt="">
            <div class="btn-1 btn-default">
                <img class="swiper-lazy" src="img/p3/e-9.png" alt="">
                <div class="animated infinite fadeInLeft shou-left"></div>
                <div class="animated infinite fadeInRight shou-right"></div>
            </div>
        </div>
        <div class="swiper-slide p5">
            <img class="swiper-lazy animated infinite flash e-1 "  data-src="img/p5/e-1.png" alt="">
            <img class="swiper-lazy ani e-2"  swiper-animate-effect="fadeInUp" swiper-animate-duration="1s" swiper-animate-delay="1s"   data-src="img/p5/e-2.png" alt="">
            <img class="swiper-lazy ani e-3"  swiper-animate-effect="fadeInUp" swiper-animate-duration="1s" swiper-animate-delay="2s"   data-src="img/p5/e-3.png" alt="">
            <img class="swiper-lazy animated infinite shake e-6"  data-src="img/p5/e-6.png" alt="">
            <img class="swiper-lazy e-8" data-src="img/p5/e-8.png" alt="">
            <div class="btn-1 btn-default">
                <img class="swiper-lazy" src="img/p3/e-9.png" alt="">
                <div class="animated infinite fadeInLeft shou-left"></div>
                <div class="animated infinite fadeInRight shou-right"></div>
            </div>
        </div>
        <div class="swiper-slide p6">
            <div class="e-1">
            </div>
            <div class="e-2">
            </div>
        </div>
        <div class="swiper-slide p7">
            <div class="e-1">
            </div>
            <div class="e-2">
            </div>
        </div>
        <div class="swiper-slide p8">
            <div class="e-1">
            </div>
            <div class="e-2">
            </div>
        </div>
        <div class="swiper-slide p9">
            <div class="swiper-lazy loading-box"> <img id="p9img"   data-src="img/p9/p9.gif"></div>
        </div>
        <div class="swiper-slide p10">
            <div class="swiper-lazy loading-box"> <img id="p10img"  data-src="img/p10/p10.gif"></div>
        </div>
        <div class="swiper-slide p11">
            <div class="swiper-lazy loading-box"> <img id="p11img"  data-src="img/p11/p11.gif"></div>
        </div>
        <div class="swiper-slide p12">
            <div class="swiper-lazy loading-box"> <img id="p12img"  data-src="img/p12/p12.gif"></div>
        </div>
        <div class="swiper-slide p13">
            <div class="swiper-lazy loading-box"> <img id="p13img"  data-src="img/p13/p13.gif"></div>
        </div>
        <div class="swiper-slide p14">
            <div class="swiper-lazy loading-box"> <img id="p14img"  data-src="img/p14/p14.gif"></div>
        </div>

        <div class="swiper-slide p15">
            <img class="swiper-lazy e-1"  data-src="img/p15/e-1.png" alt="">
            <div class="btn-1 btn-default">
                <img class="swiper-lazy" data-src="img/p15/e-2.png"/>
                <div class="animated infinite fadeInLeft shou-left"></div>
                <div class="animated infinite fadeInRight shou-right"></div>
            </div>
        </div>
        <div class="swiper-slide p16">
            <img class="swiper-lazy e-1"  data-src="img/p16/e-1.png" alt="">
            <div class="btn-1 btn-default">
                <img class="swiper-lazy" data-src="img/p16/e-2.png"/>
                <div class="animated infinite fadeInLeft shou-left"></div>
                <div class="animated infinite fadeInRight shou-right"></div>
            </div>
        </div>
        <div class="swiper-slide p17">
            <img class="swiper-lazy e-1"  data-src="img/p17/e-1.png" alt="">
            <div class="btn-1 btn-default">
                <img class="swiper-lazy" src="img/p17/e-2.png"/>
                <div class="animated infinite fadeInLeft shou-left"></div>
                <div class="animated infinite fadeInRight shou-right"></div>
            </div>
        </div>
        <div class="swiper-slide p18">
            <img class="swiper-lazy e-1"  data-src="img/p18/e-1.png" alt="">
            <div class="btn-1 btn-default">
                <img class="swiper-lazy" data-src="img/p18/e-2.png"/>
                <div class="animated infinite fadeInLeft shou-left"></div>
                <div class="animated infinite fadeInRight shou-right"></div>
            </div>
        </div>
        <div class="swiper-slide p19">
            <img class="swiper-lazy e-1"  data-src="img/p19/e-1.png" alt="">
            <div class="btn-1 btn-default">
                <img class="swiper-lazy" data-src="img/p19/e-2.png"/>
                <div class="animated infinite fadeInLeft shou-left"></div>
                <div class="animated infinite fadeInRight shou-right"></div>
            </div>
        </div>
        <div class="swiper-slide p20">
            <img class="swiper-lazy e-1"  data-src="img/p20/e-1.png" alt="">
            <div class="btn-1 btn-default">
                <img class="swiper-lazy" data-src="img/p20/e-2.png"/>
                <div class="animated infinite fadeInLeft shou-left"></div>
                <div class="animated infinite fadeInRight shou-right"></div>
            </div>
        </div>
        <div class="swiper-slide p21">
            <img class="swiper-lazy ani e-9" swiper-animate-effect="zoomIn" swiper-animate-duration="1s" swiper-animate-delay="1s"  data-src="img/p21/e-9.png" alt="">
            <img class="swiper-lazy e-1 ani" swiper-animate-effect="fadeInUp" swiper-animate-duration="1s" swiper-animate-delay="2s" data-src="img/p21/e-1.png" alt="">
            <img class="swiper-lazy animated infinite shake e-2"  data-src="img/p21/e-2.png" alt="">
            <img class="swiper-lazy animated infinite swing e-3"  data-src="img/p21/e-3.png" alt="">
            <img class="swiper-lazy animated infinite tada e-4"  data-src="img/p21/e-4.png" alt="">
            <img class="swiper-lazy animated infinite wobble e-5"  data-src="img/p21/e-5.png" alt="">
            <img class="swiper-lazy animated infinite rubberBand e-6"  data-src="img/p21/e-6.png" alt="">
            <img class="swiper-lazy animated infinite swing e-10" style="display: none;" data-src="img/p21/e-10.png" alt="">
            <!--<img class="ani e-10" swiper-animate-effect="swing" swiper-animate-duration="1s" swiper-animate-delay="3s"  src="img/p21/e-10.png" alt="">-->
            <div class="divbottom ani" swiper-animate-effect="fadeInUp" swiper-animate-duration="1s" swiper-animate-delay="4s">
                <div class="btn-1 btn-default">
                    <img class="swiper-lazy" data-src="img/p21/e-11.png"/>
                    <div class="animated infinite fadeInLeft shou-left"></div>
                    <div class="animated infinite fadeInRight shou-right"></div>
                </div>
                <div class="btn-2 btn-default share">
                    <img class="swiper-lazy" data-src="img/p21/e-12.png"/>
                    <div class="animated infinite fadeInLeft shou-left"></div>
                    <div class="animated infinite fadeInRight shou-right"></div>
                </div>
                <div class="btn-3 btn-default">
                    <img class="swiper-lazy" data-src="img/p21/e-13.png"/>
                    <div class="animated infinite fadeInLeft shou-left"></div>
                    <div class="animated infinite fadeInRight shou-right"></div>
                </div>
            </div>
        </div>
        <div class="swiper-slide p22">
            <img class="swiper-lazy ani e-9" swiper-animate-effect="zoomIn" swiper-animate-duration="1s" swiper-animate-delay="1s"  data-src="img/p22/e-9.png" alt="">
            <div class="e-1-div">
                <img class="swiper-lazy ani e-2" swiper-animate-effect="fadeInUp" swiper-animate-duration="1s" swiper-animate-delay="2s"  data-src="img/p22/e-2.png" alt="">
                <img class="swiper-lazy animated infinite flash e-1"  data-src="img/p22/e-1.png" alt="">
            </div>
            <img class="swiper-lazy animated infinite swing e-3"  data-src="img/p22/e-3.png" alt="">
            <img class="swiper-lazy animated infinite tada e-4"  data-src="img/p22/e-4.png" alt="">
            <img class="swiper-lazy animated infinite wobble e-5"  data-src="img/p22/e-5.png" alt="">
            <img class="swiper-lazy animated infinite rubberBand e-6"  data-src="img/p22/e-6.png" alt="">
            <img class="swiper-lazy animated infinite swing e-10" style="display: none;" data-src="img/p21/e-10.png" alt="">
            <div class="divbottom ani" swiper-animate-effect="fadeInUp" swiper-animate-duration="1s" swiper-animate-delay="4s">
                <div class="btn-1 btn-default">
                    <img class="swiper-lazy" data-src="img/p21/e-11.png"/>
                    <div class="animated infinite fadeInLeft shou-left"></div>
                    <div class="animated infinite fadeInRight shou-right"></div>
                </div>
                <div class="btn-2 btn-default share">
                    <img class="swiper-lazy" data-src="img/p21/e-12.png"/>
                    <div class="animated infinite fadeInLeft shou-left"></div>
                    <div class="animated infinite fadeInRight shou-right"></div>
                </div>
                <div class="btn-3 btn-default">
                    <img class="swiper-lazy" data-src="img/p21/e-13.png"/>
                    <div class="animated infinite fadeInLeft shou-left"></div>
                    <div class="animated infinite fadeInRight shou-right"></div>
                </div>
            </div>
        </div>
        <div class="swiper-slide p23">
            <img class="swiper-lazy ani e-1" swiper-animate-effect="fadeInUp" swiper-animate-duration="1s" swiper-animate-delay="1s"  data-src="img/p23/e-1.png" alt="">
            <img class="swiper-lazy ani e-2" swiper-animate-effect="fadeInUp" swiper-animate-duration="1s" swiper-animate-delay="2s" data-src="img/p23/e-2.png" alt="">
            <img class="swiper-lazy animated infinite swing e-3"  data-src="img/p23/e-3.png" alt="">
            <img class="swiper-lazy animated infinite tada e-4"  data-src="img/p23/e-4.png" alt="">

            <img class="swiper-lazy animated infinite swing e-8" style="display: none;"  data-src="img/p21/e-10.png" alt="">
            <img class="swiper-lazy ani e-7" swiper-animate-effect="fadeInUp" swiper-animate-duration="1s" swiper-animate-delay="4s"  data-src="img/p23/e-7.png" alt="">

            <div class="divbottom ani" swiper-animate-effect="fadeInUp" swiper-animate-duration="1s" swiper-animate-delay="5s">
                <div class="btn-1 btn-default">
                    <img class="swiper-lazy" data-src="img/p21/e-11.png"/>
                    <div class="animated infinite fadeInLeft shou-left"></div>
                    <div class="animated infinite fadeInRight shou-right"></div>
                </div>
                <div class="btn-2 btn-default share">
                    <img class="swiper-lazy" data-src="img/p21/e-12.png"/>
                    <div class="animated infinite fadeInLeft shou-left"></div>
                    <div class="animated infinite fadeInRight shou-right"></div>
                </div>
                <div class="btn-3 btn-default">
                    <img class="swiper-lazy" data-src="img/p21/e-13.png"/>
                    <div class="animated infinite fadeInLeft shou-left"></div>
                    <div class="animated infinite fadeInRight shou-right"></div>
                </div>
            </div>
        </div>
        <div class="swiper-slide p24">
            <img class="swiper-lazy ani e-1"  swiper-animate-effect="fadeInUp" swiper-animate-duration="1s" swiper-animate-delay="1s"   data-src="img/p24/e-1.png" alt="">
            <img class="swiper-lazy ani e-2"  swiper-animate-effect="fadeInUp" swiper-animate-duration="1s" swiper-animate-delay="2s"   data-src="img/p24/e-2.png" alt="">
            <img class="swiper-lazy animated infinite swing e-3"  data-src="img/p24/e-3.png" alt="">
            <img class="swiper-lazy animated infinite tada e-4"  data-src="img/p24/e-4.png" alt="">

            <img class="swiper-lazy animated infinite swing e-8" style="display: none;"   data-src="img/p21/e-10.png" alt="">
            <img class="swiper-lazy ani e-7" swiper-animate-effect="fadeInUp" swiper-animate-duration="1s" swiper-animate-delay="4s"  data-src="img/p24/e-7.png" alt="">

            <div class="divbottom ani" swiper-animate-effect="fadeInUp" swiper-animate-duration="1s" swiper-animate-delay="5s">
                <div class="btn-1 btn-default">
                    <img class="swiper-lazy" data-src="img/p21/e-11.png"/>
                    <div class="animated infinite fadeInLeft shou-left"></div>
                    <div class="animated infinite fadeInRight shou-right"></div>
                </div>
                <div class="btn-2 btn-default share">
                    <img class="swiper-lazy" data-src="img/p21/e-12.png"/>
                    <div class="animated infinite fadeInLeft shou-left"></div>
                    <div class="animated infinite fadeInRight shou-right"></div>
                </div>
                <div class="btn-3 btn-default">
                    <img class="swiper-lazy" data-src="img/p21/e-13.png"/>
                    <div class="animated infinite fadeInLeft shou-left"></div>
                    <div class="animated infinite fadeInRight shou-right"></div>
                </div>
            </div>
        </div>
        <div class="swiper-slide p25">
            <img class="swiper-lazy ani e-7"  swiper-animate-effect="fadeInRight" swiper-animate-duration="1s" swiper-animate-delay="1s"   data-src="img/p25/e-7.png" alt="">
            <img class="swiper-lazy ani e-1"  swiper-animate-effect="fadeInUp" swiper-animate-duration="1s" swiper-animate-delay="2s"   data-src="img/p25/e-1.png" alt="">
            <img class="swiper-lazy animated infinite fadeIn e-2"  data-src="img/p25/e-2.png" alt="">
            <img class="swiper-lazy animated infinite swing e-3"  data-src="img/p25/e-3.png" alt="">
            <img class="swiper-lazy animated infinite tada e-4"  data-src="img/p25/e-4.png" alt="">
            <img class="swiper-lazy animated infinite swing e-8" style="display: none;"   data-src="img/p21/e-10.png" alt="">
            <img class="swiper-lazy animated infinite shake e-9"  data-src="img/p25/e-9.png" alt="">
            <div class="divbottom ani" swiper-animate-effect="fadeInUp" swiper-animate-duration="1s" swiper-animate-delay="4s">
                <div class="btn-1 btn-default">
                    <img class="swiper-lazy" data-src="img/p21/e-11.png"/>
                    <div class="animated infinite fadeInLeft shou-left"></div>
                    <div class="animated infinite fadeInRight shou-right"></div>
                </div>
                <div class="btn-2 btn-default share">
                    <img class="swiper-lazy" data-src="img/p21/e-12.png"/>
                    <div class="animated infinite fadeInLeft shou-left"></div>
                    <div class="animated infinite fadeInRight shou-right"></div>
                </div>
                <div class="btn-3 btn-default">
                    <img class="swiper-lazy" data-src="img/p21/e-13.png"/>
                    <div class="animated infinite fadeInLeft shou-left"></div>
                    <div class="animated infinite fadeInRight shou-right"></div>
                </div>
            </div>
        </div>
        <div class="swiper-slide p26">
            <img class="swiper-lazy ani e-6"  swiper-animate-effect="fadeInRight" swiper-animate-duration="1s" swiper-animate-delay="1s"   data-src="img/p26/e-6.png" alt="">
            <img class="swiper-lazy ani e-1"  swiper-animate-effect="fadeInUp" swiper-animate-duration="1s" swiper-animate-delay="2s" data-src="img/p26/e-1.png" alt="">
            <img class="swiper-lazy animated infinite tada e-2"  data-src="img/p26/e-2.png" alt="">
            <img class="swiper-lazy animated infinite swing e-3"  data-src="img/p26/e-3.png" alt="">
            <img class="swiper-lazy animated infinite swing e-8" style="display: none;"  data-src="img/p21/e-10.png" alt="">
            <img class="swiper-lazy animated infinite shake e-9"  data-src="img/p26/e-9.png" alt="">
            <div class="divbottom ani" swiper-animate-effect="fadeInUp" swiper-animate-duration="1s" swiper-animate-delay="4s">
                <div class="btn-1 btn-default">
                    <img class="swiper-lazy" data-src="img/p21/e-11.png"/>
                    <div class="animated infinite fadeInLeft shou-left"></div>
                    <div class="animated infinite fadeInRight shou-right"></div>
                </div>
                <div class="btn-2 btn-default share">
                    <img class="swiper-lazy" data-src="img/p21/e-12.png"/>
                    <div class="animated infinite fadeInLeft shou-left"></div>
                    <div class="animated infinite fadeInRight shou-right"></div>
                </div>
                <div class="btn-3 btn-default">
                    <img class="swiper-lazy" data-src="img/p21/e-13.png"/>
                    <div class="animated infinite fadeInLeft shou-left"></div>
                    <div class="animated infinite fadeInRight shou-right"></div>
                </div>
            </div>
        </div>
    </div>

</div>


<!--&lt;!&ndash; audio player &ndash;&gt;-->
<!--<div class="audio-icon">-->
<!--<audio id="audio-player" src="media/audio/main.mp3" preload="preload" loop="loop" />-->
<!--<audio id="audio-player-tap" src="media/audio/tap.mp3" preload="preload" />-->
<!--</div>-->

<!--Script
====================================================== -->
<script src="js/zepto/zepto.min.js"></script>
<script src="js/motion/loader.min.js"></script>
<script src="js/swiper/swiper.min.js"></script>
<script src="js/swiper/swiper.animate1.0.2.min.js"></script>
<script src="js/fastclick/fastclick.js"></script>
<script src="js/motion/landscape.min.js"></script>
<script src="js/motion/overlay.min.js"></script>
<script src="js/motion/film.min.js"></script>
<script src="js/app.js"></script>
<script>
    $(function () {
        var shareHtml = ' <div class="sharDiv"><img src="img/share.png" /> </div>'
        $(".share").on('click', function () {
            $(this).parents('.swiper-slide').append(shareHtml);
            $('.sharDiv').on('click',function () {
                $(this).remove();
            })
        });
    });


    //微信的操作
    var imgName;
    wx.config({
        debug: false,
        appId: '<?php echo $appId?>',
        timestamp: '<?php echo $timestamp?>',
        nonceStr: '<?php echo $nonceStr?>',
        signature: '<?php echo $signature?>',
        jsApiList: [
            // 所有要调用的 API 都要加到这个列表中,,,,,
            "onMenuShareTimeline",
            "onMenuShareAppMessage",
            "checkJsApi",
            "chooseImage",
            "uploadImage",
        ]
    });
    var str_title="30s的反应力，测出你的个性！";
    var str_des="这事要是被你碰到了，你会怎么样？";
    if(localStorage.getItem("IsPlayed")=="true" || localStorage.getItem("IsPlayed"))
    {
        str_title="原来这才是我的个性";
        str_des="30s，如果是你会有什么反应？";
    }
    wx.ready(function () {
        wx.onMenuShareTimeline({
            title: str_title, // 分享标题
            link: 'http://www.createcdigital.com/createc-new/eos/index.php', // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
            imgUrl: 'http://www.createcdigital.com/createc-new/eos/img/share2.jpg', // 分享图标
            success: function () {
                _hmt.push(['_trackEvent', 'pengyouquan', 'fenxiang', 'literature']);
            },
            cancel: function () {

            }
        });

        wx.onMenuShareAppMessage({
            title: str_title, // 分享标题
            desc: str_des, // 分享描述
            link: 'http://www.createcdigital.com/createc-new/eos/index.php', // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
            imgUrl: 'http://www.createcdigital.com/createc-new/eos/img/share2.jpg', // 分享图标
            type: '', // 分享类型,music、video或link，不填默认为link
            dataUrl: '', // 如果type是music或video，则要提供数据链接，默认为空
            success: function () {
                _hmt.push(['_trackEvent', 'pengyou', 'fenxiang', 'literature']);
            },
            cancel: function () {

            }
        })
});
</script>
</body>
</html>