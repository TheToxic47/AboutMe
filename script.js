class MainController {
  
    constructor(container){

      // Setup loading:    
      const loadingElement = document.createElement("button");
      
      // Audio:
      const audioPlayer = document.getElementsByTagName("audio")[0]
      audioPlayer.addEventListener("play", () => {
  document.title = "Satellite"
      })
      
      // Button:

      const button = document.getElementById("boton")
      button.textContent = "♫"
      button.classList.add("boton1");
      button.addEventListener("click", (event) => {
        // Remove button:

        
        // Add loading:

        
        // Trigger playback:
        audioPlayer.play()
      })
      

    }
    

    
  }
  function musica(){
    container.appendChild(loadingElement)
        
        // Trigger playback:
        audioPlayer.play()
      
      
      container.appendChild(button)
  }

  
  function awake(){
    window.controller = new MainController(document.body)
  }
  
  document.addEventListener("DOMContentLoaded", awake)
  