/**
 * Create a new Promise and get resolve/reject functions.
 * @returns {{ promise: Promise<any>, resolve: (value: any) => void, reject: (reason?: any) => void }}
 */
 function makePromise() {
    let resolve, reject;
    const promise = new Promise((resolve_, reject_) => {
        resolve = resolve_;
        reject = reject_;
    });
    return { promise, resolve, reject };
}
