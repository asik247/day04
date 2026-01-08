// let i = 1;
// while(i < 10){
//     i++
//     if(i==5){
//         break;
//     }
//     console.log(i);
// }

// 1–20 এর মধ্যে যেগুলো 3 দিয়ে ভাগ যায় সেগুলো print করো
for (let i = 1; i <= 20; i++){
    if(i % 3 == 0){
        console.log(i);
    }
}
// 3,6,9,12,15,18,

// sum 1-5;
let sum = 0;
for (let i = 0; i <=5; i++){
    // let sum = sum + i;
    sum+=i;
    
}
console.log(sum);

// while loop use kore 1-5 print
let i = 1;
while(i <= 5){
    console.log(i);
    i++
}

for ( let i = 1; i <10; i++){
    if(i==5){
        break
    }
    console.log(i);
}
// Problem 3: Odd number বাদ দাও (continue use করো) 1–10 থেকে শুধু even print
for (let i = 0; i<=10; i++){
    if (i%2!==0){
        continue
    }
    console.log(i);
}
// nex day
for (let i = 0; i < 5; i++){
    if(i==2){
        continue;
    }
    console.log(i);
}