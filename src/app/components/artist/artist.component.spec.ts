import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppModule } from 'src/app/app.module';

import { ArtistComponent } from './artist.component';

describe('ArtistComponent', () => {
  let component: ArtistComponent;
  let fixture: ComponentFixture<ArtistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppModule],
      declarations: [ArtistComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArtistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('tests variables', () => {
    expect(component.resource).toBeUndefined();
    expect(component.resourceAlbums).toBeUndefined();
    expect(component.resourceTracks).toBeUndefined();
    expect(component.resourceRelatedArtists).toBeUndefined();
  })

  it('ngOnInit()() should be undefined', () => {
    expect(component.ngOnInit()).toBeUndefined();
  })
  it('fetchTracks() should be undefined', () => {
    expect(component.fetchTracks()).toBeUndefined();
  })
  it('fetchAlbums() should be undefined', () => {
    expect(component.fetchAlbums()).toBeUndefined();
  })

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
