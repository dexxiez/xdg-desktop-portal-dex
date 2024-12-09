import { Injectable } from "@angular/core";
import { invoke } from "@tauri-apps/api/core";

@Injectable({ providedIn: "root" })
export class TauriService {
  async invokeCommand<T>(command: string, args: any): Promise<T> {
    return invoke(command, args);
  }
}
