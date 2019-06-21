import anime from 'animejs'

let animateText = () => {
    let easing = 'easeOutExpo'
    anime({
        targets:'.leftHeader .textHolder',
        opacity:1,
        duration:5000,
        easing
    })

    anime({
        targets:'.rightHeader .textHolder',
        opacity:1,
        duration:5000,
        easing,
        delay:500
    })
}

export default animateText