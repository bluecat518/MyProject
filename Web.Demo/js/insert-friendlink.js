function insertAfter(newElement, targetElement) { // newElement是要追加的元素 targetElement 是指定元素的位置 
    var parent = targetElement.parentNode; // 找到指定元素的父节点 
    if (parent.lastChild == targetElement) { // 判断指定元素的是否是节点中的最后一个位置 如果是的话就直接使用appendChild方法 
        parent.appendChild(newElement, targetElement);
    }
    else {
        parent.insertBefore(newElement, targetElement.nextSibling);
    }
}

var html = "<div id=\"friendLink\"><h3 class=\"catListTitle\">友情链接</h3><ul class=\"links\">";
html += "<li><a href=\"http://www.chinacaipu.com/\" target=\"_blank\">中国菜谱</a></li>";
html += "<li><a href=\"http://www.aqee.net/\" target=\"_blank\">外刊IT评论</a></li>";
html += "<li><a href=\"http://www.aqee.net/category/software-tools/\" target=\"_blank\">外刊IT评论-软件工具</a></li>";
html += "</ul></div>";
//var d = document.getElementById("catListComment");
//var e = document.createElement("div");
//e.setAttribute("id", "friendLink");
//e.innerHTML = html;
//insertAfter(e, d);

jQuery(function ($) {
    var d = $("#sideBar");
    d.after(html);
});
