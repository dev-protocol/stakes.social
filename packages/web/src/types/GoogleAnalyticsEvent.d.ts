type ContactEvent = {
  action: 'submit_form'
  category: 'Contact'
  label: string
}

type ClickEvent = {
  action: 'click'
  category: 'Other'
  label: string
}

export type Event = ContactEvent | ClickEvent