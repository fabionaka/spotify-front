import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppModule } from 'src/app/app.module';

import { AlbumComponent } from './album.component';

describe('AlbumComponent', () => {
  let component: AlbumComponent;
  let fixture: ComponentFixture<AlbumComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppModule],
      declarations: [AlbumComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AlbumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('ngOnInit()', () => {
    expect(component.ngOnInit()).toBeUndefined();
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
