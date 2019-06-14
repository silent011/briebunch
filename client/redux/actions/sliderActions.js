export let actionNames = {
    START_INTRO: 'START_INTRO',
    INTRO_MUSIC_STARTED: 'INTRO_MUSIC_STARTED',
    INTRO_ENDED: 'INTRO_ENDED'
}

let startIntro = () => ({
    type: actionNames.START_INTRO
})

let introMusicStarted = () => ({
    type: actionNames.INTRO_MUSIC_STARTED
})

let introEnded = () => ({
    type: actionNames.INTRO_ENDED
})

export let actions = {
    startIntro,
    introMusicStarted,
    introEnded
}