import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { expect } from 'chai';
import { HomeComponent } from './component';

describe('HomeComponent', () => {
    let component: HomeComponent;
    let fixture: ComponentFixture<HomeComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [HomeComponent],
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(HomeComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should have property index', () => {
        expect(component).to.have.property('index', 'TEST Angular 2');
    });
});
