import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'xp-bar',
  imports: [ CommonModule ],
  templateUrl: './xp-bar.component.html',
  styleUrl: './xp-bar.component.scss'
})
export class XpBarComponent {

  @Input() xpPercent: number = 0;
  @Input() level: number = 0;
  @Input() label: string | null = null;
  @Input() icon: string | null = null;
}
