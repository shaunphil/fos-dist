var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
var EmailSignupService = (function () {
    function EmailSignupService(http) {
        this.http = http;
        this.signupEndpoint = "http://localhost:3000/api/temp-users";
    }
    EmailSignupService.prototype.signupUser = function (user) {
        var headers = new Headers({ 'Content-Type': 'application/json' }); // ... Set content type to JSON
        var options = new RequestOptions({ headers: headers }); // Create a request option
        return this.http.post(this.signupEndpoint, user, options)
            .map(function (response) { return response; });
    };
    return EmailSignupService;
}());
EmailSignupService = __decorate([
    Injectable(),
    __metadata("design:paramtypes", [Http])
], EmailSignupService);
export { EmailSignupService };
//# sourceMappingURL=/Users/shaunwassell/Documents/node-js/fos-front/src/app/shared/services/email-signup-service/email-signup.service.js.map