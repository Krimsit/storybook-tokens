import 'core-js/stable/structured-clone.js'
import StyleDictionary from 'style-dictionary-utils'

const path2Obj = (path, value, obj) => {
  path.split('.').reduce((r, e, i, arr) => {
    return r[e] || (r[e] = i === arr.length - 1 ? value : {})
  }, obj)
};

const getVariablePath = (originalPath) => {
  const path = originalPath.split("/").map(item => item.toLowerCase()).map(item => {
    let _path = item

    if (_path.includes("-")) {
      _path =  _path.split("-").map((item, index) => {
        if (index !== 0) {
          return item[0].toUpperCase() + item.substring(1)
        }

        return item
      }).join("")
    }

    if (_path.includes(",")) {
      _path =  _path.split(",").map((item, index) => {
        if (index !== 0) {
          return item[0].toUpperCase() + item.substring(1)
        }

        return item
      }).join("")
    }

    if (_path.includes(" ")) {
      _path =  _path.split(" ").map((item, index) => {
        if (index !== 0) {
          return item[0].toUpperCase() + item.substring(1)
        }

        return item
      }).join("")
    }

    return _path
  })

  return path.join(".")
}

StyleDictionary.registerFormat({
  name: 'customThemeObject',
  formatter: function ({dictionary}) {
    const collectionsObject = dictionary.tokens.collections.map(item => {
      const collectionVariables = {}

      if (item.name === "Palette") {
        item.modes[0].variables.map(variable => {
          const path = getVariablePath(variable.name)

          path2Obj(path, variable.value, collectionVariables)
        })
      }

      return {
        [item.name.toLowerCase()]: collectionVariables
      }
    })

    const object = collectionsObject.reduce((acc, item) => {
      return {
        ...acc,
        ...item
      }
    }, {})

    return `
    const theme = ${JSON.stringify(object)}
    
    export type Theme = typeof theme
    
    export default theme
    `
  }
});

const sd = StyleDictionary.extend({
  source: ['variables2json-tokens/*.json'],
  platforms: {
    uiKit: {
      buildPath: 'theme/',
      files: [
        {
          destination: 'theme.ts',
          format: 'customThemeObject',
        },
      ],
    },
  },
});

sd.cleanAllPlatforms();
sd.buildAllPlatforms();
