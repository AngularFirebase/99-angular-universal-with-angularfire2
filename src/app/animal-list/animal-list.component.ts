import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import { SeoService } from '../seo.service';
import { Router } from '@angular/router';

@Component({
  selector: 'animal-list',
  templateUrl: './animal-list.component.html',
  styleUrls: ['./animal-list.component.scss']
})
export class AnimalListComponent implements OnInit {

  animals$;

  title = 'Animal App';
  description = 'Firebase + Angular Universal SEO-friendly Server-Side Rendered App';

  newAnimal: { name?: string, bio?: string } = {}

  constructor(private afs: AngularFirestore, private seo: SeoService, private router: Router) { }

  ngOnInit() {
    this.animals$ = this.afs.collection('animals', ref => ref.orderBy('img') ).valueChanges();
  }

  async create() {
    const path = `animals/${this.newAnimal.name.toLowerCase()}`;
    await this.afs.doc(path).set(this.newAnimal);
    this.router.navigate([path]);
  }

}
