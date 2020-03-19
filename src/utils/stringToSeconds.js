// Round up determines whether the second whould be rounded up or down.
// This is so the window of time doesn't constrict (end times are rounded up)

// Expecting string in HH:MM:SS format

export default function boojie(string, roundUp) {
    
    const stringArray = string.split(':');
    let seconds = Math.floor((+stringArray[0]) * 3600 + (+stringArray[1]) * 60 + (+stringArray[2]));

    return roundUp ? seconds + 1 : seconds;
}