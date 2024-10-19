// let arr=["one","two","three"]
// console.log(arr)

// let str ="Hello"


// let includearr=arr.includes("one")

// console.log(includearr)


// let include2arr=arr.includes("onetwo")
// console.log(include2arr)


// let str2=str.includes("ll")

// console.log(str2)
// 
// console.log("1"===1);

// let a=10
// let b =  Number(10)

// let c=10

// console.log(typeof b);

// console.log(a===b);

// console.log(+true);

// console.log(String(Number(true))+("sonu"));


let str1 ="hello"
let str2 = "sonukachhap"

// console.log(Math.abs(str1.length-str2.length)-2)

// console.log(str2[7]);

// function alternateString(str1,str2){
//     let res =""
//     let i;
//     for ( i = 0; i < str1.length && i<str2.length; i++) {
//         res = res+str1[i]+str2[i];
        
//     }

//     console.log(res);
//     if(i<str1.length){
//         res= res+str1.slice(i)
//     }else if(i<str2.length){
//         res=res+str2.slice(i)
//     }
//     console.log(res);
//     return res
// }


// alternateString("hello","sonukachhap")


function sum(a,b){
    if(b!==undefined){
        return a+b
    }else{
        return function(b){
            return a+b
        }
    }
}
// console.log(sum(2,3));
// console.log(sum(2)(3));

// function sum(a, b) {
//     if (b !== undefined) {
//         return a + b;
//     } else {
//         return function(b) {
//             return a + b;
//         }
//     }
// }

// console.log(sum(2, 3));     // Output: 5
// console.log(sum(2)(3));    // Output: 5


let arry=[[1,2],[3,4],[5,6]]

// console.log(arry.flat());

// console.log(arry[0].length);

function flatArry(arry){
    let res=[]
    
    for(i=0;i<arry.length;i++){
        for(j=0;j<arry[i].length;j++){
            res.push(arry[i][j])
        }
    }
    return res
}
    


// console.log(flatArry(arry));

// let ar1 =[1,2,34,5,7]
// console.log(flatArry(ar1));

// console.log("flat method",ar1.flat());
let gff=[67,[6,4,5,7],[[5,6],[6,7]],[1,2,3,[5],[7],[5,7,8,[7,9]]]]

// console.log(gff.flat(2));

let h = 5;
let yg= h;
yg++;
console.log(yg); 