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




