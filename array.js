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




//==========================================================================



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
    const idols = new Set() // faster than array but for simple data
    
    for (var j = 1; j <= N; j++) {
        idols.add(lines[j])
    }
    
    for (let i = N + 1; i <= N + K; i++) {
        const temp = lines[i].split(' ')
        const event = temp[0]

        switch (event) {
            case 'handshake':
                //idols.sort()
                const sortedArray = [...idols].sort();
                if (sortedArray.length > 0) {
                    sortedArray.forEach(x => console.log(x))
                } 
                break;
            case 'leave':
                //const leaveIdolName = temp[1]
                //const idx = idols.indexOf(leaveIdolName)
                idols.delete(temp[1])
                break;
            case 'join':
                //const joinIdolName = temp[1]
                idols.add(temp[1])
                break;
        }
    }
    
    
    
    
    //console.log(lines[0]);
});




//==========================================================================


/**
 * Map(3) {
  'A' => { pass: '0000', deposite: 10000 },
  'B' => { pass: '1234', deposite: 23456 },
  'C' => { pass: '5678', deposite: 98765 }
}
 */


reader.on('close', () => {
    const NK = lines[0].split(' ').map(x => parseInt(x))
    const N = NK[0]
    const K = NK[1]
    const naokiMap = new Map()
    
    for (var j = 1; j <= N; j++) {
        const temp = lines[j].split(' ')
        const company = temp[0]
        const pass = temp[1]
        const deposite = parseInt(temp[2])
        naokiMap.set(company, {pass, deposite})
    }
    //console.log(naokiMap);
    
    for (let i = N + 1; i <= N + K; i++) {
        const temp = lines[i].split(' ')
        const company = temp[0]
        const pass = temp[1]
        const withdraw = parseInt(temp[2])
        
        if (naokiMap.has(company)) {
            const comp = naokiMap.get(company)
            if (comp.pass === pass) {
                comp.deposite -= withdraw
                naokiMap.set(company, comp)
            }
        }
        
        //updateDepositeForCompany(company, pass, withdraw)
        //const idx = naokiList.findIndex(x => x.company === company)
        //if (naokiList[idx].pass === pass) naokiList[idx].deposite -= withdraw;
    }
    
    //console.log(naokiMap);
    function logMapElements(value, key, map) {
        console.log(`${key} ${value.deposite}`);
    }
    naokiMap.forEach(logMapElements)
    
});


//=================================================================================
// 経理 (paizaランク B 相当)





reader.on('close', () => {
    const NK = lines[0].split(' ').map(x => parseInt(x))
    const N = NK[0]
    const K = NK[1]
    const departments = new Map()
    
    for (var j = 1; j <= N; j++) {
        const departmentName = lines[j]
        const orderNo = 0
        const money = 0
        departments.set(departmentName, [])
    }
    console.log(departments);
    
    for (let i = N + 1; i <= N + K; i++) {
        const temp = lines[i].split(' ')
        const departmentName = temp[0]
        const orderNo = temp[1]
        const money = parseInt(temp[2])
        
        if (departments.has(departmentName)) {
            const value = departments.get(departmentName)
            value.push({orderNo, money})
            departments.set(departmentName, value)
        }
    }
    console.log(departments)
    
    function logMapElements(value, key, map) {
        console.log(key)
        if (value) {
            value.forEach((x) => { console.log(x.orderNo + " " + x.money)} )
            //console.log(value)
        }
        console.log("-----")
    }
    
    departments.forEach(logMapElements);
    
    
    
    /*
    for (const [key, value] of departments.entries()) {
        console.log(key)
        if (value) {
            console.log(value)
            for (var item in value) {
                console.log(item.orderNo + " " + item.money)
            }
        }
        
        console.log("-----")
        //console.log(key, value);
    }
    */
});



// ======================================================================






reader.on('close', () => {
    const N = parseInt(lines[0])
    const namesSC = []
    const namesMS = []
     
    for (var i = 1; i <= N; i++) {
        const temp = lines[i].split(' ')
        const name = temp[0]
        const category = temp[1]
        
        switch (category) {
            case 'give':
                const money = parseInt(temp[2])
                const idx = namesSC.findIndex(x => x.name === name)
                if (idx !== -1) {
                    namesSC[idx].money += money
                } else {
                    namesSC.push({name, money})
                }
                break;
            case 'join':
                namesMS.push(name)
                break;
        }
    }
    
    namesSC.sort((a, b) => {
        // Compare by money in descending order
        if (a.money < b.money) return 1;
        if (a.money > b.money) return -1;
        
        // If money is the same, compare by name in reverse order
        if (a.name > b.name) return -1;
        if (a.name < b.name) return 1;
        
        return 0; // Elements are considered equal
    }) 
    
    namesMS.sort()
    
    //console.log(namesSC);
    //console.log(namesMS);
    
    namesSC.forEach(x => console.log(x.name))
    namesMS.forEach(x => console.log(x))
});
// 75/100 over time









reader.on('close', () => {
    const N = parseInt(lines[0])
    const namesSC = new Map()
    const namesMS = []
     
    for (var i = 1; i <= N; i++) {
        const temp = lines[i].split(' ')
        const name = temp[0]
        const category = temp[1]
        
        switch (category) {
            case 'give':
                const money = parseInt(temp[2])
                
                if (namesSC.has(name)) {
                    let temp = namesSC.get(name)
                    temp += money
                    namesSC.set(name, temp)
                } else {
                    namesSC.set(name, money)
                }
                break;
            case 'join':
                namesMS.push(name)
                break;
        }
    }
    /*
    namesSC.sort((key, value) => {
        // Compare by money in descending order
        if (key < b.money) return 1;
        if (a.money > b.money) return -1;
        
        // If money is the same, compare by name in reverse order
        if (a.name > b.name) return -1;
        if (a.name < b.name) return 1;
        
        return 0; // Elements are considered equal
    }) 
    */
    const sortedMap = new Map([...namesSC.entries()].sort((a, b) => {
            if (b[1] - a[1] === 0) {
                return b[0].localeCompare(a[0]);
            }
            return b[1] - a[1];
        }));
        
    namesMS.sort()
    
    //console.log(namesSC);
    //console.log(sortedMap);
    //console.log(namesMS);
    
    function logMapElements(value, key, map) {
        console.log(key);
    }
    sortedMap.forEach(logMapElements)
    namesMS.forEach(x => console.log(x))
});
// 100