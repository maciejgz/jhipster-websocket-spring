import './vendor.ts';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Ng2Webstorage } from 'ng2-webstorage';

import { JhipsterWebsocketSpringSharedModule, UserRouteAccessService } from './shared';
import { JhipsterWebsocketSpringHomeModule } from './home/home.module';
import { JhipsterWebsocketSpringAdminModule } from './admin/admin.module';
import { JhipsterWebsocketSpringAccountModule } from './account/account.module';
import { JhipsterWebsocketSpringEntityModule } from './entities/entity.module';

import { customHttpProvider } from './blocks/interceptor/http.provider';
import { PaginationConfig } from './blocks/config/uib-pagination.config';

// jhipster-needle-angular-add-module-import JHipster will add new module here

import {
    JhiMainComponent,
    LayoutRoutingModule,
    NavbarComponent,
    FooterComponent,
    ProfileService,
    PageRibbonComponent,
    ActiveMenuDirective,
    ErrorComponent
} from './layouts';

@NgModule({
    imports: [
        BrowserModule,
        LayoutRoutingModule,
        Ng2Webstorage.forRoot({ prefix: 'jhi', separator: '-'}),
        JhipsterWebsocketSpringSharedModule,
        JhipsterWebsocketSpringHomeModule,
        JhipsterWebsocketSpringAdminModule,
        JhipsterWebsocketSpringAccountModule,
        JhipsterWebsocketSpringEntityModule,
        // jhipster-needle-angular-add-module JHipster will add new module here
    ],
    declarations: [
        JhiMainComponent,
        NavbarComponent,
        ErrorComponent,
        PageRibbonComponent,
        ActiveMenuDirective,
        FooterComponent
    ],
    providers: [
        ProfileService,
        customHttpProvider(),
        PaginationConfig,
        UserRouteAccessService
    ],
    bootstrap: [ JhiMainComponent ]
})
export class JhipsterWebsocketSpringAppModule {}
