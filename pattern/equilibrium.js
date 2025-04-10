var arr = [-7,1,5,2,-4,3,0];

// let currentIndex = 0;
let leftSum = 0;
for(let i=0; i < arr.length -1 ; i++){
    let rightSum = 0;
    // for(let b=0; b < i ; b++){
    //     leftSum = leftSum + arr[b]; 
    // }
    console.log('left', leftSum);
    for(let j =i+1; j<arr.length-1;j++){
        rightSum = rightSum + arr[j];
    }
    if(leftSum === rightSum){
        console.log(i, "rrr")
        break;
    }
    leftSum += arr[i];
}






