import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DemandeOuvertureDeCompteComponent } from './demande-ouverture-de-compte.component';

describe('DemandeOuvertureDeCompteComponent', () => {
  let component: DemandeOuvertureDeCompteComponent;
  let fixture: ComponentFixture<DemandeOuvertureDeCompteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DemandeOuvertureDeCompteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DemandeOuvertureDeCompteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
