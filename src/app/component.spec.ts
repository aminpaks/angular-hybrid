import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { VERSION } from '@angular/core';
import { RouterTestingModule } from '@angular/router/testing';
import { expect } from 'chai';
import { RootComponent } from './component';

describe('RootComponent', () => {
    let component: RootComponent;
    let fixture: ComponentFixture<RootComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [RouterTestingModule.withRoutes([])],
            declarations: [RootComponent],
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(RootComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should have property ngVersion', () => {
        expect(component).to.have.property('ngVersion', VERSION.full);
    });
});
