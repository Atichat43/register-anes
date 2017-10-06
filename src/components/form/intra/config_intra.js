import { getAnesTeam } from '../config_all'

export const getConfig = (part) => ({
  'surgeon': {
    title: 'Intra by Surgeon',
    head: ['Service', 'ASA Physical status', 'Post Diagnosis']
  },
  'agents': {
    title: 'Anesthetic agents & Drugs',
    head: ['Agents', 'Drugs']
  },
  'technique': {
    title: 'Anesthesia Technique',
    head: ['Technique', 'Airway management', 'Combined Technique']
  },
  'post': {
    title: 'Post',
    head: ['Operation Time', 'Patient ward']
  }
}[part] || '')

export {
  getAnesTeam
}
