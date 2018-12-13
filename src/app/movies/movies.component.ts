import { Component, OnInit } from "@angular/core";
import { environment } from "@env/environment";

@Component({
  selector: "app-movies",
  templateUrl: "./movies.component.html",
  styleUrls: ["./movies.component.scss"]
})
export class MoviesComponent implements OnInit {
  version: string = environment.version;
  isLoading: boolean;

  constructor() {}
  ngOnInit() {
    this.isLoading = true;
  }
}
