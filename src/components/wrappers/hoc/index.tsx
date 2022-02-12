import WebPageWrapper from '../WebPageWrapper'
import { ReactNode } from 'react'


interface IHOC {
  children: ReactNode
}

export default function HOC ({ children }: IHOC) {
  return (
    <WebPageWrapper>
      {children}
    </WebPageWrapper>
  )
}
