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
 * @returns {Promise<any>}
 */
function getState(namespace, key) {
    const { promise, resolve } = makePromise();
    
    key = `${namespace}#${key}`;

    chrome.storage.sync.get([key], (result) => {
        if (result[key] == null) {
            resolve(null);
        }
        else {
            resolve(JSON.parse(result[key]));
        }
    });

    return promise;
}
