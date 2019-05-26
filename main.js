console.log('It works')

$(document).ready(function(){
  $('.submit').click(function(event){
    event.preventDefault()
    console.log('Clicked button')

    var email = $('.email').val()
    var subject = $('.subject').val()
    var message = $('.message').val()
    var statusElm = $('.status')
    statusElm.empty()

    if(email.length > 5 && email.includes('@') && email.includes('.')){
      statusElm.append('<div>Email is valid</div>')
    } else {
      statusElm.append('<div>Email is not valid</div>'')
    }
  })
})

jQuery(document).ready(function ($) {
  $(document).foundation();
});
