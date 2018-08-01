console.log('webpack', new Date().getMilliseconds());

import(/* webpackChunkName: "chunk" */ './chunk')
  .then(({default: chunkScripts}) => chunkScripts())
