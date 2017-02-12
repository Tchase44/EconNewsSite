
$(document).ready(function(){


	loadReading();
});


function loadReading(){
	var url = 'https://newsapi.org/v1/articles?';
	// newest
	var sortNew = 'latest';
	// original
	var sortTop = 'top';
	var keys = 'apiKey=15b31868ac09437dbce82f1f829c5d54';
	var ft ='financial-times';
	var te = 'the-economist';
	var fortune='fortune';
$.getJSON(url+'source='+ft+'&sortBy='+sortTop+'&'+keys,function(data){
		$('#img1 h6').text(data.articles[0].title);
		$('#img1 p').text(data.articles[0].description);
		$('#img1').css('background-image','url('+data.articles[0].urlToImage+')');
		$('#img4 h6').text(data.articles[1].title);
		$('#img4 p').text(data.articles[1].description);
		$('#img4').css('background-image','url('+data.articles[1].urlToImage+')');

	});
$.getJSON(url+'source='+te+'&sortBy='+sortTop+'&'+keys,function(data){
		$('#img2 h6').text(data.articles[1].title);
		$('#img2 p').text(data.articles[1].description);
		$('#img2').css('background-image','url('+data.articles[1].urlToImage+')');
		$('#img5 h6').text(data.articles[0].title);
		$('#img5 p').text(data.articles[0].description);
		$('#img5').css('background-image','url('+data.articles[0].urlToImage+')');
	});
$.getJSON(url+'source='+fortune+'&sortBy='+sortTop+'&'+keys,function(data){
		$('#img3 h6').text(data.articles[0].title);
		$('#img3 p').text(data.articles[0].description);
		$('#img3').css('background-image','url('+data.articles[0].urlToImage+')');
		$('#img6 h6').text(data.articles[1].title);
		$('#img6 p').text(data.articles[1].description);
		$('#img6').css('background-image','url('+data.articles[1].urlToImage+')');
	});
};