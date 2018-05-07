var main = function() {

	// 						this first block is obviously for declaring variables
	$('#whoseTurn').hide();
	$('#lastTurn').hide();
	$('#about').hide();
	$('#license').hide();
	$('#whoseTurn').text("White's turn.");
	var turn = 1;
	var select = 0;
	var toX = 0;
	var toY = 0;
	var pieceToMove = 0;
	// need to remove the piece classes from HTML and put them here
	// 						use arrayName[x] to obtain the xth object in arrayName
	var whitePawn = [ // 	every two objects declare a piece's x and y coordinate
		1,2,
		2,2,
		3,2,
		4,2,
		5,2,
		6,2,
		7,2,
		8,2
	];
	var whiteSpec = [ // 	spec meaning special, or everything except pawns
		1,1,
		2,1,
		3,1,
		4,1,
		5,1,
		6,1,
		7,1,
		8,1
	];
	var blackPawn = [
		1,7,
		2,7,
		3,7,
		4,7,
		5,7,
		6,7,
		7,7,
		8,7
	];
	var blackSpec = [
		1,8,
		2,8,
		3,8,
		4,8,
		5,8,
		6,8,
		7,8,
		8,8
	];

	// 						this upcoming block is for selecting the piece you want to move

	var deselector = function() {
		// may be simplified with an each() function
		$('.wp1').removeClass('selected');
		$('.wp2').removeClass('selected');
		$('.wp3').removeClass('selected');
		$('.wp4').removeClass('selected');
		$('.wp5').removeClass('selected');
		$('.wp6').removeClass('selected');
		$('.wp7').removeClass('selected');
		$('.wp8').removeClass('selected');
		$('.wr1').removeClass('selected');
		$('.wr2').removeClass('selected');
		$('.wn1').removeClass('selected');
		$('.wn2').removeClass('selected');
		$('.wb1').removeClass('selected');
		$('.wb2').removeClass('selected');
		 $('.wk').removeClass('selected');
		 $('.wq').removeClass('selected');
		$('.bp1').removeClass('selected');
		$('.bp2').removeClass('selected');
		$('.bp3').removeClass('selected');
		$('.bp4').removeClass('selected');
		$('.bp5').removeClass('selected');
		$('.bp6').removeClass('selected');
		$('.bp7').removeClass('selected');
		$('.bp8').removeClass('selected');
		$('.br1').removeClass('selected');
		$('.br2').removeClass('selected');
		$('.bn1').removeClass('selected');
		$('.bn2').removeClass('selected');
		$('.bb1').removeClass('selected');
		$('.bb2').removeClass('selected');
		 $('.bk').removeClass('selected');
		 $('.bq').removeClass('selected');
	}
	var mover = function(where) {
		if(select == 1) {
			$('.' + pieceToMove).removeClass('selected');
			$('.' + pieceToMove).removeClass(pieceToMove);
			$(where).addClass(pieceToMove);
			pieceToMove = 0;
			select = 0;
			if(turn == 1) {
				turn = 2;
			} else {
				turn = 1;
			};
		};
	}
	var selector = function(value, piece) {
	// 	'piece' doesn't follow the 'i before e except after c' rule!' so mad!!
		if(turn == value) {
			if(select === 0) {
				deselector();
				$('.' + piece).addClass('selected');
				select = 1;
				pieceToMove = piece;
			} else {
				deselector();
				select = 0;
			};
		};
	}
	// may be simplified with a single click() function
	$('#11').click(function() {mover('#11')});
	$('#21').click(function() {mover('#21')});
	$('#31').click(function() {mover('#31')});
	$('#41').click(function() {mover('#41')});
	$('#51').click(function() {mover('#51')});
	$('#61').click(function() {mover('#61')});
	$('#71').click(function() {mover('#71')});
	$('#81').click(function() {mover('#81')});
	$('#12').click(function() {mover('#12')});
	$('#22').click(function() {mover('#22')});
	$('#32').click(function() {mover('#32')});
	$('#42').click(function() {mover('#42')});
	$('#52').click(function() {mover('#52')});
	$('#62').click(function() {mover('#62')});
	$('#72').click(function() {mover('#72')});
	$('#82').click(function() {mover('#82')});
	$('#13').click(function() {mover('#13')});
	$('#23').click(function() {mover('#23')});
	$('#33').click(function() {mover('#33')});
	$('#43').click(function() {mover('#43')});
	$('#53').click(function() {mover('#53')});
	$('#63').click(function() {mover('#63')});
	$('#73').click(function() {mover('#73')});
	$('#83').click(function() {mover('#83')});
	$('#14').click(function() {mover('#14')});
	$('#24').click(function() {mover('#24')});
	$('#34').click(function() {mover('#34')});
	$('#44').click(function() {mover('#44')});
	$('#54').click(function() {mover('#54')});
	$('#64').click(function() {mover('#64')});
	$('#74').click(function() {mover('#74')});
	$('#84').click(function() {mover('#84')});
	$('#15').click(function() {mover('#15')});
	$('#25').click(function() {mover('#25')});
	$('#35').click(function() {mover('#35')});
	$('#45').click(function() {mover('#45')});
	$('#55').click(function() {mover('#55')});
	$('#65').click(function() {mover('#65')});
	$('#75').click(function() {mover('#75')});
	$('#85').click(function() {mover('#85')});
	$('#16').click(function() {mover('#16')});
	$('#26').click(function() {mover('#26')});
	$('#36').click(function() {mover('#36')});
	$('#46').click(function() {mover('#46')});
	$('#56').click(function() {mover('#56')});
	$('#66').click(function() {mover('#66')});
	$('#76').click(function() {mover('#76')});
	$('#86').click(function() {mover('#86')});
	$('#17').click(function() {mover('#17')});
	$('#27').click(function() {mover('#27')});
	$('#37').click(function() {mover('#37')});
	$('#47').click(function() {mover('#47')});
	$('#57').click(function() {mover('#57')});
	$('#67').click(function() {mover('#67')});
	$('#77').click(function() {mover('#77')});
	$('#87').click(function() {mover('#87')});
	$('#18').click(function() {mover('#18')});
	$('#28').click(function() {mover('#28')});
	$('#38').click(function() {mover('#38')});
	$('#48').click(function() {mover('#48')});
	$('#58').click(function() {mover('#58')});
	$('#68').click(function() {mover('#68')});
	$('#78').click(function() {mover('#78')});
	$('#88').click(function() {mover('#88')});

	$('.wp1').click(function() {selector(1, 'wp1')});
	$('.wp2').click(function() {selector(1, 'wp2')});
	$('.wp3').click(function() {selector(1, 'wp3')});
	$('.wp4').click(function() {selector(1, 'wp4')});
	$('.wp5').click(function() {selector(1, 'wp5')});
	$('.wp6').click(function() {selector(1, 'wp6')});
	$('.wp7').click(function() {selector(1, 'wp7')});
	$('.wp8').click(function() {selector(1, 'wp8')});
	$('.wr1').click(function() {selector(1, 'wr1')});
	$('.wr2').click(function() {selector(1, 'wr2')});
	$('.wn1').click(function() {selector(1, 'wn1')});
	$('.wn2').click(function() {selector(1, 'wn2')});
	$('.wb1').click(function() {selector(1, 'wb1')});
	$('.wb2').click(function() {selector(1, 'wb2')});
	 $('.wk').click(function() {selector(1, 'wk')});
	 $('.wq').click(function() {selector(1, 'wq')});
	$('.bp1').click(function() {selector(2, 'bp1')});
	$('.bp2').click(function() {selector(2, 'bp2')});
	$('.bp3').click(function() {selector(2, 'bp3')});
	$('.bp4').click(function() {selector(2, 'bp4')});
	$('.bp5').click(function() {selector(2, 'bp5')});
	$('.bp6').click(function() {selector(2, 'bp6')});
	$('.bp7').click(function() {selector(2, 'bp7')});
	$('.bp8').click(function() {selector(2, 'bp8')});
	$('.br1').click(function() {selector(2, 'br1')});
	$('.br2').click(function() {selector(2, 'br2')});
	$('.bn1').click(function() {selector(2, 'bn1')});
	$('.bn2').click(function() {selector(2, 'bn2')});
	$('.bb1').click(function() {selector(2, 'bb1')});
	$('.bb2').click(function() {selector(2, 'bb2')});
	 $('.bk').click(function() {selector(2, 'bk')});
	 $('.bq').click(function() {selector(2, 'bq')});

	var viewMode = 0;
	$('#trigger').click(function() {
		if(viewMode == 0) { //			show current and last turn
			$('#whoseTurn').show();
			$('#lastTurn').show();
			viewMode = 1;
		} else if(viewMode == 1) { // 	show everything else
			$('#about').show();
			$('#license').show();
			viewMode = 2;
		} else { //						hide everything
			$('#whoseTurn').hide();
			$('#lastTurn').hide();
			$('#about').hide();
			$('#license').hide();
			viewMode = 0;
		}
	});
}
$(document).ready(main);
