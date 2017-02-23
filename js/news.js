
$(document).ready(function(){




var loadReading = function(){
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
		$('#img1 p').text("(cnbc)"+data.articles[0].description);
		$('#img1').css('background-image','url('+data.articles[0].urlToImage+')');
		$('#img12 a').text(data.articles[1].title).attr("href", data.articles[1].url);
		$('#img12 p').text("(cnbc)"+data.articles[1].description);
		$('#img12').css('background-image','url('+data.articles[1].urlToImage+')');

	});
$.getJSON(url+'source='+te+'&sortBy='+sortTop+'&'+keys,function(data){
		$('#img2 a').text(data.articles[0].title).attr("href", data.articles[0].url);
		$('#img2 p').text("(the economist)"+data.articles[0].description);
		$('#img2').css('background-image','url('+data.articles[0].urlToImage+')');
		$('#img7 a').text(data.articles[1].title).attr("href", data.articles[1].url);
		$('#img7 p').text("(the economist)"+data.articles[1].description);
		$('#img7').css('background-image','url('+data.articles[1].urlToImage+')');
	});
$.getJSON(url+'source='+fortune+'&sortBy='+sortTop+'&'+keys,function(data){
		$('#img3 a').text(data.articles[0].title).attr("href", data.articles[0].url);
		$('#img3 p').text( "(fortune)"+data.articles[0].description);
		$('#img3').css('background-image','url('+data.articles[0].urlToImage+')');
		$('#img8 a').text(data.articles[1].title).attr("href", data.articles[1].url);
		$('#img8 p').text( "(fortune)"+data.articles[1].description);
		$('#img8').css('background-image','url('+data.articles[1].urlToImage+')');
	});
$.getJSON(url+'source='+bl+'&sortBy='+sortTop+'&'+keys,function(data){
		$('#img4 a').text(data.articles[0].title).attr("href", data.articles[0].url);
		$('#img4 p').text( "(bloomberg)"+data.articles[0].description);
		$('#img4').css('background-image','url('+data.articles[0].urlToImage+')');
		$('#img9 a').text(data.articles[1].title).attr("href", data.articles[1].url);
		$('#img9 p').text( "(bloomberg)"+data.articles[1].description);
		$('#img9').css('background-image','url('+data.articles[1].urlToImage+')');
	});
$.getJSON(url+'source='+bi+'&sortBy='+sortTop+'&'+keys,function(data){
		$('#img5 a').text(data.articles[0].title).attr("href", data.articles[0].url);
		$('#img5 p').text( "(bussiness insider)"+data.articles[0].description);
		$('#img5').css('background-image','url('+data.articles[0].urlToImage+')');
		$('#img10 a').text(data.articles[1].title).attr("href", data.articles[1].url);
		$('#img10 p').text( "(bussiness insider)"+data.articles[1].description);
		$('#img10').css('background-image','url('+data.articles[1].urlToImage+')');
	});
$.getJSON(url+'source='+twsj+'&sortBy='+sortTop+'&'+keys,function(data){
		$('#img6 a').text(data.articles[0].title).attr("href", data.articles[0].url);
		$('#img6 p').text( "(wall street journal)"+data.articles[0].description);
		$('#img6').css('background-image','url('+data.articles[0].urlToImage+')');
		$('#img11 a').text(data.articles[1].title).attr("href", data.articles[1].url);
		$('#img11 p').text( "(wall street journal)"+data.articles[1].description);
		$('#img11').css('background-image','url('+data.articles[1].urlToImage+')');
	});
};

var loadNewest = function() {
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
		$('#img5 p').text(data.articles[0].description);
		$('#img5').css('background-image','url('+data.articles[0].urlToImage+')');
		$('#img11 a').text(data.articles[1].title).attr("href", data.articles[1].url);
		$('#img11 p').text(data.articles[1].description);
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
};
// });
	// Trump filter
var exists = function (content, q) {
	var result = content.split(" ").filter(function(item) {
       return item.toLowerCase() === q.toLowerCase(); 
   	});
    return result.length > 0;
};

