$(document).ready(function(){
	$.getJSON('http://json-data.herokuapp.com/forms', function(formData){
		var formHTML = ""

		formData.forEach(function(field){
		formHTML += `<input type="${field.type}" placeholder=" ${field.label}" id="${field.id}" />`
		})

		$("form").html(formHTML)
	})
})

//<i class="fa ${field.icon}" aria-hidden="true"></i>