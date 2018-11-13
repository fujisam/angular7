import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { extract } from "@app/core";
import { Shell } from "@app/shell/shell.service";
import { MoviesComponent } from "./movies.component";

const routes: Routes = [
  Shell.childRoutes([
    {
      path: "movies",
      component: MoviesComponent,
      data: {
        title: extract("Movies")
      }
    }
  ])
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class MoviesRoutingModule {}
