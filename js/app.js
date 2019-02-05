
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
        <p>You can  visit online website by on click <a href="${liveArray[index]}" title="click">${title}</a></p>
        <p>My project repository : <a href='${gitArray[index]}' title=''>${gitArray[index]}</a></p>
        </div>`;
        // 
        const template = document.getElementById('template').innerHTML = div;
        document.getElementById('content').innerHTML += template;
    }else{
        // Create div block
        const div = `<div class="mediamBlue " >
        <h3 class=' project data'>${title}</h3>
        <p>You can  visit online website by on click <a href="${liveArray[index]}" title="">${title}</a></p>
        <p>My project repository : <a href='${gitArray[index]}' title=''>${gitArray[index]}</a></p>
        </div>`;
        // appand div with template
        const template = document.getElementById('template').innerHTML = div;
        // 
        document.getElementById('content').innerHTML += template;
    }

});
