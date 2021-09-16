import CBKOnChainContract from "./src/CBKOnChainContract";

(async () => {
    for (let id = 0; id < 10000; id += 1) {
        console.log(await CBKOnChainContract.cases(id));
    }
})();