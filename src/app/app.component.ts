import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BannerSplitComponent } from './banners/banner-split/banner-split.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, BannerSplitComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'ng-template';
}
