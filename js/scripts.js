var pingPong = function(pingPongNumber){

var pingPongCounts = []

  for (var index = 1; index <= pingPongNumber; index += 1)

    if (((index % 3) === 0) && ((index % 5) === 0)) {
      pingPongCounts.push("pingpong");
    }
      else if ((index % 3) === 0){
        pingPongCounts.push("ping");
      }
        else if ((index % 5) === 0){
          pingPongCounts.push("pong");
        }
          else {
            pingPongCounts.push(index)
          }
            return pingPongCounts
};

$(document).ready(function(){
  $("form#pipoForm").submit(function(event){

    var pingPongInput = parseInt($("input#pingPongInput").val());
    var result = pingPong(pingPongInput);
    
    $("#pipoResult").empty().append("<li>" + result + "</li>");

    event.preventDefault();

  });

});
