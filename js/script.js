alert("Hello JavaScript");
console.log("Hello JavaScript");
(() => {
    console.log('Welcome to the Internet. Please follow me.');
})();
  

// var ใช้กับตัวแปรที่เปลี่ยนค่าได้ เป็นได้ทั้ง ตัวเลข หรือ ตัวอักษร
var a = 10;
var b = 20;
var c = a + b;
console.log("a + b =", c);

// var ใช้กับตัวแปรที่เปลี่ยนค่าได้ (แต่เราจะใช้ let แทน var)
var message = "Hello var";
console.log("message =", message);

// let ใช้กับตัวแปรที่เปลี่ยนค่าได้ ไม่จำเป็นต้องใส่ค่าเริ่มต้นให้
let message1;
message1 = "Hello let";
console.log("message1 =", message1);

// const ใช้กับตัวแปรที่เปลี่ยนค่าไม่ได้ และต้องใส่ค่าเริ่มต้นให้เสมอ
const message2 = "Hello const";
console.log("message2 =", message2);

// Lab 1
let human, name;
name = "SirTony";
human = name;
console.log("human =", human);

// Lab 2
let myMoney = 100;
let nameMyDad = "Dad";
let nameMyMam = "Mam";
let address = "BAAC";
let ageOfUniverse = "Infinity";
console.log("Number Of Money =", myMoney, ", Name My Dad =", nameMyDad, ", Name My Mam =", nameMyMam, ", Address =", address, ", Age Of Universe =", ageOfUniverse);

// Javascript เป็นภาษาที่ชื่อตัวแปรเป็น case-sensitive การพิมพ์ตัวใหญ่และตัวเล็กถือว่าเป็นตัวแปรคนละตัว
let fname, Fname;
fname = "siripong";
Fname = "SIRIPONG";
console.log("fname =", fname);
console.log("Fname =", Fname);

// JavaScript เป็น Dynamic-type ไม่ต้องบอกประเภทตัวแปรตอนประกาศตัวแปร และสามารถเปลี่ยนแปลงประเภทได้
let age = 18;
age = "Eighteen";
console.log("age =", age);

// Backtisks สามารถแทรกตัวแปรระหว่าง String ได้ 
let message3 = 'Software Park';
let message4 = "CodeCamp";
let message5 = `Sonter`;
let message6 = `Sonter at ${message3} #5 ${message4}`;
console.log("message6 =", message6);

// Boolean: ข้อมูลประเภทค่าความจริง
let x = 5;
console.log(x > 5);
console.log(x == 5);
console.log(x >= 5);

// null
console.log(null);

// undefined: ยังไม่ได้กำหนดค่า undefined คือการที่ค่าของตัวแปรนั้นยังไม่ได้ถูกกำหนด
let y;
console.log(y);

// typeof การ Check ประเภทของตัวแปร
let z = 1;
console.log(typeof z);

// Exercise 1
let ExName = "CodeCamp";
console.log(`Hello ${1}`);
console.log(`Hello ${"name"}`);
console.log(`Hello ${ExName}`);

// Exercise 2
let nameOfStudent = `Siripong`;
let ageOfStudent = `42`;
let addressOfStudent = `BAAC`;
let historyOfStudent = `Name:${nameOfStudent} , Age:${ageOfStudent} , Address:${addressOfStudent}`;
console.log("History Of Student =", historyOfStudent);

// การเปลี่ยนแปลงประเภทของข้อมูล(Type Conversion) สามารถแปลงค่าเป็น String ได้โดยการใส่ใน String() boolean ที่มีค่าเป็น true ถ้าแปลงเป็น String จะกลายเป็น String ที่มีค่าเป็น “true” (ไม่ใช่ Boolean)
let var1 = true;
console.log("Type Of var1 before =", typeof var1);
var1 = String(var1);
console.log("var1 =", var1);
console.log("Type Of var1 after =", typeof var1);

// การเปลี่ยนแปลงประเภทของข้อมูล(Type Conversion) boolean ที่มีค่าเป็น false ถ้าแปลงเป็น String จะกลายเป็น String ที่มีค่าเป็น “false” (ไม่ใช่ Boolean)
let var2 = false;
console.log("Type Of var2 before =", typeof var2);
var2 = String(var2);
console.log("var2 =", var2);
console.log("Type Of var2 after =", typeof var2);

