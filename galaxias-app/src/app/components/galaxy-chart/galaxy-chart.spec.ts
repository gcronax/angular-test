import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GalaxyChart } from './galaxy-chart';

describe('GalaxyChart', () => {
  let component: GalaxyChart;
  let fixture: ComponentFixture<GalaxyChart>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GalaxyChart]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GalaxyChart);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
