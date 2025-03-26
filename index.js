const random_number = Math.floor(Math.random() * 100) + 1;
let attempts = 0;

function checkuserguess(guess){
    return new Promise((resolve,reject)=>{
        attempts++;
        // console.log(guess)
        if ((isNaN(guess))||(guess<1)||(guess>100)){
            reject("Please enter a valid number between 1 and 100.")
        }
        else if((guess==random_number)){
            resolve(`Congratulations!!! You guessed the correct Number in ${attempts} attemps`)
        }
        else if((guess<random_number)){
            reject("Too Low... Try Again!!! ")

        }
        else if (guess>random_number){
            reject("Too High... Try Again!!!")
        }
        })
    }



function playGame(){
    const userGuess = parseInt(document.getElementById("guess").value);
    const message = document.getElementById("message");
    // const background = document.getElementsByTagName("body")[0];
    
    checkuserguess(userGuess)
    .then((result)=>{
        message.style.color = "green";
        message.textContent = result;
        // background.style.backgroundColor = 'Green'
        
    })
    .catch((err)=>{
        message.style.color = "red";
        message.textContent = err;
        // background.style.backgroundColor = 'Red'

    })

}