import DefaultLayout from '@/layouts/Default.vue'
import style from '@/scss/style.scss'

export default function (Vue, { router, head, isClient }) {
  // Set default layout as a global component
  Vue.component('Layout', DefaultLayout)

  // Add heading font
  head.link.push({
    rel: 'stylesheet',
    href: 'https://fonts.googleapis.com/css?family=Merriweather',
  })

  // Add text font
  head.link.push({
    rel: 'stylesheet',
    href: 'https://fonts.googleapis.com/css?family=Source+Sans+Pro',
  })
}
