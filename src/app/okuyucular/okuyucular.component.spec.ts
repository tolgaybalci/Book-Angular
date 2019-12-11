import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OkuyucularComponent } from './okuyucular.component';

describe('OkuyucularComponent', () => {
  let component: OkuyucularComponent;
  let fixture: ComponentFixture<OkuyucularComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OkuyucularComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OkuyucularComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
