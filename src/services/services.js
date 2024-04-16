import { isProd } from '@/lib/utils'

const API_URL = 'https://admin.d2b.cl/d2badmin'
const publishedFilter = isProd ? 'status=published' : ''

export const getServicesInfo = async () => {
  const url = buildUrl({ endpoint: '/items/2024_servicios' })
  const res = await fetch(url)
  const { data } = await res.json()
  return data
}

export const getServiceInfoBySlug = async ({ serviceSlug }) => {
  const url = buildUrl({ endpoint: '/items/2024_servicios', params: `filter[slug]=${serviceSlug}` })
  const res = await fetch(url)
  const { data } = await res.json()
  return data[0]
}

export const getServicesResume = async () => {
  const url = buildUrl({ endpoint: '/items/2024_servicios', params: 'fields[]=nombre_del_servicio&fields[]=slug' })
  const res = await fetch(url)
  const { data } = await res.json()
  return data
}

const buildUrl = ({ endpoint, params = '' }) => {
  return `${API_URL}${endpoint}?${publishedFilter}&${params}`
}
