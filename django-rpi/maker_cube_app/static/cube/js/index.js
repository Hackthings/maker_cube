window.onload = function(){
  document.getElementById('remove_text').addEventListener('click', function(clickEvent){
    socket.send('pics');
  });

  document.getElementById('run_text_submit').addEventListener('click', function(clickEvent){
    clickEvent.preventDefault();
    socket.send(document.getElementById('run_text').value);
    document.getElementById('run_text').value = '';
  });

  document.getElementById('reaction-button').addEventListener('click', function(e){
    addDivs();
    addSizes();
    addCircles();
    var time = 1000 + Math.random() * 4000;
    setTimeout(function(){  greenCircles() }, time);
  });
}