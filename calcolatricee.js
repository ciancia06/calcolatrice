
const prompt=require('prompt-sync')();

function add (a,b){
    return a+b;
}

function sub(a,b){
    return a-b;
}

function mul(a,b){
    return a*b;
}

function sud(a,b){
    return a/b;
}

const scelta=prompt(`
    + Add
    - Sub
    * Mul
    / Div
`);

const op1= Number(prompt("primo operando"));
const op2= Number(prompt("secondo operando"))
let res=null;

switch(scelta){
    case '+':
        res=add(op1,op2);
        console.log(` ${op1} + ${op2} = ${res} `);
        break;

    case '-':
        res=add(op1,op2);
        console.log(` ${op1} - ${op2} = ${res} `);
        break;

    case '*':
        res=add(op1,op2);
        console.log(` ${op1} * ${op2} = ${res} `);
        break;
}
        res=add(op1,op2);
        console.log(` ${op1} / ${op2} = ${res} `)

        const add_ = function (a, b) {
            return a + b;
            }
            let d1 = add_(a, b);
            console.log(`${a} + ${b} = ${d1}`);
            
            const sub_ = function (a, b) {
            return a - b;
            }
            let d2 = sub_(a, b);
            console.log(`${a} + ${b} = ${d2}`);
            
            const mul_ = function (a, b) {
            return a * b;
            }
            let d3 = mul_(a, b);
            console.log(`${a} + ${b} = ${d3}`);
            
            const div_ = function (a, b) {
            return a / b;
            }
            let d4 = div_(a, b);
            console.log(`${a} + ${b} = ${d4}`);
            
            function calc(a, b, op) {
            return op(a, b);
            }
            
            let res1 = calc(a, b, add_);
            console.log(res1);
            let res2 = calc(a, b, sub_);
            
            console.log(res2);
            let res3 = calc(a, b, mul_);
            console.log(res3)
            let res4 = calc(a, b, div_);
            console.log(res4);

        