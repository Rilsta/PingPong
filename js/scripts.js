var pingPong = function(pingPongInput){

var pingPongArrays = []

  for (var index = 1; index <= pingPongInput; index += 1)

    if (((index % 3) === 0) && ((index % 5) === 0)) {
      pingPongArrays.push("pingpong");
    }
      else if ((index % 3) === 0){
        pingPongArrays.push("ping");
      }
        else if ((index % 5) === 0){
          pingPongArrays.push("pong");
        }
          else {
            pingPongArrays.push(index)
          }
            return pingPongArrays
};

$(document).ready(function(){

  $("form#pingPongForm").submit(function(event){
    pingPongInput = parseInt($(".pingPongInput").val())

    result = pingPong(pingPongInput)

    $("#pipoResult").append("<li>" + result + "</li>");

    event.preventDefault();

  });

});
