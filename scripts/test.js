//Converts every character in a string to their respective integer character code
//Returns array of integers (char codes)
function stringToCharCodes(inString) {
    codes = []
    for (var i = 0; i < inString.length; i++) {
        codes = codes.concat(inString.charCodeAt(i))
    }
    return codes
}

//Converts an int into a string showing the binary representation of the number
function intToByteString(num) {
    var returnString = ""
    while (num > 0) {
        returnString += num % 2
        num = Math.floor(num / 2)
    }
    for (var i = 0; i <= 8 - returnString.length;i++) {
        returnString = "0" + returnString
    }
    return returnString
}

//Converts an integer to the hexadecimal representation of the number as a string
function  intToHexString(num) {
    var returnString = ""
    while (num > 0) {
        if (num % 16 < 10) {
            returnString += num % 16
            num = Math.floor(num / 16)
        } else {
            hexChars = ["A", "B", "C", "D", "E", "F"]
            var remainder = num % 16 - 10
            returnString += hexChars[remainder]
            num = Math.floor(num / 16)
        }
    }
    return returnString
}

//Credit: https://www.sitepoint.com/delay-sleep-pause-wait/
function sleep(milliseconds) {
  var start = new Date().getTime();
  for (var i = 0; i < 1e7; i++) {
    if ((new Date().getTime() - start) > milliseconds){
      break
    }
  }
}


var testString = "It was a dark and stormy night"
var bytes = stringToCharCodes(testString)

console.log(bytes.toString())

for ( i = 0; i < bytes.length; i++) {
    console.log(intToByteString(bytes[i]) + "\n")
}
for ( i = 0; i < bytes.length; i++) {
    console.log(intToHexString(bytes[i]) + "\n")
}

var notes = ["A4", "A#4", "B4", "C5", "C#5", "D5","D#5", "E5", "F5", "F#5", "G5", "G#5", "A5", "A#5", "B5", "C6"]
/*for (i = 0; i < notes.length; i++) {
    var synth = new Tone.Synth().toMaster()
    synth.triggerAttackRelease(notes[i], 0.05)
    sleep(50)
}*/

var hexRepresentation = ""
for (i = 0;  i < bytes.length; i++) {
    hexRepresentation +=intToHexString(bytes[i])
}
console.log(hexRepresentation)

for (i = 0; i < hexRepresentation.length; i++) {
    switch(hexRepresentation[i]) {
        case "0":
            var synth = new Tone.Synth().toMaster()
            synth.triggerAttackRelease(notes[0], 0.05)
            sleep(50)
            break
        case "1":
            var synth = new Tone.Synth().toMaster()
            synth.triggerAttackRelease(notes[1], 0.05)
            sleep(50)
            break
        case "2":
            var synth = new Tone.Synth().toMaster()
            synth.triggerAttackRelease(notes[2], 0.05)
            sleep(50)
            break
        case "3":
            var synth = new Tone.Synth().toMaster()
            synth.triggerAttackRelease(notes[3], 0.05)
            sleep(50)
            break
        case "4":
            var synth = new Tone.Synth().toMaster()
            synth.triggerAttackRelease(notes[4], 0.05)
            sleep(50)
            break
        case "5":
            var synth = new Tone.Synth().toMaster()
            synth.triggerAttackRelease(notes[5], 0.05)
            sleep(50)
            break
        case "6":
            var synth = new Tone.Synth().toMaster()
            synth.triggerAttackRelease(notes[6], 0.05)
            sleep(50)
            break
        case "7":
            var synth = new Tone.Synth().toMaster()
            synth.triggerAttackRelease(notes[7], 0.05)
            sleep(50)
            break
        case "8":
            var synth = new Tone.Synth().toMaster()
            synth.triggerAttackRelease(notes[8], 0.05)
            sleep(50)
            break
        case "9":
            var synth = new Tone.Synth().toMaster()
            synth.triggerAttackRelease(notes[9], 0.05)
            sleep(50)
            break
        case "A":
            var synth = new Tone.Synth().toMaster()
            synth.triggerAttackRelease(notes[10], 0.05)
            sleep(50)
            break
        case "B":
            var synth = new Tone.Synth().toMaster()
            synth.triggerAttackRelease(notes[11], 0.05)
            sleep(50)
            break
        case "C":
            var synth = new Tone.Synth().toMaster()
            synth.triggerAttackRelease(notes[12], 0.05)
            sleep(50)
            break
        case "D":
            var synth = new Tone.Synth().toMaster()
            synth.triggerAttackRelease(notes[13], 0.05)
            sleep(50)
            break
        case "E":
            var synth = new Tone.Synth().toMaster()
            synth.triggerAttackRelease(notes[14], 0.05)
            sleep(50)
            break
        case "F":
            var synth = new Tone.Synth().toMaster()
            synth.triggerAttackRelease(notes[15], 0.05)
            sleep(50)
            break
    }
}