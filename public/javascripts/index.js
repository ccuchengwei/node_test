$(document).ready(()=>{

    console.log("ready");
    $('#menuToggle').on('click', function(event) {
        $('body').toggleClass('open');
    });
})




