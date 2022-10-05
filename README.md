## Preface

The purpose of this project is the creation of a **Drum Machine**, built through **React.js** and for the _Front End Libraries_ certification @freeCodeCamp.

It is the last project to earn the certification, and while it comes with a list of _user stories_ decidedly shorter than the counterpart for the **Pomodoro Clock** application, it comes with its own set of challenges. How to incorporate the audio seems the most curcial challenge of said set. 

## User Stories

As briefly introduced in the preface, the list of user stories is quite concise:

- [x] there exist an container with `id="drum-machine`, containing all elements;

- [x] within the container there exist an element with `id="display"`;

- [x] within the same container there exist 9 clickable elements with `class="drum-pad"`, a unique id and inner text corresponding to the following keys: `["Q", "W", "E", "A", "S", "D", "Z", "X", "C"]`. In order;

- [x] within each `.drum-pad` there exist an `<audio>` element which an `src` attribute leading toward an audio clip, with `class="clip"` and an `id` matching the inner text of the parent (`Q`, `W` and so on);

- [x] upon clicking on a `.drum-pad`, the nested audio element should be played;

- [x] the audio clip and the pad as a whole needs to function in response to a click event as well as a key stroke, when pressing a key matching one of the values;

- [x] beside playing the audio, a string describing the associated audio clip should be included in the `#display` element.


## Live Demonstration 

Live project link: <https://ernesthenry.github.io/Drum-Machine/> 

## Project Set up

In the project directory, you can run:

### `npm install`

Then run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

