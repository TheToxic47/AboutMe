class MainController {
  
    constructor(container){

      // Setup loading:    
      const loadingElement = document.createElement("button");
      
      // Audio:
      const audioPlayer = document.getElementsByTagName("audio")[0]
      audioPlayer.addEventListener("play", () => {
  document.title = "About Me"
      })
      
      // Button:

      var button = document.getElementById("boton")
      button.textContent = " "
      button.classList.add("boton1");
      button.addEventListener("click", (event) => {
      if (event.target.classList.contains("boton1")){
          audioPlayer.play()
          event.preventDefault()  
          button.classList.remove("boton1")
          button.classList.add("boton2" , "activado")
        }
      else if (event.target.classList.contains("activado")){
          audioPlayer.pause()
          button.classList.remove("activado" , "boton2")
          button.classList.add("boton1")
          
      }
        
      })

    }
  }
  function awake(){
    window.controller = new MainController(document.body)
  }
  
  document.addEventListener("DOMContentLoaded", awake)
  
  //AudioPrueba
  // The audio HTML element
  var button = document.getElementById('mute');
  button.onclick = function (){

    if (video.muted = false) {    
      video.muted = true;
}


  };