/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2022-03-19 15:55:34
 * @version $Id$
 */
 var div_i=document.getElementById("ins");
function clk(e){
	console.log(1);
	switch(e){
		case "p1":{
			div_i.style.left="48px";
			break;
		}
		case "p2":{
			div_i.style.left="128px";
			break;
		}
		case "p3":{
			div_i.style.left="210px";
			break;
		}
		case "p4":{
			div_i.style.left="290px";
			break;
		}
		case "p5":{
			div_i.style.left="370px";
			break;
		}
	}
}