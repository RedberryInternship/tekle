let input = '';

const solve = () => {
    const [a, b] = input.trim().split(' ').map(Number);

    if((a + b) % 2 === 0)
        console.log("YES");
    else
        console.log("NO");
}

process.stdin.on('data', (c) => input += c);
process.stdin.on('end', solve);