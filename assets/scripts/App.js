import '../styles/styles.css'
import MobileMenu from './modules/MobileMenu'
import RevealOnScroll from './modules/RevealOnScroll'
import StickyHeader from './modules/StickyHeader'
alert ("Hello there , click okay if u can see this !!!")


let stickyHeader = new StickyHeader()
let revealOnScroll= new RevealOnScroll()

let mobileMenu=new MobileMenu();

if (module.hot){
    module.hot.accept()
}

