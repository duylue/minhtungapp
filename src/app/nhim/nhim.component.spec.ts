import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NhimComponent } from './nhim.component';

describe('NhimComponent', () => {
  let component: NhimComponent;
  let fixture: ComponentFixture<NhimComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NhimComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NhimComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
