
import { DieselEngine } from './engines/DieselEngine';
import { ElectricMotor } from './engines/ElectricMotor';
import { Engine } from './engines/Engine';

const engine = new DieselEngine();
const electricEngine = new ElectricMotor();

//new Car();

engine.start();

console.log(engine instanceof Engine);
console.log(engine instanceof DieselEngine);

console.log(electricEngine.pistons());