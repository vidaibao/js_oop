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