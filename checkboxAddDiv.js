<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8">
<title>jQuery Add Elements to DOM</title>
<script src="https://code.jquery.com/jquery-3.5.1.min.js"></script>
<script>
var iCnt = 0;
var name;


		

                  function deneme(val){
               		var x = document.getElementById(val);
                     var container = $(document.createElement('div'))
								.css({});
                    
                    
                    if (x ==null) {
			             
                           $('#item').append('<table border="0" id="'+val+'"  width="100%"><tr><td align="left" width="20%">Yazılım</td><td><input name="yazilim1"  type=text class="input" value="<%=yazilim1[i] %>" /></td></tr></table>');
					       $('#main').after(container);
                     }else{
                     var id="#"+val
   						   $(container).empty().remove();
						   $(id).remove();
                           }
        }

</script>
</head>
<body>
<form name="formname">
<input id="birinci1" type="checkbox"   onclick ="deneme('checkval1');"/>
<input id="birinci2" type="checkbox"  onclick ="deneme('checkval2');"/>
<input id="birinci3" type="checkbox"  onclick ="deneme('checkval3');"/>
  
  
  <div id="main"></div>
  
    <div id="item">
       
    </div>
    </form>
</body> 
</html>