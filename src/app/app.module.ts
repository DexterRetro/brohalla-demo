import { ErrorComponent } from './components/error/error.component';
import { ErrorInterceptor } from './interceptors/error-interceptor';
import { AuthInterceptor } from './interceptors/auth-interceptor';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDialogModule } from '@angular/material/dialog';

import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { AboutExpandedComponent } from './pages/about/about-expanded/about-expanded.component';
import { MembershipLogInComponent } from './pages/membership/membership-log-in/membership-log-in.component';
import { MembershipSignUpComponent } from './pages/membership/membership-sign-up/membership-sign-up.component';
import { MembershipHomeComponent } from './pages/membership/membership-home/membership-home.component';
import { MembershipPaymentsComponent } from './pages/membership/membership-payments/membership-payments.component';
import { MembershipAdminComponent } from './pages/membership/admin/membership-admin/membership-admin.component';
import { MembershipAdminBlogComponent } from './pages/membership/admin/membership-admin-blog/membership-admin-blog.component';
import { MembershipAdminUsersComponent } from './pages/membership/admin/membership-admin-users/membership-admin-users.component';
import { MembershipAdminEventsEditorComponent } from './pages/membership/admin/membership-admin-events-editor/membership-admin-events-editor.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MembershipSettingsComponent } from './pages/membership/membership-settings/membership-settings.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    AboutExpandedComponent,
    MembershipLogInComponent,
    MembershipSignUpComponent,
    MembershipHomeComponent,
    MembershipPaymentsComponent,
    MembershipAdminComponent,
    MembershipAdminBlogComponent,
    MembershipAdminUsersComponent,
    MembershipAdminEventsEditorComponent,
    MembershipSettingsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatSelectModule,
    MatInputModule,
    MatFormFieldModule,
    FormsModule,
    MatDialogModule,
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
  ],
  entryComponents: [ErrorComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
