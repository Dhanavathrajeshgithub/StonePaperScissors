const choices = document.querySelectorAll(".choice");

function getRandom()
{
    const arr = ["rock","paper","scissors"];
    let val = Math.floor(Math.random()*3);
    return arr[val];
}
const getWinner = (opt,compOpt) => {
    let resUser = true;
    let msg = document.querySelector(".msg-container");
    let userScore = document.querySelector("#user-res"); 
    let compScore = document.querySelector("#comp-res"); 
    if(opt===compOpt)
    {
        let msg = document.querySelector(".msg-container");
        msg.innerText = "Draw";
    }
    else
    {
        if(opt==="rock")
        {
            if(compOpt==="paper") 
                resUser=false;
        }
        else if(opt==="paper")
        {
            if(compOpt==="rock") ;
            else  
                resUser = false;
        }
        else
        {
            if(compOpt==="paper");
            else  
                resUser = false;
        }
    }
    if(resUser)
    {
        msg.innerText = `You Won! ${opt} beats ${compOpt}`;
        msg.style.backgroundColor =  "green"; 
        userScore.innerText++;
    }
    else
    {
        msg.innerText = `You Lose! ${compOpt} beats ${opt}`;
        msg.style.backgroundColor =  "red"; 
        compScore.innerText++;
    }
}
choices.forEach((choice) => {
    choice.addEventListener("click",() => {
        const opt = choice.getAttribute("id");
        const compOpt = getRandom();
        getWinner(opt,compOpt);
    })
})