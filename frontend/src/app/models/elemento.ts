import { Sensor } from './sensor';

export interface Elemento {
  id: number;

  nombre: string;

  tipo: string;

  sensor: Sensor;

  estado: boolean;
}
