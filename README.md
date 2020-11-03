# GG-Guess-Game-

Link : https://olaknowct.github.io/GG-Guess-Game-/

Game Mechanics

	• Players should guess the secret number
	• You are allowed to guess 20 times only otherwise you loose
	• player wins if guessed is correct number otherwise loose when score gets 0


Features

	1. Evaluate the input of user and checks if guess correct.
	2. Records the highest score that the user accumulutes
	3. Game reset : set the initial state when reset
	4. Shows hint if guessed number is high/low
	5. System randomly assign a secret number


New Features and Improvements : 

	• Ask if user wants to play again 
		○ Function playAgain 
			§ Gets Executed when player losses and win
			§ Disable guess input and check function button
	• Reset the game when user play again
		○ Losses when the score gets 0
		○ Function restartGame
			§ Get Executed when user plays again
			§ Reinitializing DOM content
	• Refactor codes and Implement Dry principle (dont repeat yourself)
		○ Use function expression for a better, descriptive, reusable code
		○ Set aside DOM Selector and store to global element objects
		○ Use init for initializing initial state
		○ Use reset function to reinitialize
	• Accepts only between 1 and 20 number
		○ Display error when : 
			§ player guess a number higher than 20
			§ Play guess a negative number
