// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import DefaultLayout from '~/layouts/Default.vue'

import 'prismjs/themes/prism.css'
import '~/assets/scss/main.scss'
import 'prismjs/plugins/line-numbers/prism-line-numbers.css'

/* Font awesome configuration */
import { faHeart, faBaby, faChild, faHome, faGrinWink, faTree, faCheckCircle} from '@fortawesome/free-solid-svg-icons'
import { config, library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
// import { faGithub, faTwitter } from '@fortawesome/free-brands-svg-icons'

config.autoAddCss = false;
import '@fortawesome/fontawesome-svg-core/styles.css'
import "@fontsource/baskervville" // Defaults to weight 400.


export default function (Vue, { router, head, isClient }) {
  // Set default layout as a global component
  Vue.component('Layout', DefaultLayout);
  library.add(faHeart, faBaby, faChild, faHome, faGrinWink, faTree, faCheckCircle)
  Vue.component('AppIcon', FontAwesomeIcon)
}
