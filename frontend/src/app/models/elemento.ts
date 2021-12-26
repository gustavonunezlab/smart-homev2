import { Sensor } from './sensor';

export interface Elemento {
  id: number;

  elemento: string;

  tipo: string;

  sensor: Sensor;

  estado: boolean;
}
