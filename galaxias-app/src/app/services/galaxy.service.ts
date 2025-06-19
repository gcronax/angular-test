import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Galaxy } from '../models/galaxy.model';

@Injectable({
  providedIn: 'root'
})
export class GalaxyService {
  private galaxies: Galaxy[] = [];
  private galaxies$ = new BehaviorSubject<Galaxy[]>([]);

  getGalaxies() {
    return this.galaxies$.asObservable();
  }

  addGalaxy(galaxy: Galaxy) {
    galaxy.id = Date.now();
    this.galaxies.push(galaxy);
    this.galaxies$.next(this.galaxies);
  }

  updateGalaxy(galaxy: Galaxy) {
    this.galaxies = this.galaxies.map(g => g.id === galaxy.id ? galaxy : g);
    this.galaxies$.next(this.galaxies);
  }

  deleteGalaxy(id: number) {
    this.galaxies = this.galaxies.filter(g => g.id !== id);
    this.galaxies$.next(this.galaxies);
  }
}
