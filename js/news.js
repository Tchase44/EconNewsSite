
$(document).ready(function(){
	loadReading();
	$('#t').click(function(){
		loadReading();
	});
	$('#n').click(function(){
		loadNewest();
	})
// });


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
	var twsj='the-wall-street-journal';
	var bl='bloomberg';
	var bi='business-insider';
$.getJSON(url+'source='+ft+'&sortBy='+sortTop+'&'+keys,function(data){
		$('#img1 a').text(data.articles[0].title).attr("href", data.articles[0].url);
		$('#img1 p').text(data.articles[0].description+"(cnbc)");
		$('#img1').css('background-image','url('+data.articles[0].urlToImage+')');
		$('#img12 a').text(data.articles[1].title).attr("href", data.articles[1].url);
		$('#img12 p').text(data.articles[1].description+"(cnbc)");
		$('#img12').css('background-image','url('+data.articles[1].urlToImage+')');

	});
$.getJSON(url+'source='+te+'&sortBy='+sortTop+'&'+keys,function(data){
		$('#img2 a').text(data.articles[0].title).attr("href", data.articles[0].url);
		$('#img2 p').text(data.articles[0].description+"(the economist)");
		$('#img2').css('background-image','url('+data.articles[0].urlToImage+')');
		$('#img7 a').text(data.articles[1].title).attr("href", data.articles[1].url);
		$('#img7 p').text(data.articles[1].description+"(the economist)");
		$('#img7').css('background-image','url('+data.articles[1].urlToImage+')');
	});
$.getJSON(url+'source='+fortune+'&sortBy='+sortTop+'&'+keys,function(data){
		$('#img3 a').text(data.articles[0].title).attr("href", data.articles[0].url);
		$('#img3 p').text(data.articles[0].description+ "(fortune)");
		$('#img3').css('background-image','url('+data.articles[0].urlToImage+')');
		$('#img8 a').text(data.articles[1].title).attr("href", data.articles[1].url);
		$('#img8 p').text(data.articles[1].description+ "(fortune)");
		$('#img8').css('background-image','url('+data.articles[1].urlToImage+')');
	});
$.getJSON(url+'source='+bl+'&sortBy='+sortTop+'&'+keys,function(data){
		$('#img4 a').text(data.articles[0].title).attr("href", data.articles[0].url);
		$('#img4 p').text(data.articles[0].description+ "(bloomberg)");
		$('#img4').css('background-image','url('+data.articles[0].urlToImage+')');
		$('#img9 a').text(data.articles[1].title).attr("href", data.articles[1].url);
		$('#img9 p').text(data.articles[1].description+ "(bloomberg)");
		$('#img9').css('background-image','url('+data.articles[1].urlToImage+')');
	});
$.getJSON(url+'source='+bi+'&sortBy='+sortTop+'&'+keys,function(data){
		$('#img5 a').text(data.articles[0].title).attr("href", data.articles[0].url);
		$('#img5 p').text(data.articles[0].description+ "(bussiness insider)");
		$('#img5').css('background-image','url('+data.articles[0].urlToImage+')');
		$('#img10 a').text(data.articles[1].title).attr("href", data.articles[1].url);
		$('#img10 p').text(data.articles[1].description+ "(bussiness insider)");
		$('#img10').css('background-image','url('+data.articles[1].urlToImage+')');
	});
$.getJSON(url+'source='+twsj+'&sortBy='+sortTop+'&'+keys,function(data){
		$('#img6 a').text(data.articles[0].title).attr("href", data.articles[0].url);
		$('#img6 p').text(data.articles[0].description+ "(wall street journal)");
		$('#img6').css('background-image','url('+data.articles[0].urlToImage+')');
		$('#img11 a').text(data.articles[1].title).attr("href", data.articles[1].url);
		$('#img11 p').text(data.articles[1].description+ "(wall street journal)");
		$('#img11').css('background-image','url('+data.articles[1].urlToImage+')');
	});
};

function loadNewest() {
	var url = 'https://newsapi.org/v1/articles?';
	// newest
	var sortNew = 'latest';
	var keys = 'apiKey=15b31868ac09437dbce82f1f829c5d54';
	var bi='business-insider';
	var te = 'the-economist';
	var fortune='fortune';
	var ind='independent';
	var ap='associated-press';
	var nw='newsweek';
$.getJSON(url+'source='+bi+'&sortBy='+sortNew+'&'+keys,function(data){
		$('#img1 a').text(data.articles[0].title).attr("href", data.articles[0].url);
		$('#img1 p').text("(bussiness insider)"+data.articles[0].description);
		$('#img1').css('background-image','url('+data.articles[0].urlToImage+')');
		$('#img7 a').text(data.articles[1].title).attr("href", data.articles[1].url);
		$('#img7 p').text("(bussiness insider)"+data.articles[1].description);
		$('#img7').css('background-image','url('+data.articles[1].urlToImage+')');

	});
$.getJSON(url+'source='+te+'&sortBy='+sortNew+'&'+keys,function(data){
		$('#img2 a').text(data.articles[0].title).attr("href", data.articles[0].url);
		$('#img2 p').text("(the economist)"+data.articles[0].description);
		$('#img2').css('background-image','url('+data.articles[0].urlToImage+')');
		$('#img8 a').text(data.articles[1].title).attr("href", data.articles[1].url);
		$('#img8 p').text("(the economist)"+data.articles[1].description);
		$('#img8').css('background-image','url('+data.articles[1].urlToImage+')');
	});
$.getJSON(url+'source='+fortune+'&sortBy='+sortNew+'&'+keys,function(data){
		$('#img3 a').text(data.articles[0].title).attr("href", data.articles[0].url);
		$('#img3 p').text( "(fortune)"+data.articles[0].description);
		$('#img3').css('background-image','url('+data.articles[0].urlToImage+')');
		$('#img9 a').text(data.articles[1].title).attr("href", data.articles[1].url);
		$('#img9 p').text( "(fortune)"+data.articles[1].description);
		$('#img9').css('background-image','url('+data.articles[1].urlToImage+')');
	});
$.getJSON(url+'source='+ind+'&sortBy='+sortNew+'&'+keys,function(data){
		$('#img4 a').text(data.articles[0].title).attr("href", data.articles[0].url);
		$('#img4 p').text( "(independent)"+data.articles[0].description);
		$('#img4').css('background-image','url('+data.articles[0].urlToImage+')');
		$('#img10 a').text(data.articles[1].title).attr("href", data.articles[1].url);
		$('#img10 p').text( "(independent)"+data.articles[1].description);
		$('#img10').css('background-image','url('+data.articles[1].urlToImage+')');
	});
$.getJSON(url+'source='+ap+'&sortBy='+sortNew+'&'+keys,function(data){
		$('#img5 a').text(data.articles[0].title).attr("href", data.articles[0].url);
		$('#img5 p').text( "(associated press)"+data.articles[0].description);
		$('#img5').css('background-image','url('+data.articles[0].urlToImage+')');
		$('#img11 a').text(data.articles[1].title).attr("href", data.articles[1].url);
		$('#img11 p').text( "(associated press)"+data.articles[1].description);
		$('#img11').css('background-image','url('+data.articles[1].urlToImage+')');
	});
$.getJSON(url+'source='+nw+'&sortBy='+sortNew+'&'+keys,function(data){
		$('#img6 a').text(data.articles[0].title).attr("href", data.articles[0].url);
		$('#img6 p').text( "(newsweek)"+data.articles[0].description);
		$('#img6').css('background-image','url('+data.articles[0].urlToImage+')');
		$('#img12 a').text(data.articles[1].title).attr("href", data.articles[1].url);
		$('#img12 p').text( "(newsweek)"+data.articles[1].description);
		$('#img12').css('background-image','url('+data.articles[1].urlToImage+')');
	});
}
});

// Trump filter

