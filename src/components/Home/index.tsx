import { Fragment } from 'react'

import Hero from '@/components/Home/Hero'
import BuiltWithLove from '@/components/Home/BuiltWithLove'
import WallOfLove from '@/components/Home/WallOfLove'
import Feature from '@/components/Home/Feature'
import Philosophy from './Philosophy'
import CTANewsletter from './CTANewsletter'
import Statistic from './Statistic'
import CTADownload from './CTADownload'

const Home = () => {
  return (
    <Fragment>
      <Hero />
      <BuiltWithLove />
      <WallOfLove />
      <Feature />
      <Philosophy />
      <CTANewsletter />
      <Statistic />
      <CTADownload />
    </Fragment>
  )
}

export default Home
