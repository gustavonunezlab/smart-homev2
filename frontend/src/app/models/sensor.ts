import { TipoSensor } from "./tipoSensor";
import { Elemento } from "./elemento";

export interface Sensor {
  id: number;

  sensor: string;

  ip: number;

  tipos_sensore: TipoSensor;

  elemento: Elemento;

  estado: boolean;

  codigo: string;

  temperatura: number;

}
