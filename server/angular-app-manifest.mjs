
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/portfolio/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/portfolio"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 9959, hash: '41c83403d538ce8bb41890e99c2f3d30632cb66d025dbf56a3c1025bfe52187f', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 10093, hash: 'd480bc55b5efec8ce0415d589ff6794c1a5dbfabb78698d61fa1d9967fa31447', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 63860, hash: 'd5e0b4946635902bef8e17a68976ab94d3de3ebf934958a6b4f1832f599a0a7d', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-QS4N23DZ.css': {size: 254, hash: 'RE42fTKtmC0', text: () => import('./assets-chunks/styles-QS4N23DZ_css.mjs').then(m => m.default)}
  },
};
