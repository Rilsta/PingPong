var pingPong = function(pingPongInput){

var myArrays = []

  for (var index = 1; index <= pingPongInput; index += 1)
    if ((index % 3) === 0){
        myArrays.push(0);
      } 
        else {
          myArrays.push(index)
        }
            return myArrays



};