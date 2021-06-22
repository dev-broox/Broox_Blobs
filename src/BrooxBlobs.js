import { isNil } from 'lodash';
import TUIOBlobs from './tuio/TUIOBlobs'

function BrooxBlobs() {
    let self = this;
    let defaultAddress = null;
    let defaultController = new TUIOBlobs(defaultAddress);
    
    let controllers = new Map();

    let touchTarget = window;


    /*
        touchTarget = document // default window
        inputs = [
            {
                address: "/tuio/2Dcur",
                touchEvents: false, // default true
            }
        ]
    */
    this.setInput = function(inputs = [], touchEventsTarget = null){
        controllers = new Map();
        defaultAddress = null;
        defaultController = null;

        for(let input of inputs) {
            let address = input.address;
            if(!address){continue;}
            let controller = new TUIOBlobs(address);
            if(controllers.has(address)) { 
                // only allow one controller with the same input message address
                continue;
            }
            if(!defaultAddress) {
                defaultAddress = address;
            }

            if(input.touchEvents != null) {
                controller.setTouchEventsEnabled(input.touchEvents);
            }

            controllers.set(address, controller)
        }

        this.setTouchTarget(touchEventsTarget ? touchEventsTarget : touchTarget);
    }
    
    this.setTouchTarget = function(target) {
        if(!target) {return;}

        touchTarget = target;

        loopControllers( controller => {
            controller.setTouchTarget(target);
        });
    }

    this.setActiveArea = function(x, y, width, height) {
        loopControllers( controller => {
            controller.setActiveArea(x, y, width, height);
        });
    }

    this.setTouchEventsEnabled = function(isEnabled, address = null) {
        let controller = getControllerFor(address);

        if(controller) {
            controller.setTouchEventsEnabled(isEnabled)
        }
    }

    this.getActiveItems = function(address = null) {
        let controller = getControllerFor(address);

        if(!controller) {
            return new Map();
        }

        return controller.getActiveItems();
    }

    init();

    function init() {
        window.addEventListener("message", onMessage, false);

        window.requestAnimationFrame(loop);
    }

    function onMessage(evt) {
        onOSCMessage(evt.data);
    }

    function onOSCMessage(json){
        loopControllers( controller => {
            controller.onOSCMessage(json);
        })    

        if(defaultController) {
            const address = defaultController.getMessageAddress();

            if(address) {
                controllers.set(address, defaultController);
                defaultController = null;

                if(!defaultAddress) {
                    defaultAddress = address;
                }
            }
        }
    }

    function loop() {
        let touchesAdded = [];
        let touchesMoved = [];
        let touchesDeleted = [];
        let touchesAll = [];

        loopControllers( controller => {
            let touches = controller.updateTouches();

            if(touches && touches.all) {
                if(touches.added) {
                    touchesAdded = touchesAdded.concat(touches.added);
                }
                if(touches.moved) {
                    touchesMoved = touchesMoved.concat(touches.moved);
                }
                if(touches.deleted) {
                    touchesDeleted = touchesDeleted.concat(touches.deleted);
                }
                touchesAll = touchesAll.concat(touches.all);
            }
        })  

        sendTouchesAdded(touchesAdded, touchesAll);
        sendTouchesMoved(touchesMoved, touchesAll);
        sendTouchesDeleted(touchesDeleted, touchesAll);

        window.requestAnimationFrame(loop);
    }

    function loopControllers(action) {
        if(defaultController) {
            action(defaultController);
        }
        else {
            for(let [address, controller] of controllers) {
                action(controller);
            }
        }
    }

    function getControllerFor(address) {
        if(!address && defaultController) {
            return defaultController
        }
        else if(!address && defaultAddress) {
            return controllers.get(defaultAddress)
        }
        else if(address){
            return controllers.get(address);
        }

        return null;
    }

    //
    // send touches
    //

    function sendTouchesAdded(touchesChanged, touchesAll) {
        if(touchesChanged.length == 0){return;}
        touchTarget.dispatchEvent(event("touchstart", touchesChanged, touchesAll));
    }

    function sendTouchesMoved(touchesChanged, touchesAll) {
        if(touchesChanged.length == 0){return;}
        console.log(touchTarget);
        console.log(touchesChanged);
        touchTarget.dispatchEvent(event("touchmove", touchesChanged, touchesAll));
    }

    function sendTouchesDeleted(touchesChanged, touchesAll) {
        if(touchesChanged.length == 0){return;}
        touchTarget.dispatchEvent(event("touchend", touchesChanged, touchesAll));
    }

    function event(type, touchesChanged, touchesAll) {
        return new TouchEvent(type, {
            changedTouches: touchesChanged,
            targetTouches: touchesAll,
            touches: touchesAll
        });
    }
}

export default BrooxBlobs