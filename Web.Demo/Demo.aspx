<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="Demo.aspx.cs" Inherits="Web.Demo.Demo" %>

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title></title>    
    <script src="Scripts/jquery/jquery-1.8.0.min.js" type="text/javascript"></script>
</head>
<body>
    <form id="form1" runat="server">
    <div id="page" style="height:2000px;">
        <div id="main">
            <div class="sidenav fl">
            	<h3>Validform v5.3.2 文档</h3>
            	<ul class="lireset2" style="padding-left:10px;">
                    <li><a href="#getstart">Validform使用入门</a></li>
                    <li><a href="#bindtype">绑定附加属性</a></li>
                    <li><a href="#initialize">初始化参数说明</a></li>
                </ul>
                <ul class="lireset" style="padding-left:10px;">
                    <li class="expand">
                    	<a href="#validformObject">Validform对象</a>
                    	<ul class="lireset2" style="display:block;">
                        	<li><a href="#tipmsg">tipmsg</a></li>
                            <li><a href="#dataType">dataType</a></li>
                            <li><a href="#addRule">addRule(rule)</a></li>
                            <li><a href="#eq">eq(n)</a></li>
                            <li><a href="#ajaxPost">ajaxPost(flag,sync,url)</a></li>
                            <li><a href="#abort">abort()</a></li>
                            <li><a href="#submitForm">submitForm(flag,url)</a></li>
                            <li><a href="#resetForm">resetForm()</a></li>
                            <li><a href="#resetStatus">resetStatus()</a></li>
                            <li><a href="#getStatus">getStatus()</a></li>
                            <li><a href="#setStatus">setStatus(status)</a></li>

                            <li><a href="#ignore">ignore(selector)</a></li>
                            <li><a href="#unignore">unignore(selector)</a></li>
                            <li><a href="#check">check(bool,selector)</a></li>
                            <li><a href="#config">config(setup)</a></li>
                        </ul>
                    </li>
                    <li class="expand">
                    	<a href="#plugin">调用外部插件</a>
                    	<ul class="lireset2">
                        	<li><a href="#swfupload">文件上传 - swfupload</a></li>
                            <li><a href="#passwordStrength">密码强度检测 - passwordStrength</a></li>
                            <li><a href="#datePicker">日期控件 - datePicker</a></li>
                            <li><a href="#jqtransform">表单美化 - jqtransform</a></li>
                        </ul>
                    </li>
                    <li class="expand">
                    	<a href="#validformjquery">Validform的公用对象</a>
                    	<ul class="lireset2">
                        	<li><a href="#Datatype">$.Datatype</a></li>
                            <li><a href="#Tipmsg">$.Tipmsg</a></li>
                            <li><a href="#Showmsg">$.Showmsg(msg)</a></li>
                            <li><a href="#Hidemsg">$.Hidemsg</a></li>
                        </ul>
                    </li>
                </ul>
            </div>
        </div>
    </div>
    </form>
    <script type="text/javascript">
        $.ajax({
            
        })

        $(function () {
            var sidenav = $(".sidenav").css({ position: "relative" });
            var offsetTop = sidenav.offset().top;
            var top = document.documentElement.scrollTop ? document.documentElement.scrollTop : document.body.scrollTop;
            top = top > offsetTop ? top - offsetTop + 10 : 0;
            sidenav.animate({
                top: top
            }, { queue: false, duration: 300 });

            $(window).bind("scroll resize", function () {
                top = document.documentElement.scrollTop ? document.documentElement.scrollTop : document.body.scrollTop;
                if (top > 50) {
                    $(".toTop").fadeIn(300);
                } else {
                    $(".toTop").fadeOut(400);
                }

                top = top > offsetTop ? top - offsetTop + 10 : 0;

                sidenav.animate({
                    top: top
                }, { queue: false, duration: 300 });

                //alert(1);
            });
        });
    </script>
</body>
</html>