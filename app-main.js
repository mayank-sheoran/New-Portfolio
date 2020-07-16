setTimeout(function(){ 
    $('.loading-screen').css('display', 'none');
}, 4000); 

setTimeout(function(){ 
    $('.website').css('display', 'block');
    $('.website').css('position', 'static');
}, 4000);

// setTimeout(function(){ $(elem).css('z-index','2'); },2000)


$(window).scroll(function() {    
    var scroll = $(window).scrollTop();

    if(scroll > 200) {
        $(".navbar").addClass("nav-black");
    } else {
        $(".navbar").removeClass("nav-black");
    }
});


$(document).ready(function(){
    $('.progress-value > span').each(function(){
        $(this).prop('Counter',0).animate({
            Counter: $(this).text()
        },{
            duration: 3500,
            easing: 'swing',
            step: function (now){
                $(this).text(Math.ceil(now));
            }
        });
    });
});


document.getElementById("ml-button").addEventListener("click", ()=>{
    document.getElementById("web-dev").style.display = "none";
    document.getElementById("ml-work-id").style.display = "block";
    console.log("njnnj");
});
document.getElementById("wd-button").addEventListener("click", ()=>{
    document.getElementById("web-dev").style.display = "block";
    document.getElementById("ml-work-id").style.display = "none";
    console.log("njnnj");
});









var form = document.forms["contact-form"];
	form.addEventListener('submit',contact_submit,false);

	function contact_submit(e) {
		// Stop Form From Submitting
		e.preventDefault();

		// Set Initial Variables
		var target = e.target || e.srcElement;
		var to = 'm1y1nksheor1n@gmail.com';
		var uri = 'mailto:' + to;
		var body = '';

		// Set Form Values to Variables
		var name = target.elements['name'].value;
		var email = target.elements['email'].value;
		var message = target.elements['subject'].value;

		// Build Body / Message with all Input Fields
		body += message + "\r\n\r\n";
		body += "Name: " + name + "\r\n";
		body += "Phone Number: " + phone + "\r\n";

		// Build final Mailto URI
		uri += '?subject=' + encodeURIComponent(subject);
		uri += '&body=' + encodeURIComponent(body);

		// Open Mailto in New Window / Tab
		window.open(uri,'_blank');
	}