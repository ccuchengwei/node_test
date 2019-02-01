$(document).ready(()=>{

    var svg = d3.select("svg"),
        width = svg.width,
        height = svg.height;

    console.log("ready");
    $('#menuToggle').on('click', function(event) {
        $('body').toggleClass('open');
    });
})




