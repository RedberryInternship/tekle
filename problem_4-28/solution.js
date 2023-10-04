let input = '';

const solve = () => {
let a=+input.split(' ')[0]
let b=+input.split(' ')[1]
let answer="B is bigger than A"
if(a>=b){
    answer="A is bigger or equal to B"
}
console.log(answer)
}

process.stdin.on('data', (c) => input += c);
process.stdin.on('end', solve);