'use strict';

/**
 * product router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::product.product');


// for custom.js
// module.exports = {
//   routes: [
//     {
//       method: 'GET',
//       path: '/products/:slug',
//       handler: 'product.findOne',
//       config: {
//         auth: false,
//       }
//     }
//   ]
// }
