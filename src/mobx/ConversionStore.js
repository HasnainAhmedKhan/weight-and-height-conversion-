import { makeAutoObservable } from 'mobx';

class ConversionStore {
  weight = '';
  height = '';
  unit = 'imperial'; // or 'metric'

  constructor() {
    makeAutoObservable(this);
  }

  setWeight(weight) {
    this.weight = weight;
  }

  setHeight(height) {
    this.height = height;
  }

  toggleUnit(unitType) {
    this.unit = unitType;
  }
}

const store = new ConversionStore();
export default store;
