import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { RouterModule } from '@angular/router'

//Modules
import { TranslateModule } from '@ngx-translate/core';
import { AvatarModule } from 'ngx-avatar';
import { SharedLazyModule } from '../../shared/modules/shared-lazy.module';
import { MaterialDesignModule } from '../../shared/modules/material-design.module';
//import { RootStoreModule } from 'src/app/shared/modules/root-store.module';


//Routing
import { ApplicationRouting } from './application.routing';

//Provider
import { SocketService } from '../../shared/services/socket.service'
import { ComponentSocketService } from '../../shared/services/component.socket.service'
import { BoardsService } from 'src/app/shared/services/boards.service';

//Components
import { ApplicationComponent } from './application.component';
import { DashboardComponent } from './components/dashboard.component';
import { BoardComponent } from './components/board.component';
import { BoardCreateDialog, BoardCardDialog, BoardCreateDataService } from './components/board.create.component';

//Directives
import { AutoFocusDirective, ClickOutsideDirective, ClickInsideDirective, AutoSizeInputDirective } from 'src/app/shared/modules/directives';
//Animations
import { AnimatedIconComponent } from 'src/app/shared/modules/animated.icons';


@NgModule({
  declarations: [
    ApplicationComponent,
    DashboardComponent,
    BoardComponent,
    BoardCreateDialog,
    BoardCardDialog,
        
    //Directives
    AutoFocusDirective,
    ClickOutsideDirective,
    ClickInsideDirective,
    AutoSizeInputDirective,
    //Animation
    AnimatedIconComponent
  ],
  entryComponents: [
    BoardCreateDialog,
    BoardCardDialog
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    ApplicationRouting,
    RouterModule,
    //RootStoreModule,
    SharedLazyModule,
    MaterialDesignModule,
    AvatarModule,
    TranslateModule.forChild()
  ],
  providers: [
    SocketService, 
    ComponentSocketService,
    BoardsService,
    BoardCreateDataService
  ]
})
export class ApplicationModule { }
