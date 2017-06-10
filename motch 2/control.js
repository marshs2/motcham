
function scrollDown(event){
  window.scrollBy(0,1000);
};

function initElement(){
  var arrow = document.getElementsByClassName('arrow')[0];
  arrow.onclick = scrollDown;
};
