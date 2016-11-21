import {Pipe, PipeTransform} from "@angular/core";

@Pipe({
	name : "guessLetter",
	pure: false
})

export class GuessLetter implements PipeTransform {
	//public secretWord;
	transform(word, letter){
		//return value.replace(/ /g, "");
        //return value.charAt(0).toUpperCase() + value.slice(1);

				//for (let i in Letters) {
		      //if (Letters[i].chosen) {
						//value.replace(/Letters[i].letter/g, "_ ");
						//return value.replace(/a/g, "_ ");

					//	return value.replace(letter/g, "_ ");
						//return value.replace(letter, "_ ", "g");
						//return word.secret.replace(letter, letter, "g");
						//console.log(word.word.replace(/[letter]/g, "_ "));
						//console.log(word.word.split(letter).join("_ "));
						//console.log(word.word.replace(RegExp(letter, "g"), "_ "));
						for (let i in word.word) {
								if(word.word[i] != letter){
									//console.log(word.word[i]);
									//console.log(word.secret[i]);
									//word.word[i].replace(RegExp(/[a-z]/, "g"), "_ ");
									word.word[i].replace(/[a-z]/g, "_ ");
									console.log(word.secret);
									console.log(word.word);
							  }
						}
						return word.secret;
						//return value.replace('a', "_ ");

						//return value.replace(letter, "_ ");

						//console.log(value);
						//console.log(Letters[i].letter);
		      //}
		    //}

				//let range = /[a-z]/g;
				//let range = 'a';
				//return value.replace(/[a-z]/g, "_ ");

			  //return value.replace('a', "_ ");

				//console.log(value);
				//return value;
				//return value;
				//return value.replace(range, "_ ", "g");
      //return value;
	}
}
