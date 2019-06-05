import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BachecaCommentiComponent } from './bacheca-commenti.component';

describe('BachecaCommentiComponent', () => {
  let component: BachecaCommentiComponent;
  let fixture: ComponentFixture<BachecaCommentiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BachecaCommentiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BachecaCommentiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
