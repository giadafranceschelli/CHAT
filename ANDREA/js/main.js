//CHAT
(function() {

	$('#livechat header').on('click', function() {

		$('.chat').slideToggle(300, 'swing');

	});

	$('.chat-close').on('click', function(e) {

		e.preventDefault();
		$('#livechat').animate({width: 'toggle'});
		document.getElementById("myModal").style.display = "block";

		setTimeout(function(){ 
			document.getElementById("anim2").style.display = "block";
		}, 2000);

	});

}) ();

$(document).ready(function(){
	$('a[href^="#"]').on('click',function (e) {
		e.preventDefault();

		var target = this.hash;
		var $target = $(target);

		$('html, body').stop().animate({
			 'scrollTop': $target.offset().top
		}, 900, 'swing');
		});
		
});

//APPARIZIONE AVATAR AL PRIMO SCROLL

window.onscroll = function scrollFunction() {
	const x = window.matchMedia("(max-width: 700px)")
	if(x.matches && document.getElementById("anim2") ){
		
		document.getElementById("myModal").style.display =
		(document.documentElement.scrollTop > 120) ?
			"block" :
			"none";
		anim.style.display = "none";
		anim2.style.display = "block";
	}else if(document.getElementById("anim")){

		document.getElementById("myModal").style.display =
			(document.documentElement.scrollTop > 120) ?
				"block" :
				"none";
				
	}
		
					
}

// ALLA PARTENZA DEL SITO LA CHAR RIMANE OSCURATA
$(document).ready(function() {
	//modal.style.display = "block";
	livechat.style.display = "none";
	anim2.style.display = "none";
	
});

// SE CLICCHI SULL'AVATR SPARICE E SI APRE LA CHAT
document.getElementById("anim").onclick = function(e){
	document.getElementById("anim").style.display = "none";
	document.getElementById("myModal").style.display = "none";
	livechat.style.display = "block";

}
document.getElementById("anim2").onclick = function(e){
	livechat.style.display = "block";
	document.getElementById("anim2").style.display = "none";
}
//CHAT
//INVIO MESSAGGIO CON TASTI INVIO
$(document).ready(function() {
	$("#messenger_input").keypress(function(event) {
		if (event.which == 13) {
			event.preventDefault();
			send();
		}
	});
});
//FUNZIONE SAND QUANDO SI CLICCA INVIA O IL BOTTONE
function send() {
	//MESSAGGIO IN INPUT
	var text = $("#messenger_input").val();
	text = hasWhiteSpace(text);
	//GESTIONE STRINGHE SENZA SPAZI, PER EVITARE ERRORI
	function hasWhiteSpace(s) {
		if(s.indexOf(' ')<=0){
			return s.substr(0, 26);
		}
		else{
			return s;
		} 
	}
	//RICHIAMO LA FUNZIONE PER SCRIVERE LA DOMANDA DELL'UTENTE NELLA CHAT
	setQuestion(text);
	//COLLEGAMENTO AD API CORE
	fetch("http://turing2019.azurewebsites.net/api/chat", {
		method: "POST",
		body: "\"" + text + "\"",
		headers:{ 'Content-Type': 'application/json' },
	}).then(function(response){		
		return response.json();
	}).then(function(data){
		//SCRITTURA RISPOSTA SULLA CHAT
		var answer = document.getElementById("message_list");
		answer.innerHTML += "<div class='container'><div class='response'>" + JSON.parse(data).result.fulfillment.speech + "</div></div>";
		//SCROLL DOWN MESSAGE_LIST
		answer.scrollTop = answer.scrollHeight;
		text.innerHTML = "";
	});
}

var objDiv = document.getElementById("message_list");

//FUNZIONE PER STAMPARE DOMANDE
function setQuestion(val) {
	objDiv.innerHTML += "<div class='container'><div class='question'>" + $("#question").text() + val + "</div></div>";
	//SCROLL DOWN MESSAGE LIST
	objDiv.scrollTop = objDiv.scrollHeight;
	//CANCELLAZIONE MESSAGGIO NEL BOX INPUT
	$("#messenger_input").val('');
}