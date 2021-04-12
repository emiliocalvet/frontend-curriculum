import Chart from "react-google-charts"

import { Container } from './style'

interface Props {
  data: StatusCount
}

interface StatusCount {
  waiting: number,
  approved: number,
  repproved: number,
}

const PieChart = ({data}: Props) => {
  return (
    <Container>
      <div id="pie-chart">
        <Chart
          width={'500px'}
          height={'300px'}
          chartType="PieChart"
          loader={<div>Loading Chart</div>}
          data={[
            ['Situação', 'Candidatos'],
            ['Aguardando', data.waiting],
            ['Aprovado', data.approved],
            ['Reprovado', data.repproved],
          ]}
          options={{
            title: 'Distribuição da situação dos candidatos',
            // Just add this option
            is3D: true,
          }}
          rootProps={{ 'data-testid': '2' }}
        />
      </div>
    </Container>
  )
}

export default PieChart