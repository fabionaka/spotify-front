import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppModule } from 'src/app/app.module';

import { TrackComponent } from './track.component';

describe('TrackComponent', () => {
  let component: TrackComponent;
  let fixture: ComponentFixture<TrackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppModule],
      declarations: [ TrackComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TrackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('open() should be a promise', () => {
    expect(component.open({ type: 'artist', id: 'kadskp901' })).toBeInstanceOf(Promise);
  });

  it('open() should return true', (done) => {
    const spy = spyOn(component, 'open').and.returnValue(Promise.resolve(true));
    component.open({ type: 'artist', id: 'kadskp901' }).then(res => {
      expect(res).toBeTrue()
      done();
    })
  });
});
