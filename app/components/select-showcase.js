import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class SelectShowcase extends Component {
  colors = [
    'Amarillo',
    'Azul',
    'Blanco',
    'Naranja',
    'Negro',
    'Rojo',
    'Rosa',
    'Verde',
  ];

  cars = [
    { value: 0, label: 'Alfa Romeo' },
    { value: 1, label: 'Audi' },
    { value: 2, label: 'Citroën' },
    { value: 3, label: 'Fiat' },
    { value: 4, label: 'Opel' },
    { value: 5, label: 'Peugeot' },
    { value: 6, label: 'Seat' },
    { value: 7, label: 'Skoda' },
  ];

  @tracked carId = 1;
  @tracked color;
  @tracked freeColor;

  get carLabel() {
    return this.cars.find((x) => x.value === this.carId)?.label ?? '—';
  }

  @action selectColor(value) {
    this.color = value;
  }

  @action selectCar(value) {
    this.carId = value;
  }

  @action selectFreeColor(value) {
    this.freeColor = value;
  }
}
