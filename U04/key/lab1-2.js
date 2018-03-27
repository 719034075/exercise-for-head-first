function checkusename(){
	var x=document.getElementById("yhm").value;
	if(x.length<4&&x.length>0){
		document.getElementById("usenamewarn").innerHTML="用户名至少4位！";
	}
	else if(x.length==0){
		document.getElementById("usenamewarn").innerHTML="用户名必填！";
	}
	else{
		document.getElementById("usenamewarn").innerHTML="";
	}
}
document.getElementById("yhm").onblur=function(){checkusename()};

function checkpassword(){
	var x=document.getElementById("mm").value;
	if(x.length<=6&&x.length>0){
		document.getElementById("passwordwarn").innerHTML="密码至少大于6位！";
	}
	else if(x.length==0)
	{
		document.getElementById("passwordwarn").innerHTML="密码必填！";
	}
	else{
		document.getElementById("passwordwarn").innerHTML="";
	}
}
document.getElementById("mm").onblur=function(){checkpassword()};

function checkrepassword(){
	var x=document.getElementById("mm").value;
	var y=document.getElementById("remm").value;
	if(x!=y){
		document.getElementById("repasswordwarn").innerHTML="密码不一致请重新输入！";
	}
	else{
		document.getElementById("repasswordwarn").innerHTML="";
	}
}
document.getElementById("remm").onblur=function(){checkrepassword()};
function selectxy(){
	var x="\
	         <datalist id=\"classnub\">\
		<option value=\"计算机141\"></option>\
		<option value=\"计算机142\"></option>\
		<option value=\"计算机143\"></option>\
		<option value=\"计算机151\"></option>\
		<option value=\"计算机152\"></option>\
		<option value=\"计算机153\"></option>\
		<option value=\"计算机161\"></option>\
		<option value=\"计算机162\"></option>\
		<option value=\"计算机163\"></option>\
        </datalist>\
	"
	var y="\
             <datalist id=\"classnub\">\
          <option value=\"学前141\"></option>\
		<option value=\"学前142\"></option>\
		<option value=\"学前143\"></option>\
		<option value=\"学前151\"></option>\
		<option value=\"学前152\"></option>\
		<option value=\"学前153\"></option>\
		<option value=\"学前161\"></option>\
		<option value=\"学前162\"></option>\
		<option value=\"学前163\"></option>\
            </datalist>\
	"
	var z="\
             <datalist id=\"classnub\">\
          <option value=\"临床141\"></option>\
		<option value=\"临床142\"></option>\
		<option value=\"临床151\"></option>\
		<option value=\"临床152\"></option>\
		<option value=\"临床161\"></option>\
		<option value=\"临床162\"></option>\
            </datalist>\
	"
	var xy=document.getElementById("xueyuan");
	var banji=document.getElementById("classnub");
	switch(xy.selectedIndex)
		{
			case 0:
			{
				banji.innerHTML="";
				break;
			}
			case 1:
			{
				banji.innerHTML=x;
				break;
			}
			case 2:
			{
				banji.innerHTML=z;
				break;
			}
			case 3:
			{
				banji.innerHTML=y;
				break;
			}
			default:
			{
				banji.innerHTML="";
			}
		}
	}
	document.getElementById("xueyuan").onchange=function(){selectxy()};
	function show(){
		var x=document.getElementById("nianji").value;
		if (x==1) {
			document.getElementById("gradewarn").innerHTML="大一";
		}
		else if (x==2) {
			document.getElementById("gradewarn").innerHTML="大二";
		}
		else if (x==3) {
			document.getElementById("gradewarn").innerHTML="大三";
		}
		else if (x==4) {
			document.getElementById("gradewarn").innerHTML="大四";
		}
		else if (x==0) {
			document.getElementById("gradewarn").innerHTML="";
		}

	}
	document.getElementById("nianji").onchange=function(){show()};