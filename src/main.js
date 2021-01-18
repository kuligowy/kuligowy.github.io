// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import DefaultLayout from '~/layouts/Default.vue'

import 'prismjs/themes/prism.css'
import '~/assets/scss/main.scss'
import 'prismjs/plugins/line-numbers/prism-line-numbers.css'

/* Font awesome configuration */
// import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
// import { config, library } from '@fortawesome/fontawesome-svg-core'
// import { faGithub, faTwitter } from '@fortawesome/free-brands-svg-icons'
// import { faHeart,faBaby, faChild,faHome, faGrinWink, faTree  } from '@fortawesome/free-solid-svg-icons'
// import '@fortawesome/fontawesome-svg-core/styles.css'

// config.autoAddCss = false;
// library.add(faGithub, faTwitter, faHeart,faBaby, faChild,faHome, faGrinWink, faTree )

import "@fontsource/baskervville" // Defaults to weight 400.


export default function (Vue, { router, head, isClient }) {
  // Set default layout as a global component
  Vue.component('Layout', DefaultLayout);
  // Vue.component('font-awesome', FontAwesomeIcon)
  //USE BASKERVILE FONT
  // head.link.push({
  //   rel: 'stylesheet',
  //   href: 'https://fonts.googleapis.com/css2?family=Libre+Baskerville:ital,wght@0,400;0,700;1,400&display=swap'
  // })
}
