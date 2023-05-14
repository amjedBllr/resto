//! essential elements !!
let cartItems = document.getElementById("cartItems");
let cartItem = document.getElementsByClassName("cartItem");
let emptyCart = document.getElementById("emptyCart");
let buttons= document.getElementsByClassName("btn1");
let itemRemovers = document.getElementsByClassName("itemRemover");
//! adding to cart function :

for(let i=0 ; i<buttons.length-1 ; i++){
    let clickedButton = buttons[i];
    clickedButton.addEventListener('click',(event)=>{

     //!open cart so costemer sees what's happening !
        if(event.target.parentElement.classList.contains('info2')){
        let theCart= document.getElementsByClassName('cartContent')[0];
        theCart.classList.add('activeCartContent');
         }
   


        // ? check if the item aleardy added (so we just increase the qnt)
    let targetedFoodinfos = event.target.parentElement.parentElement.getElementsByClassName("info")[0];
    let foodExists=false;
    for(let i=0 ; i<cartItem.length;i++){
        let foodName=cartItem[i].getElementsByTagName("p")[0].innerHTML;
        let foodPrice= Number(cartItem[i].getElementsByTagName("p")[1].innerHTML);
        if(foodName==targetedFoodinfos.getElementsByTagName("h3")[0].innerHTML){
            cartItem[i].getElementsByTagName("p")[1].innerHTML=foodPrice+1;
            foodExists=true;
        }
    }   
    
        // ? if the item ain't added we add it ...
        //! creating elements of item and giving them classes ..
    if(foodExists==false){
    let addingCartItem = document.createElement("div");
    addingCartItem.classList.add("cartItem");
    let addingCartItemName = document.createElement("p");
    let addingCartItemQnt = document.createElement("p");
    let addingCartItemPrice = document.createElement("p");
    let addingItemRemover = document.createElement("button");
    addingItemRemover.classList.add("itemRemover");
    addingCartItem.appendChild(addingCartItemName);
    addingCartItem.appendChild(addingCartItemQnt);
    addingCartItem.appendChild(addingCartItemPrice);
    addingCartItem.appendChild(addingItemRemover);
    
    //! filling the element of the new item
    addingCartItemName.innerHTML=targetedFoodinfos.getElementsByTagName("h3")[0].innerHTML;
    addingCartItemPrice.innerHTML=targetedFoodinfos.getElementsByTagName("h2")[0].innerHTML;
    addingCartItemQnt.innerHTML=1;
    addingItemRemover.innerHTML="remove";
    console.log(addingCartItem);
    
    //! finnally add the item to the cart 
    cartItems.appendChild(addingCartItem);

    //! reintianlize te removers since we made new elements..
    itemRemove();
    console.log(itemRemovers.length);

    }
    })
}

//! hide and show cart (toggle)

let theCartIcon = document.getElementsByClassName('user')[0].getElementsByTagName('a')[0];
let theCart= document.getElementsByClassName('cartContent')[0];
theCartIcon.onclick = function(){
    theCart.classList.toggle('activeCartContent');
}



//! item-remove function

function itemRemove(){
    itemRemovers = document.getElementsByClassName("itemRemover");
for(let i=0 ; i<itemRemovers.length ; i++){
    let remover=itemRemovers[i];
    remover.addEventListener('click',(event)=>{
        event.target.parentElement.remove();
    })
}}
//! for already maded items (won't be neccessary when working with php or smthn)
itemRemove();



//!navbar additional funs

let navActivator=document.getElementsByClassName("nav-activetor")[0];
let virticalNav = document.getElementsByClassName("hum-nav")[0];
navActivator.addEventListener('click',()=>{
    navActivator.classList.toggle('active');
    virticalNav.classList.toggle('active');
})
