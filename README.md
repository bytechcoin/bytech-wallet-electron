![WalletTech](docs/walletshell.png)  
WalletTech is a GUI wallet for BytechCoin.

![WalletTech Screens](docs/wallettech_welcome.png "WalletTech Screens")

### Features:
This wallet contains the basic functions required to manage your BytechCoin assets:

* Wallet creation
  * Create new wallet
  * Import from private keys
  * Import from mnemonic seed
* Basic wallet operation
  * Open an existing  wallet
  * Display wallet address & balance
  * Display private keys/seed
  * Export private keys/seed
  * Transactions listing/sorting/searching
  * Display transaction detail
  * Export incoming, outgoing, or all transactions to csv file.
  * Incoming Transaction notification
  * Send BytechCoin to single recipient address, allow to set payment id and custom fee. Provides address lookup from addressbook.
  * Perform wallet optimization by creating fusion transactions 
  * Provides utility to generate payment id and integrated address
* Address book
  * Add/Edit/Delete address entry (label/name, address and payment id)
  * Listing/sorting/searching existing entries
  * Allow to store same wallet address with different payment id
  * Autosave address after sending to new/unknown recipient
* Misc
  * Provides setting to set local or public node address
  * Option to use system tray (on closing/minimizing wallet)
  * Provides list of public nodes, fetch/updated daily from bytechcoin-nodes-json repo.
  * Custom node address that is not on the list will be added/remembered for future use
  * Theme: Dark & Light Mode
  * [Keyboard shortcuts](docs/shortcut.md)


### Notes

WalletTech relies on `bytech-service` to manage wallet container &amp; rpc communication.

Release installer & packaged archived includes a ready to use `bytech-service` binary, which is unmodified copy BytechCoin release archive.

On first launch, WalletTech will try to detect location/path of bundled `bytech-service` binary, but if it's failed, you can manually set path to the `bytech-service` binary on the Settings screen.

If you don't trust the bundled `bytech-service` file, you can compare the checksum (sha256sum) against one from the official release, or simply download and use the binary from official BytechCoin release, which is available here: https://github.com/bytechcoin/bytechcoin/releases. Then,  make sure to update your `bytech-service` path setting.

### Download &amp; Run WalletTech

#### Windows:
1. Download the latest installer here: https://github.com/bytechcoin/bytech-wallet-electron/releases
2. Run the installer (`wallettech-<version>-win-setup.exe`) and follow the installation wizard.
3. Launch WalletTech via start menu or desktop shortcut.

#### GNU/Linux (AppImage):
1. Download latest AppImage bundle here: https://github.com/bytechcoin/bytech-wallet-electron/releases
2. Make it executable, either via GUI file manager or command line, e.g. `chmod +x wallettech-<version>-linux.AppImage`
3. Run/execute the file, double click in file manager, or run via tech/command line. 

See: https://docs.appimage.org/user-guide/run-appimages.html

#### macOS (TBD/Untested)
1. Download latest archive here: https://github.com/bytechcoin/bytech-wallet-electron/releases
2. Extract downloaded tar archived
3. Run the executable binary (`WalletTech.app/Contents/MacOs/WalletTech`) ??

### Build
You need to have `Node.js` and `npm` installed, go to https://nodejs.org and find out how to get it installed on your platform.

Once you have Node+npm installed:
```
# first, download bytech-service binary for each platform
# from BytechCoin official repo
# https://github.com/bytechcoin/bytechcoin/releases
# extract the bytech-service executable somewhere

# clone the repo
$ git clone https://github.com/bytechcoin/bytech-wallet-electron
$ cd bytech-wallet-electron

# install dependencies
$ npm install

# create build+dist directory
$ mkdir -p ./build && mkdir -p ./dist

# copy/symlink icons from assets, required for packaging
$ cp ./src/assets/icon.* ./build/

# build GNU/Linux package
$ mkdir -p ./bin/lin
$ cp /path/to/linux-version-of/bytech-service ./bin/lin/
$ npm run dist-lin

# build Windows package
$ mkdir -p ./bin/win
$ cp /path/to/win-version-of/bytech-service.exe ./bin/win/
$ npm run dist-lin

# build OSX package
$ mkdir -p ./bin/osx
$ cp /path/to/osx-version-of/bytech-service ./bin/osx/
$ npm run dist-mac
```

Resulting packages or installer can be found inside `dist/` directory.

### Porting for other coin
Please see [this guide](docs/porting.md) if you want to adapt WalletShell to be use for your own BytechCoin fork.
