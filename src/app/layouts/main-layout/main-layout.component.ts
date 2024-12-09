import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { IconComponent } from "../../shared/components/icon/icon.component";

@Component({
  selector: "app-main-layout",
  imports: [CommonModule, IconComponent],
  templateUrl: "./main-layout.component.html",
  styleUrls: ["./main-layout.component.scss"],
})
export class MainLayoutComponent {}
