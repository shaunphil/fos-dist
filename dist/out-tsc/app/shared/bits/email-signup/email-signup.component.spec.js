/* tslint:disable:no-unused-variable */
import { async, TestBed } from '@angular/core/testing';
import { EmailSignupComponent } from './email-signup.component';
describe('EmailSignupComponent', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [EmailSignupComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(EmailSignupComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=/Users/shaunwassell/Documents/node-js/fos-front/src/app/shared/bits/email-signup/email-signup.component.spec.js.map