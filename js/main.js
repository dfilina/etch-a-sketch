$(document).ready(function() {
	createGrid( 16 );
	formatGridRegular();

	$('#regular').click(function() {
		var cellCount = window.prompt('Enter the number of squares per row:');
		createGrid( parseInt( cellCount, 10 ) );
		formatGridRegular();
	});

	$('#random').click(function() {
		var cellCount = window.prompt('Enter the number of squares per row:');
		createGrid( parseInt( cellCount, 10 ) );
		formatGridRandom();
	});

	$('#opacity').click(function() {
		var cellCount = window.prompt('Enter the number of squares per row:');
		createGrid( parseInt( cellCount, 10 ) );
		formatGridOpacity();
	});
});

function createGrid( cellCount ) {

	if ( isNaN( cellCount ) ) {
		cellCount = 16;
	}

	var width = 960 / cellCount;

	// Clear the grid
	$('.grid-cell').detach();

	// Populate the grid
	for (var i = 0; i < (cellCount * cellCount) ; i++) {
		$('.grid').append('<div class="grid-cell"></div>');
	}

	// Set square size
	$('.grid-cell').width(width);
	$('.grid-cell').height(width);
}

function formatGridRegular() {
	// Create mouse over effect
	$('.grid-cell').hover(function() {
		$(this).addClass('blackened');
	});
}

function formatGridRandom() {
	// Create mouse over effect
	$('.grid-cell').hover(function() {
		$(this).css('background-color', '#' + Math.floor(Math.random()*16777215).toString(16));
	});
}

function formatGridOpacity() {
	$('.grid-cell').css('background-color', 'rgba(0,0,0,0.1)');
	// Create mouse over effect
	$('.grid-cell').hover(function() {
		var currentColor = $(this).css('background-color');
		var lastComma = currentColor.lastIndexOf(',');
		var currentOpacity = currentColor.substring(lastComma +1);
		currentOpacity = currentOpacity.replace(")","");
		var newOpacity = parseFloat( currentOpacity, 10 ) + 0.1;
		if (newOpacity > 1) {
			newOpacity = 1;
		}
		var newColor = currentColor.slice(0, lastComma + 1) + newOpacity + ")";

		$(this).css('background-color', newColor);
	});
}
