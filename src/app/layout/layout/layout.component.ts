import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MainMenuComponent } from "../../comps/main-menu/main-menu.component";

@Component({
  selector: 'app-layout',
  imports: [RouterModule, MainMenuComponent],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss'
})
export class LayoutComponent {

}
