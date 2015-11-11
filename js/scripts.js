var pingPong = function(pingPongInput){

var myArrays = []

  for (var index = 1; index <= pingPongInput; index += 1)
    if ((index % 3) === 0){
        myArrays.push("ping");
      }
        else if ((index % 5) === 0){
          myArrays.push("pong");
        }

          else {
            myArrays.push(index)
          }
              return myArrays

};