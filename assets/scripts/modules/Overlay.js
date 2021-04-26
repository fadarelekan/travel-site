class Overlay{
    constructor(){
        this.injectHTML()
        this.overlay=document.querySelector(".overlay")
        this.closeIcon= document.querySelector(".overlay__close")
        this.openOverlayButtons=document.querySelectorAll(".open-overlay")
        this.events()
    }

    events(){
        // listen for open click
        this.openOverlayButtons.forEach(el=> el.addEventListener("click",e=>this.openTheOverlay(e)))
        // listen for close click
        this.closeIcon.addEventListener("click",() => this.closeTheOverlay())
        // pushes any key
        document.addEventListener("keyup", e=> this.keyPressHandler(e))
    }

    keyPressHandler(e){
        if(e.keyCode==27){
            this.closeTheOverlay()

        }
    }

    openTheOverlay(e){
     e.preventDefault()
     this.overlay.classList.add("overlay--is-visible")
    }

    closeTheOverlay(){
        this.overlay.classList.remove("overlay--is-visible")   
    }


    injectHTML(){
        document.body.insertAdjacentHTML('beforeend',`
        <div class="overlay">
    <div class="overlay__inner">
      <h2 class="section-title section-title--blue section-title--less-margin"><img src="images/icons/mail.svg" class="section-title__icon"> Get in <strong>Touch</strong></h2>
      <div class="wrapper wrapper--narrow">
        <p class="overlay__description">We will have an online order system in place soon. Until then, connect with us on any of the platforms below!</p>
      </div>
      <div class="social-icons">
        <a href="#" class="social-icons__icon"><img src="images/icons/facebook.svg" alt="Facebook"></a>
        <a href="#" class="social-icons__icon"><img src="images/icons/twitter.svg" alt="Twitter"></a>
        <a href="#" class="social-icons__icon"><img src="images/icons/instagram.svg" alt="Instagram"></a>
        <a href="#" class="social-icons__icon"><img src="images/icons/youtube.svg" alt="YouTube"></a>
      </div>
    </div>
    <div class="overlay__close">X</div>
  </div>
        `)

    }
}

export default Overlay
