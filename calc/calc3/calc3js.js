var main = function() {

	// four number slots and three operator slots
	var numb1 = 0;
	var numb2 = 0;
	var numb3 = 0;
	var numb4 = 0;
	var op1 = 0;
	var op2 = 0;
	var op3 = 0;
	// holds current number. 0 is first.
	var current = 0;
	// tool box var
	var showToolBox = 0;
	var toolBox = function(value) {
		$('.varNumb1').text('numb1 = ' + numb1);
		$('.varNumb2').text('numb2 = ' + numb2);
		$('.varNumb3').text('numb3 = ' + numb3);
		$('.varNumb4').text('numb4 = ' + numb4);
		$('.varOp1').text('op1 = ' + op1);
		$('.varOp2').text('op2 = ' + op2);
		$('.varOp3').text('op3 = ' + op3);
		$('.current').text('current = ' + current);
		$('.varShowToolBox').text('showToolBox = ' + showToolBox);
	};
	// deletes disabled JS error on html
	$('.error').text('');

	// for when the number gets too big
	var resize = function() {
		if($('.numbBox').text().toString().length >= 18) {
			$('.numbBox').removeClass('small1');
			$('.numbBox').removeClass('small2');
			$('.numbBox').removeClass('small3');
			$('.numbBox').addClass('small4');
		} else if($('.numbBox').text().toString().length >= 12) {
			$('.numbBox').removeClass('small1');
			$('.numbBox').removeClass('small2');
			$('.numbBox').addClass('small3');
			$('.numbBox').removeClass('small4');
		} else if($('.numbBox').text().toString().length >= 9) {
			$('.numbBox').removeClass('small1');
			$('.numbBox').addClass('small2');
			$('.numbBox').removeClass('small3');
			$('.numbBox').removeClass('small4');
		} else if($('.numbBox').text().toString().length >= 7) {
			$('.numbBox').addClass('small1');
			$('.numbBox').removeClass('small2');
			$('.numbBox').removeClass('small3');
			$('.numbBox').removeClass('small4');
		} else {
			$('.numbBox').removeClass('small1');
			$('.numbBox').removeClass('small2');
			$('.numbBox').removeClass('small3');
			$('.numbBox').removeClass('small4');
		}
	};

	/* Number buttons block. 
	The buttons themselves are done but not numbButtons(). */
	var numbButtons = function(value) {
		$('.ac').addClass('clear');
		$('.clear').removeClass('ac');
		$('.clear').text('C')
		if(current === 0) {
    	numb1 = numb1 * 10 + value;
    	$('.numbBox').text(numb1);
      current = 0;
    } else if(current === 1) {
      numb2 = numb2 * 10 + value;
      $('.numbBox').text(numb2);
    };
    resize();
	};
	$('.one').click(function() {
		numbButtons(1);
	});
	$('.two').click(function() {
		numbButtons(2);
	});
	$('.three').click(function() {
		numbButtons(3);
	});
	$('.four').click(function() {
		numbButtons(4);
	});
	$('.five').click(function() {
		numbButtons(5);
	});
	$('.six').click(function() {
		numbButtons(6);
	});
	$('.seven').click(function() {
		numbButtons(7);
	});
	$('.eight').click(function() {
		numbButtons(8);
	});
	$('.nine').click(function() {
		numbButtons(9);
	});
	$('.zero').click(function() {
		numbButtons(0);
	});


	/* not to be confused with .multiply or mulDiv(). 
	Only used with .clear,.switch, and .percent. */
	var multiplier = function(value) {
		if(current === 0) {
			numb1 = numb1 * value;
			$('.numbBox').text(numb1)
		} else if(current === 1) {
			numb2 = numb2 * value;
			$('.numbBox').text(numb2)
		} else if(current === 2) {
			numb3 = numb3 * value;
			$('.numbBox').text(numb3)
		} else if(current === 3) {
			numb4 = numb4 * value;
			$('.numbBox').text(numb4)
		};
	};

	// Function block. Definitely not done. 
	var mulDiv = function(value) {
		/* value === 1 for multiplication
		value === 2 for division */
		if(current === 0) {
			if(value === 1) {
				$('.add').removeClass('selected');
				$('.subtract').removeClass('selected');
				$('.multiply').addClass('selected');
				$('.divide').removeClass('selected');
				op1 = 1;
			} else if(value === 2)  {
				$('.add').removeClass('selected');
				$('.subtract').removeClass('selected');
				$('.multiply').removeClass('selected');
				$('.divide').addClass('selected');
				op1 = 2;
			} else {
				$('.error').text('Something went wrong in mulDiv().');
			};
			current = 1;
			$('.numbBox').text(numb2);
		} else if(current === 1) {
			if(op1 >= 3) {
				
			}
		};
	};
	var addSub = function(value) {
		/* value === 1 for addition
		value === 2 for sutraction */
		if(current === 0) {
			if(value === 1) {
				$('.add').addClass('selected');
				$('.subtract').removeClass('selected');
				$('.multiply').removeClass('selected');
				$('.divide').removeClass('selected');
				op1 = 3
			} else if(value === 2)  {
				$('.add').addClass('selected');
				$('.subtract').removeClass('selected');
				$('.multiply').removeClass('selected');
				$('.divide').removeClass('selected');
				op1 = 2
			} else {
				$('.error').text('Something went wrong in addSub().');
			};
			current = 1;
			$('.numbBox').text(numb2);
		};
	resize();
	};

	$('.add').click(function() {
		addSub(1);
	});
	$('.subtract').click(function() {
		addSub(2);
	});
	$('.multiply').click(function() {
		mulDiv(1);
	});
	$('.divide').click(function() {
		mulDiv(2);
	});
	$('.equals').click(function() {

	});
	$('.ac').click(function() {

	});
	$('.clear').click(function() {
		multiplier(0);
	});
	$('.switch').click(function() {
		// done
		multiplier(-1);
	});
	$('.percent').click(function() {
		// done
		multiplier(0.01);
	});

	// Keyboard shortcuts
	$(document).keypress(function(event) {
		if(event.which === 187 && event.shiftKey == true) {
			addSub(1);
		} else if(event.which >= 48 && event.which <= 57) {
			numbButtons(event.which - 48);
		} else if(event.which === 68 && event.altKey == true) {
			showToolBox = 1;
			toolBox(0);
		};
	});
  /* for stuff like hitting the asterisk (*)
	Go to http://codepen.io/chriscoyier/embed/mPgoYJ/?height=265&theme
	-id=0&default-tab=result&embed-version=2
	for more

  $(document).keypress(function(event) {
		if(event.which === 56 && event.shiftKey == true) {
			
		};
	}); */


// don't edit beyond this comment!
};

$(document).ready(main);