import { Elemento } from "./elemento";
import { Sensor } from "./sensor";

export interface Controlador {
    sensores: Sensor[];

    elementos: Elemento[];
    
}