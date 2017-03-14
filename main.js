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
			if (field.type == "textarea"){
				formHTML += `<div class="taDiv"><textarea placeholder="${field.label}" id="${field.id}" ></textarea></div><i class="fa ${field.icon}" aria-hidden="true"></i>`
			}
			else{
				formHTML += `<input type="${field.type}" placeholder="${field.label}" id="${field.id}" /><i class="fa ${field.icon}" aria-hidden="true"></i>`
			}
		})
		$("form").html(formHTML)
	})
})