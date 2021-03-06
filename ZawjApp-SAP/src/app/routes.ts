import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MemberListComponent } from './members/member-list/member-list.component';
import { ListsComponent } from './lists/lists.component';
import { MessagesComponent } from './messages/messages.component';
import { AuthGuard } from './_guards/auth.guard';
import { MemberDetailComponent } from './members/member-detail/member-detail.component';
import { MemberDetailResolver } from './_resolver/member-details.resolver';
import { MemberListResolver } from './_resolver/member-list.resolver';
export const appRoutes :Routes=[
  {path:'', component:HomeComponent},
{path:'',
  runGuardsAndResolvers:'always',
  canActivate:[AuthGuard],
  children:[
    {path:'members', component:MemberListComponent,resolve:{
      users:MemberListResolver
    }},
    { path: 'members/:id', component: MemberDetailComponent,resolve:{
      user:MemberDetailResolver
  } },


    {path:'lists', component:ListsComponent},
    {path:'messages', component:MessagesComponent}
  ]
  },
  {path:'**', redirectTo:'',pathMatch:'full'},
];
