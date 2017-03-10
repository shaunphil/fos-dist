/* tslint:disable:no-unused-variable */
import { async, TestBed } from '@angular/core/testing';
import { ThankYouPageComponent } from './thank-you-page.component';
describe('ThankYouPageComponent', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [ThankYouPageComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(ThankYouPageComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=/Users/shaunwassell/Documents/node-js/fos-front/src/app/shared/pages/thank-you-page/thank-you-page.component.spec.js.map