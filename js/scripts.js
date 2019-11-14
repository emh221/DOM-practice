$(function() {

  $("button#hello").click(function(){
    $("ul#user").prepend("<li>Hello!</li>");
    $("ul#webpage").prepend("<li>Why, Hello there.</li>");
    $("ul#user").children("li").first().click(function() {
      $(this).remove();
    });
    $("ul#webpage").children("li").first().click(function(){
      $(this).remove();
    });
  });

  $("button#goodbye").click(function() {
    $("ul#user").prepend("<li>Goodbye.</li>");
    $("ul#webpage").prepend("<li>So long!</li>");
  });

  $("button#stop").click(function(){
    $("ul#user").prepend("<li>Stop copying me!!!</li>");
    $("ul#webpage").prepend("<li>Ok, so sorry!</li>");
  });
});
