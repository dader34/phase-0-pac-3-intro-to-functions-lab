function shout(words){
    return words.toUpperCase()
}

function whisper(words){
    return words.toLowerCase()
}

function logShout(word){
    console.log(word.toUpperCase())
}

function logWhisper(words){
    console.log(words.toLowerCase())
}

function sayHiToHeadphonedRoommate(words){
    if(words === "Let's have dinner together!"){
        return("I would love to!")
    }
    return ((words.toUpperCase() != words) ? "I can't hear you!" : "YES INDEED!")
}

