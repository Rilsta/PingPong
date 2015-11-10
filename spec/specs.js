describe("pingPong", function(){

  it("counts up from 1 to the number inputted", function(){
    expect(pingPong(5)).to.eql([ 1, 2, 3, 4, 5 ]);
  });

});