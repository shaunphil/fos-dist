/* tslint:disable:no-unused-variable */
import { async, TestBed } from '@angular/core/testing';
import { ArticleItemComponent } from './article-item.component';
describe('ArticleItemComponent', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [ArticleItemComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(ArticleItemComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=/Users/shaunwassell/Documents/node-js/fos-front/src/app/shared/lists/article-item/article-item.component.spec.js.map