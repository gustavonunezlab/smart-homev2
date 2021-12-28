import { Sensor } from './sensor';

export interface Elemento {
  id: number;

  elemento: string;

  sensore: Sensor;

  estado: string;

  codigo: string;
}
