import dynamic from 'next/dynamic'

const Stats = dynamic(() => import('../../../components/_pages/stats/index'), { ssr: false })

export default Stats
