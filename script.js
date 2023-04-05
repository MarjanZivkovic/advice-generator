const adviceID = document.querySelector('.id');
const advice = document.querySelector('.advice');
const dice = document.querySelector('.dice-btn');

async function fetchAdvice(){
    try {
        const response = await fetch('https://api.adviceslip.com/advice');
        const data = await response.json();
     
        adviceID.textContent = data.slip.id;
        advice.innerHTML = `&#8220;${data.slip.advice}&#8221;`;    
    } catch (error) {
        advice.textContent = error;
    }
}

// fetching on btn click
dice.addEventListener('click', () =>{
    fetchAdvice();
    dice.children[0].classList.add('roll');
    setTimeout(() =>{
        dice.children[0].classList.remove('roll');
    }, 500);
});
// fetching on load
fetchAdvice();

