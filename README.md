_Notice_

The project is currently being developed through the `create-react-app` utility. That being said, once all the components are defined and the functionalities of the application are included, the project will be also published on codepen.

Link to the working pen right [here](https://codepen.io/borntofrappe/full/BPOWxo/)

## Preface

The purpose of this project is the creation of a **Drum Machine**, built through **React.js** and for the _Front End Libraries_ certification @freeCodeCamp.

It is the last project to earn the certification, and while it comes with a list of _user stories_ decidedly shorter than the counterpart for the **Pomodoro Clock** application, it comes with its own set of challenges. How to incorporate the audio seems the most curcial challenge of said set. 

## Design

Much alike the previous projects, I decided to spend some time upfront on the design of the application, before delving in the creation of a _functioning_ app. You can find the UI [right here](https://codepen.io/borntofrappe/pen/wxxrRX). 

I'd like to maybe add more UI elements in the future, but for the time being, the simplicity of the design is quite satisfactory. The most pressing matter, in terms of design and in my biased opinion, is the inclusion of SVG assets for the nine clickable elements, with icons used to visualize and represent the different audio which are bound to be included in the project. As I am not a designer, by far, this matter is shelved for a later update.

## React.js

When I designed the UI of the application, I also spent some time in the `script.js` file, practicing with JavaScript logic to include on the screen the text of the button pressed by the user. Pressed directly or by means of keyboard, through the matching key. This probably breaks the essence of the UI label, but most importantly provides me already with a solid structure on which to build to fulfill user stories.

The simple HTML + CSS + JS structure is ported to **React.js** with the following component-based structure:

- `index.js` renders the single stateful component responsible for the application, in the single `<div>` element found in the page;

- `App.js` manages the state for the entire application and renders the components responsible for the UI of the application;

- `AppOutput.js`, for the time being, renders the output of the application in a single `<div>` container;

- `AppInput.js` includes nine clickable elements, nine buttons which are responsible for the input of the application. In trying to keep the code concise and readable, I planned to create a separate component for the button, and iterate through an array as to include multiple copies of said button. Instead of creating a separate `.js` file however, I took advantage of the `styled-components` library. Through this dependency, I created a button in the current component and then introduced multiple copies of this, styled, component.


```JSX
const InputButton = styled.button`
  // property value pairs
`;

const keys = ["q", "w", "e", "a", "s", "d", "z", "x", "c"];

const AppInput = (props) =>  {
  const InputButtons = keys.map(key => <InputButton key={key} onClick={props.handleInput}>{key}</InputButton>);
  return(
    <div className="AppInput">
      {InputButtons}
    </div>
  );
}
```

## User Stories

As briefly introduced in the preface, the list of user stories is quite concise:

- [x] there exist an container with `id="drum-machine`, containing all elements;

- [x] within the container there exist an element with `id="display"`;

- [x] within the same container there exist 9 clickable elements with `class="drum-pad"`, a unique id and inner text corresponding to the following keys: `["Q", "W", "E", "A", "S", "D", "Z", "X", "C"]`. In order;

- [x] within each `.drum-pad` there exist an `<audio>` element which an `src` attribute leading toward an audio clip, with `class="clip"` and an `id` matching the inner text of the parent (`Q`, `W` and so on);

- [x] upon clicking on a `.drum-pad`, the nested audio element should be played;

- [x] the audio clip and the pad as a whole needs to function in response to a click event as well as a key stroke, when pressing a key matching one of the values;

- [x] beside playing the audio, a string describing the associated audio clip should be included in the `#display` element.

## Closing Thoughts

As I needed to include the `audio` elements, I decided to remove the array nesting the different values for the buttons and in its place I decided to define an object. An object defining the original array and the URL of the different audio elements. This allows to easily include the audio clips exactly where they ought to be declared, nested in each button.

```JSX
const buttons = {
  keys: ["Q", "W", "E", "A", "S", "D", "Z", "X", "C"],
  audioPrefix: "http://sampleswap.org/samples-ghost/%20MAY%202014%20LATEST%20ADDITIONS/DRUMS%20(FULL%20KITS)/Japanese%20Drums/",
  audioURL: ["63[kb]daibyoshi-A1", "71[kb]daibyoshi-A3", "256[kb]hirado-A1", "88[kb]miyadaiko-A1", "41[kb]miyadaiko-C1", "55[kb]miyadaiko-D1", "8[kb]mokugyo-A1", "10[kb]mokusho-A1", "256[kb]okedo-A1"],
  audioSuffix: ".wav.mp3"
}
```

The URL is actually split in three as to include two strings for the sections of the URL which never change and isolate in an array the strings responsible for the different clips.

Once the audio clips are included, alongside the classes and identifiers required by the user stories:

```JSX
const InputButtons = buttons.keys.map((key, index) => 
  <InputButton 
    className="drum-pad"
    id={key}
    key={key} 
    onClick={props.handleInput}>
      {key}
      <audio 
        className="clip"
        id={key}
        src={buttons.audioPrefix + buttons.audioURL[index] + buttons.audioSuffix}>
      </audio>
  </InputButton>
);
```

It is a matter of playing the audio when the buttons are clicked/pressed. I decided to here include a function which receives as argument the pressed/clicked button, and plays the nested audio element.

```JSX
playAudio(element) {
  let audio = element.querySelector("audio");
  audio.play();
}
```

This allows me to easily include the function both in response to a `click` event and a `keydown` event, simply by passing the interacting button.