const noop = () => {};

function createFakePromise(thenResult) {
    return {
        then: (cb = noop) => {
            return createFakePromise(cb(thenResult));
        },
        catch: () => createFakePromise()
    };
}

export default (key) => ({
    load() {
        const jsonState = localStorage.getItem(key);
        const jsonObj = JSON.parse(jsonState) || {};
        return createFakePromise(jsonObj);
    },

    save(state) {
        const jsonState = JSON.stringify(state);
        localStorage.setItem(key, jsonState);
        return createFakePromise();
    }
});
