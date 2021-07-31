/**
 * Set coin balance.
 * @param {number} coins New coin balance.
 * @returns {Promise<number>} Coin balance after update.
 */
function setCoins(coins) {
    const { promise, resolve, reject } = makePromise();

    if (!Number.isInteger(coins) || coins < 0) {
        reject(`Number of coins must be a non-negative integer, recieved ${coins}`);
        return promise;
    }

    chrome.storage.sync.set({ coins }, () => {
        console.log(`Set current coins balance to ${coins}`);
        resolve(coins);
    });
    return promise;
}

/**
 * Retrieve coin balance.
 * @returns {Promise<number>} Coin balance.
 */
function getCoins() {
    const { promise, resolve } = makePromise();

    chrome.storage.sync.get(["coins"], ({ coins }) => {
        resolve(Number.parseInt(coins) || 0);
    });

    return promise;
}

/**
 * Add coins to balance.
 * @param {number} coinsToAdd
 * @returns {Promise<number>} Coin balance after adding.
 */
async function addCoins(coinsToAdd) {
    const { promise, resolve, reject } = makePromise();

    if (!Number.isInteger(coinsToAdd) || coinsToAdd <= 0) {
        reject(`Number of coins to add must be a positive integer, recieved ${coinsToAdd}`);
        return promise;
    }

    const coins = await getCoins();
    setCoins(coins + coinsToAdd)
        .catch(e => reject(e))
        .then(c => resolve(c));
    
    return promise;
}

/**
 * Remove coins from balance.
 * @param {number} coinsToRemove
 * @returns {Promise<number>} Coin balance after removal.
 */
async function removeCoins(coinsToRemove) {
    const { promise, resolve, reject } = makePromise();

    if (!Number.isInteger(coinsToRemove) || coinsToRemove <= 0) {
        reject(`Number of coins to remove must be a positive integer, recieved ${coinsToRemove}`);
        return promise;
    }

    const coins = await getCoins();
    setCoins(coins - coinsToRemove)
        .catch(e => reject(e))
        .then(c => resolve(c));
    
    return promise;
}
