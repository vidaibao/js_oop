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


    Convert the Map into an array of key-value pairs using myMap.entries(). 
    Then, we use the sort method on this array to sort it based on the values in descending order. 
    If the values are the same (the difference is 0), we compare the keys in descending order 
    using localeCompare.

    The sortedMap will contain the Map sorted by values in descending order. 
    If the values are the same, it will be sorted by keys in descending order.
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





// =========================================================================
// 累積和 S[i] = A[1] + ... + A[i] 
// A[l]+...+A[r] = (A[0]+...A[r]) - (A[0]+...A[l-1]) = S[r]-S[l-1]


reader.on('close', () => {
    const NK = lines[0].split(' ').map(x => parseInt(x))
    const N = NK[0]
    const K = NK[1]
    const arrN = new Set()
    
    for (var j = 1; j <= N; j++) {
        arrN.add(parseInt(lines[j]))
    }
    
    //console.log(arrN);
    let subTotal = 0
    
    for (let i = N + 1; i <= N + K; i++) {
        const arrSubTotal = [...arrN].slice(0, parseInt(lines[i]))
        //console.log(arrSubTotal)
        subTotal = arrSubTotal.reduce((sum, x) => sum + x, 0)
        console.log(subTotal)
    }

});
// 2/4


reader.on('close', () => {
    const NK = lines[0].split(' ').map(x => parseInt(x))
    const N = NK[0]
    const K = NK[1]
    const ans = [0]
    
    for (var j = 1; j <= N; j++) {
        ans.push(ans[j-1] + parseInt(lines[j]))
    }
    
    for (let i = N + 1; i <= N + K; i++) {
        console.log(ans[parseInt(lines[i])])
    }
});
// 100



reader.on('close', () => {
    const NK = lines[0].split(' ').map(x => parseInt(x))
    const N = NK[0]
    const K = NK[1]
    const arrN = []
    
    for (var j = 1; j <= N; j++) {
        arrN.push(parseInt(lines[j]))
    }
    
    //console.log(arrN);
    // 計算量が O(N^2)  NG
    for (let i = N + 1; i <= N + K; i++) {
        const temp = lines[i].split(' ').map(x => parseInt(x))
        const arrSubTotal = arrN.slice(temp[0] - 1, temp[1])
        //console.log(arrSubTotal)
        const subTotal = arrSubTotal.reduce((sum, x) => sum + x, 0)
        console.log(subTotal)
    }
    
});
// 3/4

//  This approach is known as prefix sum or cumulative sum

reader.on('close', () => {
    const NK = lines[0].split(' ').map(x => parseInt(x))
    const N = NK[0]
    const K = NK[1]
    const ans = [0]
    
    for (var j = 1; j <= N; j++) {
        ans.push(ans[j-1] + parseInt(lines[j]))
    }
    
    for (let i = N + 1; i <= N + K; i++) {
        const temp = lines[i].split(' ').map(x => parseInt(x))
        // A[l]+...+A[r] = (A[0]+...A[r]) - (A[0]+...A[l-1]) = S[r]-S[l-1]
        console.log(ans[temp[1]] - ans[temp[0] - 1])
    }
    
});
// 100




// ======================================================================