var loadTrumpFreeZone = function(){
	$('#img10,#img11,#img12').css('background-image',"none");
	var nope = "No Trump Here";
	var br = "trump filter brought to you by Tim Chase.";
	$('#img10 a').text(nope);$('#img11 a').text(nope);$('#img12 a').text(nope);
	$('#img10 p').text(br);$('#img11 p').text(br);$('#img12 p').text(br);
	var url = 'https://newsapi.org/v1/articles?';
	var keys = 'apiKey=15b31868ac09437dbce82f1f829c5d54';
	var sortTop = 'top';
	var fortune='fortune';
	var ind='independent';
	var ap='associated-press';
	var nw='newsweek';
	var cnbc ='cnbc';
	var te = 'the-economist';
	var twsj='the-wall-street-journal';
	var bl='bloomberg';
	var bi='business-insider';
	$.getJSON(url+'source='+cnbc+'&sortBy='+sortTop+'&'+keys,function(data){
		var trumpFreeZone=[];
		var temp = data.articles;
		for (var i = 0; i < temp.length; i++){
			if(exists(temp[i].title,'trump')|| exists(temp[i].title,"trump's") ){
				console.log('blocked');
			}else{
				trumpFreeZone.push(temp[i]);
			};
		};
		$('#img1 a').text(trumpFreeZone[0].title).attr("href",trumpFreeZone[0].url);
		$("#img1 p").text("(cnbc)"+trumpFreeZone[0].description);
		$('#img1').css("background-image",'url('+trumpFreeZone[0].urlToImage+')');
	});
	$.getJSON(url+'source='+bl+'&sortBy='+sortTop+'&'+keys,function(data){
		var trumpFreeZone=[];
		var temp = data.articles;
		for (var i = 0; i < temp.length; i++){
			if(exists(temp[i].title,'trump')|| exists(temp[i].title,"trump's") ){
				console.log('blocked');
			}else{
				trumpFreeZone.push(temp[i]);
			};
		};
		$('#img2 a').text(trumpFreeZone[0].title).attr("href",trumpFreeZone[0].url);
		$("#img2 p").text("(bloomberg)"+trumpFreeZone[0].description);
		$('#img2').css("background-image",'url('+trumpFreeZone[0].urlToImage+')');
	});
	$.getJSON(url+'source='+twsj+'&sortBy='+sortTop+'&'+keys,function(data){
		var trumpFreeZone=[];
		var temp = data.articles;
		for (var i = 0; i < temp.length; i++){
			if(exists(temp[i].title,'trump')|| exists(temp[i].title,"trump's") ){
				console.log('blocked');
			}else{
				trumpFreeZone.push(temp[i]);
			};
		};
		$('#img3 a').text(trumpFreeZone[0].title).attr("href",trumpFreeZone[0].url);
		$("#img3 p").text("(the-wall-street-journal)"+trumpFreeZone[0].description);
		$('#img3').css("background-image",'url('+trumpFreeZone[0].urlToImage+')');
	});
	$.getJSON(url+'source='+bi+'&sortBy='+sortTop+'&'+keys,function(data){
		var trumpFreeZone=[];
		var temp = data.articles;
		for (var i = 0; i < temp.length; i++){
			if(exists(temp[i].title,'trump')|| exists(temp[i].title,"trump's") ){
				console.log('blocked');
			}else{
				trumpFreeZone.push(temp[i]);
			};
		};
		$('#img4 a').text(trumpFreeZone[0].title).attr("href",trumpFreeZone[0].url);
		$("#img4 p").text("(business-insider)"+trumpFreeZone[0].description);
		$('#img4').css("background-image",'url('+trumpFreeZone[0].urlToImage+')');
	});
	$.getJSON(url+'source='+te+'&sortBy='+sortTop+'&'+keys,function(data){
		var trumpFreeZone=[];
		var temp = data.articles;
		for (var i = 0; i < temp.length; i++){
			if(exists(temp[i].title,'trump')|| exists(temp[i].title,"trump's") ){
				console.log('blocked');
			}else{
				trumpFreeZone.push(temp[i]);
			};
		};
		$('#img5 a').text(trumpFreeZone[0].title).attr("href",trumpFreeZone[0].url);
		$("#img5 p").text("(the-economist)"+trumpFreeZone[0].description);
		$('#img5').css("background-image",'url('+trumpFreeZone[0].urlToImage+')');
	});
	$.getJSON(url+'source='+fortune+'&sortBy='+sortTop+'&'+keys,function(data){
		var trumpFreeZone=[];
		var temp = data.articles;
		for (var i = 0; i < temp.length; i++){
			if(exists(temp[i].title,'trump')|| exists(temp[i].title,"trump's") ){
				console.log('blocked');
			}else{
				trumpFreeZone.push(temp[i]);
			};
		};
		$('#img6 a').text(trumpFreeZone[0].title).attr("href",trumpFreeZone[0].url);
		$("#img6 p").text("(fortune)"+trumpFreeZone[0].description);
		$('#img6').css("background-image",'url('+trumpFreeZone[0].urlToImage+')');
	});
	$.getJSON(url+'source='+ind+'&sortBy='+sortTop+'&'+keys,function(data){
		var trumpFreeZone=[];
		var temp = data.articles;
		for (var i = 0; i < temp.length; i++){
			if(exists(temp[i].title,'trump')|| exists(temp[i].title,"trump's") ){
				console.log('blocked');
			}else{
				trumpFreeZone.push(temp[i]);
			};
		};
		$('#img7 a').text(trumpFreeZone[0].title).attr("href",trumpFreeZone[0].url);
		$("#img7 p").text("(independent)"+trumpFreeZone[0].description);
		$('#img7').css("background-image",'url('+trumpFreeZone[0].urlToImage+')');
	});
	$.getJSON(url+'source='+ap+'&sortBy='+sortTop+'&'+keys,function(data){
		var trumpFreeZone=[];
		var temp = data.articles;
		for (var i = 0; i < temp.length; i++){
			if(exists(temp[i].title,'trump')|| exists(temp[i].title,"trump's") ){
				console.log('blocked');
			}else{
				trumpFreeZone.push(temp[i]);
			};
		};
		$('#img8 a').text(trumpFreeZone[0].title).attr("href",trumpFreeZone[0].url);
		$("#img8 p").text(trumpFreeZone[0].description);
		$('#img8').css("background-image",'url('+trumpFreeZone[0].urlToImage+')');
	});
	$.getJSON(url+'source='+nw+'&sortBy='+sortTop+'&'+keys,function(data){
		var trumpFreeZone=[];
		var temp = data.articles;
		for (var i = 0; i < temp.length; i++){
			if(exists(temp[i].title,'trump')|| exists(temp[i].title,"trump's") ){
				console.log('blocked');
			}else{
				trumpFreeZone.push(temp[i]);
			};
		};
		$('#img9 a').text(trumpFreeZone[0].title).attr("href",trumpFreeZone[0].url);
		$("#img9 p").text("(newsweek)"+trumpFreeZone[0].description);
		$('#img9').css("background-image",'url('+trumpFreeZone[0].urlToImage+')');
	});	
};

	 loadReading();
// function to load trumpfreezone
	$('#t').click(function(){
		
		loadReading();
	});
	$('#n').click(function(){

		loadNewest();
	});
	$('#tfz').click(function(){
		loadTrumpFreeZone();
	});
// });
});