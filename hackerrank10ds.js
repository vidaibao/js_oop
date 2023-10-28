/**
 * ký tự đầu và cuối đều là nguyên âm và phải giống nhau!
 * ^: Đánh dấu sự bắt đầu của chuỗi.
([aeiouAEIOU]): Phù hợp với ký tự đầu tiên và ghi nhớ nó bằng cặp dấu ngoặc tròn.
.*: Phù hợp với bất kỳ ký tự nào nằm giữa ký tự đầu tiên và ký tự cuối cùng.
\1: Phù hợp với giá trị được ghi nhớ từ cặp ngoặc tròn ở đầu (ký tự đầu tiên).
$: Đánh dấu sự kết thúc của chuỗi.
Cờ i ở cuối làm cho việc phù hợp không phân biệt chữ hoa và thường. Dưới đây là cách bạn có thể sử dụng nó:
 */
const regex = /^([aeiouAEIOU]).*\1$/i;
console.log(regex.test("anldna")); // true
console.log(regex.test("banana")); // false
console.log(regex.test("ohayo")); // true


/**
 * Complete the reverseString function; it has one parameter, . You must perform the following actions:

Try to reverse string  using the split, reverse, and join methods.
If an exception is thrown, catch it and print the contents of the exception's  on a new line.
Print  on a new line. If no exception was thrown, then this should be the reversed string; 
if an exception was thrown, this should be the original string.
 * 
 */

function reverseString(s) {
    try {
        s = s.split('').reverse().join('');
    } catch (error) {
        console.log(error.message);
    } finally {
        console.log(s);
    }
}

function main() {
    //const s = eval(readLine());
    
    reverseString("1234");
}

/**
 * Number(1234)
 * 
 * s.split is not a function
   1234
 */



/**
 * JavaScript Dates
 * 
 * Given a date string, dateString, in the format MM/DD/YYYY, find and return the day name for that date. 
 * Each day name must be one of the following strings: Sunday, Monday, Tuesday, Wednesday, Thursday, Friday, or Saturday. 
 * For example, the day name for the date 12/07/2016 is Wednesday
 * 
 * 
 * 
 */



function getDayName(dateString) {
    let dayName;
    // Write your code here
    const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]

    const [month, day, year] = dateString.split('/').map(x => parseInt(x));

    const date = new Date(year, month - 1, day); // Note: Month is 0-based, so we subtract 1 from the month.

    const dayOfWeek = date.getDay();
    
    dayName = daysOfWeek[dayOfWeek];
    
    return dayName;
}





/**
 * Day 6: Bitwise Operators
Objective
Today, we’re practicing bitwise operations. Check the attached tutorial for more details.

Task
We define S to be a sequence of distinct sequential integers from 1 to n; in other words, S = {1,2,3,…,n}. We want to know the maximum bitwise AND value of any two integers, a and b (where (a < b)), in sequence S that is also less than a given integer, k.

Complete the function in the editor so that given n and k, it returns the maximum a & b < k.

Note: The & symbol represents the bitwise AND operator.

Input Format
The first line contains an integer, q, denoting the number of function calls.
Each of the q subsequent lines defines a dataset for a function call in the form of two space-separated integers describing the respective values of n and k.

Constraints
1 <= q <= 10^3
2 <= n <= 10^3
2 <= k <= n
Output Format
Return the maximum possible value of a & b < k for any a < b in sequence S.

Sample Input 0
1
2
3
4
3
5 2
8 5
2 2
Sample Output 0
1
2
3
1
4
0
Explanation 0
We perform the following q = 3 function calls:

When n = 5 and k = 2, we have the following possible a and b values in set S = {1,2,3,4,5}:
a	b	a & b
1	2	001 & 010 = (000)^2 => (0)
1	3	001 & 011 = (001)^2 => (1)
1	4	001 & 100 = (000)^2 => (0)
1	5	001 & 101 = (001)^2 => (1)
2	3	010 & 011 = (010)^2 => (2)
2	4	010 & 100 = (000)^2 => (0)
2	5	010 & 101 = (000)^2 => (0)
3	4	011 & 100 = (000)^2 => (0)
3	5	011 & 101 = (001)^2 => (1)
4	5	100 & 101 = (100)^2 => (4)
The maximum of any a & b that is also < k is 1, so we return 1.
When n = 8 and k = 5, the maximum of any a & b < k in set S = {1,2,3,4,5,6,7,8} is 4 (see table above), so we return 4.
When n = 2 and k = 2, the maximum of any a & b < k in set S = {1,2} is 0 (see table above), so we return 0.
Sample Input 1
1
2
3
2
9 2
8 3
Sample Output 1
1
2
1
2
Explanation 1
We perform the following q = 2 function calls:

When n = 9 and k = 2, we have the following possible a and b values in set S = {1,2,3,4,5,6,7,8,9}** is 1 (see table above), so we return 1.
When n = 8 and k = 3, the maximum of any a & b < k in set S = {1,2,3,4,5,6,7,8} is 2 (see table above), so we return 2.

 * 
 */


function getMaxLessThanK(n, k){
    let max = 0
    for(let i=1; i<n; i++){
        for(let j=i+1; j<=n; j++){
            let bw = (i & j); // must use ()
            
            /**If both bw is less than k and bw is greater than the current max, 
             * then the expression (bw < k && bw > max) evaluates to true.
             * When the entire expression is true, it proceeds to execute (max = bw). 
             * This assigns the value of bw to max, updating max to the new maximum value found.
             * 
             * In summary, this code snippet is used to update the max variable if and only if 
             * the value of bw (result of a bitwise AND operation) is both less than k and greater than the current max. 
             * If these conditions are met, max is updated with the new maximum value. */
            (bw < k && bw > max) && (max = bw); //
        }
    }
    return max
}




/**
 * 
 * 
 * 
 */
/*
 * Determine the original side lengths and return an array:
 * - The first element is the length of the shorter side
 * - The second element is the length of the longer side
 * 
 * Parameter(s):
 * literals: The tagged template literal's array of strings.
 * expressions: The tagged template literal's array of expression values (i.e., [area, perimeter]).
 */
function sides(literals, ...expressions) {
    const [a, p] = expressions
    const value = Math.sqrt(p**2 - (16*a))
    //console.log((p - value) / 4)
    return [((p - value) / 4), ((p + value) / 4)]; // ()
}