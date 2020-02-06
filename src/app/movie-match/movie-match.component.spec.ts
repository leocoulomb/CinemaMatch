import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieMatchComponent } from './movie-match.component';

describe('MovieMatchComponent', () => {
  let component: MovieMatchComponent;
  let fixture: ComponentFixture<MovieMatchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MovieMatchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MovieMatchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
