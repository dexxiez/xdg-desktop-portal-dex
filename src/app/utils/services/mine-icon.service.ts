import { Injectable } from "@angular/core";
import { Icon, IconIdentifier } from "./mime-icon.types";

@Injectable({
  providedIn: "root",
})
export class MimeIconService {
  private readonly mimeIconMap = new Map<string, IconIdentifier>([
    // Images
    ["image/jpeg", "image"],
    ["image/png", "image"],
    ["image/gif", "image"],
    ["image/svg+xml", "image"],
    ["image/webp", "image"],

    // Documents
    ["application/pdf", "document-text"],
    ["application/msword", "document"],
    [
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
      "document",
    ],
    ["application/vnd.ms-excel", "table"],
    [
      "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
      "table",
    ],

    // Code/Text
    ["text/plain", "document-text"],
    ["text/html", "code"],
    ["text/css", "code"],
    ["text/javascript", "code"],
    ["application/json", "code"],
    ["text/markdown", "document-text"],

    // Audio
    ["audio/mpeg", "music-note"],
    ["audio/wav", "music-note"],
    ["audio/ogg", "music-note"],

    // Video
    ["video/mp4", "video"],
    ["video/webm", "video"],
    ["video/ogg", "video"],

    // Archives
    ["application/zip", "archive"],
    ["application/x-rar-compressed", "archive"],
    ["application/x-tar", "archive"],
    ["application/gzip", "archive"],

    // Fallback
    ["application/octet-stream", "document"],
  ]);

  private readonly iconIdentifierMap = new Map<IconIdentifier, Icon>([
    ["document", ""],
    ["archive", "󰛫"],
    ["code", "󰈮"],
    ["image", "󰈟"],
    ["music-note", "󰈣"],
    ["table", "󰱾"],
    ["video", "󰈫"],
    ["document-text", "󰈙"],
    ["generic-file", ""],
  ]);

  /**
   * Get the icon identifier for a given MIME type
   * @param mimeType - The MIME type to look up
   * @returns The corresponding icon identifier or a default icon for unknown types
   */
  getIconForMime(mimeType: string | null): Icon {
    if (!mimeType) return this.iconIdentifierMap.get("generic-file")!;
    const icon = this.mimeIconMap.get(mimeType);
    if (icon) return this.iconIdentifierMap.get(icon)!;

    // If no exact match, try matching by category (everything before the slash)
    const category = mimeType.split("/")[0];
    const categoryDefault = this.getCategoryDefault(category);
    if (categoryDefault) return this.iconIdentifierMap.get(categoryDefault)!;

    return this.iconIdentifierMap.get("document")!;
  }

  private getCategoryDefault(category: string): IconIdentifier | null {
    switch (category) {
      case "image":
        return "image";
      case "audio":
        return "music-note";
      case "video":
        return "video";
      case "text":
        return "document-text";
      default:
        return null;
    }
  }
}