function createPrefixSumMatrix(matrix) {
    const n = matrix.length; 
    const m = matrix[0].length;
  
    // Create a prefix sum matrix of the same size
    const prefixSum = new Array(n);
    for (let i = 0; i < n; i++) {
      prefixSum[i] = new Array(m).fill(0);
    }
  
    // Initialize the top-left element of the prefix sum matrix
    prefixSum[0][0] = matrix[0][0];
  
    // Fill the first row and first column of the prefix sum matrix
    for (let i = 1; i < n; i++) {
      prefixSum[i][0] = prefixSum[i - 1][0] + matrix[i][0];
    }
    for (let j = 1; j < m; j++) {
      prefixSum[0][j] = prefixSum[0][j - 1] + matrix[0][j];
    }
  
    // Fill the rest of the prefix sum matrix
    for (let i = 1; i < n; i++) {
      for (let j = 1; j < m; j++) {
        prefixSum[i][j] = prefixSum[i - 1][j] + prefixSum[i][j - 1] - prefixSum[i - 1][j - 1] + matrix[i][j];
      }
    }
  
    return prefixSum;
  }
  
  function sumSubmatrix(prefixSum, x1, y1, x2, y2) {
    if (
      x1 < 1 || x2 < 1 || y1 < 1 || y2 < 1 ||
      x1 > 1000 || x2 > 1000 || y1 > 1000 || y2 > 1000
    ) {
      throw new Error("Invalid input range");
    }
  
    x1--; y1--; x2--; y2--; // Adjust for 0-based indexing
  
    const sum = prefixSum[x2][y2]
      - (x1 > 0 ? prefixSum[x1 - 1][y2] : 0)
      - (y1 > 0 ? prefixSum[x2][y1 - 1] : 0)
      + (x1 > 0 && y1 > 0 ? prefixSum[x1 - 1][y1 - 1] : 0);
  
    return sum;
  }
  
  // Example usage:
  // Create a 1000x1000 matrix (for simplicity, we'll use a smaller example here)
  const matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
  ];
  
  const prefixSum = createPrefixSumMatrix(matrix);
  
  // Calculate the sum for a specific range (2, 2) to (3, 3)
  const result = sumSubmatrix(prefixSum, 2, 2, 3, 3);
  console.log(result); // Output: 20 (5 + 6 + 8 + 9)
  




/////////////////



reader.on('close', () => {
    const HWN = lines[0].split(' ').map(x => parseInt(x))
    const H = HWN[0]
    const W = HWN[1]
    const N = HWN[2]
    const matrix = []
    
    for (var i = 1; i <= H; i++) {
        const temp = lines[i].split(' ').map(x => parseInt(x))
        matrix.push(temp)
    }
    //console.log(matrix)
    
    const prefixSum = createPrefixSumMatrix()
    
    //console.log(prefixSum)
    
    for (let i = H + 1; i <= H + N; i++) {
        const temp = lines[i].split(' ').map(x => parseInt(x))
        const sumM = sumSubmatrix(prefixSum, 1, 1, temp[0], temp[1])
        console.log(sumM)
    }

    
    function createPrefixSumMatrix() {
        
        const n = matrix.length;    // H
        const m = matrix[0].length; // W
      
        // Create a prefix sum matrix of the same size
        const prefixSum = new Array(n);
        for (let i = 0; i < n; i++) {
            prefixSum[i] = new Array(m).fill(0);
        }
      
        // Initialize the top-left element of the prefix sum matrix
        prefixSum[0][0] = matrix[0][0];
      
        // Fill the first row and first column of the prefix sum matrix
        for (let i = 1; i < n; i++) {
            prefixSum[i][0] = prefixSum[i - 1][0] + matrix[i][0];
        }
        for (let j = 1; j < m; j++) {
            prefixSum[0][j] = prefixSum[0][j - 1] + matrix[0][j];
        }
      
        // Fill the rest of the prefix sum matrix
        for (let i = 1; i < n; i++) {
            for (let j = 1; j < m; j++) {
                prefixSum[i][j] = prefixSum[i - 1][j] 
                                + prefixSum[i][j - 1] 
                                - prefixSum[i - 1][j - 1] 
                                + matrix[i][j];
            }
        }
        return prefixSum;
    }
    
    
    function sumSubmatrix(prefixSum, x1, y1, x2, y2) {
        if (
            x1 < 1 || x2 < 1 || y1 < 1 || y2 < 1 ||
            x1 > 1000 || x2 > 1000 || y1 > 1000 || y2 > 1000
        ) {
            throw new Error("Invalid input range");
        }
        
        x1--; y1--; x2--; y2--; // Adjust for 0-based indexing
        
        const sum = prefixSum[x2][y2]
            - (x1 > 0 ? prefixSum[x1 - 1][y2] : 0)
            - (y1 > 0 ? prefixSum[x2][y1 - 1] : 0)
            + (x1 > 0 && y1 > 0 ? prefixSum[x1 - 1][y1 - 1] : 0);
        
        return sum;
  }
    
    
    //console.log(lines[0]);
});
// 100



