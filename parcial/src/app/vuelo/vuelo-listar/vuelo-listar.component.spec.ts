/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { VueloListarComponent } from './vuelo-listar.component';

describe('VueloListarComponent', () => {
  let component: VueloListarComponent;
  let fixture: ComponentFixture<VueloListarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VueloListarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VueloListarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
