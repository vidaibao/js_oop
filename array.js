process.stdin.resume();
process.stdin.setEncoding('utf8');
// 自分の得意な言語で
// Let's チャレンジ！！
var lines = [];
var reader = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});
reader.on('line', (line) => {
  lines.push(line);
});
reader.on('close', () => {
    const NK = lines[0].split(' ').map(x => parseInt(x))
    const N = NK[0]
    const K = NK[1]
    const students = []
    
    for (var j = 1; j <= N; j++) {
        const temp = lines[j].split(' ')
        const presentNo = parseInt(temp[0])
        const name = temp[1]
        students.push({presentNo, name})
    }
    
    //console.log(students)
    
    for (var i = N + 1; i <= N + K; i++) {
        const st = findStudentByPresentNo(parseInt(lines[i]))
        if (st) console.log(st.name)
    }
    
    function findStudentByPresentNo (preNo) {
        for (const st of students) {
            if (st.presentNo === preNo) {
                return st
            }
        }
        return null
    }
    
});



process.stdin.resume();
process.stdin.setEncoding('utf8');
// 自分の得意な言語で
// Let's チャレンジ！！
var lines = [];
var reader = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});
reader.on('line', (line) => {
  lines.push(line);
});
reader.on('close', () => {
    const NK = lines[0].split(' ').map(x => parseInt(x))
    const N = NK[0]
    const K = NK[1]
    const students = []
    
    for (var j = 1; j <= N; j++) {
        const temp = lines[j].split(' ')
        const presentNo = parseInt(temp[0])
        const nameID = temp[1]
        students.push({presentNo, nameID})
    }
    //console.log(students)
    
    for (var i = N + 1; i <= N + K; i++) {
        const temp = lines[i].split(' ')
        const event = temp[0]

        switch (event) {
            case 'join':
                const presentNo = parseInt(temp[1])
                const nameID = temp[2]
                students.push({presentNo, nameID})
                break;
            case 'leave':
                const leavePresentNo = parseInt(temp[1])
                const idx = students.findIndex(st => st.presentNo === leavePresentNo)
                students.splice(idx, 1)
                break;
            case 'call':
                const callPresentNo = parseInt(temp[1])
                const foundStudent = students.find(st => st.presentNo === callPresentNo)
                console.log(foundStudent.nameID)
                break;
        }
    }
    
    
    
    
});



//==========================================================================

reader.on('close', () => {
    const NXP = lines[0].split(' ').map(x => parseInt(x))
    const N = NXP[0]
    const X = NXP[1]
    const P = NXP[2]
    const heights = []
    
    for (var j = 1; j <= N; j++) {
        heights.push(parseInt(lines[j]))
    }
    heights.push(X)
    heights.push(P)
//console.log(heights)
    heights.sort((a, b) => a - b) 
//    console.log(heights)
    console.log(heights.indexOf(P) + 1);
});





