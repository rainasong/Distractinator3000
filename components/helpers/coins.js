/**
 * Set coin balance.
 * @param {number} coins New coin balance.
 * @returns {Promise<void>}
 */
function setCoins(coins) {
    if (!Number.isInteger(coins) || coins < 0) {
        throw new Error(`Number of coins must be a non-negative integer, recieved ${coins}`);
    }

    setState("shop", "coins", coins);
}

/**
 * Retrieve coin balance.
 * @returns {Promise<number>} Coin balance.
 */
function getCoins() {
    return getState("shop", "coins", 0);
}

/**
 * Add coins to balance.
 * @param {number} coinsToAdd
 * @returns {Promise<number>} Coin balance after adding.
 */
function addCoins(coinsToAdd) {
    const { promise, resolve, reject } = makePromise();

    if (!Number.isInteger(coinsToAdd) || coinsToAdd <= 0) {
        reject(`Number of coins to add must be a positive integer, recieved ${coinsToAdd}`);
        return promise;
    }

    getCoins()
        .then(coins => {
            try {
                setCoins(coins + coinsToAdd);
                resolve(coins + coinsToAdd);
            }
            catch (e) {
                reject(e);
            }
        });

    return promise;
}

/**
 * Remove coins from balance.
 * @param {number} coinsToRemove
 * @returns {Promise<number>} Coin balance after removal.
 */
function removeCoins(coinsToRemove) {
    const { promise, resolve, reject } = makePromise();

    if (!Number.isInteger(coinsToRemove) || coinsToRemove <= 0) {
        reject(`Number of coins to remove must be a positive integer, recieved ${coinsToRemove}`);
        return promise;
    }

    getCoins()
        .then(coins => {
            try {
                setCoins(coins - coinsToRemove);
                resolve(coins - coinsToRemove);
            }
            catch (e) {
                reject(e);
            }
        });
    
    return promise;
}
