// const path = require("path")

// exports.createPages = async ({ graphql, actions }) => {
//   const { createPage } = actions
//   const producTemplate = path.resolve(`src/templates/Product.js`)

//   const result = await graphql(`
//     query GET_PRODUCTS {
//       allStripePrice {
//         edges {
//           node {
//             product {
//               images
//               description
//               metadata {
//                 wear
//               }
//               name
//             }
//             unit_amount
//             id
//           }
//         }
//       }
//     }
//   `)
//   console.log(result)
//   if (result.errors) {
//     throw result.errors
//   }
//   console.log(node.id)
//   result.data.allStripePrice.edges.forEach(({ node }) => {
//     console.log(node.id)
//     createPage({
//       path: `${node.id}`,
//       component: producTemplate,
//     })
//   })
// }

const path = require("path")

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const productTemplate = path.resolve(`src/templates/Product.js`)
  const result = await graphql(`
    query GET_SKUS {
      allStripePrice {
        edges {
          node {
            id
            unit_amount
            product {
              name
              images
              description
              metadata {
                wear
              }
            }
          }
        }
      }
    }
  `)

  if (result.errors) throw result.errors

  result.data.allStripePrice.edges.forEach(({ node }) => {
    createPage({
      path: `${node.id}`,
      component: productTemplate,
      context: node,
    })
  })
}
