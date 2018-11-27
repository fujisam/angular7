import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { TranslateModule } from "@ngx-translate/core";

import { UnderConstructionRoutingModule } from "./under-construction-routing.module";
import { UnderConstructionComponent } from "./under-construction.component";

@NgModule({
  imports: [CommonModule, TranslateModule, UnderConstructionRoutingModule],
  declarations: [UnderConstructionComponent]
})
export class UnderConstructionModule {}
