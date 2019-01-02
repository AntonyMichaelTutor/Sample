import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SericeExampleComponent } from './serice-example.component';

describe('SericeExampleComponent', () => {
  let component: SericeExampleComponent;
  let fixture: ComponentFixture<SericeExampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SericeExampleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SericeExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