// การเปลี่ยนแปลงประเภทของข้อมูล(Type Conversion) null (ค่าว่าง) ถ้าแปลงเป็น String จะกลายเป็น String ที่มีค่าเป็น “null” (ไม่ใช่ค่าว่างอีกต่อไป)
let var3 = null;
console.log("Type Of var3 before =", typeof var3);
var3 = String(var3);
console.log("var3 =", var3);
console.log("Type Of var3 after =", typeof var3);

// การเปลี่ยนแปลงประเภทของข้อมูล(Type Conversion) ถ้านำ String ที่เป็นตัวเลข มาหารกัน JavaScript จะแปลงให้เป็น Number อัตโนมัติก่อนการหาร
let value = "9" / "4.5";
console.log("Type Of Value =", typeof value);
console.log("Value =", value);

// การเปลี่ยนแปลงประเภทของข้อมูล(Type Conversion) สามารถแปลงค่าเป็น number ได้โดยการใส่ใน Number()
let str = "240";
console.log("Type Of str before =", typeof str);
let num = Number(str);
console.log("num =", num);
console.log("Type Of num after =", typeof num);

// การเปลี่ยนแปลงประเภทของข้อมูล(Type Conversion) การแปลง String ที่ไม่ใช่ตัวเลข จะกลายเป็น NaN (Not a number)
let str1 = "ร้อยหกสิบ";
console.log("Type Of str1 before =", typeof str1);
let num1 = Number(str1);
console.log("num1 =", num1);
console.log("Type Of num1 after =", typeof num1);

// Test
console.log("undefined To Number =", Number(undefined));
console.log("null To Number =", Number(null));
console.log("true To Number =", Number(true));
console.log("false To Number =", Number(false));
console.log(" To Number =", Number(""));
console.log("154 To Number =", Number("154"));
console.log("1 5 4 To Number =", Number(" 1 5 4 "));
console.log("240z To Number =", Number("240z"));
console.log("240.24 To Number =", Number("240.24"));

// การเปลี่ยนแปลงประเภทของข้อมูล(Type Conversion) สามารถแปลงค่าเป็น boolean ได้โดยการใส่ใน Boolean()
console.log("Hello To Boolean =", Boolean("Hello"));
console.log("1 To Boolean =", Boolean(1));
console.log("0 To Boolean =", Boolean(0));
console.log(" To Boolean =", Boolean(""));
console.log("null To Boolean =", Boolean(null));
console.log("undefined To Boolean =", Boolean(undefined));
console.log("NaN To Boolean =", Boolean(NaN));
console.log("String 0 To Boolean =", Boolean("0"));
console.log(" To Boolean =", Boolean(" "));

// การต่อ String ด้วยเครื่องหมาย (+) ตัวอย่าง การต่อ String ทำได้โดยนำ “String1” + “String2” จะได้ “String3” ที่เกิดจากการต่อกันของ “String1” และ “String2”
let str2 = "Code" + "Camp";
console.log("str2 =", str2);

// แบบฝึกหัด การดำเนินการเบื้องต้นให้ระบุค่าของ a, b, c และ d หลังจากจบ statements ทั้งสามบรรทัด
let a1 = 1, b1 = 1;
let c1 = ++a1;
let d1 = b1++;
console.log("c1 =", c1);
console.log("d1 =", d1);

// แบบฝึกหัด การดำเนินการเบื้องต้น
console.log("" + 1 + 0);
console.log("" - 1 + 0);
console.log(true + false);
console.log(6 / "3");
console.log("2" * "3");
console.log(4 + 5 + "px");
console.log("$" + 4 + 5);
console.log("4" - 2);
console.log("4px" - 2);
console.log(7 / 0);
console.log(" -9 " + 5);
console.log(" -9 " - 5);
console.log(null + 1);
console.log(undefined + 1);
console.log(" \t \n" - 2);

// การเขียนเงื่อนไข if prompt
/*
let year = prompt("ปีแรกที่จัด Codecamp คือปีอะไร");
if (year == 2018) {
    alert("คุณถูกต้อง");
} else {
    alert("คุณตอบผิด");
}
*/

