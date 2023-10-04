let input = '';

const solve = () => {
 let n=+input.split(' ')[0]
 let m=+input.split(' ')[1]
 if(n*n*n>m*m){
     console.log('YES')
 }
 else if(n*n*n==m*m){
     console.log("SAME")
 }
 else{console.log("NO")}
}

process.stdin.on('data', (c) => input += c);
process.stdin.on('end', solve);