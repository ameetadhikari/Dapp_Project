import algosdk from "algosdk";
const algodToken = "a".repeat(64);
const server = "http://localhost";
const port = "4001";
const mnemonic = "best ancient enable gather hybrid cupboard medal door upper arrive armed scale viable opera first ignore shine online possible artwork laptop garlic tent absorb defense";
export function getClient() {
    let client = new algosdk.Algodv2(algodToken, server, port);
    return client;
}
export function getAccount() {
    let account = algosdk.mnemonicToSecretKey(mnemonic);
    return account;
}
//# sourceMappingURL=config.js.map