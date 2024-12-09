import { ApplicationConfig } from "@angular/core";
import { provideRouter } from "@angular/router";

import { routes } from "./app.routes";
import { TauriService } from "./core/services/tauri/tauri.service";

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), TauriService],
};