/**
 * "Square root decomposition" (còn gọi là phân rã căn bậc hai) 
 * là một kỹ thuật giải quyết các vấn đề liên quan đến dãy số hoặc mảng trong khoảng cố định. 
 * Kỹ thuật này thường được sử dụng để tối ưu hóa thời gian thực hiện các phép toán trên các 
 * phân đoạn cố định của dãy số, nhất là các phép tính tổng trong một phân đoạn cụ thể.

Ý tưởng cơ bản của phân rã căn bậc hai là chia dãy số ban đầu thành các phân đoạn nhỏ 
có kích thước gần bằng căn bậc hai của độ dài dãy. Cụ thể, nếu bạn có một dãy số có n phần tử,
 thì bạn chia nó thành sqrt(n) phân đoạn. Sau đó, bạn tính toán tổng (hoặc thực hiện các phép toán khác) cho mỗi phân đoạn và lưu kết quả này.

Khi bạn cần thực hiện một phép toán trên một phân đoạn cụ thể của dãy, thay vì thực hiện phép toán 
trên tất cả các phần tử trong phân đoạn đó, bạn chỉ cần thực hiện phép toán trên các giá trị 
đã được tính trước cho phân đoạn đó. Điều này giúp giảm đáng kể thời gian thực hiện phép toán,
 đặc biệt là khi dãy số rất lớn.

Tóm lại, "square root decomposition" là một kỹ thuật tối ưu hóa để giải quyết các vấn đề liên quan 
đến dãy số hoặc mảng bằng cách chia chúng thành các phân đoạn nhỏ và tiền tính toán các giá trị 
tương ứng để giảm thiểu thời gian thực hiện phép toán trong các phân đoạn cụ thể.
 */




// Dãy số ban đầu
const originalArray = [1, 3, 2, 4, 5, 7, 6, 8];

// Chia dãy thành các phân đoạn có kích thước là căn bậc hai của độ dài dãy
const sqrtN = Math.ceil(Math.sqrt(originalArray.length));
const segmentedArray = [];
for (let i = 0; i < originalArray.length; i += sqrtN) {
  const segment = originalArray.slice(i, i + sqrtN);
  segmentedArray.push(segment);
}

// Tính tổng các phân đoạn và lưu kết quả
const precomputedSum = [];
for (let i = 0; i < segmentedArray.length; i++) {
  const segment = segmentedArray[i];
  const sum = segment.reduce((acc, value) => acc + value, 0);
  precomputedSum.push(sum);
}

// Tính tổng của phân đoạn từ index 2 đến index 5 (1-based index)
const x1 = 2;
const y1 = 5;
let sum = 0;

for (let i = x1 - 1; i < y1; i++) {
  sum += precomputedSum[Math.floor(i / sqrtN)];
}

console.log("Tổng của phân đoạn từ 2 đến 5:", sum);




reader.on('close', () => {
    const numbers = []
    for (var i = 0; i < 10000; i++) {
        numbers.push(parseInt(lines[i]))
    }
    
    const sqrtN = Math.ceil(Math.sqrt(numbers.length));
    //const segmentedArray = [];
    
    for (let i = 0; i < numbers.length; i += sqrtN) {
        const segmentedArray = numbers.slice(i, i + sqrtN);
        //const max = Math.max(...intArray);
        const max = Math.max.apply(null, segmentedArray);
        console.log(max);
    }
    //
});





/////////////////////////////////////




// Define the original integer array
const intArray = [3, 8, 2, 9, 5, 1, 7, 6, 4, 10, 22, 33, 35, 50, -6, -44, 88]; // Array of length 100

// Determine the size of each segment
const sqrtN = Math.ceil(Math.sqrt(intArray.length));

// Create an array to store the maximum value in each segment
const maxInSegment = new Array(sqrtN).fill(-Infinity);

// Precompute the maximum value in each segment
for (let i = 0; i < intArray.length; i++) {
  const segmentIndex = Math.floor(i / sqrtN);
  maxInSegment[segmentIndex] = Math.max(maxInSegment[segmentIndex], intArray[i]);
}

