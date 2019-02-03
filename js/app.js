// Simple Todolist
// https://mo-alaa88.github.io/simple-Todolist/
// https://github.com/Mo-Alaa88/simple-Todolist
////
// Task
// https://mo-alaa88.github.io/task/
// https://github.com/Mo-Alaa88/task
///
// Badrit
// https://mo-alaa88.github.io/badrit/
// https://github.com/Mo-Alaa88/badrit
///
// Apple
// https://mo-alaa88.github.io/Apple/
// https://github.com/Mo-Alaa88/Apple
////
// Arcade Game
// https://mo-alaa88.github.io/Arcade-Game/
// https://github.com/Mo-Alaa88/Arcade-Game
///
// Memory Game
// https://mo-alaa88.github.io/Memory-Game/
// https://github.com/Mo-Alaa88/Memory-Game
///
// Restaurant Stage
// 
// https://github.com/Mo-Alaa88/Restaurant-Stage
const nameArray = [`Simple Todolist`,`Task`,`Badrit`,`Apple`,`Arcade Game`,`Memory Game`,`Restaurant Stage`],
    liveArray = [`https://mo-alaa88.github.io/simple-Todolist/`,`https://mo-alaa88.github.io/task/`,`https://mo-alaa88.github.io/badrit/`,`https://mo-alaa88.github.io/Apple/`,`https://mo-alaa88.github.io/Arcade-Game/`,`https://mo-alaa88.github.io/Memory-Game/`,`none`],
    gitArray = [`https://github.com/Mo-Alaa88/simple-Todolist`,`https://github.com/Mo-Alaa88/task`,`https://github.com/Mo-Alaa88/badrit`,`https://github.com/Mo-Alaa88/Apple
    `,`https://github.com/Mo-Alaa88/Arcade-Game`,`https://github.com/Mo-Alaa88/Memory-Game`,`https://github.com/Mo-Alaa88/Restaurant-Stage`];
// gnrate for nameArray
nameArray.forEach((title,index)=>{

    if (index%2){
        // Create div block
        const div = `<div class=" blue" >
        <h3 class=' project data'>${title}</h3>
        <p>You can viste online website by this <a href="${liveArray[index]}" title="click">${title}</a></p>
        <p>My project repository <a href='${gitArray[index]}' title=''>${gitArray[index]}</a></p>
        </div>`;
        // 
        const template = document.getElementById('template').innerHTML = div;
        document.getElementById('content').innerHTML += template;
    }else{
        // Create div block
        const div = `<div class="mediamBlue " >
        <h3 class=' project data'>${title}</h3>
        <p>You can viste online website by this <a href="${liveArray[index]}" title="">${title}</a></p>
        <p>My project repository <a href='${gitArray[index]}' title=''>${gitArray[index]}</a></p>
        </div>`;
        // appand div with template
        const template = document.getElementById('template').innerHTML = div;
        // 
        document.getElementById('content').innerHTML += template;
    }

});
// function autoRun (){
//     // console.log('sfxhdd');
//     for (let i=0; i<=17; i++){

// //         var sample = [1, 2, 3];

// // // es5

// // sample.forEach(function (elem, index){
// //    console.log(elem + ' comes at ' + index);
// // })

// // // es6

// // sample.forEach((elem, index) => `${elem} comes at ${index}`)

// /*
// output

// 1 comes at 0
// 2 comes at 1
// 3 comes at 2
// */
//         // if (i%2){
//         //     console.log('lkjkojhoi');
//         //     // div.classList.add('blue');
//         //     const div = `<div class=" blue" id='toggleColor${i}'>
//         //     <h3 class=' project'>Apple</h3>
//         //     <p>You can viste online website by this <a href="" title="">link</a></p>
//         //     <p>Ripo project <a>https</a></p>
//         //     </div>`;
//         //     const template = document.getElementById('template').innerHTML = div;
//         //     document.getElementById('content').innerHTML += template;
//         // }else{
//         //     // div.classList.add('mediamBlue');
//         //     const div = `<div class="mediamBlue " id='toggleColor${i}'>
//         //     <h3 class=' project'>Apple</h3>
//         //     <p>You can viste online website by this <a href="" title="">link</a></p>
//         //     <p>Ripo project <a>https</a></p>
//         //     </div>`;
            
//         //     const template = document.getElementById('template').innerHTML = div;
//         //     document.getElementById('content').innerHTML += template;
//         // }

//     } 
// }

// autoRun();