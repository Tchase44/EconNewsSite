
$(document).ready(function(){
	loadReading();
	$('#t').click(function(){
		loadReading();
	});
	$('#n').click(function(){
		loadNewest();
	})
});


function loadReading(){
	var url = 'https://newsapi.org/v1/articles?';
	// newest
	var sortNew = 'latest';
	// original
	var sortTop = 'top';
	var keys = 'apiKey=15b31868ac09437dbce82f1f829c5d54';
	var ft ='cnbc';
	var te = 'the-economist';
	var fortune='fortune';
$.getJSON(url+'source='+ft+'&sortBy='+sortTop+'&'+keys,function(data){
		$('#img1 a').text(data.articles[0].title).attr("href", data.articles[0].url);
		$('#img1 p').text(data.articles[0].description);
		$('#img1').css('background-image','url('+data.articles[0].urlToImage+')');
		$('#img4 a').text(data.articles[1].title).attr("href", data.articles[1].url);
		$('#img4 p').text(data.articles[1].description);
		$('#img4').css('background-image','url('+data.articles[1].urlToImage+')');

	});
$.getJSON(url+'source='+te+'&sortBy='+sortTop+'&'+keys,function(data){
		$('#img2 a').text(data.articles[0].title).attr("href", data.articles[0].url);
		$('#img2 p').text(data.articles[0].description);
		$('#img2').css('background-image','url('+data.articles[0].urlToImage+')');
		$('#img5 a').text(data.articles[1].title).attr("href", data.articles[1].url);
		$('#img5 p').text(data.articles[1].description);
		$('#img5').css('background-image','url('+data.articles[1].urlToImage+')');
	});
$.getJSON(url+'source='+fortune+'&sortBy='+sortTop+'&'+keys,function(data){
		$('#img3 a').text(data.articles[0].title).attr("href", data.articles[0].url);
		$('#img3 p').text(data.articles[0].description);
		$('#img3').css('background-image','url('+data.articles[0].urlToImage+')');
		$('#img6 a').text(data.articles[1].title).attr("href", data.articles[1].url);
		$('#img6 p').text(data.articles[1].description);
		$('#img6').css('background-image','url('+data.articles[1].urlToImage+')');
	});
};

function loadNewest() {
	var url = 'https://newsapi.org/v1/articles?';
	// newest
	var sortNew = 'latest';
	var keys = 'apiKey=15b31868ac09437dbce82f1f829c5d54';
	var ft ='cnbc';
	var te = 'the-economist';
	var fortune='fortune';
$.getJSON(url+'source='+ft+'&sortBy='+sortNew+'&'+keys,function(data){
		$('#img1 a').text(data.articles[0].title).attr("href", data.articles[0].url);
		$('#img1 p').text(data.articles[0].description);
		$('#img1').css('background-image','url('+data.articles[0].urlToImage+')');
		$('#img4 a').text(data.articles[1].title).attr("href", data.articles[1].url);
		$('#img4 p').text(data.articles[1].description);
		$('#img4').css('background-image','url('+data.articles[1].urlToImage+')');

	});
$.getJSON(url+'source='+te+'&sortBy='+sortNew+'&'+keys,function(data){
		$('#img2 a').text(data.articles[0].title).attr("href", data.articles[0].url);
		$('#img2 p').text(data.articles[0].description);
		$('#img2').css('background-image','url('+data.articles[0].urlToImage+')');
		$('#img5 a').text(data.articles[1].title).attr("href", data.articles[1].url);
		$('#img5 p').text(data.articles[1].description);
		$('#img5').css('background-image','url('+data.articles[1].urlToImage+')');
	});
$.getJSON(url+'source='+fortune+'&sortBy='+sortNew+'&'+keys,function(data){
		$('#img3 a').text(data.articles[0].title).attr("href", data.articles[0].url);
		$('#img3 p').text(data.articles[0].description);
		$('#img3').css('background-image','url('+data.articles[0].urlToImage+')');
		$('#img6 a').text(data.articles[1].title).attr("href", data.articles[1].url);
		$('#img6 p').text(data.articles[1].description);
		$('#img6').css('background-image','url('+data.articles[1].urlToImage+')');
	});
}