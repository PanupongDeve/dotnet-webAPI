/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { MemterListComponent } from './memter-list.component';

describe('MemterListComponent', () => {
  let component: MemterListComponent;
  let fixture: ComponentFixture<MemterListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MemterListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MemterListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
