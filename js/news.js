
var url = 'https://newsapi.org/v1/articles?';
var src= 'source=';
var sort = 'sortBy=';
// newest
var sortNew = 'latest';
// current trending
var sortPopular = 'popular';
// original
var sortTop = 'top';

var keys = 'apiKey=15b31868ac09437dbce82f1f829c5d54'
var ft ='financial-times';
var te = 'the-economist';
var fortune='fortune';
var exUrl = url + src +fortune+ '&' +sort+sortNew+'&'+keys;
$(document).ready(function(){


	loadReading();

});



function loadReading(){
$.getJSON('https://newsapi.org/v1/articles?source=fortune&apiKey=15b31868ac09437dbce82f1f829c5d54',function(data){

		$('#img1 h6').text(data.articles[0].title);
		$('#img1 p').text(data.articles[0].description);
		$('#img2 h6').text(data.articles[1].title);
		$('#img2 p').text(data.articles[1].description);
		$('#img3 h6').text(data.articles[2].title);
		$('#img3 p').text(data.articles[2].description);		
		// $('div.col-1 a').(data.articles[0].url);
		// $('div.col-1 img').text(data.articles[0].urlToImage);
		
});
};
