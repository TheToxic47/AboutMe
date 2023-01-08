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
          button.classList.add("activado")
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
      var button2 = document.getElementsByClassName("activado")
      if (button2.classList.contains(`boton2`)){
        button2.classList.remove("boton2" , "activado")
        button2.classList.add("boton1")
      }



      // Button:
      
            
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