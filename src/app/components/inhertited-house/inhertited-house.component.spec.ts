import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InhertitedHouseComponent } from './inhertited-house.component';

describe('InhertitedHouseComponent', () => {
  let component: InhertitedHouseComponent;
  let fixture: ComponentFixture<InhertitedHouseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [InhertitedHouseComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InhertitedHouseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
