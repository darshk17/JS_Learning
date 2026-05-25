// Example 1

document.
getElementById("changeTextButton").
addEventListener('click', () => {
 let para=document.getElementById("myParagraph");
 para.textContent="The paragraph is changed";
});


// Example 2: Traversing the DOM 
document.getElementById("highlightFirstCity").
addEventListener('click', function() {
let citiesList =document.getElementById("citiesList");
citiesList.firstElementChild.classList.add("highlight")
}
)

// Example 3: Manipulating DOM Elements
document.getElementById("changeOrder").
addEventListener('click', function(){
let change=document.getElementById("coffeeType");
change.textContent="Expresso";
change.style.backgroundColor="Brown";
change.style.padding="6px";
}
)

// Example 4: Creating and Inserting Elements
document.getElementById("addNewItem").
addEventListener('click',function(){
    let newItem = document.createElement('li' )
    newItem.textContent=" Eggs"
    document.getElementById("shoppingList").appendChild(newItem);
}
)
 
// Example 5: Removing DOM Elements
document.getElementById("removeLastTask").
addEventListener('click',function(){
    
    document.getElementById("taskList").lastElementChild.remove()
}
)


// Example 6: Event Handling in the DOM 
document.getElementById("clickMeButton").
addEventListener("dblclick",function(){
alert("Don't touch me");
})


// Example 7: Event Delegation
document.getElementById("teaList").
addEventListener('click',function(event){
    if(event.target && event.target.matches('.teaItem')){
        alert("You selected: " +event.target.textContent)
    }
});


// Example 8: Form Handling

// const form = document.getElementById("feedbackForm");

// const input = document.getElementById("feedbackInput");

// const display = document.getElementById("feedbackDisplay");

// form.addEventListener("submit", function(event) {

//     event.preventDefault();

//     display.innerText = input.value;

// });

document.getElementById("feedbackForm")
.addEventListener("submit", function(e){

    e.preventDefault();

    document.getElementById("feedbackDisplay").innerText =
    document.getElementById("feedbackInput").value;

});



// Example 9: DOM Content Loaded
document.addEventListener("DOMContentLoaded",function(){
    document.getElementById("domStatus").textContent="DOM fully loaded";
})


// Example 10: CSS Classes Manipulation
document.getElementById("toggleHighlight").
addEventListener('click', function(){
    let descriptionText = document.getElementById("descriptionText");
    descriptionText.classList.toggle("highlight");
})