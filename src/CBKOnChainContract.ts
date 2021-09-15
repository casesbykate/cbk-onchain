import { BigNumberish } from "ethers";
import Contract from "./Contract";
import Klaytn from "./Klaytn";

class CBKOnChainContract extends Contract {

    constructor() {
        super("", require("./CBKOnChainContractABI.json"));
    }

    public async setCase(id: BigNumberish, _case: string): Promise<void> {
        const register = Klaytn.walletAddress;
        await this.contract.methods.setCase(id, _case).send({ from: register, gas: 1500000 });
    }

    public async cases(id: BigNumberish): Promise<string> {
        return await this.contract.methods.cases(id).call();
    }
}

export default new CBKOnChainContract();
