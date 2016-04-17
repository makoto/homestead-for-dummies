# Homestead version of DAPPS FOR BEGINNERS

This is the Ethereum Homestead release updated version of [DAPPS FOR BEGINNERS - JavaScript API 1](https://dappsforbeginners.wordpress.com/tutorials/javascript-api-1/).

## Targeted audience.

Someone who started Ethereum after Homestead release (14/3/2016).
The tested environment is for OSX Yosemite, but I assume this is same in any Unix environment.

## Prerequisite

- `geth` is installed
- blockchain is syned for `--testnet`
- You have some ETHER in your account (if you are going to deploy your own contract)

## How to run this.

- Clone the code

- Run geth in testnet mode allowing rpc call from local port 8000

```
geth --testnet --rpc --rpcaddr "127.0.0.1" --rpcport "8545" --rpcapi "db,eth,net,web3" --rpccorsdomain "http://localhost:8000"
```

- Startup web server at the port you specified at geth `--rpccorsdomain`

```
python -m SimpleHTTPServer # defaults to port 8000
```

- Open the page

```
open http://localhost:8000
```
