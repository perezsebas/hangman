import {Pipe, PipeTransform} from "@angular/core";

@Pipe({
	name : "secretWord",
	pure: false
})

export class SecretWord implements PipeTransform {

	transform(value){
				return value.replace(/[a-z]/g, "_ ");
	}
}
