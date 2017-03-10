/* tslint:disable:no-unused-variable */
import { async, TestBed } from '@angular/core/testing';
import { SingleArticlePageComponent } from './single-article-page.component';
describe('SingleArticlePageComponent', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [SingleArticlePageComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(SingleArticlePageComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=/Users/shaunwassell/Documents/node-js/fos-front/src/app/shared/pages/single-article-page/single-article-page.component.spec.js.map