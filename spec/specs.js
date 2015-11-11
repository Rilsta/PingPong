describe("pingPong", function(){

  it("counts up from 1 to the number inputted", function(){
    expect(pingPong(5)).to.eql([ 1, 2, 3, 4, 5 ]);
  });

  it("replace all numbers divisible by 3 with ping", function(){
    expect(pingPong(6)).to.eql([ 1, 2, "ping", 4, 5, "ping" ])
  });

  it("replace all number divisible by 5 with pong", function(){
    expect(pingPong(10)).to.eql([ 1, 2, "ping", 4, "pong", "ping", 7, 8, "ping", "pong" ])
  });

  it("replace all numbers divisible by 15 with pingpong", function(){
    expect(pingPong(15)).to.eql([ 1, 2, "ping", 4, "pong", "ping", 7, 8, "ping", "pong", 11, "ping", 13, 14, "pingpong" ])
  });

});