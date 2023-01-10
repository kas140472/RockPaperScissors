const game = ()=> {
    let pScore = 0;
    let cScore = 0;
    let bnhPScore = 0;
    let bnhCScore = 0;

    // start the game
    const startGame = ()=> {
        const rpsBtn = document.querySelector('.rpsBtn');
        const bnhBtn = document.querySelector('.bnhBtn');
        const introScreen = document.querySelector('.intro');
        const match = document.querySelector('.match');
        const match2 = document.querySelector('.match2');
        rpsBtn.addEventListener('click', ()=> {
            introScreen.classList.add("fadeOut");
            match.classList.add("fadeIn");
            playMatch();
        });
        bnhBtn.addEventListener('click', ()=> {
            introScreen.classList.add("fadeOut");
            match2.classList.add("fadeIn");
            playMatch2();
        });
    }

    // play match 1
    const playMatch = ()=> {
        const options = document.querySelectorAll('.options button');
        const playerHand = document.querySelector('.player-hand');
        const computerHand = document.querySelector('.computer-hand');

        const leadBtn = document.querySelector('.leadBtn');
        
        leadBtn.addEventListener('click', ()=> {
            if(pScore>cScore)
            {
                leadBtn.textContent = 'Player';
            }
            else if(pScore<cScore)
            {
                leadBtn.textContent = 'Computer';
            }
            else
            {
                leadBtn.textContent = 'Tie';
            }
        })

        const hands = document.querySelectorAll('.hands img');

        hands.forEach(hand =>{
            hand.addEventListener('animationend', function(){
                this.style.animation = '';
            })
        })
        // computer options
        const computerOptions = ['rock', 'paper', 'scissors'];
        options.forEach(option=>{
            option.addEventListener('click', function() { // using regular function here instead of arrow function because we want 'this' to bind to option and not window

                // setting image back to rock, winner back to empty and leadButton back to default after every play
                playerHand.src = `./images/rock.png`;
                computerHand.src = `./images/rock.png`;
                const winner = document.querySelector('.winner');
                winner.textContent = '';
                leadBtn.textContent = 'Who\'s leading?';
                    
                // computer choice
                const computerNumber = Math.floor(Math.random()*3);
                const computerChoice = computerOptions[computerNumber];

                setTimeout(() => {
                    leadBtn.textContent = 'Who\'s leading?';
                    compareHands(this.textContent, computerChoice);
                    updateScore();
                    // update images
                    playerHand.src = `./images/${this.textContent}.png`;
                    computerHand.src = `./images/${computerChoice}.png`;
                }, 2000);

                playerHand.style.animation = "shakePlayer 2s ease";
                computerHand.style.animation = "shakeComputer 2s ease";
            })
        
        })
    }

    // compare hands
    const compareHands = (playerChoice, computerChoice)=> {
        const winner = document.querySelector('.winner');
        if(playerChoice === computerChoice)
        {
            winner.textContent = 'A tie!';
            return;
        }
        if(playerChoice === 'rock')
        {
            if(computerChoice === 'paper')
            {
                winner.textContent = 'Player lost!';
                cScore++;
                return;
            }
            else
            {
                winner.textContent = 'Player won!';
                pScore++;
                return;
            }
        }
        if(playerChoice === 'paper')
        {
            if(computerChoice === 'scissors')
            {
                winner.textContent = 'Player lost!';
                cScore++;
                return;
            }
            else
            {
                winner.textContent = 'Player won!';
                pScore++;
                return;
            }
        }
        if(playerChoice === 'scissors')
        {
            if(computerChoice === 'rock')
            {
                winner.textContent = 'Player lost!';
                cScore++;
                return;
            }
            else
            {
                winner.textContent = 'Player won!';
                pScore++;
                return;
            }
        }
    }

    const updateScore = ()=> {
        const playerScore = document.querySelector('.player-score p');
        const computerScore = document.querySelector('.computer-score p');
        playerScore.textContent = pScore;
        computerScore.textContent = cScore;
    }

    // play match 2
    const playMatch2 = ()=> {
        const toolOptions = document.querySelectorAll('.toolOptions button');
        const playerTool = document.querySelector('.player-tool');
        const computerTool = document.querySelector('.computer-tool');

        const leadBtn = document.querySelector('.leadBtn');
        
        leadBtn.addEventListener('click', ()=> {
            if(bnhPScore>bnhCScore)
            {
                leadBtn.textContent = 'Player';
            }
            else if(bnhPScore<bnhCScore)
            {
                leadBtn.textContent = 'Computer';
            }
            else
            {
                leadBtn.textContent = 'Tie';
            }
        })

        const tools = document.querySelectorAll('.tools img');

        tools.forEach(tool =>{
            tool.addEventListener('animationend', function(){
                this.style.animation = '';
            })
        })
        // computer options
        const computerOptions = ['bear', 'hunter', 'ninja'];
        toolOptions.forEach(option=>{
            option.addEventListener('click', function() { // using regular function here instead of arrow function because we want 'this' to bind to option and not window

                // setting image back to kasLogo, winner back to empty and leadButton back to default after every play
                playerTool.src = `./images/kasLogo.png`;
                computerTool.src = `./images/kasLogo.png`;
                const bnhWinner = document.querySelector('.bnhWinner');
                bnhWinner.textContent = '';
                leadBtn.textContent = 'Who\'s leading?';
                    
                // computer choice
                const computerNumber = Math.floor(Math.random()*3);
                const computerChoice = computerOptions[computerNumber];

                setTimeout(() => {
                    leadBtn.textContent = 'Who\'s leading?';
                    compareTools(this.textContent, computerChoice);
                    updateScoreBNH();
                    // update images
                    playerTool.src = `./images/${this.textContent}.png`;
                    computerTool.src = `./images/${computerChoice}.png`;
                }, 2000);

                playerTool.style.animation = "shakePlayerTool 2s ease";
                computerTool.style.animation = "shakeComputerTool 2s ease";
            })
        
        })
    }

    // compare bear, hunter, ninja
    const compareTools = (playerChoice, computerChoice)=> {
        const winner = document.querySelector('.bnhWinner');
        if(playerChoice === computerChoice)
        {
            winner.textContent = 'A tie!';
            return;
        }
        if(playerChoice === 'bear')
        {
            if(computerChoice === 'hunter')
            {
                winner.textContent = 'Player lost!';
                bnhCScore++;
                return;
            }
            else
            {
                winner.textContent = 'Player won!';
                bnhPScore++;
                return;
            }
        }
        if(playerChoice === 'ninja')
        {
            if(computerChoice === 'bear')
            {
                winner.textContent = 'Player lost!';
                bnhCScore++;
                return;
            }
            else
            {
                winner.textContent = 'Player won!';
                bnhPScore++;
                return;
            }
        }
        if(playerChoice === 'hunter')
        {
            if(computerChoice === 'ninja')
            {
                winner.textContent = 'Player lost!';
                bnhCScore++;
                return;
            }
            else
            {
                winner.textContent = 'Player won!';
                bnhPScore++;
                return;
            }
        }
    }

    const updateScoreBNH = ()=> {
        const playerScore = document.querySelector('.player-score p');
        const computerScore = document.querySelector('.computer-score p');
        playerScore.textContent = bnhPScore;
        computerScore.textContent = bnhCScore;
    }


    // call all the inner functions
    startGame();
}

// call the game function
game();