import { inject, Injectable } from "@angular/core";
import { TauriService } from "../../../core/services/tauri/tauri.service";
import { DirectoryItem, DirectoryItemWithIcon } from "./file-browser.types";
import { MimeIconService } from "../../../utils/services/mine-icon.service";

@Injectable({ providedIn: "root" })
export class FileBrowserService {
  private tauriService = inject(TauriService);
  private iconService = inject(MimeIconService);

  private currentPath = "";
  private currentContent: DirectoryItemWithIcon[] = [];

  async getDirectory(path: string): Promise<DirectoryItemWithIcon[]> {
    if (this.currentPath === path) {
      return this.currentContent;
    }
    const res = await this.tauriService.invokeCommand<DirectoryItem[]>(
      "list_directory",
      {
        path,
      },
    );

    this.currentContent = res.sort(this.sortDirectoryThenFiles).map((item) => ({
      ...item,
      icon:
        item.kind === "Directory"
          ? "󰉋"
          : this.iconService.getIconForMime(item.mime),
    }));
    this.currentPath = path;
    return this.currentContent;
  }

  private sortDirectoryThenFiles(a: DirectoryItem, b: DirectoryItem): number {
    if (a.kind === b.kind) {
      return a.name.localeCompare(b.name);
    }
    if (a.kind === "Directory") {
      return -1;
    }
    return 1;
  }
}
