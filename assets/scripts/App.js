import '../styles/styles.css'
import MobileMenu from './modules/MobileMenu'
import RevealOnScroll from './modules/RevealOnScroll'
alert ("Hello there , click okay if u can see this !!!")

let revealOnScroll= new RevealOnScroll()

let mobileMenu=new MobileMenu();

if (module.hot){
    module.hot.accept()
}

