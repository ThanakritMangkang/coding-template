// Problem 1: Reverse 0/1
exports.reverse = (input) => {
  // แปลงเลขฐานสิบเป็นฐานสอง
  let binary = input.toString(2);
  // กลับเลข Bit
  let reversedBinary = binary.split('').map(bit => bit === '0' ? '1' : '0').join('');
  // แปลงเลขฐานสองกลับเป็นเลขฐานสิบ
  let result = parseInt(reversedBinary, 2);

  return result;
};

// Problem 2: Can It be a Palindrome?
exports.palindrome = (input) => {
  // ขั้นตอนแรกผมได้สร้างฟังก์ชั่นตรวจสอบว่าสตริงเป็น Palindrome หรือไม่
  const isPalindrome = (str) => {
    for (let i = 0; i < str.length / 2; i++) {
        if (str[i] !== str[str.length - 1 - i]) {
            return false;
        }
    }
    return true;
};

// ขั้นตอนที่สองผมทำการ check จำนวนของ count นับจำนวนตัวอักษรเพื่อสร้าง Palindrome str ทำการ return ค่า changesNeeded
const countChangesToPalindrome = (str) => {
    let changesNeeded = 0;
    for (let i = 0; i < str.length / 2; i++) {
        if (str[i] !== str[str.length - 1 - i]) {
            changesNeeded++;
        }
    }
    return changesNeeded;
};

// ทำการ check ว่าถ้า input ที่เข้ามา palindrome อยู่แล้วให้ทำการ return message "It's already a palindrome"
if (isPalindrome(input)) {
    return "It's already a palindrome";
}

// check input String เปลี่ยนเป็น Palindrome ได้โดยเปลี่ยนตัวอักษรแค่ 1 ตัวให้แสดงคําว่า
if (countChangesToPalindrome(input) === 1) {
    return "It can be a palindrome by changing only 1 character";
}

// String ไม่สามารถเป็น Palindrome ได้โดยการเปลี่ยนแค่ 1 ตัวอักษรให้แสดงคําว่า "It cannot be a palindrome"
return "It cannot be a palindrome";
};

// console.log("solution1", exports.palindrome("abccba"))
// console.log("solution2", exports.palindrome("abccaa"))
// console.log("solution3", exports.palindrome("abbcca"))

// Problem 3: ZigZag
exports.zigZag = (input) => {
  // แยกข้อความที่ได้จาก input
  const [rows, text] = input.split(' ');
  // แปลงค่าจากสตริงเป็นจำนวนเต็ม
  const numRows = parseInt(rows);
  // สร้างโครงสร้างข้อมูลสำหรับเก็บข้อความ zigzag สร้าง [] zigZag ที่มีจำนวนแถวเท่ากับ numRows และจำนวนคอลัมน์เท่ากับความยาวของ text
  const zigZag = Array.from({ length: numRows }, () => Array(text.length).fill(' '));

  let row = 0; // กำหนดตัวแปรแถวเริ่มต้นที่ 0 เคลื่อนที่ไปทางขวาเรื่อยๆ จนครบทุกตัวอักษรในข้อความ text ทำการวนลูป text
  let direction = 1; // ใช้เพื่อบอกทิศทางของการเขียนกำหนด 1 เพราะหมายถึงการเคลื่อนที่ลงข้างล่าง

  for (let i = 0; i < text.length; i++) {
    zigZag[row][i] = text[i];
    row += direction;

    if (row === 0 || row === numRows - 1) {
      direction *= -1;
    }
  }

  // หลังจากที่เขียนข้อความลงในแต่ละตำแหน่งของ zigZag เรียบร้อยแล้วผมใช้คำสั่ง map เพื่อเข้าถึงแต่ละแถวของ zigZag และรวมข้อความในแถวนั้นๆ เข้าด้วยกันโดยใช้ join('')
  return zigZag.map(row => row.join(''));
};

// console.log("solution 1", exports.zigZag("3 unitedstatesofamerica"));
// console.log("solution 2", exports.zigZag("5 krungthepmahanakorn"));

// this.reverse(5);
// this.reverse(12);

// this.palindrome("abccba");
// this.palindrome("abccba");
// this.palindrome("abbcca");

// this.zigZag("3 unitedstatesofamerica");
// this.zigZag("5 krungthepmahanakorn");
