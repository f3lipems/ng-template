import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BannerMosaicComponent } from './banner-mosaic.component';

describe('BannerMosaicComponent', () => {
  let component: BannerMosaicComponent;
  let fixture: ComponentFixture<BannerMosaicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BannerMosaicComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BannerMosaicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
