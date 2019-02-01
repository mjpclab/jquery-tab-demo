require.config({
	baseUrl: 'lib',
	paths:
		{
			jquery: 'jquery/jquery',
			'jquery-tab': 'jquery-tab/jquery-tab'
		}
});

require(['jquery', 'jquery-tab'], function ($, $tab) {
	$('.tab1').tab();
});
