//event listener for the about button
// Animate Smooth Scroll
$('#about').on('click', function() {
  const about = $('#images').position().top;

  $('html, body').animate(
    {
      scrollTop: about
    },
    900
  );
});
// Animate Smooth Scroll for view work button
$('#projects').on('click', function(){
  const work = $('#work').position().top;
  $('html, body').animate(
    {
      scrollTop: work
    },
    900
  );
$('#resume').on('click', function(){
  const content = $('#resumecontent').position().top;
  $('html, body').animate(
    {
      scrollTop: content
    },
    900
  );
});


});
