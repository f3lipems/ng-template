import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-banner-split',
  standalone: true,
  imports: [CommonModule, MatIconModule, MatButtonModule],
  templateUrl: './banner-split.component.html',
  styleUrl: './banner-split.component.scss'
})
export class BannerSplitComponent implements OnInit {

  @Input() bannerItems: { "link": string; "image": string; "title": string; "btnText": string; "icon": string; "timeAgo": string; "comments": string; "color": string; }[] | undefined;

  ngOnInit(): void {
    if (!this.bannerItems) {
      this.bannerItems = [
        {
          "link": "/componentes",
          "image": "assets/images/070-550x520.jpg",
          "title": "Título do item um",
          "btnText": "Action 1",
          "icon": "home",
          "timeAgo": "7",
          "comments": "4",
          "color": "primary"
        },
        {
          "link": "/componentes",
          "image": "assets/images/024-550x520.jpg",
          "title": "Título do item dois",
          "btnText": "Action 2",
          "icon": "face",
          "timeAgo": "9",
          "comments": "7",
          "color": "accent"
        },
        {
          "link": "/componentes",
          "image": "assets/images/092-550x520.jpg",
          "title": "Título do item tres",
          "btnText": "Action 3",
          "icon": "",
          "timeAgo": "6",
          "comments": "3",
          "color": "warn"
        },
        {
          "link": "/componentes",
          "image": "assets/images/018-550x520.jpg",
          "title": "Título do item quatro",
          "btnText": "Action 4",
          "icon": "",
          "timeAgo": "5",
          "comments": "2",
          "color": ""
        },
      ]
    }
  }
}
