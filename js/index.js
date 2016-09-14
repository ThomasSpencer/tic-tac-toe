$(function(){

  var turn = 0;

  $('.square').on('click', function(){
    var self = $(this);

    if (self.text() === "") {
      if (turn % 2 === 0) {
        self.text('X')
        turn++;
      }else {
        self.text('O')
        turn++;
      }
    } else {
      alert("Nice try, you cheaty cheater")
    }


  })

})
