import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {By} from '@angular/platform-browser';

import {HelloComponent} from './hello.component';

describe('HelloComponent', () => {
  let component: HelloComponent;
  let fixture: ComponentFixture<HelloComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [HelloComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HelloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('displayName', () => {

    it('should show "Welt" when name is not  present', () => {
      expect(component.displayName).toEqual('Welt');
    });

    it('should show name if present', () => {
      component.name = 'Max';
      expect(component.displayName).toEqual('Max');
    });
  });

  describe('template', () => {
    it('shows "Hallo!" when no name is present', () => {
      let noNameFallback = fixture.debugElement.query(By.css('#noNameFallback')).nativeElement;
      expect(noNameFallback).toBeDefined();
      expect((<HTMLElement>noNameFallback).innerText).toEqual('Hallo!');
    });

    it('shows "Hallo Alex!" when name is "Alex"', () => {
      component.name = 'Alex';
      fixture.detectChanges();
      let noNameFallback = fixture.debugElement.query(By.css('#namedHello')).nativeElement;
      expect(noNameFallback).toBeDefined();
      expect((<HTMLElement>noNameFallback).innerText).toEqual('Hallo Alex!');
    });

    it('shows a list item for each name in "names"',()=>{
      component.names=["Max","Flo","Thomas"];
      fixture.detectChanges();
      let listItems = fixture.debugElement.queryAll(By.css('li'));
      expect(listItems.length).toEqual(3);
      let namesFromListItems = listItems.map(value => <HTMLElement>value.nativeElement).map(value => value.innerText);
      expect(namesFromListItems).toEqual(component.names);
    });
  });
});
