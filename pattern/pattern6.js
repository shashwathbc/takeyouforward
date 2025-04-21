// o/p : 
// 12345
// 1234
// 123
// 12
// 1

for(let i=0;i<5;i++){
    let row = '';
    for(let j =1; j < 5-i+1; j++){
        row += j;
    }
    console.log(row);
}
