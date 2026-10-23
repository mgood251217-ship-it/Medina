import { registrationFields } from '../data/registration.js'

export function createDemoRegistration(values) {
  const fields = Object.fromEntries(registrationFields.map(({ name }) => [name, String(values[name] ?? '').trim()]))
  return {
    ...fields,
    phone: fields.phone.replace(/[\s()-]/g, ''),
    id: `DM-${crypto.randomUUID().toUpperCase()}`,
    status: 'Baru',
  }
}
