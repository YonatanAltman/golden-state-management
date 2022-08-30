import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PlayerComponent} from './player/player.component';
import {FeaturePlayerRoutingModule} from "./feature-player-routing.module";
import {SharedUiLayoutModule} from "@golden-state-management/shared/ui-layout";
import {StoreModule} from "@ngrx/store";
import {teamReducer} from "@golden-state-management/store";

@NgModule({
  imports: [
    CommonModule,
    FeaturePlayerRoutingModule,
    SharedUiLayoutModule,
    // StoreModule.forFeature('team',teamReducer) // in case of feature store
  ],
  declarations: [PlayerComponent],
})
export class FeaturePlayerModule {
}
