# Broox_Blobs
Js library that receives osc blob data and dispatches native browser touch events

## How to use it?

Add the library to you project

`<script src="broox/broox-blobs.js"></script>`

This will initialize the library and add the object to the window: `window.broox_blobs`. 
By default the library will start listening to incoming messages.

The supported addresses are:

- `/tuio/2Dobj`
- `/tuio/2Dcur`
- `/tuio/2Dblb`
- `/tuio/broox_markers`
- `/tuio/skel` 

When blobs are added, moved or removed the library dispatches native browser [touch events](https://developer.mozilla.org/en-US/docs/Web/API/Touch_events).


### Touch target

The default behaviour is to dispatch the touch event to the [window](https://developer.mozilla.org/en-US/docs/Web/API/Window). 

To set a custom target:

`window.broox_blobs.setTouchTarget(document.getElementById("my_custom_target"))`

### Input

By default the library starts listening to incoming osc messages. When it receives a messages with a supported address, it only listens to this address and discards messages with other addresses.

If you what to customize this behaviour:

```js
window.broox_blobs.setInput([
  {
    address: "/tuio/skel",
    touchEvents: true
  },
  {
    address: "/tuio/2Dblb",
    touchEvents: false
  },
]);
```

In this example we accept incoming messages for `/tuio/skel` and `"/tuio/2Dblb`, but we only dispatch touches for `/tuio/skel`

