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
			             
                           $('#item').append(
                           '<tr id="'+val+'">'+
                           '<td style="border-style: double;" align="left" width="20%">FTTB<input  type="checkbox"/></td>'+
                           '<td style="border-style: double;" align="left" width="20%"><input name="yazilim1"  type=text class="input" value="" /></td>'+
                           '<td style="border-style: double;" align="left" width="20%"><input name="yazilim1"  type=text class="input" value="" /></td>'+
                           '<td style="border-style: double;" align="left" width="20%"><input name="yazilim1"  type=text class="input" value="" /></td>'+
                           '<td style="border-style: double;" ><input name="yazilim1"  type=text class="input" value="" /></td>'+
                           '</tr>');
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
<input type="checkbox"   onclick ="deneme('checkval1');"/>
<input id="birinci2" type="checkbox"  onclick ="deneme('checkval2');"/>
<input id="birinci3" type="checkbox"  onclick ="deneme('checkval3');"/>
  
  
  <div id="main"></div>
    <table id="item" width="100%" BORDER=1 BORDERCOLOR=black CELLSPACING=0
			CELLPADDING=0>
    
                 <tr >
				<TD><pre>FTTB</pre></TD>
				<TD><pre>Ticari Paket Id:</pre></TD>
				<TD><pre>Yalın Ticari Paket Id:</pre></TD>
				<TD><pre>ENG/SHT Ticari Paket Id:</pre></TD>
				<TD><pre>Yalın ENG/SHT Ticari Paket Id:</pre></TD>
			</tr>
            <div > </div>
    </table>
    
  
   
    </form>
</body> 
</html>