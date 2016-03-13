/**
 * Created by liangxiaohao on 15/11/13.
 */

window.onload = function(){
    $(".slideshow").slide({
        mainCell: ".pic",
        effect: "fold",
        autoPlay: true,
        delayTime: 600,
        trigger: "click"
    });
    $('#scroll-pic').slide({
        mainCell: ".scr-bd ul",
        titCell: ".scr-hd ul li",
        autoPlay: true,
        triggerTime: 0,
        interTime: 5000,
        effect: 'leftLoop'
    });
    $(".slideBox").slide({
        mainCell: "ul",
        vis: 4,
        scroll: 0,
        prevCell: ".sPrev",
        nextCell: ".sNext",
        effect: "leftLoop",
        autoPlay: true
    });
    $(".slideBox2").slide({
        mainCell: "ul",
        vis: 4,
        scroll: 1,
        prevCell: ".sPrev",
        nextCell: ".sNext",
        effect: "leftLoop",
        autoPlay: false
    });

    $Map = $("#Map");
    $("#africa").mouseover(function () {
        $Map.find("div").removeAttr("style");
        $(this).css({"color": "#000", "z-index": "999"});
        $Map.css("background-position", "-750px 0");
        $(this).find(".continentnews").css({"left": "-10px", "top": "-70px"}).show();
    });
    $("#africa").mouseout(function () {
        $(this).css("color", "#000");
        $(".continentnews").hide();
        $Map.removeAttr("style");
        $(this).removeAttr("style");
    });

//大洋洲
    $("#oceania").mouseover(function () {
        $Map.find("div").removeAttr("style");
        $(this).css({"color": "#000", "z-index": "999"});
        $Map.css("background-position", "-1500px 0");
        $(this).find(".continentnews").css({"left": "-19px", "top": "-30px"}).show();
    });
    $("#oceania").mouseout(function () {
        $(this).css("color", "#000");
        $(".continentnews").hide();
        $Map.removeAttr("style");
        $(this).removeAttr("style");
    });
//北美洲
    $("#north").mouseover(function () {
        $Map.find("div").removeAttr("style");
        $(this).css({"color": "#000", "z-index": "999"});
        $Map.css("background-position", "-2250px 0");
        $(this).find(".continentnews").css({"left": "60px", "top": "-20px"}).show();
    });
    $("#north").mouseout(function () {
        $(this).css("color", "#000");
        $(".continentnews").hide();
        $Map.removeAttr("style");
        $(this).removeAttr("style");
    })
//南美洲
    $("#south").mouseover(function () {
        $Map.find("div").removeAttr("style");
        $(this).css({"color": "#000", "z-index": "999"});
        $Map.css("background-position", "-3000px 0");
        $(this).find(".continentnews").css({"left": "-20px", "top": "-20px"}).show();
    })
    $("#south").mouseout(function () {
        $(this).css("color", "#000");
        $(".continentnews").hide();
        $Map.removeAttr("style");
        $(this).removeAttr("style");
    })
//亚洲
    $("#asia").mouseover(function () {
        $Map.find("div").removeAttr("style");
        $(this).css({"color": "#000", "z-index": "999"});
        $Map.css("background-position", "-3750px 0");
        $(this).find(".continentnews").css({"left": "35px", "top": "-30px"}).show();
    })
    $("#asia").mouseout(function () {
        $(this).css("color", "#000");
        $(".continentnews").hide();
        $Map.removeAttr("style");
        $(this).removeAttr("style");
    })
//欧洲
    $("#europe").mouseover(function () {
        $Map.find("div").removeAttr("style");
        $(this).css({"color": "#000", "z-index": "999"});
        $Map.css("background-position", "-4500px 0");
        $(this).find(".continentnews").css({"left": "20px", "top": "-40px"}).show();
    })
    $("#europe").mouseout(function () {
        $(this).css("color", "#000");
        $(".continentnews").hide();
        $Map.removeAttr("style");
        $(this).removeAttr("style");
    })

    $.fn.tabSlider = function (tabTag, tabCon) {
        var elm = $(this);
        var i = 0;
        tabTag.each(function () {
            if ($(this).hasClass('cur')) {
                i = $(this).index();
                showCurrent(i);
            }
            $(this).hover(function () {
                i = $(this).index();
                showCurrent(i);
            }, function () {
            });
        });
        function showCurrent(i) {
            tabTag.removeClass('cur');
            tabTag.eq(i).addClass('cur');
            tabCon.css('display', 'none');
            tabCon.eq(i).css('display', 'block');
        }

    };

    $('#cont_tab').tabSlider($('#cont_tab .tab_tag a'), $('#cont_tab .tab_con .con'));
    $('#bigdata_tab').tabSlider($('#bigdata_tab .tab_tag a'), $('#bigdata_tab .tab_con .con'));

    $(".menuHover").on("mouseover", function () {
        $(this).find('.subMenu').css({"visibility": "visible"});

    })

    $(".menuHover").on("mouseout", function () {
        $(this).find('.subMenu').css({"visibility": "hidden"});

    });

    jQuery(".author").slide({
        titCell: ".zhuanlan ul",
        mainCell: ".content ul",
        autoPage: true,
        effect: "left",
        scroll: 1,
        vis: 1
    });

    $("#to-top").on("click",function(){
        $('html, body').animate({scrollTop:0}, 'normal');
    });
    $(window).scroll( function(){
        if($(document).scrollTop()>140){
            $(".nav").css({
                "position":"fixed",
                "top":"0"
            })
        } else{
            $(".nav").css({
                "position":"relative",
                "top":"0"
            })
        }
    });
    $(window).scroll( function(){
        if($(document).scrollTop()>140){
            $("#to-top").css({
                "visibility":"visible"
            })
        } else{
            $("#to-top").css({
                "visibility":"hidden"
            })
        }
    });

};
