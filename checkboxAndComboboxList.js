<script>
var expanded = false;

function showCheckboxes() {
  var checkboxes = document.getElementById("checkboxes");
  if (!expanded) {
    checkboxes.style.display = "block";
    expanded = true;
  } else {
    checkboxes.style.display = "none";
    expanded = false;
  }
}
</script>
<form>
<div style="width:500px; height:300px; background:red; margin:100px;">
  <div class="multiselect">
    <div class="selectBox" onclick="showCheckboxes()">
      <select >
        <option>Seçiniz</option>
      </select>
      <div class="overSelect"></div>
    </div>
    <div id="checkboxes">
      <label for="one">
        <input type="checkbox" id="one" />First checkbox</label>
      <label for="two">
        <input type="checkbox" id="two" />Second checkbox</label>
      <label for="three">
        <input type="checkbox" id="three" />Third checkbox</label>
        <label for="one">

    </div>
  </div>
  
  sdsddfdsdfdsfdsfdsfdsfdsfdsfdsfdsf
  </div>
</form>
<style>
.multiselect {
  width: 300px;
}

.selectBox {
  position: relative;
}

.selectBox select {
 
  width: 100%;
  font-weight: bold;
  
}

.overSelect {
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
}

#checkboxes {
  display: none;
  border: 1px #dadada solid;
  position: absolute;
  z-index:200;
  background:white;
  height: 250px;
  overflow: scroll; 
  width: 200px;
}

#checkboxes label {
  display: block;
}

#checkboxes label:hover {
  background-color: #1e90ff;
}

</style>