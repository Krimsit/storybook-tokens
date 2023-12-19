import 'core-js/stable/structured-clone.js'
import StyleDictionary from 'style-dictionary-utils'
import {registerTransforms} from '@tokens-studio/sd-transforms';

void registerTransforms(StyleDictionary, {
    expand: {
        composition: false,
        typography: false,
        border: false,
        shadow: false,
    },
    excludeParentKeys: false,
});

const path2Obj = (path, value, obj) => {
    path.split('.').reduce((r, e, i, arr) => {
        return r[e] || (r[e] = i === arr.length - 1 ? value : {})
    }, obj)
};

StyleDictionary.registerFormat({
    name: 'customThemeObject',
    formatter: function ({dictionary}) {
        const object = {}

        dictionary.allTokens.map(token => {
            let value = token.value

            if (token.type === 'border') {
                value = `${token.value.width} ${token.value.style} ${token.value.color}`
            }

            path2Obj(token.path.join('.'), value, object)
        })

        return `
    const theme = ${JSON.stringify(object)}
    
    export type Theme = typeof theme
    
    export default theme
    `
    }
});

const sd = StyleDictionary.extend({
    source: ['tokenStudio-tokens/*.json'],
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
