<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="LhgDialogPage.aspx.cs" Inherits="Web.Demo.DialogPage" %>

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">

<html lang="en">
<head runat="server">
    <title>lhgDialog demo</title>
    <meta charset="utf-8" />
    <script src="Scripts/jquery/jquery-1.8.3.js" type="text/javascript"></script>
    <link href="/js/uploadify/uploadify.css" rel="stylesheet" type="text/css" />
</head>
<body>
    <form id="form1" runat="server">
    <div id="page">
        <div id="content">
            <div class="dialog-con">
                <input type="button" name="run-btn" id="run-button" value="运行1" />
                <input type="button" name="run-btn" id="run-button2" value="运行2" />
            </div>
        </div>
    </div>
    </form>
    <script src="js/lhgdialog/lhgdialog.min.js?self=true&skin=default" type="text/javascript"></script>
    <script src="js/uploadify/jquery.uploadify.js" type="text/javascript"></script>
    <script type="text/javascript">
        //运行1
        $("#run-button").dialog({
            lock: true,
            title: "上传",
            content: "url:UploadifyPage.aspx"
        });

        //运行2
        /*
        $(function () {
            $("#run-button2").dialog({
                lock: true,
                fixed: true,
                title: "上 传",

//                content: "<div class=\"upload-content\">"
//                + "<div class=\"uploader\">"
//                + "<input type=\"file\" name=\"file_upload\" id=\"file_upload\"/>"
//                + "</div>"
//                + "</div>"
//                + "<div class=\"submit-con\">"
//                + "<a class=\"btn\" href=\"javascript:;\">关闭"
//                + "</a>"
//                + "</div>",

                content: "<div class=\"upload-content\">"
                        + "<div class=\"uploader\">"
                            + "<input type=\"file\" name=\"file_upload\" id=\"file_upload\"/>"
                        + "</div>"
                    + "</div>"
                    + "<div class=\"submit-con\">"
                            + "<a class=\"btn\" href=\"javascript:;\">关闭"
                            + "</a>"
                    + "</div>",
                init: function () {
                    var api = this;

                    $("#file_upload").uploadify({
                        'fileSizeLimit': '2048KB',
                        'fileTypeExts': '*.gif; *.jpg',
                        'queueSizeLimit': 3,
                        'queueID': 'file_upload_queue',
                        'auto': true,
                        'swf': 'http://localhost:4829/js/uploadify/uploadify.swf',
                        'uploader': '/js/uploadify/uploadify.ashx',
                        'buttonText': '选择图片并上传',
                        'onUploadSuccess': function (file, data, response) {
                            alert('The file ' + file.name + ' was successfully uploaded with a response of ' + response + ':' + data);
                        }
                    });

                    $(".btn").click(function () {
                        api.close();
                    });

                    var e = document.getElementsByTagName("object")[0];
                    alert(e.getAttribute("classid"));
                }
            });
        });
        */
    </script>    
</body>
</html>
