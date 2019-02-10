var config = {};

// self explanatory, your application name, descriptions, etc
config.appName = 'WalletTech';
config.appDescription = 'BytechCoin Wallet';
config.appSlogan = 'Fast and tech wins the race!';
config.appId = 'bytechcoin.wallettech';
config.appGitRepo = 'https://github.com/bytechcoin/bytech-wallet-electron';

// default port number for your daemon (e.g. BytechCoind)
config.daemonDefaultRpcPort = 11127;

// wallet file created by this app will have this extension
config.walletFileDefaultExt = 'bwl';

// change this to match your wallet service executable filename
config.walletServiceBinaryFilename = 'bytech-service';

// version on the bundled service (bytech-service)
config.walletServiceBinaryVersion = "v0.10.0";

// default port number for your wallet service (e.g. bytech-service)
config.walletServiceRpcPort = 8070;

// block explorer url, the [[TX_HASH] will be substituted w/ actual transaction hash
config.blockExplorerUrl = 'http://explorer.bytechcoin.com/?hash=[[TX_HASH]]#blockchain_transaction';

// default remote node to connect to, set this to a known reliable node for 'just works' user experience
config.remoteNodeDefaultHost = '178.32.178.27';

// remote node list update url, set to null if you don't have one
config.remoteNodeListUpdateUrl = '';

// fallback remote node list, in case fetching update failed, fill this with known to works remote nodes
config.remoteNodeListFallback = [
    '178.32.178.27:11127',
    '37.148.210.136:11127',
    '5.39.6.152:11127',
];

// your currency name
config.assetName = 'BytechCoin';
// your currency ticker
config.assetTicker =  'BYTC';
// your currency address prefix, for address validation
config.addressPrefix =  'bYTC';
// standard wallet address length, for address validation
config.addressLength = 99;
// intergrated wallet address length, for address validation
config.integratedAddressLength = 187;

// minimum fee for sending transaction
config.minimumFee = 1000;
// minimum amount for sending transaction
config.mininumSend = 10000;
// default mixin/anonimity for transaction
config.defaultMixin = 3;
// to convert from atomic unit
config.decimalDivisor = 100;
// to represent human readable value
config.decimalPlaces = 2;

// obfuscate address book entries, set to false if you want to save it in plain json file.
// not for security because the encryption key is attached here
config.addressBookObfuscateEntries = true;
// key use to obfuscate address book contents
config.addressBookObfuscationKey = '79009fb00ca1b7130832a42de45142cf6c4b7f333fe6fba5';
// initial/sample entries to fill new address book
config.addressBookSampleEntries = [
    { name: 'Bahadir',
      address: 'bYTCv3BDuQcUYzJXVYJungGTiVRLcUbfPKwwnaSK3bUmTkGNDQL1kNMWAwyudonfRATYz3vwkDHTTiqAjhmQDTjRYRAsvbXonW8',
      paymentId: '',
    }
];

module.exports = config;
