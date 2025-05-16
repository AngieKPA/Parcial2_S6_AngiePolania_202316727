/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { AerolineaListarComponent } from './aerolinea-listar.component';

describe('AerolineaListarComponent', () => {
  let component: AerolineaListarComponent;
  let fixture: ComponentFixture<AerolineaListarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AerolineaListarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AerolineaListarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
