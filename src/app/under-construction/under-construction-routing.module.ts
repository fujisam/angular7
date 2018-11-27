import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { extract } from "@app/core";
import { Shell } from "@app/shell/shell.service";
import { UnderConstructionComponent } from "./under-construction.component";

const routes: Routes = [
  Shell.childRoutes([
    {
      path: "under-construction",
      component: UnderConstructionComponent,
      data: {
        title: extract("UnderConstruction")
      }
    }
  ])
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class UnderConstructionRoutingModule {}
