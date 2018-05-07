var main = function() {

//					declare vars

  var number = 0;
  var secNumb = 0;
  var answer = 0;
  var currentNumb = 0;
//	currentNumb = 0 is the first number, currentNumb = 1 is the second, and currentNumb = 3 is the answer
  var operator = 0;
  var memory = 0;
  var nomem = 0;
//	nomem = 0 means there's no number in memory, nomem = 1 means there's a number in memory
  /* I'm pretty sure there's a way to make one function for all but I don't know that yet! */

//					number buttons

  $('.one').click(function() {
    if(currentNumb === 0) {
      number = 1;
      $('.first').text(number);
      $('.second').text('??');
      $('.op').text('??');
      $('.ans').text('??');
      currentNumb = 0;
    } else {
      secNumb = 1;
      $('.second').text(secNumb);
    };
});
  $('.two').click(function() {
    if(currentNumb === 0) {
      number = 2;
      $('.first').text(number);
      $('.second').text('??');
      $('.op').text('??');
      $('.ans').text('??');
      currentNumb = 0;
    } else {
      secNumb = 2;
      $('.second').text(secNumb);
    };
});
  $('.three').click(function() {
    if(currentNumb === 0) {
      number = 3;
      $('.first').text(number);
      $('.second').text('??');
      $('.op').text('??');
      $('.ans').text('??');
      currentNumb = 0;
    } else {
      secNumb = 3;
      $('.second').text(secNumb);
    };
});
  $('.four').click(function() {
    if(currentNumb === 0) {
      number = 4;
      $('.first').text(number);
      $('.second').text('??');
      $('.op').text('??');
      $('.ans').text('??');
      currentNumb = 0;
    } else {
      secNumb = 4;
      $('.second').text(secNumb);
    };
});
  $('.five').click(function() {
    if(currentNumb === 0) {
      number = 5
      $('.first').text(number);
      $('.second').text('??');
      $('.op').text('??');
      $('.ans').text('??');
      currentNumb = 0;
    } else {
      secNumb = 5;
      $('.second').text(secNumb);
    };
});
  $('.six').click(function() {
    if(currentNumb === 0) {
      number = 6;
      $('.first').text(number);
      $('.second').text('??');
      $('.op').text('??');
      $('.ans').text('??');
      currentNumb = 0;
    } else {
      secNumb = 6;
      $('.second').text(secNumb);
    };
});
  $('.seven').click(function() {
    if(currentNumb === 0) {
      number = 7;
      $('.first').text(number);
      $('.second').text('??');
      $('.op').text('??');
      $('.ans').text('??');
      currentNumb = 0;
    } else {
      secNumb = 7;
      $('.second').text(secNumb);
    };
});
  $('.eight').click(function() {
    if(currentNumb === 0) {
      number = 8;
      $('.first').text(number);
      $('.second').text('??');
      $('.op').text('??');
      $('.ans').text('??');
      currentNumb = 1;
    } else {
      secNumb = 8;
      $('.second').text(secNumb);
    };
});
  $('.nine').click(function() {
    if(currentNumb === 0) {
      number = 9;
      $('.first').text(number);
      $('.second').text('??');
      $('.op').text('??');
      $('.ans').text('??');
      currentNumb = 0;
    } else {
      secNumb = 9;
      $('.second').text(secNumb);
    };
});
  $('.zero').click(function() {
    if(currentNumb === 0) {
      number = 0;
      $('.first').text(number);
      $('.second').text('??');
      $('.op').text('??');
      $('.ans').text('??');
      currentNumb = 0;
    } else {
      secNumb = 0;
      $('.second').text(secNumb);
    };
});

//					operator buttons (and +/-)					

  $('.add').click(function() {
    if (currentNumb === 0) {
      currentNumb = 1;
    } else {
      if(operator === 1) {
        number = number + secNumb;
      } else if(operator === 2) {
        number = number - secNumb;
      } else if(operator === 3) {
        number = number * secNumb;
      } else if(operator === 4) {
        if(secNumb === 0) {
          answer = 'ERROR: Divide by Zero';
        } else {
        number = number / secNumb;
        };
      };
      $('.second').text('??');
      $('.ans').text('??');
      secNumb = 0;
    };
    $('.first').text(number);
    $('.op').text('+');
    operator = 1;
  });

  $('.subtract').click(function() {
    if (currentNumb === 0) {
      currentNumb = 1;
    } else {
      if(operator === 1) {
        number = number + secNumb;
      } else if(operator === 2) {
        number = number - secNumb;
      } else if(operator === 3) {
        number = number * secNumb;
      } else if(operator === 4) {
        if(secNumb === 0) {
          answer = 'ERROR: Divide by Zero';
        } else {
        number = number / secNumb;
        };
      };
      $('.second').text('??');
      $('.ans').text('??');
      secNumb = 0;
    };
    $('.first').text(number);
    $('.op').text('-');
    operator = 2;
  });

  $('.multiply').click(function() {
    if (currentNumb === 0) {
      currentNumb = 1;
    } else {
      if(operator === 1) {
        number = number + secNumb;
      } else if(operator === 2) {
        number = number - secNumb;
      } else if(operator === 3) {
        number = number * secNumb;
      } else if(operator === 4) {
        if(secNumb === 0) {
          answer = 'ERROR: Divide by Zero';
        } else {
        number = number / secNumb;
        };
      };
      $('.second').text('??');
      $('.ans').text('??');
      secNumb = 0;
    };
    $('.first').text(number);
    $('.op').text('*');
    operator = 3;
  });

  $('.divide').click(function() {
    if (currentNumb === 0) {
      currentNumb = 1;
    } else {
      if(operator === 1) {
        number = number + secNumb;
      } else if(operator === 2) {
        number = number - secNumb;
      } else if(operator === 3) {
        number = number * secNumb;
      } else if(operator === 4) {
        if(secNumb === 0) {
          answer = 'ERROR: Divide by Zero';
        } else {
        number = number / secNumb;
        };
      };
      $('.second').text('??');
      $('.ans').text('??');
      secNumb = 0;
    };
    $('.first').text(number);
    $('.op').text('/');
    operator = 4;
  });
  $('.switch').click(function() {
    if(currentNumb === 0) {
      number = number * -1;
      $('.first').text(number);
    } else if(currentNumb === 1) {
      secNumb = secNumb * -1;
      $('.second').text(secNumb);
    };
  });

//					equals button (actually, enter)

  $('.equals').click(function() {
    if(operator === 1) {
      answer = number + secNumb;
    } else if(operator === 2) {
      answer = number - secNumb;
    } else if(operator === 3) {
      answer = number * secNumb;
    } else if(operator === 4) {
      if(secNumb === 0) {
        answer = 'ERROR: Divide by Zero';
      } else {
      answer = number / secNumb
      };
    };
    currentNumb = 3;
    $('.ans').text(answer);
  });

//					variable buttons

  $('.store').click(function() {
    if(currentNumb === 0) {
      memory = number;
    } else if(currentNumb === 1) {
      memory = secNumb;
    } else if(currentNumb === 3 && answer !== 'ERROR: Divide by Zero') {
      memory = answer;
    };
    nomem = 1;
  });
  $('.clearvar').click(function() {
    memory = 0;
    nomem = 0;
  });
  $('.var').click(function() {
    if(nomem === 1 ) {
      if(currentNumb === 0) {
        number = memory;
        $('.first').text(number);
      } else if(currentNumb === 1) {
        secNumb = memory;
        $('.second').text(secNumb);
      } else if(currentNumb === 3) {
        answer = memory;
        $('.answer').text(answer);
      };
    };
  });
//					reset and clear buttons

  $('.clear').click(function() {
    number = 0;
    secNumb = 0;
    currentNumb = 0;
    answer = 0;
    operator = 0;
    $('.first').text('??');
    $('.op').text('??');
    $('.second').text('??');
    $('.ans').text('??');
  });
  $('.reset').click(function() {
    number = 0;
    secNumb = 0;
    currentNumb = 0;
    answer = 0;
    operator = 0;
    memory = 0;
    nomem = 0;
    $('.first').text('??');
    $('.op').text('??');
    $('.second').text('??');
    $('.ans').text('??');
  });
};

//					$(document).ready(main);

$(document).ready(main);