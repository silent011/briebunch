import anime from 'animejs'
import headerTextAnimation from './headerTextAnimation'

let orbsAnimation = (orbs, orbClones) => {
    let delay = 1250
    let locationValues = [
        {cx:700, cy:34},
        {cx:534, cy: 200},
        {cx:700, cy: 366},
        {cx:866, cy: 200},

    ]

    let animateOrb = (orb, orbClone, orbNumber, newLocation) => {
        let orbsRotation = (orbNumber) => {
            if(orbNumber === 0) {
                let rotation = anime({
                    targets:'#orbs-group',
                    easing:'linear',
                    duration:5000,
                    loop:true,
                    rotate:360,
                    transformOrigin:['50% 50% 0', '50% 50% 0'],
                    loopComplete: () => {
                        headerTextAnimation()
                        rotation.loopComplete = () => {}
                    }
                })
            }          
        }


        let orbTravel = anime({
            targets: orb,
            delay: orbNumber*delay,
            translateX: {value:844},
            translateY: {value:-156},
            duration:3000,
            scale: {value:[3,1], duration:2400},
            easing: 'linear',
            // transformOrigin:['50% 50% 0', '50% 50% 0']
        }).finished.then(() => {
            let {cx, cy} = newLocation
            orb.setAttribute("style", "")
            orbClone.setAttribute("cx", cx)
            orbClone.setAttribute("cy", cy)
            
            orbsRotation(orbNumber)
         
            anime({
                targets:orbClone,
                loop:true,
                easing:'linear',
                duration:5000,
                rotate: [-orbNumber*90,-360-orbNumber*90],
                transformOrigin:[`${cx}px ${cy}px 0`, `${cx}px ${cy}px 0`]
            })
            
        
        })
    } 

    for(let i = 0; i < orbs.length; i++){
        animateOrb(orbs[i], orbClones[i], i, locationValues[i])
    }
}

let animateCircle = (stats) => {
    let orbs = document.getElementsByClassName('orbs')
    let orbClones = document.getElementsByClassName('orbs-clones')
    let circle = document.querySelector('.circle-container #circle')

    anime({
        targets:circle,
        opacity:[0,1],
        duration:3000,
        easing:'linear',
    })

    let circleRotation = anime({
        targets:circle,
        rotate:360,
        loop:true,
        duration:5000,
        easing:'linear',
        update: (stats) => {
            if(Math.round(stats.progress) === 27){
                orbsAnimation(orbs, orbClones)
                circleRotation.update = () => {}
            }
        }
    })
    
  
}

export default animateCircle