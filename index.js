console.log('webpack');

import(/* webpackChunkName: "chunk" */ './chunk')
  .then(({default: chunkScripts}) => chunkScripts())
