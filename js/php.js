//---------------------------
$(document).ready(function(){
    $("form").submit(function(event){
      event.preventDefault();
      var formData = $(this).serialize();
      $.ajax({
        type: "POST",
        url: "submit.php",
        data: formData,
        success: function(response){
          console.log(response);
          alert("Thank you for contact us. We will contact you soon!");
        },
        error: function(){
          alert("An error occurred. Please try again later.");
        }
      });
    });
  });
  