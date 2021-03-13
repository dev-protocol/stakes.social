import { Event } from 'src/types/GoogleAnalyticsEvent'

export const GA_ID = 'UA-189612836-2'

// Measure PV
export const pageview = (path: string) => {
  window.gtag('config', GA_ID, {
    page_path: path
  })
}

// Fire a Google Analytics event
export const event = ({ action, category, label }: Event) => {
  window.gtag('event', action, {
    event_category: category,
    event_label: JSON.stringify(label)
  })
}