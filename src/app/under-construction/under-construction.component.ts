import { Component, OnInit } from "@angular/core";
import { environment } from "@env/environment";

@Component({
  selector: "app-about",
  templateUrl: "./under-construction.component.html",
  styleUrls: ["./under-construction.component.scss"]
})
export class UnderConstructionComponent implements OnInit {
  version: string = environment.version;
  constructor() {}
  ngOnInit() {}
}
