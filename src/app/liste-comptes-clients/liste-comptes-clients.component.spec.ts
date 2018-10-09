import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeComptesClientsComponent } from './liste-comptes-clients.component';

describe('ListeComptesClientsComponent', () => {
  let component: ListeComptesClientsComponent;
  let fixture: ComponentFixture<ListeComptesClientsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListeComptesClientsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListeComptesClientsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
