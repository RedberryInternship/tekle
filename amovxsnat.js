let input = '';

const solve = () => {
    let [n, priceMoon, priceVenera] = input.split('\n')[0].split(' ').map(Number);

    let lokacia=input.split('\n')
    let countMoon=0
    let countVenera=1
    // aq iyo jindo

    for(i=1;i<=n;i++){
        if(lokacia[i].trim() =="Moon")
            countMoon++
        if(lokacia[i].trim() =="Venera")
            countVenera++
    }

    console.log(priceMoon*countMoon + priceVenera*countVenera)
}

process.stdin.on('data', (c) => input += c);
process.stdin.on('end', solve);
