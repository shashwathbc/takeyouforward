var arr = [-7,1,5,2,-4,3,0];
let prefixSum = [];
let currentSum = 0;
for(let i=0; i < arr.length ; i++){
    currentSum = currentSum +  arr[i];
    prefixSum.push(currentSum);
}
for(let i =0; i < arr.length; i++){
    let left = 0;
    let right = 0;

    if(i != 0){
        left = prefixSum[i - 1];
    }

    if(i != arr.length - 1){
        right = prefixSum[arr.length - 1] - prefixSum[i];
    }

    if(left == right){
        console.log("Equilibrium Found at Index : ", i);
        break;
    }
}
