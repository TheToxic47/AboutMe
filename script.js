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
        audioPlayer.play()
        button.classList.add("activado")
        event.preventDefault()  
        button.classList.remove("boton1")
        button.classList.add("boton2")
      })

      // Button:
      
            
    }
  }
  
  

  function musica(){
    container.appendChild(loadingElement)
        
        // Trigger playback:
        audioPlayer.play()
      
      
      container.appendChild(button)
  }
  //stop playback
  function stop(){
    container.removeChild(loadingElement)
    container.removeChild(button)

  }
  
  function awake(){
    window.controller = new MainController(document.body)
  }
  
  document.addEventListener("DOMContentLoaded", awake)
  