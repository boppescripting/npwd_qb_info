# npwd_qb_info
A simple information app to be used with NPWD and QBCore.

## Dependencies
- qb-core

## Notes
This app was built upon the latest version of QBCore (as of 12/20/2022) and NPWD (1.7.0).

## Install
1. Download the latest **release**... DO NOT DOWNLOAD THE SOURCE CODE. To do this, just click on the download button on the right side of Github under `Releases`.
2. Unzip the script and add it to your resources folder.
3. Add `ensure npwd_qb_info` BEFORE STARTING NPWD.
4. In `config.json` within your npwd folder, add `"npwd_qb_info"` to the apps section.

## Adding more to the app
1. Open `server/server.lua`.
2. Add the information you would like to be displayed to the `info` table. Ensure the data you are sending to the phone is a string.

## Preview
![Preview](https://i.imgur.com/64HoqW5.png)
![Preview](https://i.imgur.com/mbxj5fh.png)