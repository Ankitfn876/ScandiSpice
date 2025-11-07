import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlendsComponent } from './blends.component';

describe('BlendsComponent', () => {
  let component: BlendsComponent;
  let fixture: ComponentFixture<BlendsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BlendsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BlendsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
