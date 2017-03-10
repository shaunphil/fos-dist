/* tslint:disable:no-unused-variable */
import { async, TestBed } from '@angular/core/testing';
import { SingleArticleHeaderComponent } from './single-article-header.component';
describe('SingleArticleHeaderComponent', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [SingleArticleHeaderComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(SingleArticleHeaderComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=/Users/shaunwassell/Documents/node-js/fos-front/src/app/shared/headers/single-article-header/single-article-header.component.spec.js.map