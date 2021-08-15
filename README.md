![Chad](./src/images/chad.jpg)

<h1 align="center">I Am The Chad</h1>

This repo is a website for the "I Am The Chad" NFT. The 1 of 1 NFT anyone can steal, if they can burn enough ether in `basefee` to out-chad the previous chads. 

## Quickstart

This repo uses Gatsby.js as a build tool that makes server side rendering-capable static webpages, that can then instantiate themselves as React Webpages when loaded on the client side. Allowing for faster loading of web pages. To get started:

```bash
# Local development
npm run develop

# Tests
npm run test
npm run test -- --watch # Re runs tests when a file changes
npm run test -- -u # Updates snapshots for tests when an intentional change is made.
```


## Lessons Learned

- Static Site Generators like Gatsby can benefit from a smart build pipeline to allow for a decently fresh website served statically and fast.

- To call a public array on a solidity smart contract is tricky. They give you a public getter, but not a public getter of the array's `length` property. So instead your best option is to iterate through the array elements until your `eth_call` hits a revert. For performance reasons, this site does this process at build time, and updates daily on a cron. Injecting web3 apis to poll on site load is slow and costly. 
    ```sh
    # Read an address from the hall of fame 
    curl -H "Content-Type: application/json" -X POST --data '{"jsonrpc":"2.0","id":6,"method":"eth_call","params":[{"from":"0x0000000000000000000000000000000000000000","data":"0x41fcb7d70000000000000000000000000000000000000000000000000000000000000004","to":"0x621a6d60c7c16a1ac9bba9cc61464a16b43cac51"},"latest"]}' https://mainnet.infura.io/v3/339520a08e3446cc8bf2f008d7de8339
    

    # Read the reownBasefee
    curl -H "Content-Type: application/json" -X POST --data '{"jsonrpc":"2.0","id":6,"method":"eth_call","params":[{"from":"0x0000000000000000000000000000000000000000","data":"0xc21ac9a50000000000000000000000000000000000000000000000000000000000000000","to":"0x621a6d60c7c16a1ac9bba9cc61464a16b43cac51"},"latest"]}' https://mainnet.infura.io/v3/339520a08e3446cc8bf2f008d7de8339
    '''