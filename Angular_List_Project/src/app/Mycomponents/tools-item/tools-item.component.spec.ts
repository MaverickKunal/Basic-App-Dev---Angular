import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToolsItemComponent } from './tools-item.component';

describe('ToolsItemComponent', () => {
  let component: ToolsItemComponent;
  let fixture: ComponentFixture<ToolsItemComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ToolsItemComponent]
    });
    fixture = TestBed.createComponent(ToolsItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
