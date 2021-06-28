import { Component, OnInit, Input, ViewChild, AfterViewInit, Output, EventEmitter } from '@angular/core';
import * as noUiSlider from 'nouislider';

@Component({
  selector: 'ngx-noui-slider',
  templateUrl: './ngx-noui-slider.component.html',
  styleUrls: []
})
export class NgxNouiSliderComponent implements OnInit, AfterViewInit {
  // @Input() step: number;
  // @Input() min: number = 0;
  // @Input() max: number = 9999999999999999;
  // @Input() start: noUiSlider.;
  // @Input() margin: number;
  // @Input() limit;
  // @Input() connect: Array<boolean> | boolean = null;
  // @Input() direction: boolean = false;
  // @Input() tooltips: boolean = false;
  // @Input() behaviour: string;

  @Input() config: noUiSlider.Options;
  @Output() onChange: EventEmitter<any> = new EventEmitter()
  @Output() onSet: EventEmitter<any> = new EventEmitter()
  @Output() onEnd: EventEmitter<any> = new EventEmitter()
  @Output() onStart: EventEmitter<any> = new EventEmitter()
  @Output() onSlide: EventEmitter<any> = new EventEmitter()
  @Output() onUpdate: EventEmitter<any> = new EventEmitter()
  @Output() onDrag: EventEmitter<any> = new EventEmitter()
  @ViewChild('calcSliderEl', { static: false }) elRef: any;
  
  public get options() {
    if(this.slider){
      return this.slider.options
    }
    return null
  }

  public get target() {
    if(this.slider){
      return this.slider.target
    }
    return null
  }

  slider;

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    const slider = this.elRef.nativeElement;
    if(this.config){
      noUiSlider.create(slider, this.config);
      this.bindEvents(slider);
    }else{
      console.warn('No config provided for ngx-noui-slider')
    }
  }

  bindEvents(slider: any) {
    if (slider && slider.noUiSlider) {
      this.slider = slider.noUiSlider;

      this.slider.on('change', (values, handle, unencoded, tap, positions, noUiSlider) => {
        this.onChange.emit({values, handle, unencoded, tap, positions, noUiSlider})
      });

      this.slider.on('set', (values, handle, unencoded, tap, positions, noUiSlider) => {
        this.onSet.emit({values, handle, unencoded, tap, positions, noUiSlider})
      });

      this.slider.on('end', (values, handle, unencoded, tap, positions, noUiSlider) => {
        this.onEnd.emit({values, handle, unencoded, tap, positions, noUiSlider})
      });

      this.slider.on('start', (values, handle, unencoded, tap, positions, noUiSlider) => {
        this.onStart.emit({values, handle, unencoded, tap, positions, noUiSlider})
      });

      this.slider.on('slide', (values, handle, unencoded, tap, positions, noUiSlider) => {
        this.onSlide.emit({values, handle, unencoded, tap, positions, noUiSlider})
      });

      this.slider.on('update', (values, handle, unencoded, tap, positions, noUiSlider) => {
        this.onUpdate.emit({values, handle, unencoded, tap, positions, noUiSlider})
      });

      this.slider.on('drag', (values, handle, unencoded, tap, positions, noUiSlider) => {
        this.onDrag.emit({values, handle, unencoded, tap, positions, noUiSlider})
      });
    }
  }

  ngOnDestroy(): void {
  }

  destroy() {
    if (this.slider) {
      this.slider.destroy()
    }
  };

  steps(){
    if(this.slider){
      this.slider.steps()
    }
  }

  on(eventName: string, callback) {
    if (this.slider) {
      return this.slider.on(eventName, callback)
    }
  }
  off(eventName: string) {
    if (this.slider) {
      return this.slider.off(eventName)
    }
  }

  get(unencoded?: boolean) {
    if (this.slider) {
      return this.slider.get(unencoded)
    }
  }

  set(input: number | string | (number | string)[], fireSetEvent?: boolean, exactInput?: boolean) {
    if (this.slider) {
      return this.slider.set(input, fireSetEvent, exactInput)
    }
  }

  setHandle(handleNumber: number, value: number | string, fireSetEvent?: boolean, exactInput?: boolean) {
    if (this.slider) {
      return this.slider.setHandle(handleNumber, value, fireSetEvent, exactInput)
    }
  }

  reset(fireSetEvent?: boolean) {
    if (this.slider) {
      return this.slider.reset(fireSetEvent)
    }
  }

  //TODO: optionsToUpdate: UpdatableOptions
  updateOptions(optionsToUpdate: any, fireSetEvent: boolean) {
    if (this.slider) {
      return this.slider.updateOptions(optionsToUpdate, fireSetEvent)
    }
  };
  removePips() {
    if (this.slider) {
      return this.slider.removePips()
    }
  };
  removeTooltips() {
    if (this.slider) {
      return this.slider.removeTooltips()
    }
  }
  getTooltips() {
    if (this.slider) {
      return this.slider.getTooltips()
    }
  }
  getOrigins() {
    if (this.slider) {
      return this.slider.getOrigins()
    }
  }
  pips(grid) {
    if (this.slider) {
      return this.slider.pips(grid)
    }
  }
}