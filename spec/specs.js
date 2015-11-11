describe("pingPong", function(){

  it("counts up from 1 to the number inputted", function(){
    expect(pingPong(5)).to.eql([ 1, 2, 3, 4, 5 ]);
  });

  it("replace all numbers divisible by 3 with 0", function(){
    expect(pingPong(6)).to.eql([ 1, 2, 0, 4, 5, 0 ])
  });

});