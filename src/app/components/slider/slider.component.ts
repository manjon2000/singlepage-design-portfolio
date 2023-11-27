import {
  Component, Input, OnInit,
  AfterViewInit, ViewChild,
  ElementRef, Renderer2, HostListener
} from '@angular/core';
import { sliderConfigurationInterface } from './types/slider.interfaces';

@Component({
  selector: 'ui-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent implements OnInit, AfterViewInit {

  constructor(private renderer: Renderer2) { }

  @ViewChild('sliderWrapper') wrapperSlider!: ElementRef<HTMLElement>;
  @Input() sliderConfiguration!: sliderConfigurationInterface;

  sliderCount: number = 0;

  ngOnInit(): void { }
  ngAfterViewInit(): void {
    this.wrapperSliderConfiguration();
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: Event): void {
    this.sliderCount = 0
    this.wrapperSliderConfiguration();
  }

  wrapperSliderConfiguration() {
    const wrapper = this.wrapperSlider.nativeElement;
    if (wrapper) {
      if (window.innerWidth < 768) {
        wrapper.style.cssText = `
          width: ${(this.sliderConfiguration.sliderData.length * 100)}%;
        `;

        const sliderItems = wrapper.childNodes;
        sliderItems.forEach((element) => {
          const item = (element) as HTMLElement;
          if (item.style) {
            item.style.cssText = `
               width: ${(this.sliderConfiguration.sliderData.length * 4)}%;
            `;
          }
        });
      } else {
        wrapper.style.cssText = `
          width: ${((this.sliderConfiguration.sliderData.length / 3) * 100)}%;
        `;
      }
    }
  }

  sliderNext() {
    if (this.sliderCount < this.sliderConfiguration.sliderData.length - 1) {
      this.sliderCount++;
      this.updateSliderTransform();
    }
  }

  sliderPrev() {
    if (this.sliderCount > 0) {
      this.sliderCount--;
      this.updateSliderTransform();
    }
  }

  private updateSliderTransform() {
    const wrapper = this.wrapperSlider.nativeElement;

    if (wrapper) {
      if (window.innerWidth < 768) {
        if (this.sliderConfiguration.sliderData.length) {
          const slidePercentage = Math.floor((this.sliderCount * 100) / this.sliderConfiguration.sliderData.length);
          const translateXValue = `translateX(-${slidePercentage}%)`;
          this.renderer.setStyle(wrapper, 'transform', translateXValue);
        }
      } else {
        if (this.sliderCount < this.sliderConfiguration.sliderData.length - 2) {
          const slidePercentage = Math.floor((this.sliderCount * 100) / this.sliderConfiguration.sliderData.length);
          const translateXValue = `translateX(-${slidePercentage}%)`;
          this.renderer.setStyle(wrapper, 'transform', translateXValue);
        }
      }
    }
  }

}
