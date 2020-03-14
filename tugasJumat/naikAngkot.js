function naikAngkot(arrPenumpang) {
    rute = ['A', 'B', 'C', 'D', 'E', 'F'];
    var newArr = []
    for (var i = 0; i < arrPenumpang.length; i++) {
        var res = {}
        var asal = 0
        var tujuan = 0
        for (var j = 0; j < rute.length; j++) {
            res.name = arrPenumpang[i][0]
            res.naikDari = arrPenumpang[i][1]
            res.tujuan = arrPenumpang[i][2]
            if (arrPenumpang[i][1] == rute[j]) {
                asal += j
            } else if (arrPenumpang[i][2] == rute[j]) {
                tujuan += j
            }
            res.bayar = (tujuan - asal) * 2000
        }
        newArr.push(res);
    }
    return newArr;
}

//TEST CASE
console.log(naikAngkot([['Dimitri', 'B', 'F'], ['Icha', 'A', 'B']]));
// [ { penumpang: 'Dimitri', naikDari: 'B', tujuan: 'F', bayar: 8000 },
//   { penumpang: 'Icha', naikDari: 'A', tujuan: 'B', bayar: 2000 } ]

console.log(naikAngkot([])); //[]