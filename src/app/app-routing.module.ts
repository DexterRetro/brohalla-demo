import { MembershipSettingsComponent } from './pages/membership/membership-settings/membership-settings.component';
import { MembershipGuardGuard } from './guards/membership-guard.guard';
import { MembershipHomeComponent } from './pages/membership/membership-home/membership-home.component';
import { MembershipAdminUsersComponent } from './pages/membership/admin/membership-admin-users/membership-admin-users.component';
import { MembershipAdminEventsEditorComponent } from './pages/membership/admin/membership-admin-events-editor/membership-admin-events-editor.component';
import { MembershipAdminComponent } from './pages/membership/admin/membership-admin/membership-admin.component';
import { MembershipAdminBlogComponent } from './pages/membership/admin/membership-admin-blog/membership-admin-blog.component';
import { MembershipSignUpComponent } from './pages/membership/membership-sign-up/membership-sign-up.component';
import { MembershipPaymentsComponent } from './pages/membership/membership-payments/membership-payments.component';
import { MembershipLogInComponent } from './pages/membership/membership-log-in/membership-log-in.component';

import { AboutComponent } from './pages/about/about.component';
import { AboutExpandedComponent } from './pages/about/about-expanded/about-expanded.component';

import { HomeComponent } from './pages/home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'member',
    children: [
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full',
      },
      {
        path: 'home',
        component: MembershipHomeComponent,
        canActivate: [MembershipGuardGuard],
      },
      {
        path: 'signUp',
        component: MembershipSignUpComponent,
      },
      {
        path: 'logIn',
        component: MembershipLogInComponent,
      },
      {
        path: 'payments',
        component: MembershipPaymentsComponent,
        canActivate: [MembershipGuardGuard],
      },
      {
        path: 'settings',
        component: MembershipSettingsComponent,
        canActivate: [MembershipGuardGuard],
      },
      {
        path: 'admin',
        canActivate: [MembershipGuardGuard],
        children: [
          {
            path: '',
            redirectTo: 'home',
            pathMatch: 'full',
          },
          {
            path: 'home',
            component: MembershipAdminComponent,
          },
          {
            path: 'blog',
            component: MembershipAdminBlogComponent,
          },
          {
            path: 'events',
            component: MembershipAdminEventsEditorComponent,
          },
          {
            path: 'users',
            component: MembershipAdminUsersComponent,
          },
        ],
      },
    ],
  },
  {
    path: 'about',
    children: [
      {
        path: '',
        component: AboutComponent,
      },
      {
        path: ':id',
        component: AboutExpandedComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
