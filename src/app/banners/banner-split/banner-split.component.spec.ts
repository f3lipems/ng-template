import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BannerSplitComponent } from './banner-split.component';

describe('BannerSplitComponent', () => {
  let component: BannerSplitComponent;
  let fixture: ComponentFixture<BannerSplitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BannerSplitComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BannerSplitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
