/**
 * Set state value.
 * @param {string} namespace The calling function's name (e.g. `redditScroll`).
 * @param {string} key The thing to set (e.g. `preferredColor`).
 * @param {string | number | any} value Value for thing (e.g. `green`). Will be `JSON.stringified()`.
 * @returns {Promise<void>}
 */
 function setState(namespace, key, value) {
    const { promise, resolve } = makePromise();

    key = `${namespace}#${key}`;
    value = JSON.stringify(value);

    chrome.storage.sync.set({ [key]: value }, () => {
        console.log(`Set ${key} to ${value}`);
        resolve();
    });
    return promise;
}

/**
 * Retrieve state value.
 * @param {string} namespace The calling function's name (e.g. `redditScroll`).
 * @param {string} key The thing to get (e.g. `preferredColor`).
 * @param {any} defaultValue Default is returned if key does not exist.
 * @returns {Promise<any>}
 */
function getState(namespace, key, defaultValue=null) {
    const { promise, resolve } = makePromise();
    
    key = `${namespace}#${key}`;

    chrome.storage.sync.get([key], (result) => {
        if (result[key] == null) {
            resolve(defaultValue);
        }
        else {
            resolve(JSON.parse(result[key]));
        }
    });

    return promise;
}

// sync state changes
const state_syncState = new Map();
chrome.storage.onChanged.addListener((changes) => {
    for (const [key, { newValue, oldValue }] of Object.entries(changes)) {
        const listeners = state_syncState.get(key);
        if (listeners && listeners.length) {
            for (const listener of listeners) {
                listener(JSON.parse(newValue), JSON.parse(oldValue));
            }
        }
    }
});

/**
 * Sync state value automatically, calling callback function.
 * @param {string} namespace The calling function's name (e.g. `redditScroll`).
 * @param {string} key The thing to get (e.g. `preferredColor`).
 * @param {(newValue: any, oldValue: any) => void} cb Function executed immediately, then when value is changed.
 * @param {any} defaultValue Default is returned if key does not exist.
 */
 function syncWithState(namespace, key, cb, defaultValue=null) {
    key = `${namespace}#${key}`;

    chrome.storage.sync.get([key], (result) => {
        if (result[key] == null) {
            cb(defaultValue, null);
        }
        else {
            cb(JSON.parse(result[key]), null);
        }
    });

    if (!state_syncState.has(key)) {
        state_syncState.set(key, []);
    }
    state_syncState.get(key).push(cb);
}
