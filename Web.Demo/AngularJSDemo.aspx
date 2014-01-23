<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="AngularJSDemo.aspx.cs"
    Inherits="Web.Demo.AngularJSDemo" %>

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html ng-app="phonecatApp">
<head runat="server">
    <title></title>
    <link href="css/app.css" rel="stylesheet" type="text/css" />
    <link href="css/bootstrap.css" rel="stylesheet" type="text/css" />
    <script src="js/angular/angular.js" type="text/javascript"></script>
    <script src="js/controllers.js" type="text/javascript"></script>
</head>
<body>
    <form id="form1" runat="server">
    <div id="main">
        <div class="container-fluid" ng-controller="PhoneListCtrl">
            <div class="row-fluid">
                <div class="span2"><!--Sidebar content-->Search:<input ng-model="query">
                </div>
                <div class="span10">
                    <!--Body content-->
                    <ul class="phones">
                        <li ng-repeat="phone in phones | filter:query">
                            {{phone.name}}
                            <p>{{phone.snippet}}</p>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="container-fluid" ng-controller="ExamePaperCtrl">
            <h1>{{question.newtitle}}</h1>
            题目:<input type="text" ng-model="question.name" /><br />
            分数:<input type="text" ng-model="question.fraction" /><br />
        </div>
        <div class="preview-panel">
        <h1>{{question.previewtitle}}</h1>
        <b>{{question.name}}</b>({{question.fraction}}分)
        <ul>
            <li ng-repeat="o in question.options">
                <b>{{$index+1}}.</b>
                <input type="radio" name="optcheck" ng-show="question.type==1" />
                <input type="checkbox" ng-show="question.type==2" />
                {{o.content}}
            </li>
        </ul>
    </div>
    </div>
    </form>
</body>
</html>