// Function to find the maximum value in the range [left, right]
function findMaxInRange(left, right) {
  let max = -Infinity;

  // Check the first segment
  let segmentStart = Math.ceil(left / sqrtN) * sqrtN;
  for (let i = left; i < Math.min(right + 1, segmentStart); i++) {
    max = Math.max(max, intArray[i]);
  }

  // Check the full segments
  for (let segmentIndex = Math.ceil(left / sqrtN); segmentIndex < Math.floor(right / sqrtN); segmentIndex++) {
    max = Math.max(max, maxInSegment[segmentIndex]);
  }

  // Check the last segment
  let segmentEnd = Math.floor(right / sqrtN) * sqrtN;
  for (let i = Math.max(left, segmentEnd); i <= right; i++) {
    max = Math.max(max, intArray[i]);
  }

  return max;
}

// Example usage:
const left = 3; // Left bound of the range
const right = 8; // Right bound of the range

const maxInRange = findMaxInRange(left, right);
console.log("Maximum value in range:", maxInRange);


//////////////////////////////////////////////////////////////////////////


reader.on('close', () => {
    const K = parseInt(lines[0])
    const numbers = []
    for (var i = 1; i < 10000; i++) {
        numbers.push(parseInt(lines[i]))
    }
    
    const sqrtN = Math.ceil(Math.sqrt(numbers.length));
    //const segmentedArray = [];
    const maxInSegment = []
    
    for (let i = 0; i < numbers.length; i += sqrtN) {
        const segment = numbers.slice(i, i + sqrtN);
        //segmentedArray.push(segment)
        maxInSegment.push(Math.max.apply(null, segment));
    }
    //console.log(segmentedArray)
    //console.log(maxInSegment)
    
    for (let i = 10001; i < 10001 + K; i++) {
        findMaxInRange(i)
    }


    
    function findMaxInRange(idx){
        //let max = -Infinity;
        const temp = lines[idx].split(' ').map(x => parseInt(x) - 1)
        //console.log(temp);
        
        const left = temp[0]
        const right = temp[1]
        
        let ans = numbers[left]
        let now = left
        
        while (now <= right) {
            if (now % sqrtN === 0 && now + sqrtN - 1 <= right) {
                ans = Math.max(ans, maxInSegment[Math.floor(now / sqrtN)])
                now += sqrtN
            } else {
                ans = Math.max(ans, numbers[now])
                now++
            }
        }
        console.log(ans)
    }
    
  
});
// 50/100






///////////////////////////////////////////////////////////////////////////////

// game select pages, count I letter



reader.on('close', () => {
    const NK = lines[0].split(' ').map(x => parseInt(x))
    const N = NK[0]
    const K = NK[1]
    const pageSumI = [0]
    
    for (let i = 1; i <= N; i++) {
        pageSumI.push(pageSumI[i - 1] + parseInt(lines[i]))
    }
    
    for (let i = N + 1; i <= N + K; i++) {
        const temp = lines[i].split(' ').map(x => parseInt(x))
        const A_l = temp[0]
        const A_r = temp[1]
        const B_l = temp[2]
        const B_r = temp[3]
        
        if (!checkRule(A_l, A_r) && !checkRule(B_l, B_r)) {
            console.log("DRAW");
            continue
        } else if (!checkRule(A_l, A_r) && checkRule(B_l, B_r)) {
            console.log("B");
            continue
        } else if (checkRule(A_l, A_r) && !checkRule(B_l, B_r)) {
            console.log("A");
            continue
        }
        
        
        if (findSum(A_l, A_r) > findSum(B_l, B_r)) {
            console.log("A");
        } else if (findSum(A_l, A_r) < findSum(B_l, B_r)) {
            console.log("B");
        } else  {
            console.log("DRAW");
        }
        
        
        
    }
    
    
    function checkRule(l, r) {
        const grapedPages = r - l + 1
        return grapedPages / N >= 1 / 3 ? false : true
    }
    
    
    function findSum(l, r) {
        return pageSumI[r] - pageSumI[l - 1]
    }
    
    
    //console.log(pageSumI);
});





