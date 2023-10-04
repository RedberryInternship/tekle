let input = '';

const solve = () => {
    let answer=0
  if(input>7){
    answer="Too much"
  }
  else if(input==7){
      answer="Boom!"
  }else{answer="Too little"}
  console.log(answer)
}

process.stdin.on('data', (c) => input += c);
process.stdin.on('end', solve);