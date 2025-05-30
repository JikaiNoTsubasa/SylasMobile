import { Component, inject } from '@angular/core';
import { SyService } from '../../services/SyService';
import { User } from '../../Models/Database/User';
import { CommonModule } from '@angular/common';
import { XpBarComponent } from "../../comps/xp-bar/xp-bar.component";
import { FadeIn } from '../../animations';

@Component({
  selector: 'app-main',
  imports: [CommonModule, XpBarComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss',
  animations: [FadeIn(800, false)]
})
export class MainComponent {

  syService = inject(SyService);

  user: User | null = null;

  ngOnInit(){
    this.refreshUser();
  }

  refreshUser(){
    this.syService.fetchMyUser().subscribe({
      next: (user) => {
        this.user = user;
      }
    });
  }
}
