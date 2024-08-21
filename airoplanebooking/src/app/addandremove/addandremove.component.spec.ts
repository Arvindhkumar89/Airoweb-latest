import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddandremoveComponent } from './addandremove.component';

describe('AddandremoveComponent', () => {
  let component: AddandremoveComponent;
  let fixture: ComponentFixture<AddandremoveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddandremoveComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddandremoveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
