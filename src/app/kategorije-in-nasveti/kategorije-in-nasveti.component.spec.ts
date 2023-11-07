import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KategorijeInNasvetiComponent } from './kategorije-in-nasveti.component';

describe('KategorijeInNasvetiComponent', () => {
  let component: KategorijeInNasvetiComponent;
  let fixture: ComponentFixture<KategorijeInNasvetiComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [KategorijeInNasvetiComponent]
    });
    fixture = TestBed.createComponent(KategorijeInNasvetiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
