module.exports = {
  middlewares: {
    summary: ['summary?sourcePattern=build/messages/**/*.json'],
    process: [
      'fetchLocal?source=locales,skip',
      'metaToResult?from=defaultMessage,to=en',
      'youdao?apiname=YourName,apikey=YourKey',
      'reduce?-autoPick,autoReduce[]=local,autoReduce[]=meta'
    ],
    emit: ['save?dest=src/locales']
  }
}