// การเขียนเงื่อนไขแบบ Ternary-Operator เป็นการเขียน if-else แบบย่อใช้สำหรับการกำหนดค่าเท่านั้น
/*
let age1 = prompt("โปรดใส่อายุคุณ");
let message7;
message7 = (age1 < 18) ? 'คุณเข้าไปไม่ได้' : 'คุณเข้าไปได้';
alert(message7);
*/

// แบบฝึกหัด ใช้ if else ในการเขียนถามชื่อของคุณ
/*
let name2 = prompt("โปรดระบุชื่อฉัน");
if (name2 == "Siripong") {
    alert("เก่งมาก");
} else {
    alert("คุณไม่รู้จักชื่อฉัน");
}
*/

// แบบฝึกหัดใช้ prompt ในการรับคะแนนมาคำนวณเกรด
/*
let grade = prompt("กรุณาบันทึกคะแนน");
if (grade >= 80) {
    alert("คุณได้เกรด A");
} else if (grade >= 70) {
    alert("คุณได้เกรด B");
} else if (grade >= 60) {
    alert("คุณได้เกรด C");
} else if (grade >= 50) {
    alert("คุณได้เกรด D");
} else {
    alert("คุณได้เกรด F");
}
*/

// แบบฝึกหัด คำสั่งต่อไปนี้จะแสดงค่าเป็นอะไร
/*
alert( null || 2 || undefined ); // 2
alert( alert(1) || 2 || alert(3) ); // 2
alert( 1 && null && 2 ); // null
alert( alert(1) && alert(2) ); // undefined
alert( null || 2 && 3 || 4 ); // 3
*/

// แบบฝึกหัด
/*
let age2 = prompt("กรุณาบันทึกอายุ");
//if (age2 >= 18 && age2 <= 60) { alert("T") }  
//if (age2 < 18 || age2 > 60) { alert("F") }
let message8;
message8 = (age2 >= 18 && age2 <= 60) ? "T" : "F";
alert(message8);
*/

// แบบฝึกหัด
/*
let player1 = prompt("ผู้เล่นคนที่ 1 กรุณาบันทึกตัวเลข");
let player2 = prompt("ผู้เล่นคนที่ 2 กรุณาทายตัวเลข");
while (player1 != player2) {
    if (player1 > player2) { 
        alert("ตัวเลขคำตอบมากกว่า " + player2); 
    } else if (player1 < player2) { 
        alert("ตัวเลขคำตอบน้อยกว่า " + player2); 
    }
    player2 = prompt("ผู้เล่นคนที่ 2 กรุณาทายตัวเลข");
}
if (player1 == player2) { 
    alert(player2 + " เป็นคำตอบที่ถูกต้อง"); 
}
*/

//แบบฝึดหัด แปลง Code ดังกล่าวเป็น Switch cases
/*
let sc = prompt("กรุณาบันทึกตัวเลข");
switch (sc) {
    case "0":
        alert("0");
        break;
    case "1":
        alert("1");
        break;
    case "2":
    case "3":
        alert("2,3");
        break;
    default:
        alert("...");
}
*/

// แบบฝึกหัดพิเศษ
/*
function draw(n) {
    switch (n) {
        case "2":
            alert("-* \n** \n-*");
            //console.log("-*");
            //console.log("**");
            //console.log("-*");
            break;
        case "3":
            alert("--* \n-** \n*** \n-** \n--*");
            //console.log("--*");
            //console.log("-**");
            //console.log("***");
            //console.log("-**");
            //console.log("--*");
            break;
        case "4":
            alert("---* \n--** \n-*** \n**** \n-*** \n--** \n---*");
            //console.log("---*");
            //console.log("--**");
            //console.log("-***");
            //console.log("****");
            //console.log("-***");
            //console.log("--**");
            //console.log("---*");
            break;
        default:
            alert("...");
    }
}
let fc = prompt("กรุณาบันทึกตัวเลข");
printfc = draw(fc);
*/

