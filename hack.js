document.addEventListener("DOMContentLoaded", () => {

  const toggler = document.querySelector(".slider"); 
  const search=document.querySelector(".search-input");
  const  loader=document.querySelector(".loader");
 var chats=document.getElementById("chatss")
 console.log(chats) ;
//  var li = document.createElement("li");

//     li.appendChild(document.createTextNode("hi"));
//     chats.appendChild(li);
  loader.addEventListener('click',()=>{
    console.log('uoo');
    if(search.value!=""){
        console.log(search.value);
        var lil=document.createElement('li');
        // lil.innerHTML=`${search.value}`;
        chats.appendChild(lil);
          lil.textContent=`${search.value}`;
  console.log(lil);
        search.value="";
        
    }
  })
 { 
  toggler.addEventListener( 'click' , () => { // Change check to click 
  event.stopPropagation(); console.log( 'yoy' ); var element = document.body; element.classList.toggle( 'dark-mode' ); });
  }
});