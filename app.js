// 1. Дано 3 числа. Визначити чи є серед них додатні. (Числа генеруються випадково за довомогою генератора випадкових чисел)
// let numbers = [];
// for (let i=0; i < 3; i++){
//     numbers[i] = Math.floor(Math.random() * 10); 
  
//     if(numbers > 0){
//         console.log(numbers)
//     }
// }



// 2. Дано три числа. Якщо перше число більше третього, то поміняти іх місцями. (Числа генеруються випадково за довомогою генератора випадкових чисел)
let number= [];
for (let i=0; i < 3; i++){
    number[i] = Math.floor(Math.random() * 10); 
    if(number[0] > number[2]){
        console.log(number[2],number[1],number[0])
    }
}



// 3. Дано числовий масив з 10 елементів. (Числа генеруються випадково за довомогою генератора випадкових чисел)
// - Знайти найбільший та найменший елементи масиву та поміняти їх у масиві місцями
// let num= [];
// let min = 11;
// let max = 0;
// let minIndex = 0;
// let maxIndex = 0;
//     for (let i=0; i < 10; i++){
//         num[i] = Math.floor(Math.random() * 10);    
//         if(min > num[i]){
//             min = num[i];
//             minIndex = i;
//             console.log(minIndex, "minIndex")
//         }
//         if(max < num[i]){
//             max = num[i];
//             maxIndex = i;
//             console.log(maxIndex, "maxIndex")
//         }            
//     }
//     console.log(num)
//         let temp = num[minIndex]
//         num[minIndex] = num[maxIndex] 
//         num[maxIndex] = temp
//     console.log(num)


// - Знайти суму елементів з непарними індексами
// let num= [];
// let sum = 1;
// for (let i=0; i < 10; i+=1){
//     num[i] = Math.floor(Math.random() * 10);    
//         sum += num[i]
//     }
//     console.log(sum)


// - Видалити останній елемент масиву
// let num= [];
//     for (let i=0; i < 10; i++){
//         num[i] = Math.floor(Math.random() * 10);  
//         }
// console.log(num.pop())
// console.log(num)