// แบบฝึกหัด แปลง function ข้างล่างให้อยู่ในรูป arrow function
/*
let ask = (question, yes, no) => {
    if (confirm(question)) yes()
    else no();
}

let showOk = () => alert("You agreed.");
let showCancel = () => alert("You canceled the execution.");

ask("Do you agree?", showOk, showCancel);
*/

// Computed Properties - แบบฝึกหัด ให้เขียนโปรแกรมที่รับค่า key และ value ของ Properties ของ Object หนึ่ง จนกว่าจะเจอคำว่า stop และนำค่าเหล่านั้นมาสร้าง Object หลังจากนั้น console.log() object นั้นออกมา
/*
let input = prompt("Key");
let output = prompt("Value");
let obj = new Object();
while (input != "stop") {
    obj[input] = output;
    input = prompt("Key");
    if (input == "stop") break;
    output = prompt("Value");
}
console.log(obj);
*/

// แบบฝึกหัด จงเขียนฟังก์ชัน multiplyNumeric(obj, times) โดยถ้า properties นั้นมี value เป็น number ให้คุณ value นั้นด้วย times ถ้าข้อมูลเเป็นอย่างอื่นไม่ต้องทำอะไร
/*
let obj = {width: 200, height: 300, title: "My menu"};
function multiplyNumeric(obj, value) {
    for (let key in obj) {
        if (typeof obj[key] == "number") {
            obj[key] = obj[key] * value;
        }    
    }
}
multiplyNumeric(obj, 2);
console.log(obj);
*/

// แบบฝึกหัด สร้าง object calculator จาก 3 methods นี้ read() ใช้ prompts สำหรับรับค่ามา 2 ค่าและเก็บเป็น object properties. sum() คืนค่าผลบวกของ 2 ค่านั้น. mul() คืนค่าผลคูณของ 2 ค่านั้น.
/*
let calculator = {
    read() {
        this.x = prompt("x :");
        this.y = prompt("y :");
    },
    sum() {
        return Number(this.x) + Number(this.y)
    },
    mul() {
        return Number(this.x) * Number(this.y)
    },
};
calculator.read();
alert( calculator.sum() );
alert( calculator.mul() );
*/

// แบบฝึกหัด ให้เขียนฟังก์ชัน random(min, max) ที่จะ random เลข float ตั้งแต่ min จนถึง max มาให้เรา (ไม่รวม max)
/*
let result = 0;
let min = prompt("Min :");
let max = prompt("Max :");
let fcRandom = (x, y) => {
    y = Number(y) + 1;
    sum = Number(x) + Math.random(x, y);
    return sum;
}
for(let i=1; i<max ; i++){
    fcRandom(min, max);
    console.log(`Result Random => ${sum}`);
}
*/

// แบบฝึกหัด เขียนฟังก์ชัน ucFirst(string) โดยทำคืนค่าเป็น string เดิม แต่ตัวแรกของ string กลายเป็นพิมพ์ใหญ่
let ucString = "hello world";
let ucFirst = (string) => {
    str = string.substr(0,1).toUpperCase() + string.substr(1);
    sumString = str.substr(0,6) + str.substr(6,1).toUpperCase() + str.substr(7);
}
ucFirst(ucString);
console.log(`Start String => ${ucString} | End String => ${sumString}`);

// แบบฝึกหัด เขียนฟังก์ชันที่ checkSpam โดยถ้าข้อความดังกล่าวมีคำว่า “xxx” หรือ “viagra” ให้คืนค่าเป็น true ถ้าไม่มีให้คืนค่าเป็น false
let checkString = "viagra xxx";
let checkSpam = (string) => {
    return findString = string.includes("viagra");
}
checkSpam(checkString);
console.log(`String => ${findString}`);

// แบบฝึกหัด เขียนฟังก์ชันที่ extractCurrencyValue(string, rate) โดยที่ฟังก์ชันดังกล่าวจะแปลง string ที่เป็นค่าเงิน dollar ให้เป็น number ที่มีค่าเป็นเงินบาทไทย โดยอ้างอิง  rate จาก parameters ตัวที่สอง ที่ส่งมาให้
let money = "$12#0";
let rate = 30.5;
let extractCurrencyValue = (money, rate) => {
    for (let i = 0; i < money.length; i++)
    {
        str = money.substr(i,1);
        if (isNaN(str)) {
            money = money.replace(money.substr(i,1), "");
        }
    }
    return amount = money * rate;
}
extractCurrencyValue(money, rate);
console.log(`Amount => ${amount}`);

