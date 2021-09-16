import CBKOnChainContract from "./src/CBKOnChainContract";
import database from "./database.json";

(async () => {
    for (const [id, info] of (database as any[]).entries()) {
        await CBKOnChainContract.setCase(id, info.text);
        console.log(`Case #${id} Uploaded.`);
    }
})();