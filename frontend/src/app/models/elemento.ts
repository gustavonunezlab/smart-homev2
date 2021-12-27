import { Sensor } from './sensor';

export interface Elemento {
  id: number;

  elemento: string;

  tipo: string;

  sensore: Sensor;

  estado: boolean;

  codigo: string;
}
