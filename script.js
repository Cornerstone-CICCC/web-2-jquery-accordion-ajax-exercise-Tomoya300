$(function() {
  $(".accordion-header").click(function() {
    $(this).next().slideToggle()
    $(".accordion-content").not($(this).next()).slideUp()
});


  $(".todos").find("button").click(function() {
    $.ajax({
      url: "https://dummyjson.com/todos",
      type: "GET",
      success: function(response) {
        $.each(response.todos,function(index, value) {
          $(".todos").find("ul").append(`<li>${value.todo}</li>`)
        })
        $(".todos").find("button").prop("disabled", true)
        console.log("to-dos:", response)
      },
      error: function(error) {
        console.error(error)
      }
    })
  })
})