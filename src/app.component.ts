import {Component} from '@angular/core';
@Component ({
selector : 'mon-app',
//template:'<h1>{{message}}</h1>'
templateUrl:'./app.component.html'
})
export class AppComponent {
    private message:string = 'chose';
    title='app';
    methode() {
        this.title='autre chose';
        }
}