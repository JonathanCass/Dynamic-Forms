$(document).ready(function(){
	$.getJSON('http://json-data.herokuapp.com/forms', function(formData){
		var formHTML = ""

		

		formData.forEach(function(field){
			if (field.type == "select"){
				selectArr = []
				selectArr[0] = "<select>"
				selectArr += `<option value = "none selected">Select Language...</option>`
				field.options.forEach(function(option){
					selectArr += `<option value="${option.value}">"${option.label}"</option>`
				})
				selectArr += ('</select>')
				formHTML += selectArr
				}
			else{
				formHTML += `<input type="${field.type}" placeholder=" ${field.label}" id="${field.id}" />`	
			}
		})
		
		$("form").html(formHTML)
	})
})

//<i class="fa ${field.icon}" aria-hidden="true"></i>
//<i class="fa ${field.icon}" aria-hidden="true"></i>
//[add(option[,index])]	Adds an <option> element into the collection at the specified index. If no index is specified, it inserts the option at the end of the collection
/*
<select>
  <option value="volvo">Volvo</option>
  <option value="saab">Saab</option>
  <option value="mercedes">Mercedes</option>
  <option value="audi">Audi</option>
</select>*/