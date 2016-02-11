// Write your Pizza Builder JavaScript in this file.
$('.btn-pepperonni').on('click', function () { 
		$('.pep').fadeToggle();
		}); 
$('.btn-mushrooms').on('click', function () { 
		$('.mushroom').fadeToggle();
		}); 
$('.btn-green-peppers').on('click', function () { 
		$('.green-pepper').fadeToggle();
		});
$('.btn-sauce').on('click', function () {
	$('.sauce').toggleClass('sauce-white');
	if ($('.btn-sauce').text() === 'White sauce') {
		$('.btn-sauce').text('Red sauce');}
	else {
		$('.btn-sauce').text('White sauce');	
	}
});

$('.btn-crust').on('click', function () {
	$('.crust').toggleClass('crust-gluten-free');
	if ($('.btn-crust').text() === 'Gluten-free crust') {
		$('.btn-crust').text('Regular crust');}
	else {
		$('.btn-crust').text('Gluten-free crust');	
	}
});

	


