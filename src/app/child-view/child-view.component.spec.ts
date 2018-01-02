import { TestBed, async } from '@angular/core/testing';
import { ChildViewComponent } from './child-view.component';

describe('ChildViewComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        ChildViewComponent
      ],
    }).compileComponents();
  }));

  it('should create the child view component', async(() => {
    const fixture = TestBed.createComponent(ChildViewComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  it('should contain error text', async(() => {
    const fixture = TestBed.createComponent(ChildViewComponent);
    const comp = fixture.componentInstance;
    comp.menuItems = [
      {
        name: 'Link 1',
        link: 'link2.html'
      },
      {
        name: 'Link 2',
        link: 'link2.html'
      }
    ];
    fixture.detectChanges();


    expect(fixture.nativeElement.querySelectorAll('ul li a')[0]).toBeTruthy();
    expect(fixture.nativeElement.querySelectorAll('ul li a')[1]).toBeTruthy();

    expect(fixture.nativeElement.querySelectorAll('ul li a')[0].innerHTML).toEqual('Link 1');
    expect(fixture.nativeElement.querySelectorAll('ul li a')[1].innerHTML).toEqual('Link 2');

    expect(fixture.nativeElement.querySelectorAll('ul li a').length).toEqual(2);
  }));
});
