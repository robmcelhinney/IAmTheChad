// @ts-nocheck
/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
const path = require(`path`)
const fetch = require(`node-fetch`)

// Helper function to timeout the fetch api if the backend is down such that the request hangs
function timeoutPromise(ms, promise) {
  return new Promise((resolve, reject) => {
    const timeoutId = setTimeout(() => {
      reject({
        json: async () => {
          return Promise.resolve([])
        },
      })
    }, ms)
    promise.then(
      res => {
        clearTimeout(timeoutId)
        resolve(res)
      },
      err => {
        clearTimeout(timeoutId)
        reject(err)
      }
    )
  })
}
// GraphQL auto infers schemas, but fails to realise NFT Metadata Attributes can have string and int values, this function fixes that
exports.createSchemaCustomization = ({ actions }) => {
  const { createTypes } = actions
  const typeDefs = `
    type NFTNftsAttributes implements Node {
      trait_type: String,
      display_type: String,
      value: String
    }
  `
  createTypes(typeDefs)
}

// exports.sourceNodes = async ({
//   actions: { createNode },
//   createContentDigest,
// }) => {
//   // First enter a dummy node in case the below fails
//   createNode({
//     id: `nft-array`,
//     parent: null,
//     children: [],
//     internal: {
//       type: `NFT`,
//       contentDigest: createContentDigest("bad-data"),
//     },
//   })
// }

// Grab hall of fame from IAmTheChad contract at build time. 
exports.sourceNodes = async ({
  actions: { createNode },
  createContentDigest,
}) => {
  // get reownBasefee
  const result = await fetch(`https://mainnet.infura.io/v3/339520a08e3446cc8bf2f008d7de8339`,{
    method: 'POST',
    headers: { 'Content-Type':'application/json'},
    body: JSON.stringify({"jsonrpc":"2.0","id":6,"method":"eth_call","params":[{"from":"0x0000000000000000000000000000000000000000","data":"0xc21ac9a50000000000000000000000000000000000000000000000000000000000000000","to":"0x621a6d60c7c16a1ac9bba9cc61464a16b43cac51"},"latest"]})
  })
  const resultData = await result.json()

  if(!!resultData.result){
    console.log(`Retrieved baseFee from contract of ${resultData.result}`)

    // convert a wei hex value to uint gwei. 
    const wei = parseInt(resultData.result, 16)
    console.log(`Wei value is ${wei.toString()}`)
    const gwei = wei / 1000000000.0
    console.log(`Gwei value is ${gwei.toString()}`)

    // Save this data to the Gatsby Graph for later use in static site construction
    createNode({
      wei: wei,
      gwei: gwei,
      // required fields
      id: `basefee`,
      parent: null,
      children: [],
      internal: {
        type: `Basefee`,
        contentDigest: createContentDigest(resultData),
      },
    })
  }

}