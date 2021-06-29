# ngx-noui-slider

Angular wrapper component of [noUiSlider](https://refreshless.com/nouislider/) library.
<!-- 
![npm](https://img.shields.io/npm/v/ngx-glide) ![NPM](https://img.shields.io/npm/l/ngx-glide) ![npm bundle size](https://img.shields.io/bundlephobia/min/ngx-glide) -->

## Environment Support

- Angular 9+

<!-- ## Compatibility

Versions compatibility list:

| ngx-glide | Angular      |
| --------- | ------------ |
| 12.x.x    | 12.x.x       |
| 11.x.x    | 11.x.x       |
| 10.x.x    | 10.x.x       |
| 1.x.x     | 6.xx - 9.x.x | -->

## Installation

```sh
npm i ngx-noui-angular-slider --save
```

## Demo

[Stackblitz]()

## Usage

Add css files to the `styles` section of your `angular.json`:

```ts
"styles": [
  ...
  "node_modules/nouislider/dist/nouislider.css",
  ...
],
```

<!-- You can either import the `styles` files into main scss file:

```scss
@import '~@glidejs/glide/src/assets/sass/glide.core';
@import '~@glidejs/glide/src/assets/sass/glide.theme';
``` -->

Import `NgxNouiSliderModule` into the current module's imports:

```ts
import { NgxNouiSliderModule } from "ngx-noui-slider";

imports: [
  // ...
  NgxNouiSliderModule,
],
```

Use in your components (add html items into the ngx-glide component):

```html
<ngx-noui-slider 
    [config]="config" 
    (onUpdate)="update($event)" 
    #nouislider>
</ngx-noui-slider>
```
You can pass configuration to the component instance:

```ts
import * as noUiSlider from 'noUiSlider';

@Component({
  ...
})

export class AppComponent {
config: noUiSlider.Options  = {
    range: {
      'min': 0,
      'max': 40
    },
    start: 20,
    margin: 2,
    step: 2
  };
}
```

You can access to the component menthods directly from the instance like this:

```ts
// Import from library
import { NgxNouiSliderComponent } from 'ngx-noui-slider';

@Component({
  ...
})

export class AppComponent {
    // Get the component instance similar.
    @ViewChild('nouislider', { static: false }) nouisliderRef: NgxNouiSliderComponent;

    doSomething(): void {
        this.nouisliderRef.get();
    }
}
```

## API
<hr style="border-top:1px solid #ccc; height: 0; margin: 0"/>

### Inputs

| Input                 | Type              | Default                                      | Description                                                                                |
| --------------------- | ----------------- | -------------------------------------------- | ------------------------------------------------------------------------------------------ |
| `config`| Object| `null`| You need to pass the configuration object of type `noUiSlider.Options`. You can get reference from the [noUiSlider](https://refreshless.com/nouislider/) library

### Outputs

| Output            | Response Type | Response Properties* | Description                                                                                                                                                                |
| -----------------| -------- | --------------------------------------------- |-------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `onStart`| Object | values, handle, unencoded, tap, positions, noUiSlider | This event fires when a handle is clicked (`mousedown`, or the equivalent touch events). |
| `onSlide`| Object | values, handle, unencoded, tap, positions, noUiSlider | This event is useful to specifically listen to a handle being dragged, while **ignoring other updates** to the slider value. This event also fires on a change by a 'tap'. In most cases, the `'update'` is the better choice. |
| `onDrag`| Object | values, handle, unencoded, tap, positions, noUiSlider | Use this event to listen for when a connect element between handles is being dragged, while **ignoring other updates** to the slider values.<br>The handle in the callback is the first handle connected to the dragged connect. |
| `onUpdate`| Object | values, handle, unencoded, tap, positions, noUiSlider | Use this event when synchronizing the slider value to another element, such as an `<input>`. It fires every time the slider values are **changed**, either by a user or by calling API methods. Additionally, it fires **immediately** when bound. In most cases, this event should be more convenient than the `'slide'` event. |
| `onChange`| Object | values, handle, unencoded, tap, positions, noUiSlider | This event is similar to the 'change' events on regular `<input>` elements. It fires when a user *stops* sliding, when a slider value is changed by 'tap', or on keyboard interaction.|
| `onSet`| Object | values, handle, unencoded, tap, positions, noUiSlider | Whenever a slider is changed to a new value, this event is fired. This function will trigger every time a slider stops changing, **including** after calls to the `.set()` method. This event can be considered as the 'end of slide'. |
| `onEnd`| Object | values, handle, unencoded, tap, positions, noUiSlider | This event is the opposite of the `'start'` event. If fires when a handle is released (`mouseup` etc), or when a slide is canceled due to other reasons (such as mouse cursor leaving the browser window). |


**Note**:
Events always fire in the following order:
`'start'` > `'slide'` > `'drag'` > `'update'` > `'change'` > `'set'` > `'end'`

For more info visit - [noUiSlider Events](https://refreshless.com/nouislider/events-callbacks/)

**Response Properties\*:**
`values`: Current slider values (array);
`handle`: Handle that caused the event (number);
`unencoded`: Slider values without formatting (array);
`tap`: Event was caused by the user tapping the slider (boolean);
`positions`: Left offset of the handles (array);
`noUiSlider`: slider public Api (noUiSlider);

<hr style="border-top:1px solid #ccc; height: 0; margin: 0"/>

##Interfaces

<details>
  <summary>Css Classes</summary>
  
```ts
interface CssClasses {
    target: string;
    base: string;
    origin: string;
    handle: string;
    handleLower: string;
    handleUpper: string;
    touchArea: string;
    horizontal: string;
    vertical: string;
    background: string;
    connect: string;
    connects: string;
    ltr: string;
    rtl: string;
    textDirectionLtr: string;
    textDirectionRtl: string;
    draggable: string;
    drag: string;
    tap: string;
    active: string;
    tooltip: string;
    pips: string;
    pipsHorizontal: string;
    pipsVertical: string;
    marker: string;
    markerHorizontal: string;
    markerVertical: string;
    markerNormal: string;
    markerLarge: string;
    markerSub: string;
    value: string;
    valueHorizontal: string;
    valueVertical: string;
    valueNormal: string;
    valueLarge: string;
    valueSub: string;
}
```
</details>

<details>
  <summary>Methods</summary>
  
```ts
interface API {
    destroy: () => void;
    steps: () => NextStepsForHandle[];
    on: (eventName: string, callback: EventCallback) => void;
    off: (eventName: string) => void;
    get: (unencoded?: boolean) => GetResult;
    set: (input: number | string | (number | string)[], fireSetEvent?: boolean, exactInput?: boolean) => void;
    setHandle: (handleNumber: number, value: number | string, fireSetEvent?: boolean, exactInput?: boolean) => void;
    reset: (fireSetEvent?: boolean) => void;
    options: Options;
    updateOptions: (optionsToUpdate: UpdatableOptions, fireSetEvent: boolean) => void;
    target: HTMLElement;
    removePips: () => void;
    removeTooltips: () => void;
    getTooltips: () => {
        [handleNumber: number]: HTMLElement | false;
    };
    getOrigins: () => {
        [handleNumber: number]: HTMLElement;
    };
    pips: (grid: Pips) => HTMLElement;
}
```
</details>

<details>
  <summary>Options / Configurations</summary>
  
```ts
// These options can be updated after initialization
interface UpdatableOptions {
    range?: Range;
    start?: StartValues;
    margin?: number;
    limit?: number;
    padding?: number | number[];
    snap?: boolean;
    step?: number;
    pips?: Pips;
    format?: Formatter;
    tooltips?: boolean | PartialFormatter | (boolean | PartialFormatter)[];
    animate?: boolean;
}

// Below options cannot be updated after initialization
interface Options extends UpdatableOptions {
    range: Range;
    connect?: "lower" | "upper" | boolean | boolean[];
    orientation?: "vertical" | "horizontal";
    direction?: "ltr" | "rtl";
    behaviour?: string;
    keyboardSupport?: boolean;
    keyboardPageMultiplier?: number;
    keyboardDefaultStep?: number;
    documentElement?: HTMLElement;
    cssPrefix?: string;
    cssClasses?: CssClasses;
    ariaFormat?: PartialFormatter;
    animationDuration?: number;
}
```
</details>

<details>
  <summary>Enums</summary>
  
```ts
enum PipsMode {
    Range = "range",
    Steps = "steps",
    Positions = "positions",
    Count = "count",
    Values = "values"
}
enum PipsType {
    None = -1,
    NoValue = 0,
    LargeValue = 1,
    SmallValue = 2
}

interface Range {
    min: SubRange;
    max: SubRange;
    [key: string]: SubRange;
}
```
</details>


<hr style="border-top:1px solid #ccc; height: 0; margin: 0;margin-top:16px"/>

## Collaborators
Mahir Shaikh - [GitHub](https://github.com/mahir-shaikh)
Prafull Nikose - [GitHub](https://github.com/prafullnikose)