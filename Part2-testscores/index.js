//STUDENT NAME: Naman Sharma
//STUDENT ID: 8837689


"use strict";

const scores = [];

const displayScores = () => scores.join(", ");

//to calculate the average of entered scores
const calculateAverage = () => {
	const total = scores.reduce( (prev, curr) => prev + parseInt(curr), 0);
	return total / scores.length;
};

// loading the user entries into the scores array
for (let k = 0; k < process.argv.length; k++) {
	// value in array
	const avgofcurrentval = process.argv[k];
  
	// if not 1st 2 elements
	if (k != 0 && k != 1) {
	  // inserting into the array of 'scores'
	  scores.push(avgofcurrentval);
	}
  }

// to display all scores
console.log("All scores: " + displayScores());

// to display average score
console.log("Average score: " + Math.round(calculateAverage()));

// printing studentName, studentId

console.log("Naman Sharma (8837689)");
