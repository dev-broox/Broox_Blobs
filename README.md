# Broox Blobs
Js library that receives osc blob data and dispatches native browser touch events

## Build

```
npm run build
```


## How to use it?

Add the library to your project

```html
<script src="broox/broox-blobs.js"></script>
```

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

```js
window.broox_blobs.setTouchTarget(document.getElementById("my_custom_target"))
```

### Input

By default the library starts listening to incoming osc messages. When it receives a message with a supported address, it only listens to this address and discards messages with other addresses.

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

In this example we accept incoming messages for `/tuio/skel` and `/tuio/2Dblb`, but we only dispatch touches for `/tuio/skel`

### Active Area

The active area defines the blob coordinates and size transform. By default the area is the window (`window.innerWidth`, `window.innerHeight`).

To set a custom transform:

```js
window.broox_blobs.setActiveArea(x, y, width, height)
```

For example:

If the osc input x position is `0.5`, the output x coordinate for this blob is: `0.5 * area.width + area.x`

### Active Blobs

```js
window.broox_blobs.getActiveItems("/tuio/2Dblb")
```

Returns the list of active blobs for a given address. If you don't set the address it will return the blobs for the first address it is listening to.
```js
window.broox_blobs.getActiveItems()
```


