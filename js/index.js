const cards = [...document.querySelectorAll('[class^="card"]')];

function flip()
{
         this.classList.add('flip');
}
// STEP 1
for (let i = 0; i < cards.length; i++) 
{
    cards[i].addEventListener('click', flip);
}
//STEP 2 
 let i = 0;
do 
{
    cards[i].addEventListener('click', flip);
    i++;
}
 while (i < cards.length);
//STEP 3
cards.forEach (function(element) 
{
    (element.addEventListener('click', flip))
});

// STEP 4 -
for (const card of cards) 
{
    card.addEventListener('click', flip);
}

    
//STEP 5 - 
cards.map (function(element) 
{
    (element.addEventListener('click', flip))
});