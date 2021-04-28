import '../styles/styles.css'
import MobileMenu from './modules/MobileMenu'
import RevealOnScroll from './modules/RevealOnScroll'
import StickyHeader from './modules/StickyHeader'
import ClientArea from './modules/ClientArea'
alert ("Hello there, click okay if you can see this !!!!")


new ClientArea()

let stickyHeader = new StickyHeader()
let revealOnScroll= new RevealOnScroll()

let mobileMenu=new MobileMenu();
let overlay

document.querySelectorAll(".open-overlay").forEach(el => {
    el.addEventListener("click", e =>{
        e.preventDefault()
        if(typeof overlay =="undefined"){
            import('./modules/Overlay').then(x => {
                overlay=new x.default()
                setTimeout(()=> overlay.openTheOverlay(),20)
               }).catch(()=> console.log("There was a problem"))
        } else {
            overlay.openTheOverlay()
        }
    })
})

if (module.hot){
    module.hot.accept()
}
