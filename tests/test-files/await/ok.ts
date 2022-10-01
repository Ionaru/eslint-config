const p = new Promise((resolve) => {
    resolve(42);
});

(async () => {
    await p;
})();
