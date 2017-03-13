$(document).ready(function(){
	$.getJSON('http://json-data.herokuapp.com/forms', function(formData){
		var formHTML = ""
		var icon = ""

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
				icon = `<i class="fa ${field.icon}" aria-hidden="true"></i>`
				console.log(icon)
				formHTML += `<input type="${field.type}" placeholder="${field.label}" id="${field.id}" />`	
			}
		})
		
		$("form").html(formHTML)
	})
})

//<i class="fa ${field.icon}" aria-hidden="true"></i>
//