// ให้ทำตามขั้นตอนต่อไปนี้ สร้าง array ชื่อ styles ที่มี items ชื่อ “Jazz” และ “Blues” เพิ่ม “Rock-n-Roll” ต่อท้าย นำค่า Classics ไปทับค่าตรงกลางของ Array นำ items ตัวแรกออกมาและลบ items ตัวนั้นออกจาก array เพิ่ม “Rap” และ “Reggae” ไปข้างหน้าของ Array
/*
let styles  = new Array("Jazz", "Blues");
styles.push("Rock-n-Roll");
styles[1] = "Classics";
styles.shift();
styles.unshift("Rap", "Reggae");
console.log(styles);
*/

// แบบฝึกหัด เขียนฟังก์ชัน sumInput() ที่ใช้ propmt รับ value มาเก็บใน array หยุดถามเมื่อเจอค่าที่ไม่ใช่ ตัวเลข คำนวณผลรวมของตัวเลขทั้งหมดใน Array
/*
let input = prompt("Input Array :");
let numArray  = new Array();
let sumArray = 0;
let sumInput = (input) => {
    while (true) {
        if (isNaN(input)) break;
        numArray.push(input);
        console.log(numArray);
        sumArray = sumArray + Number(input);
        input = prompt("Input Array :");
    }
    return sumArray;
}
sumInput(input);
console.log(`Total => ${sumArray}`);
*/

// แบบฝึกหัด ให้สร้าง array2 จาก array1 ตามที่โจทย์กำหนด โดยใช้ฟังก์ชัน Array.map() การบ้านส่งพรุ่งนี้
// 1.1 (let array2 = [2, 4, 60, 800];)
let ex11array1 = [1, 2, 30, 400];
let ex11array2 = ex11array1.map(function(x) { return x * 2 });
console.log(`Ex 1.1 array2 => ${ex11array2}`);

// 1.2 (/let array2 ["1", "2", "3", "4"];)
let ex12array1 = [1, 2, 3, 4];
let ex12array2 = ex12array1.map(item => String(item));
console.log(`Ex 1.2 array2 => ${ex12array2}`);

// 1.3 (array2 ["number", "string", "number", "object"];)
let ex13array1 = [1, "1", 2, {}];
let ex13array2 = ex13array1.map(item => typeof item);
console.log(`Ex 1.3 array2 => ${ex13array2}`);

// 1.4 (array2 ["APPLE", "BANANA", "ORANGE"];)
let ex14array1 = ["apple", "banana", "orange"];
let ex14array2 = ex14array1.map(item => item.toLocaleUpperCase());
console.log(`Ex 1.4 array2 => ${ex14array2}`);

// 1.5 (array2 ["apple", "banana", "watermelon"];)
let ex15array1 = [
    { name: "apple", age: 14 },
    { name: "banana", age: 18 },
    { name: "watermelon", age: 32 },
]
let ex15array2 = ex15array1.map(item => item.name);
console.log(`Ex 1.5 array2 => ${ex15array2}`);

// 1.6 (array2 [14, 18, 32];)
let ex16array1 = [
    { name: "apple", age: 14 },
    { name: "banana", age: 18 },
    { name: "watermelon", age: 32 },
]
let ex16array2 = ex16array1.map(item => item.age);
console.log(`Ex 1.6 array2 => ${ex16array2}`);

// Array.from
let map = new Map();
map.set("name", "John");
let keys = Array.from(map.keys());
keys.push("more");
console.log(keys);

// ลองทำสำเนา โดยใช้ spread กับ array ต่อไปนี้
const fruits = ['apple','banana','orange'];
const copyfruits = [...fruits];
console.log(`fruits => ${fruits}`);
console.log(`copyfruits => ${copyfruits}`);

const students = [{ id : 1, name : 'bean', age : 14},{id : 2, name : 'ken', age : 15}];
const copystudents = [...students];
console.log(students);
console.log(copystudents);