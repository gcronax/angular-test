import { Component, OnInit } from '@angular/core';
import { Galaxy } from '../../models/galaxy.model';
import { GalaxyService } from '../../services/galaxy.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';



@Component({
  selector: 'app-galaxy-list',
  templateUrl: './galaxy-list.component.html'
})
export class GalaxyListComponent implements OnInit {
  galaxies: Galaxy[] = [];

  constructor(private galaxyService: GalaxyService) {}

  ngOnInit() {
    this.galaxyService.getGalaxies().subscribe(data => this.galaxies = data);
  }

  deleteGalaxy(id: number) {
    this.galaxyService.deleteGalaxy(id);
  }
}
@NgModule({
  imports: [CommonModule, GalaxyListComponent],
  exports: [GalaxyListComponent]
})
export class GalaxyListModule { }
