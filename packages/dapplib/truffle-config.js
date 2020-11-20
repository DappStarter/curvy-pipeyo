require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gloom process outside venture strike cruise screen quality hundred light army gift'; 
let testAccounts = [
"0xfb3dcaf889ccd4fdcb1d097002bed640a08c1132aedbb049a9b53333c2b09546",
"0x73eed158a2ed112720ad154a57e694ebf3fc4c81174fc8b5c8afcc8cd4931b4d",
"0xb3fc4e6e90732740cb20d9f471acd8a948806fb8736c4a9072cfaabde560682d",
"0x288e2e8136e43a91e115c027173cebe7c67de6ad543b8d9f32b1cc983a5a1101",
"0x0e4290ccbc78a90f6ebc7d12ae1dc0c9e2b6986e1757bc56339079e54d66d2d8",
"0xa1f3d69ce6d212e537588cd7c46f5da303906faebe19b863ea91dd1b111e86e1",
"0x652273146e2022b48132465be5e71f3144db1b3cbfb68863ad918602ac9d3c4e",
"0x500a4dc5fe5dbd625b7f334172af9c7d4fb3cc7a93baa63ba550bbe005d3fd55",
"0x32e6353d3aa34857ad99d58fecdff243aba982fb876bd83f5a24ac44456826d7",
"0x9abff32cc4c87578f2942f590b0be07cc8c78a00281d995d54ab0e0b3168cfca"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
