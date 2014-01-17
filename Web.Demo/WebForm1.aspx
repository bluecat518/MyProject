<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="WebForm1.aspx.cs" Inherits="Web.Demo.WebForm1" %>

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title></title>
    <style>    
    A IMG {
	BORDER-TOP-STYLE: none; BORDER-RIGHT-STYLE: none; BORDER-LEFT-STYLE: none; BORDER-BOTTOM-STYLE: none
}
#mainarea {
	FLOAT: left; OVERFLOW: hidden; WIDTH: 710px
}
#pic_box {
	MARGIN: 0px auto; OVERFLOW: hidden; WIDTH: 618px; HEIGHT: 104px; border: 1px solid #cbcdce;
}
pic_box_inner
{
    border:1px solid red;
}
#pic_box A {
	FLOAT:left;
}
/*上下横线*/
#case_wrapper .bot {
	BORDER-TOP: #eee 1px solid
}
#case_wrapper .bob {
	BORDER-BOTTOM: #eee 1px solid
}
/*_____________________________________________*/
/*padding间距及按钮效果*/
#case_pic_pre {
	 PADDING-BOTTOM: 10px; PADDING-TOP: 10px; 
}
#go_left {
	BACKGROUND: url(case_sprites.gif) no-repeat ; FLOAT: left; WIDTH: 20px; CURSOR: pointer; HEIGHT: 104px
}
#go_right {
	BACKGROUND: url(case_sprites.gif) no-repeat -60px 0px ; FLOAT: right; WIDTH: 20px; CURSOR: pointer; HEIGHT: 104px
}
#case_pic_pre .left_active {
	BACKGROUND: url(case_sprites.gif) no-repeat -20px 0px ;
}
#case_pic_pre .right_active {
	BACKGROUND: url(case_sprites.gif) no-repeat -40px 0px;
}
/*_____________________________________________*/
</style>
</head>
<body>
    <form id="form1" runat="server">
    <div class="page">
    <DIV class="case_pic_pre bot bob clearfix" id=case_pic_pre>
        <DIV id=go_left>左移</DIV>
        <DIV id=go_right>右移</DIV>
        <DIV id=pic_box>
        <DIV id=pic_box_inner>

        <A href="#"><IMG src="blue1/1.jpg" width="100" height="100"></A> 
        <A href="#"><IMG src="blue1/1.jpg" width="100" height="100"></A> 
        <A href="#"><IMG src="blue1/1.jpg" width="100" height="100"></A> 
        <A href="#"><IMG src="blue1/1.jpg" width="100" height="100"></A> 
        <A href="#"><IMG src="blue1/1.jpg" width="100" height="100"></A> 
        <A href="#"><IMG src="blue1/1.jpg" width="100" height="100"></A> 
        <A href="#"><IMG src="blue1/1.jpg" width="100" height="100"></A> 
        <A href="#"><IMG src="blue1/1.jpg" width="100" height="100"></A> 
        <A href="#"><IMG src="blue1/1.jpg" width="100" height="100"></A> 

        </DIV>
        </DIV>
        </DIV>
    </div>
    </form>
<SCRIPT type="text/javascript">
<!--
    //scroll
    function picScroll() {
        var objLeft = document.getElementById("go_left");
        var objRight = document.getElementById("go_right");
        var obj = document.getElementById("pic_box");
        var objInner = document.getElementById("pic_box_inner");
        if (!objLeft || !objRight || !obj /*|| !objInner*/) {
            return false;
        }
        var picNum = 9;
        objInner.style.width = Math.ceil(picNum / 6) * 640 + "px";
        function goLeft() {
            alert(obj.scrollLeft);
            if (obj.scrollLeft < (picNum - 6) * 106) {
                //var n = Math.ceil(((picNum-7)*106-obj.scrollLeft)/12) ;
                obj.scrollLeft += picNum - 1;
            }
            else {
                clearInterval(go);
            }
        }
        function goRight() {
            if (obj.scrollLeft > 0) {
                //var n = Math.ceil(obj.scrollLeft/12) ;
                obj.scrollLeft -= 6;
            }
            else {
                clearInterval(go);
            }
        }
        if (picNum <= 5) {

            objRight.onmouseout = function () { clearInterval(go); objRight.className = "" };

            objLeft.onmouseout = function () { clearInterval(go); objLeft.className = "" };
        }
        else {
            objRight.onmouseover = function () { go = setInterval(goLeft, 50); objRight.className = "right_active" };
            objRight.onmouseout = function () { clearInterval(go); objRight.className = "" };
            objLeft.onmouseover = function () { go = setInterval(goRight, 50); objLeft.className = "left_active" };
            objLeft.onmouseout = function () { clearInterval(go); objLeft.className = "" };
        }
    }
    picScroll();
    window.onload = picScroll;
//-->
</SCRIPT>
</body>
</html>
