/* 1ST WAY*/
// var inc=document.querySelector(".increase");
// var res=document.querySelector(".reset");
// var dec=document.querySelector(".decrease");
// var val=document.getElementById("value");
// let count=0
// inc.addEventListener('click', function(e) {
    
//     count=count+1;
//     val.textContent=count;
//     val.style.color= "green";
// })

// dec.addEventListener('click', function() {
//     count=count-1;
//     val.textContent=count;
//     val.style.color= "red";
// })

// res.addEventListener('click', function() {
//     count=0;
//     val.textContent=count;
//     val.style.color= "grey";
// })

/* 2ND WAY */
const val=document.getElementById("value");
const buttons=document.querySelectorAll(".btn");
let count=0;
buttons.forEach((button) => {
    button.addEventListener('click', (e)=> {
        const mystyle= e.currentTarget.classList;
        console.log(mystyle)
        if(mystyle.contains("increase"))
        {
            count++;
            console.log(count)
            val.textContent= count;
            val.style.color="green"
            
        }
        else if(mystyle.contains("decrease"))
        {
            count--;
            console.log(count)
            val.textContent= count;
            val.style.color="red"
        }
        else
        {
            count=0;
            console.log(count)
            val.textContent= count;
            val.style.color="grey"
        }
        
    })
    
})  