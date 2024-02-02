import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-banner-mosaic',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './banner-mosaic.component.html',
  styleUrl: './banner-mosaic.component.scss'
})
export class BannerMosaicComponent {

  @Input() items: [] | any | undefined;
	public colors;

	constructor() {
	  this.colors = colorsCategory;
	 }

	ngOnInit() {
		console.debug(this.items);
	}

}
