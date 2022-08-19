import { Component, OnInit } from "@angular/core";
import { UrlHandlingStrategy } from "@angular/router";
import { Developer } from "../common/developer.model";
import { Skill } from "../common/skill.model";

@Component({
  selector: "app-developer-component",
  templateUrl: "./developer-component.component.html",
  styleUrls: ["./developer-component.component.css"],
})
export class DeveloperComponentComponent implements OnInit {
  public developerModel?: Developer;
  public skills?: Skill[];

  constructor() {}

  ngOnInit(): void {
    this.developerModel = new Developer(
      "Bonnard",
      "Alex",
      33,
      "Human",
      "biography",
      (this.skills = [
        {
          name: "HTML",
          logo: "logo",
          site: "www.OKLM.com",
        },
        {
          name: "CSS",
          logo: "logo",
          site: "www.OKLM.com",
        },
      ])
    );
  }
}