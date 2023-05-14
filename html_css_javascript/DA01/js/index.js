$(document).on('ready',(function(){
  $(".regular").slick({
      dots: true,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1
    });
}))
$(document).on('ready',(function(){
$(".regular1").slick({
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 2,
        
      }
    },
    {
      breakpoint: 800,
      settings: {
        slidesToShow: 1,
      }
    },
    
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});
}))

$(document).ready(function(){
$('#toggle').click(function(){
  $('#main-menu').slideToggle();
})
})
$(document).ready(function(){
$('#toggle1').click(function(){
  $('.main-menu1').slideToggle();
})
})
// const togglebutton =document.getElementById('toggle-button')
// const navilist =document.getElementById('navi-list')
// togglebutton.addEventListener('click',()=>{
//   navilist.classList.toggle('active');
// })