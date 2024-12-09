import { Component, inject } from "@angular/core";
import { CommonModule } from "@angular/common";
import { TauriService } from "./core/services/tauri/tauri.service";

@Component({
  selector: "app-root",
  imports: [CommonModule],
  templateUrl: "./app.component.html",
})
export class AppComponent {
  private tauriService = inject(TauriService);
  greetingMessage = "";

  greet(event: SubmitEvent, name: string): void {
    event.preventDefault();

    this.tauriService.invokeCommand<string>("greet", { name }).then((text) => {
      this.greetingMessage = text;
    });
  }
}
