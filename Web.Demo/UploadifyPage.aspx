<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="UploadifyPage.aspx.cs" Inherits="Web.Demo.UploadifyPage" %>

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title></title>
    <meta charset="utf-8" />
    <script src="Scripts/jquery/jquery-1.8.3.js" type="text/javascript"></script>    
    <script src="js/uploadify/jquery.uploadify.min.js" type="text/javascript"></script>
    <link href="http://files.cnblogs.com/lostboy/common.css" rel="stylesheet" type="text/css" />    
    <link href="js/uploadify/uploadify.css" rel="stylesheet" type="text/css" />
</head>
<body>
<form id="form1" runat="server">
<div id="upload-content">
    <div class="uploader">
        <div id="file_upload" class="file_upload">此处显示上传组件</div>
    </div>
</div>
<div id="submit-content">
    <a class="btn" href="javascript:;">关闭</a>
</div>
</form>
<script type="text/javascript">
    $(function () {
        $(".file_upload").uploadify({
            'fileSizeLimit': '2048KB',
            'fileTypeExts': '*.gif; *.jpg',
            'fileTypeDesc': '图片格式（*.gif; *.jpg）',
            'queueSizeLimit': 3,
            'queueID': 'file_upload_queue',
            'auto': true,
            'swf': '/js/uploadify/uploadify.swf',
            'uploader': '/Handler/ImgUploadHandler.ashx',
            'buttonText': '选择图片并上传',
            'onSWFReady': function () {
                alert('The Flash file is ready to go.');
            },
            'onFallback': function () {
                alert('Flash was not detected.');
            },
            'onUploadSuccess': function (file, data, response) {
                
            }
        });
    });
</script>
</body>
</html>