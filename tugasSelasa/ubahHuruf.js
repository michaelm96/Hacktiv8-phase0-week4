function ubahHuruf(kata) {
    var alphabet = "abcdefghijklmnopqrstuvwxyz"
    var kataBaru = ""
    for (var i = 0; i < kata.length; i++) {
        for (var j = 0; j < alphabet.length; j++) {
            if (kata[i] == alphabet[j]) {
                if (j == alphabet.length - 1) {
                    kataBaru += alphabet[0]
                } else {
                    kataBaru += alphabet[j + 1]
                }
            }
        }
    }
    return kataBaru
}

// TEST CASES
console.log(ubahHuruf('wow')); // xpx
console.log(ubahHuruf('developer')); // efwfmpqfs
console.log(ubahHuruf('javascript')); // kbwbtdsjqu
console.log(ubahHuruf('keren')); // lfsfo
console.log(ubahHuruf('semangat')); // tfnbohbu
console.log(ubahHuruf('zzz')); // aaa