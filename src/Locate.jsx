import { INFO, MAP, Title } from './config'

export default function Locate() {
  return (
    <div className="page-bg locate">
      <section className="wrap">
        <Title sub={INFO.address}>Locate Us</Title>
        <div className="map">
          <iframe title="School location" src={MAP} loading="lazy" />
        </div>
      </section>
    </div>
  )
}
