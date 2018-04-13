import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AngularFirestore } from 'angularfire2/firestore';
import { SeoService } from '../seo.service';
import { tap, startWith } from 'rxjs/operators';
import { TransferState, makeStateKey, StateKey } from '@angular/platform-browser';

const ANIMAL_KEY = makeStateKey<any>('animal');

@Component({
  selector: 'animal-detail',
  templateUrl: './animal-detail.component.html',
  styleUrls: ['./animal-detail.component.scss']
})
export class AnimalDetailComponent implements OnInit {
  animal$;

  constructor(
    private afs: AngularFirestore,
    private seo: SeoService,
    private route: ActivatedRoute,
    private state: TransferState
  ) {}

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('name').toLowerCase();
    this.animal$ = this.ssrFirestoreDoc(`animals/${id}`);

    // This will create a split second flash
    // this.animal$ = this.afs.doc(`animals/${id}`).valueChanges();
  }


  ssrFirestoreDoc(path: string) {
    const exists = this.state.get(ANIMAL_KEY, {} as any);
      return this.afs.doc<any>(path).valueChanges().pipe(
        tap(animal => {
          this.state.set(ANIMAL_KEY, animal)
          this.seo.generateTags({
            title: animal.name,
            description: animal.bio,
            image: animal.imgURL
          });
        }),
        startWith(exists)
    )
  }

}
