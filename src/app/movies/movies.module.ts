import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { TranslateModule } from "@ngx-translate/core";

import { MoviesRoutingModule } from "./movies-routing.module";
import { MoviesComponent } from "./movies.component";

@NgModule({
  imports: [CommonModule, TranslateModule, MoviesRoutingModule],
  declarations: [MoviesComponent]
})
export class MoviesModule {}
