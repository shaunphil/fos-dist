/* tslint:disable:no-unused-variable */
import { async, TestBed } from '@angular/core/testing';
import { AboutPageComponent } from './about-page.component';
describe('AboutPageComponent', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [AboutPageComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(AboutPageComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=/Users/shaunwassell/Documents/node-js/fos-front/src/app/shared/pages/about-page/about-page.component.spec.js.map