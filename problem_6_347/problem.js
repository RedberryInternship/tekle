let input = '';

const solve = () => {
    let arr = input.split(' ').map(Number);
    let count = 1;
    for (let i = 0; i < arr.length; i++){
        count = count * arr[i];
    }
    console.log(count);
}

process.stdin.on('data', (c) => input += c);
process.stdin.on('end', solve);