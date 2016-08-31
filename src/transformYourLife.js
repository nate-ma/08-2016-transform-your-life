var loop = function(collection, callback){
  if (Array.isArray(collection)){
    for (var i = 0; i < collection.length; i++){
      callback(collection[i], i);
    }
  } else if (typeof collection === 'object'){
    for (var key in collection){
      callback(collection[key], key);
    }
  }
};


// 1. Build transform.
var transform = function(collection, callback){
	var results = [];
	loop(collection, function(element, index){
		results.push(callback(element, index))
	});
	return results;
}


// 2. allNumbersMultipliedByThree
var multThree = function(value){
	return value * 3;
};

var numbers = [1, 2, 3, 4, 5];

var allNumbersMultipliedByThree = transform(numbers, multThree);

console.log(allNumbersMultipliedByThree)


// 3. bestSentenceToUpperCase
var bestSentence = "This is the best six week course ever!";

var upperCaseString = function(string){
	return string.toUpperCase();
};

var bestSentenceToUpperCase = transform(bestSentence.split(), upperCaseString).join();
console.log(bestSentenceToUpperCase)

// 4. collectedContents
var person = {name: 'Jon', greatestFear: 'fearItself'};
var contentsArray = function(value, key){
	return [key, value]; 
};

var contentsCollection = transform(person, contentsArray)
console.log(contentsCollection)

// 5. multByThree
var multByThree = function(collection){
	return transform(collection, multThree);
};

var byThreeArray = [1, 2, 3];
console.log("Testing multByThree:", multByThree(byThreeArray));

// 6. upperCase
var upperCase = function(collection){
	return transform(collection.split(), upperCaseString).join();
};

var testString = "Hello World";
console.log("Testing upperCase:", upperCase(testString));

// 7. contentsCollection
var contentsCollection = function(collection){
	return transform(person, contentsArray);
};

console.log("Testing contentsCollection:", contentsCollection(person));

// 8. multByWhatever
var multByWhatever = function(collection, inputNum){
	return transform(collection, function(element){
		return element * inputNum;
	})
};

var numbers = [1 , 3, 5, 30, 25];

console.log("Testing multByWhatever:", multByWhatever(numbers, 3));

// 9. divideByWhatever
var divideByWhatever = function(collection, inputNum){
	return transform(collection, function(element){
		return element / inputNum;
	})
};

console.log("Testing divideByWhatever:", divideByWhatever(numbers, 2));

// 10. switchCase

var switchCase = function(sentence, thisCase){
	if(thisCase === "lower"){
		return transform(sentence.split(), function(string){
			return string.toLowerCase()
		}).join()
	}
	else if(thisCase === "upper"){
		return transform(sentence.split(), function(string){
			return string.toUpperCase()
		}).join()
	}
};

console.log("Testing switchCase", switchCase("Hello World", "lower"));

// 11. contentsCollector

var contentsCollector = function(obj, indicator){
	return transform(obj, function(value, key){
		if (indicator === "key"){
		return [key];
	} else if (indicator === "value"){
		return [value];
	} else {
		return [key, value];
	  }
	})
};

var person = {name: 'Jon', greatestFear: 'fearItself'};
console.log(contentsCollector(person))

// 13. makeArray

var makeArray = function(number){
	var tempArray = [0];
	loop(tempArray, function(element){
		if(tempArray.length < number){
			tempArray.push(element + 1);
		}
	})
	return tempArray;
};

console.log("Testing makeArray:", makeArray(5));

// 14. makeRow
var makeRow = function(row){
	transform(row, function(element){
		 element = {state: null}
	})
	return row;
}

var randomArray = [1,2,3,4,5]
console.log(makeRow(randomArray))

// 15. makeTicTacToeBoard

// 16. setXorO 
