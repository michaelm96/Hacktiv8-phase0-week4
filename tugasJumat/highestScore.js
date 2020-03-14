function highestScore(students) {
    var obj = {}
    for (let i = 0; i < students.length; i++) {
        if(obj[students[i].class] == undefined){
            obj[students[i].class] = {}
        }
        if(obj[students[i].class] != undefined){
            var temp = 0
            for (let j = 0; j < students.length; j++) {
                if(obj[students[i].class] == obj[students[j].class])
                    if(temp<students[j].score){
                        temp = students[j].score
                        obj[students[j].class].name = students[j].name
                        obj[students[j].class].score = temp
                    }
            }
        }
    }
    return obj
}

// TEST CASE
console.log(highestScore([
    {
        name: 'Dimitri',
        score: 90,
        class: 'foxes'
    },
    {
        name: 'Alexei',
        score: 85,
        class: 'wolves'
    },
    {
        name: 'Sergei',
        score: 74,
        class: 'foxes'
    },
    {
        name: 'Anastasia',
        score: 78,
        class: 'wolves'
    }
]));

// {
//   foxes: { name: 'Dimitri', score: 90 },
//   wolves: { name: 'Alexei', score: 85 }
// }


console.log(highestScore([
    {
        name: 'Alexander',
        score: 100,
        class: 'foxes'
    },
    {
        name: 'Alisa',
        score: 76,
        class: 'wolves'
    },
    {
        name: 'Vladimir',
        score: 92,
        class: 'foxes'
    },
    {
        name: 'Albert',
        score: 71,
        class: 'wolves'
    },
    {
        name: 'Viktor',
        score: 80,
        class: 'tigers'
    }
]));

// {
//   foxes: { name: 'Alexander', score: 100 },
//   wolves: { name: 'Alisa', score: 76 },
//   tigers: { name: 'Viktor', score: 80 }
// }


console.log(highestScore([])); //{}















// var newObj = {}
    // var foxTemp = []
    // var wolfTemp = []
    // var tigersTemp = []
    // if(students.length == 0){
    //     return {}
    // }
    // for (var i = 0; i < students.length; i++) {
    //     var tempObj = {}
    //     if (students[i].class == "foxes") {
    //         foxTemp.push(students[i]);
    //     } else if (students[i].class == "wolves") {
    //         wolfTemp.push(students[i]);
    //     } else if (students[i].class == "tigers") {
    //         tigersTemp.push(students[i]);
    //     }
    // }
    // for (var i = 0; i < foxTemp.length; i++) {
    //     for (var j = 0; j < foxTemp.length - 1; j++) {
    //         if (foxTemp[j].score < foxTemp[j + 1].score) {
    //             var temp1 = foxTemp[j]
    //             foxTemp[j] = foxTemp[j + 1]
    //             foxTemp[j + 1] = temp1
    //         }
    //     }
    // }
    // for (var k = 0; k < wolfTemp.length; k++) {
    //     for (var l = 0; l < wolfTemp.length - 1; l++) {
    //         if (wolfTemp[l].score < wolfTemp[l + 1].score) {
    //             var temp2 = wolfTemp[l]
    //             wolfTemp[l] = wolfTemp[l + 1]
    //             wolfTemp[l + 1] = temp2
    //         }
    //     }
    // }
    // for (var m = 0; m < tigersTemp.length; m++) {
    //     for (var n = 0; n < tigersTemp.length - 1; n++) {
    //         if (tigersTemp[n].score < tigersTemp[n + 1].score) {
    //             var temp3 = tigersTemp[n]
    //             tigersTemp[n] = tigersTemp[n + 1]
    //             tigersTemp[n + 1] = temp3
    //         }
    //     }
    // }
    // var tempObj = {}
    // if(foxTemp.length > 0){
    // tempObj.name = foxTemp[0].name
    // tempObj.score = foxTemp[0].score`
    // newObj.foxes = tempObj
    // tempObj = {}
    // }
    // if(wolfTemp.length > 0){
    // tempObj.name = wolfTemp[0].name
    // tempObj.score = wolfTemp[0].score
    // newObj.wolfes = tempObj
    // tempObj ={}
    // }
    // if(tigersTemp.length > 0){
    //     tempObj.name = tigersTemp[0].name
    //     tempObj.score = tigersTemp[0].score
    //     newObj.tigers = tempObj
    //     tempObj = {}
    // }
    
    // return newObj