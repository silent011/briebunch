export let actionNames = {
    START_INTRO: 'START_INTRO',
    INTRO_MUSIC_STARTED: 'INTRO_MUSIC_STARTED'
}

let startIntro = () => ({
    type: actionNames.START_INTRO
})

let introMusicStarted = () => ({
    type: actionNames.INTRO_MUSIC_STARTED
})

export let actions = {
    startIntro,
    introMusicStarted
}