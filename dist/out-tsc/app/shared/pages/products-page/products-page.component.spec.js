/* tslint:disable:no-unused-variable */
import { async, TestBed } from '@angular/core/testing';
import { ProductsPageComponent } from './products-page.component';
describe('ProductsPageComponent', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [ProductsPageComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(ProductsPageComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=/Users/shaunwassell/Documents/node-js/fos-front/src/app/shared/pages/products-page/products-page.component.spec.js.map