import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
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
      name: ['', Validators.required],
      type: ['espiral', Validators.required],
      distanceMillionsLy: [0, [Validators.required, Validators.min(0)]],
      starsEstimate: [0, [Validators.required, Validators.min(0)]],
      constellation: ['', Validators.required],
      discoveredOn: [new Date(), Validators.required],
      imageUrl: ['']
    });
  }

  submit() {
    if (this.form.valid) {
      this.save.emit(this.form.value as Galaxy);
      this.form.reset({
        type: 'espiral',
        distanceMillionsLy: 0,
        starsEstimate: 0,
        discoveredOn: new Date()
      });
    } else {
      this.form.markAllAsTouched();
    }
  }
}
