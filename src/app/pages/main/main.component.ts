import { Component, inject } from '@angular/core';
import { SyService } from '../../services/SyService';
import { User } from '../../Models/Database/User';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-main',
  imports: [ CommonModule ],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
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
