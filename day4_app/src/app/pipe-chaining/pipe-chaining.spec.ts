import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PipeChaining } from './pipe-chaining';

describe('PipeChaining', () => {
  let component: PipeChaining;
  let fixture: ComponentFixture<PipeChaining>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PipeChaining],
    }).compileComponents();

    fixture = TestBed.createComponent(PipeChaining);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
