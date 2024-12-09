import { CommonModule } from "@angular/common";
import { Component, inject, OnInit, signal } from "@angular/core";
import { FileBrowserService } from "../../services/file-browser.service";
import {
  DirectoryItem,
  DirectoryItemWithIcon,
} from "../../services/file-browser.types";

@Component({
  selector: "app-file-grid-view",
  imports: [CommonModule],
  templateUrl: "./file-grid-view.component.html",
  styleUrls: ["./file-grid-view.component.scss"],
})
export class FileGridViewComponent implements OnInit {
  content = signal<DirectoryItemWithIcon[]>([]);
  private fileBrowserService = inject(FileBrowserService);
  private async loadFiles() {
    const files = await this.fileBrowserService.getDirectory(
      "/home/toby/Documents",
    );
    this.content.set(files);
  }
  ngOnInit(): void {
    this.loadFiles();
  }
}
