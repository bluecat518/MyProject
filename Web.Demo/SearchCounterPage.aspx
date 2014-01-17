<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="SearchCounterPage.aspx.cs" Inherits="Web.Demo.SearchCounterPage" %>

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html lang="en">
<head runat="server">
<meta charset="utf-8" />
<title></title><style>body{padding:0;margin:0;}</style> 
</head>
<body>
    <form id="form1" runat="server">
    <div class="pages" id="pages">
        <a href="SearchCounterPage.aspx" class="click">点击</a>
        <a href="javascript:;" class="click" id="click">点击</a>
    </div>
    </form>
    <script src="Scripts/jquery/jquery-1.8.3.js" type="text/javascript"></script>
<script type="text/javascript">
    $(function () {
        var $modal = $('<div> loading... </div>')
                    .attr('id', 'modal')
                    .css({
                        background: '#eee',
                        zIndex: 3000,
                        width: '100%',
                        height: '100%',
                        margin: '0 auto',
                        padding: '10px 0',
                        opacity: 0.8,
                        position: 'absolute',
                        top: 0,
                        left: 0
                    });

        $("#click").bind("click", function (evt) {
            evt.preventDefault();
            $modal.html("<dd align=\"center\"><img alt=\"loading\" src=\"/images/loading2.gif\" style=\"width:105px;height:104px;\"  /></dd>")
                .appendTo('body')
                .show();
        });

        $("#modal").live("click", function () {
            var that = $(this);
            that.hide();
        });
    });
</script>
</body>
</html>
