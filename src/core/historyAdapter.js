// Simple history adapter: centralizes patching of pushState/replaceState and provides an event subscription
// API. Consumers can call `start()` to enable patching (idempotent) and `stop()` to restore originals.

let started = false;
let origPush = null;
let origReplace = null;

const listeners = new Set();

function dispatchLocationChange() {
    const evt = new Event('locationchange');
    window.dispatchEvent(evt);
    // also notify listeners directly
    for (const l of Array.from(listeners)) {
        try {
            l();
        } catch {
            // ignore listener errors
        }
    }
}

function wrapHistoryMethod(method) {
    return function () {
        const result = (method === 'pushState' ? origPush : origReplace).apply(this, arguments);
        dispatchLocationChange();
        return result;
    };
}

export function start() {
    if (typeof window === 'undefined' || started) {
        return;
    }
    origPush = window.history.pushState;
    origReplace = window.history.replaceState;
    window.history.pushState = wrapHistoryMethod('pushState');
    window.history.replaceState = wrapHistoryMethod('replaceState');
    started = true;
}

export function stop() {
    if (!started) {
        return;
    }
    if (origPush) {
        window.history.pushState = origPush;
    }
    if (origReplace) {
        window.history.replaceState = origReplace;
    }
    origPush = null;
    origReplace = null;
    started = false;
}

export function subscribe(cb) {
    listeners.add(cb);
    return () => listeners.delete(cb);
}

export function notify() {
    dispatchLocationChange();
}

export function isStarted() {
    return started;
}
