/* tslint:disable:no-unused-variable */
import { async, TestBed } from '@angular/core/testing';
import { MostPopularComponent } from './most-popular.component';
describe('MostPopularComponent', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [MostPopularComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(MostPopularComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=/Users/shaunwassell/Documents/node-js/fos-front/src/app/shared/lists/most-popular/most-popular.component.spec.js.map