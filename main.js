
console.log("test"); 

var incr = document.getElementById('incr');
var decr = document.getElementById('decr'); 
var counter = document.getElementById('counter'); 

var count = 0;

incr.addEventListener("click", function ()    {
    if( counter.innerHTML < 5 ){
    count++;
    counter.innerHTML=count ; 
}
else {alert( " max  5 ")
}
    
})

decr.addEventListener("click", function ()  {
    if (counter.innerHTML> 0){
    count--;
    counter.innerHTML=count ; 
}
else {alert ("min 0 ") 
}
  
})


