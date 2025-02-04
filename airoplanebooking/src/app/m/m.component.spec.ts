import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MComponent } from './m.component';

describe('MComponent', () => {
  let component: MComponent;
  let fixture: ComponentFixture<MComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
