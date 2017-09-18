import {Component} from '@angular/core';
@Component ({
selector : 'mon-app',
template:'<h1>{{message}}</h1>'
})
export class AppComponent {
    private message:string = 'un truc dedans';
}