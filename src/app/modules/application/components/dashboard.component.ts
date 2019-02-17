import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
    selector: 'dashboard',
    templateUrl: '../views/dashboard.html',
    styleUrls: ['../application.component.scss', '../../../app.component.scss']
})

export class DashboardComponent{

    //#region Properties  
    
    //#endregion

    //#region FormControls

    //#endregion
    
    //#region Constructor

    constructor(private router: Router, public translate: TranslateService) {

        this.router.events.subscribe(event => {
            if (event instanceof NavigationEnd) {
              (<any>window).ga('set', 'page', event.urlAfterRedirects);
              (<any>window).ga('send', 'pageview');
            }
        });
    }

    //#endregion

    //#region Functions

    //#endregion

}