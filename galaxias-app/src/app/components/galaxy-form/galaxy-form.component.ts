import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Galaxy } from '../../models/galaxy.model';

@Component({
  selector: 'app-galaxy-form',
  templateUrl: './galaxy-form.component.html'
})
export class GalaxyFormComponent {
  @Output() save = new EventEmitter<Galaxy>();
  form: FormGroup;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      name: [''],
      type: ['espiral'],
      distanceMillionsLy: [0],
      starsEstimate: [0],
      constellation: [''],
      discoveredOn: [new Date()],
      imageUrl: ['']
    });
  }

  submit() {
    if (this.form.valid) {
      this.save.emit(this.form.value);
      this.form.reset();
    }
  }
}
