/* tslint:disable:no-unused-variable */
import { async, TestBed } from '@angular/core/testing';
import { ArticleListComponent } from './article-list.component';
describe('ArticleListComponent', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [ArticleListComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(ArticleListComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=/Users/shaunwassell/Documents/node-js/fos-front/src/app/shared/lists/article-list/article-list.component.spec.js.map