import anime from 'animejs'

let animateText = () => {
    let easing = 'linear'
    let duration = 3000

    anime.timeline({
        duration,
        easing,
    })
    .add({
        targets:'.leftHeader .textHolder',
        opacity:1

    })
    .add({
        targets:'.rightHeader .textHolder',
        opacity: 1
    }, 1000).finished.then(() => {
        anime.timeline({
            duration: 3000,
            easing,
            loop: true,
            direction: 'alternate'
        })
        .add({
            targets:'.leftHeader .textHolder',
            opacity:[1,0.5]
        })
        .add({
            targets:'.rightHeader .textHolder',
            opacity: [1, 0.5]
        }, 1000)
    })
}

export default animateText