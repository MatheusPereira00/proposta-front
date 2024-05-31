import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnaliseCreditoComponent } from './analise-credito.component';

describe('AnaliseCreditoComponent', () => {
  let component: AnaliseCreditoComponent;
  let fixture: ComponentFixture<AnaliseCreditoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AnaliseCreditoComponent]
    });
    fixture = TestBed.createComponent(AnaliseCreditoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
