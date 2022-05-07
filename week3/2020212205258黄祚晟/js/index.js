/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2022-03-09 10:12:46
 * @version $Id$
 */
let pp1=document.getElementById('p1')
    ul1=document.getElementById("u1")
    div1=document.getElementById("d1");

function clk(e){
    console.log(e);
    switch(e){
        case "p1":{
            pp1.style.color="red"
            break;
        }
        case "p2":{
            let d=new Date();
            pp1.innerHTML=d.getFullYear()+"-"+d.getMonth()+"-"+d.getDay();
            break;
        }
        case "p3":{
            ul1.classList.add("fn-active");
            console.log(ul1.classList);
            break;
        }
        case "p4":{
            document.getElementById("p8").remove();
            break;
        }
        case "p5":{
            window.open("https://www.taobao.com/");
            break;
        }
        case "p6":{
            ul1.innerHTML += "<li class=\"m-item\" id=\"p9\">p9<\/li>";
            break;
        }
        case "p7":{
            div1.style.width=screen.availHeight+"px";
            break;
        }
    }
}
