$(function(){

  var winCheck = function() {
    if ( $('#1').text() === $('#4').text() && $('#4').text() === $('#7').text() ) {
      alert("WINNER!")
      location.reload()
    }else if ($('#2').text() === $('#5').text() && $('#5').text() === $('#8').text()) {
      alert("WINNER!")
      location.reload()
    }else if ($('#3').text() === $('#6').text() && $('#6').text() === $('#9').text()) {
      alert("WINNER!")
      location.reload()
    }else if ($('#1').text() === $('#5').text() && $('#5').text() === $('#9').text()) {
      alert("WINNER!")
      location.reload()
    }else if ($('#3').text() === $('#5').text() && $('#5').text() === $('#7').text()) {
      alert("WINNER!")
      location.reload()
    }else if ($('#1').text() === $('#2').text() && $('#2').text() === $('#3').text()) {
      alert("WINNER!")
      location.reload()
    }else if ($('#4').text() === $('#5').text() && $('#5').text() === $('#6').text()) {
      alert("WINNER!")
      location.reload()
    }else if ($('#7').text() === $('#8').text() && $('#8').text() === $('#9').text()) {
      alert("WINNER!")
      location.reload()
    }

  }

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

    if (turn >= 5) {
      winCheck();
    }


  })

})
