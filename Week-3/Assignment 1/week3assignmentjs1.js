

function add(args){
    let sum = 0;
    args.forEach((num) => {
        sum += num;
    })
    return sum;
}

function stingify(args){
    // console.log(args)
    let str = '';
    args.forEach((num) => {
        str += num;
    })

    return str;
}

const memoizeAdd = (timeTakingAddFunction) => {
    const cache = {};
    return function(...args){
        console.log("Input = " + args);
        let stingifyArgs = stingify( args );
        // console.log( stingifyArgs );
        if( stingifyArgs in cache ){
            console.log("Answer from cache = " + cache[stingifyArgs]);
            return cache[stingifyArgs];
        }else{

            let result = timeTakingAddFunction(args)
            cache[stingifyArgs] = result;
            console.log("Answer from time taking function = " + result);
            // console.log(cache);
            return result;
        }
    };
};

const efficient = memoizeAdd( add );
efficient( 100 , 0 , 0 );       // ans = 100 {from time taking function}
efficient( 100 , 00 , 00 );     // ans = 100 {from cache}
efficient( 100 , 200 , 300 );   // ans = 600 {from time taking fuction}
efficient( 100 , 200 , 300 );   // ans = 600 {from cache}









