/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2022-04-13 10:28:14
 * @version $Id$
 * @ResponseBody
 */
var tabs = document.getElementsByClassName("tab")[0].getElementsByTagName("div"),
    contents = document.getElementsByClassName("m-content")[0].getElementsByClassName("m-ct");
//jquery实现点击标签换页
function clk(e){
    for(var i = 0,len = tabs.length;i<len;i++){
        if(i==e){
            tabs[i].className = 'current';
            $(contents[i]).show();  
        }else{
            tabs[i].className = '';
            $(contents[i]).hide();
        }
    }
}
//js实现点击标签换页
// function clk(e){
//     for(var i = 0,len = tabs.length;i<len;i++){
//         if(i==e){
//             tabs[i].className = 'current';
//             contents[i].style.display = "flex";
//         }else{
//             tabs[i].className = '';
//             contents[i].style.display = "none";
//         }
//     }
// }

// Jquery实现点击图片放大
$(".tmpimg").click(function () {
    $(this).fadeOut(200);
});
$("#content-1 li img").click(function () {
    $(".tmpimg").fadeIn(200);
    $(".tmpimg img").attr('src',$(this).attr('src'));
});

//js实现点击图片放大
// var tmpimg = document.getElementById("showimg");
// var timg = document.getElementById("t-img");
// var interval1,interval2;
// function imgclk(isrc){
//     timg.src = isrc;
//     tmpimg.style.display = "flex";
//     tmpimg.style.opacity = 0;
//     interval1= setInterval(imgin,10);
// }

// function imgin(){
//     var tp = Number(tmpimg.style.opacity)
//     if(tp>=1){
//         clearInterval(interval1);
//     }
//     else{
//         tp = tp+0.05
//         tmpimg.style.opacity = tp;
//     }
// }
// function timgclk(){
//     interval2 = setInterval(imgout,10);
// }
// function imgout(){
//     var tp = Number(tmpimg.style.opacity)
//     if(tp<=0){
//         clearInterval(interval2);
//         tmpimg.style.display = "none";
//     }
//     else{
//         tp = tp-0.05
//         tmpimg.style.opacity = tp;
//     }
// }

var lis = document.getElementsByClassName("tags")[0].getElementsByTagName("li"),
    spans =document.getElementsByClassName("tags")[0].getElementsByTagName("span")
var tmpl=$("#l0");
var tNode = document.getElementById("l0");
//jquery实现增删标签
function Eadd(){
    if(lis.length<9){
        tmpl.clone().appendTo(".tags");
        tmpl=tmpl.clone();
        sort();
    }
}
function ldelete(e){
    tmpl=$("#l0");
    $(e).parent().remove();
    sort();
}
//js实现增删标签
// function Eadd(){
//     var cloneNode = tNode.cloneNode(true);
//     tNode.parentNode.appendChild(cloneNode);
//     sort();
// }
// function ldelete(e){
//     e.parentNode.remove();
//     sort();
// }

//对增删后的元素进行排序
function sort(){
    for(var i=1,len=lis.length;i<len;i++){
        lis[i].id = "l"+i;
        lis[i].className = "";
        spans[i].innerHTML=i;
    }
}