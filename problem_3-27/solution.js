let input = '';

const solve = () => {
let answer= " It's not an A!"
if(input=="a" || input=="A"){
    answer="Hay, It's A!"
}
console.log(answer)
}

process.stdin.on('data', (c) => input += c);
process.stdin.on('end', solve);