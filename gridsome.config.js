// const BundleAnalyzerPlugin = require('webpack-bundle-analyzer')
//   .BundleAnalyzerPlugin

var embedConfig = {
  enabledProviders: ['Youtube', 'Vimeo', 'Gist', 'Codepen', 'JSFiddle', 'Giphy'],
  Youtube: {
    template: './src/embedTemplates/Youtube.hbs'
  },
  Vimeo: {
    template: './src/embedTemplates/Vimeo.hbs'
  },
  Giphy: {
    template: './src/embedTemplates/Giphy.hbs'
  },
  JSFiddle: {
    template: './src/embedTemplates/JSFiddle.hbs',
    secureConnection: true
  },
  Codepen: {
    template: './src/embedTemplates/Codepen.hbs'
  },
  Gist: {
    omitStylesheet: false
  }

};

module.exports = {
  siteName: 'Lazy Wink',
  siteUrl: 'https://kuligowy.github.io',
  siteDescription: "Fotografia ciążowa, noworodkowa Bydgoszcz",
  permalinks: {
    trailingSlash: false
  },
  icon: {
    favicon: {
      src: './src/favicon.png',
      sizes: [16, 32, 96]
    },
    touchicon: {
      src: './src/favicon.png',
      sizes: [76, 152, 120, 167],
      precomposed: true
    }
  },
  plugins: [{
    use: 'gridsome-plugin-brotli',
    options: {
      extensions: ['css', 'html', 'js', 'svg', 'json']
    }
  },
  {
    use: 'gridsome-plugin-tailwindcss',
    options: {
      tailwindConfig: './tailwind.config.js'
    }
  },
  {
    use: '@gridsome/source-filesystem',
    options: {
      typeName: 'CustomPage',
      baseDir: './content/pages',
      path: '*.md'
    }
  },
  {
    use: '@gridsome/source-filesystem',
    options: {
      typeName: 'Portfolio',
      baseDir: './content/portfolio',
      path: '*.md'
    }
  },
  {
    use: '@gridsome/source-filesystem',
    options: {
      typeName: 'Article',
      baseDir: './content/articles',
      path: '**/*.md',
      refs: {
        tags: {
          typeName: 'Tag',
          create: true
        }
      }
    }
  },
  {
    use: '@gridsome/source-filesystem',
    options: {
      typeName: 'News',
      baseDir: './content/news',
      path: '*.md',
      refs: {
        tags: {
          typeName: 'Tag',
          create: true
        }
      }
    }
  },
  {
    use: '@gridsome/source-filesystem',
    options: {
      typeName: 'Credit',
      baseDir: './content/credits',
      path: '*.md'
    }
  },
  {
    use: '@gridsome/source-filesystem',
    options: {
      typeName: 'Resource',
      baseDir: './content/resources',
      path: '*.md',
      refs: {
        tags: {
          typeName: 'ResourceTag',
          create: true
        },
        type: {
          typeName: 'ResourceType',
          create: true
        }
      }
    }
  }
  ],
  templates: {
    Article: [{
      path: '/articles/:title'
    }],
    Tag: [
      {
        path: '/tag/:title',
        component: './src/templates/Tag.vue'
      }
    ],
    News: [
      {
        path: '/news/:title',
        component: './src/templates/News.vue'
      }
    ],
    CustomPage: [
      {
        path: '/pages/:title',
        component: './src/templates/CustomPage.vue'
      }
    ],
    ResourceType: [
      {
        name: 'resourcesByType',
        path: '/resources/filter/type/:title',
        component: './src/templates/ResourceTypeFilter.vue'
      }
    ],
    ResourceTag: [
      {
        name: 'resourcesByType',
        path: '/resources/filter/tag/:title',
        component: './src/templates/ResourceTagFilter.vue'
      }
    ]
  },
  transformers: {
    remark: {
      plugins: [
        ['@noxify/gridsome-plugin-remark-embed', embedConfig],
        ['gridsome-plugin-remark-prismjs-all', {
          noInlineHighlight: false,
          showLineNumbers: true
        }]
      ]
    }
  },
  chainWebpack: config => {
    config.resolve.alias.set('@customPageImage', '@/../content/pages');
    config.resolve.alias.set('@portfolioImages', '@/../content/portfolio');
    // config
    //   .plugin('BundleAnalyzerPlugin')
    //   .use(BundleAnalyzerPlugin, [{ analyzerMode: 'static' }])
  }
}
