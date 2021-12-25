import { TipoSensor } from "./tipoSensor";

export interface Sensor {
  id: number;

  sensor: string;

  ip: number;

  tipoSensor: TipoSensor;

  idTipoSensor: number;

  estado: boolean;

  codigo: string;

  temperatura: number;

}
