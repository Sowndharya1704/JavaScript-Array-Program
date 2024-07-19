//1.array joining and splitting
const arr= ["sowndharya", "Ashika"];
let text = arr.join(" and ");
console.log(text);

let arr1 = "Javascript";
console.log(arr1.split(""));

//2.map an array
let l=["sowndharya","karunya","nisha"];
let letter=l.map((x)=>x.toUpperCase());
console.log(letter);

//3.array manipulation with slice()
function func() {
    let arr1 = [24, 66, 97, 22, 75, 53];
    let newarr = arr1.slice(2, 4);
    console.log(newarr);
}
func();

//4.array flattening
const Arr = [[1,2],[3,4],[5,6]];
const newArr = Arr.flat();
console.log(newArr);

//5.Array destructing
let n= [25, 17 , 76, 100];
console.log(n[2]); 
console.log(n[3]);