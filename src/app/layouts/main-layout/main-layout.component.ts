import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { IconComponent } from "../../shared/components/icon/icon.component";
import { FileGridViewComponent } from "../../features/file-browser/components/file-list/file-grid-view.component";

@Component({
  selector: "app-main-layout",
  imports: [CommonModule, IconComponent, FileGridViewComponent],
  templateUrl: "./main-layout.component.html",
  styleUrls: ["./main-layout.component.scss"],
})
export class MainLayoutComponent {}
