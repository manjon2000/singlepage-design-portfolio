import { Component, Input } from '@angular/core';
import { sliderConfigurationInterface } from '../../slider/types/slider.interfaces';

@Component({
  selector: 'ui-my-work',
  templateUrl: './my-work.component.html',
  styleUrls: ['./my-work.component.scss']
})
export class MyWorkComponent   {

  @Input() configSlider: sliderConfigurationInterface = {
    sliderData: [
      {
        sliderAlt: 'Slider 1',
        sliderImage: '/assets/slider1.png'
      },
      {
        sliderAlt: 'Slider 2',
        sliderImage: '/assets/slider2.png'
      },
      {
        sliderAlt: 'Slider 3',
        sliderImage: '/assets/slider3.png'
      },
      {
        sliderAlt: 'Slider 4',
        sliderImage: '/assets/slider4.png'
      },
      {
        sliderAlt: 'Slider 5',
        sliderImage: '/assets/slider5.png'
      }
    ]
  };
  ngOnInit(): void {}
  ngAfterContentInit(): void {}

}
