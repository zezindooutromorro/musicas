var playlist = [
    {"title": "Music 1", "url":"https://d1490khl9dq1ow.cloudfront.net/music/mp3preview/top-of-the-world-full_GyYoqWEu.mp3"},
    {"title": "Music 2", "url":"https://d1490khl9dq1ow.cloudfront.net/music/mp3preview/the-choice_MJWP1Dr_.mp3"},  {"title": "Music 3", "url":"https://d1490khl9dq1ow.cloudfront.net/music/mp3preview/fun-guitar-and-ukulele-full_fk4ltN4O.mp3"}
  ];
  
  var audio = new Audio(playlist[0].url);
  var playing = 0;
  
  window.addEventListener("load", function(){
    document.querySelector("[data-player]*:first-child").innerText = playlist[ playing ].title;
  });
  
  document.querySelector("#play").addEventListener("click", function(){
    audio.play();
  });
  document.querySelector("#pause").addEventListener("click", function(){
    audio.pause();
  });
  
  document.querySelector("#back").addEventListner("click", function(){
    if(playing > 0) playing--;
    audio.src = playlist[playing].url;
    this.parentNode.querySelector("*:first-child").innerText = playlist [ playing ].title;
  });
  
  document.querySelector("#next").addEventListner("click", function(){
    if(playing < playlist.length-1) playing++;
    audio.src = playlist[playing].url;
    this.parentNode.querySelector("*:first-child").innerText = playlist [ playing ].title;
  });