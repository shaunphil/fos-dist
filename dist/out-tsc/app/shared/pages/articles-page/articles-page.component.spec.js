/* tslint:disable:no-unused-variable */
import { async, TestBed } from '@angular/core/testing';
import { ArticlesPageComponent } from './articles-page.component';
describe('ArticlesPageComponent', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [ArticlesPageComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(ArticlesPageComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=/Users/shaunwassell/Documents/node-js/fos-front/src/app/shared/pages/articles-page/articles-page.component.spec.js.map