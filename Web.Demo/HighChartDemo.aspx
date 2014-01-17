<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="HighChartDemo.aspx.cs" Inherits="Web.Demo.HighChartDemo" %>

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title></title>
    <script type="text/javascript" src="http://ajax.googleapis.com/ajax/libs/jquery/1.8.2/jquery.min.js"></script>
    <script type="text/javascript">
        $(function () {
            $("#msgContainer").append(
                "JS时间戳：" + new Date(parseInt(1388505600000 / 1000) * 1000).toLocaleString().replace(/年|月/g, "-").replace(/日/g, " ")
                + "<br/>UTC时间：" + new Date(2014, 0, 01).toUTCString()
                +"<br/>2014-01-01转换成JS时间戳："+Date.UTC(2014, 0, 1)
            );
            
            $('#container').highcharts({
                xAxis: {
                    type: 'datetime',
                    tickInterval: 24 * 3600 * 1000 * 2,
                    labels: {
                        formatter: function () {
                            return Highcharts.dateFormat('%m-%d ', this.value);
                        }
                    },
                    startOnTick: true,
                    endOnTick: true,
//                    showFirstLabel: false,
                    tickmarkPlacement: "on"
                },
                series: [{
                    pointInterval: 24 * 3600 * 1000 * 2,
                    //pointStart: new Date(parseInt(1388505600000 / 1000) * 1000).toLocaleString().replace(/年|月/g, "-").replace(/日/g, " ").getTime(),
                    pointStart: 1388534400000,
                    data: [29.9, 30.9, 31.9, 32.9]
                }]
            });

            //根据英文的星期几返回中文的
            function getday(str) {
                if (str == 'Sunday') {
                    return "日"
                } else if (str == 'Monday') {
                    return "一"
                } else if (str == 'Tuesday') {
                    return "二"
                } else if (str == 'Wednesday') {
                    return "三"
                } else if (str == 'Thursday') {
                    return "四"
                } else if (str == 'Friday') {
                    return "五"
                } else if (str == 'Saturday') {
                    return "六"
                }
            }
        });
    </script>
</head>
<body>
    <form id="form1" runat="server">
    <div class="page">
        <script src="../js/highcharts/highcharts.js"></script>
        <script src="../js/highcharts/modules/exporting.js"></script>
        <div id="container" style="min-width: 310px; height: 400px; margin: 0 auto"></div>
        <div id="msgContainer">
            <div class="msg"><%=OutputString() %></div>
        </div>
    </div>
    </form>
</body>
</html>
