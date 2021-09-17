
import { Engine } from "../engines/Engine";

export class Car {

	constructor(public engine: Engine) {
		engine.start();
	}

	// abstract type() : String;
	drive() {
		
	}
}