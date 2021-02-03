import { Component } from '@angular/core';
// import Swiper core and required modules
import SwiperCore, {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
} from 'swiper/core';

// install Swiper modules
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Swiper-Timeline';

  slideData = [
    {
      date: 'March 1999',
      content: 'Tamra Rent A Cat is officially registered as a car rental agency on Jeju Island with its CEO being In-woong Park.'
    },
    {
      date: 'January 2002',
      content: 'Tamra has 120 vehicles registered and opens its first administration office in Seogwipo.'
    },
    {
      date: 'April 2003',
      content: 'Tamra\'s head office is moved to Jeju City and a sales office is opened in Gwangju.'
    },
  ];
}
