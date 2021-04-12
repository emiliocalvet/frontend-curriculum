import Chart from "react-google-charts"

import { Container } from './style'

interface Props {
  data: EducationCount
}

interface EducationCount {
  illiterate: number,
  complete_fundamental: number,
  incomplete_medium: number,
  complete_medium: number,
  incomplete_higher: number,
  graduated: number,
  master_degree: number,
  doctorate_degree: number,
  ignored: number
}

const BarChart = ({data}: Props) => {
  return (
    <Container>
      <div id="bar-chart">
        <Chart
          width={'500px'}
          height={'300px'}
          chartType="BarChart"
          loader={<div>Loading Chart</div>}
          data={[
            [
              'Escolaridade',
              'Candidatos',
              { role: 'style' },
              {
                sourceColumn: 0,
                role: 'annotation',
                type: 'string',
                calc: 'stringify',
              },
            ],
            ['Analfabeto ', data.illiterate, 'blue', null],
            ['Fundamental Completo ', data.complete_fundamental, 'yellow', null],
            ['Médio Incompleto ', data.incomplete_medium, 'brown', null],
            ['Médio Completo ', data.complete_medium, 'black', null],
            ['Superior Incompleto ', data.incomplete_higher, 'purple', null],
            ['Superior Completo ', data.graduated, 'green', null],
            ['Mestrado, Doutorado ', data.master_degree, 'red', null],
            ['Ignorado ', data.ignored, 'black', null],
          ]}
          options={{
            title: 'Distribuição de escolaridade dos candidatos',
            width: 600,
            height: 400,
            bar: { groupWidth: '95%' },
            legend: { position: 'none' },
          }}
          // For tests
          rootProps={{ 'data-testid': '6' }}
        />
      </div>
    </Container>
  )
}

export default BarChart