$(document).ready(function(){
    let but = false
    $("#navbarButton").click(function(e){
        but = !but
        but ? $("#navBarlist").slideDown() : $("#navBarlist").slideUp()
    })
})