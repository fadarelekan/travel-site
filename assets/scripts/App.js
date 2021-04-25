import '../styles/styles.css'
import MobileMenu from './modules/MobileMenu'
import RevealOnScroll from './modules/RevealOnScroll'
import StickyHeader from './modules/StickyHeader'
alert ("Hello there , click okay if u can see this !!!")


new StickyHeader()
let revealOnScroll= new RevealOnScroll()

new MobileMenu();
let overlay

document.querySelectorAll(".open-overlay").forEach(el =>{
    el.addEventListener("click",e=>{
        e.preventDefault()
        if(typeof overlay=="undefined" ){
            import(/* webpackChunkName:"modal" */ './modules/Overlay').then(x =>{
                overlay=new x.default()
                setTimeout(()=>overlay.openTheOverlay(),20)
            }).catch(()=>console.log("There was a problem")) 
        }else{
            overlay.openTheOverlay()
        }
    })
})

if (module.hot){
    module.hot.accept()
}
