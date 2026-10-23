import { demoAdminAccount } from '../data/adminDemo.js'

export function authenticateDemoAdmin(username, password) {
  if (typeof username !== 'string' || typeof password !== 'string') return null
  if (username.trim() !== demoAdminAccount.username || password !== demoAdminAccount.password) return null
  return { username: demoAdminAccount.username, name: demoAdminAccount.name }
}
