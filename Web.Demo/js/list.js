function Initialize() {
    $.ajax({
        type: "get",
        url: "../handler/AdRequestHandler.ashx",
        data: { "method": "GETWOSOADFORLISTRIGHT" },
        success: function (data) {
            alert(data);
        },
        error: function (err) {
            alert("Err Info: "+err);
        }
    })
}

$(function () {
    //页面初始化完成开始加载广告
    Initialize();

    //推荐标签 和 相关标签 互换
    $(".viewTit span").click(function () {
        if ($(this).attr("tab-id") == "1") {
            $(this).parent().children().removeClass("on");
            $(this).addClass("on");
            $("#pro_detail1_1").css({ "display": "block" });
            $("#pro_detail1_2").css({ "display": "none" });
        }

        if ($(this).attr("tab-id") == "2") {
            $(this).parent().children().removeClass("on");
            $(this).addClass("on");
            $("#pro_detail1_1").css({ "display": "none" });
            $("#pro_detail1_2").css({ "display": "block" });
        }
    })
})