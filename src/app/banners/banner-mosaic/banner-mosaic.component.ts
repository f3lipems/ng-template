import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-banner-mosaic',
  standalone: true,
  imports: [CommonModule, MatButtonModule],
  templateUrl: './banner-mosaic.component.html',
  styleUrl: './banner-mosaic.component.scss'
})
export class BannerMosaicComponent {

  @Input() items: [{ 'featured': boolean, 'link': string, 'category': string, 'collor': string, 'title': string, 'description': string, 'image': string }] | any | undefined;

  ngOnInit() {
    this.items = [
      {
        "featured": true,
        "link": "/componentes",
        "category": "Test",
        "collor": "#003366",
        "title": "Título do item um",
        "description": "Description text",
        "image": "assets/images/070-550x520.jpg"
      },
      {
        "featured": false,
        "link": "/componentes",
        "category": "Test",
        "collor": "#006666",
        "title": "Título do item dois",
        "description": "Description text",
        "image": "assets/images/024-550x520.jpg"
      },
      {
        "featured": false,
        "link": "/componentes",
        "category": "Test",
        "collor": "#424242",
        "title": "Título do item três",
        "description": "Description text",
        "image": "assets/images/092-550x520.jpg"
      },
      {
        "featured": false,
        "link": "/componentes",
        "category": "Test",
        "collor": "#cc0000",
        "title": "Título do item quatro",
        "description": "Description text",
        "image": "assets/images/018-550x520.jpg"
      },
      {
        "featured": false,
        "link": "/componentes",
        "category": "Test",
        "collor": "#cccc00",
        "title": "Título do item cinco",
        "description": "Description text",
        "image": "assets/images/120-768x512.jpg"
      },
    ]
  }

}
