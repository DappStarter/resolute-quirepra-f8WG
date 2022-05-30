require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'include clog swift suggest firm crater remind concert harvest nasty foster total'; 
let testAccounts = [
"0x0d893fca6e2077d143dc6a6a32c7d71f734aa7778d1f910e2533a97f4e86b778",
"0xc9bf05d62b9b6b33d2d501a81bf653da76b791b0a66decbc450a71f448718bc0",
"0xd51d1bd078a42ad76a36e30b81646d5d59d84401ca1e4df9f60e0c5880096aa3",
"0xee194ff2785f09b31b303a867a44cd2e1b14913e0737c82af39a9646883eaac6",
"0xbe44cd17700be8f4b90441baaf659e562806d5b0817cfdc2e0cd1ca9c4a94723",
"0x0bd6162f0a03f45b1233752d1b1ea0f57d0b8d1b9d236fedafc25e3df8984800",
"0xc3b304c8cec6c4bf4d47323cdb6e02606cf1f89a8312ae0f455846df7cfbe7d1",
"0xafc6f6c67f7cfbd0b6cd66725a0eef6fb9d06c332e7f7e0e91b88f44649cc0ad",
"0x49c79ed86f2ad98558d8915b8fff21e11890d2cde1284aaef9f350ea2bb5ceaf",
"0x025800be5116ca4c49f304b3911e66cec6ac6866acdf15b6e7f17c9048042019"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

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
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


