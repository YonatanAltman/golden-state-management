import {NgModule} from '@angular/core';
import {RouterModule, Routes} from "@angular/router";

const routs: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', loadChildren: () => import('@golden-state-management/feature/home').then(m => m.FeatureHomeModule)},
  {path: 'team', loadChildren: () => import('@golden-state-management/feature/team').then(m => m.FeatureTeamModule)},
  {
    path: 'player',
    loadChildren: () => import('@golden-state-management/feature/player').then(m => m.FeaturePlayerModule)
  },
]

@NgModule({
  imports: [
    RouterModule.forRoot(routs)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
