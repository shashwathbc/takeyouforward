

//  *******
//   *****
//    ***
//     **
//     * 
let n = 5;

for (let i =0; i < n ; i++){
    let leftspace = '';
    //calculate leftspace
    for (let j =0 ; j < n - i -1 ; j ++){
        leftspace += ' ';
    }

    // after leftspace add *
    for(let j =0; j < 2* (i-1) + 1; j++){
        leftspace += '*';
    }

     //calculate rightspace
     for (let j =0 ; j < n - i -1 ; j ++){
        leftspace += ' ';
    }

    console.log(leftspace);
}

for (let i =0; i < n ; i++){
    let leftspace = '';
    //calculate leftspace
    for (let j =0 ; j < i - 1 +1 ; j ++){
        leftspace += ' ';
    }

    // after leftspace add *
    for(let j =0; j < 2*n -(2*i+1); j++){
        leftspace += '*';
    }

     //calculate rightspace
     for (let j =0 ; j < (i - 1)+1 ; j ++){
        leftspace += ' ';
    }

    console.log(leftspace);
}

