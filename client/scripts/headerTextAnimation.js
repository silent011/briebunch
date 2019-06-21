import anime from 'animejs'

let animateText = () => {
    let easing = 'linear'
    let duration = 3000

    anime.timeline({
        duration,
        easing
    })
    .add({
        targets:'.leftHeader .textHolder',
        opacity:1,

    })
    .add({
        targets:'.rightHeader .textHolder',
        opacity:1,
    }, 1000)
}

export default animateText