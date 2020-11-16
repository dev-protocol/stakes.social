import React, { useCallback, useEffect, useMemo, useState } from 'react'
import Select from 'react-select'
import * as am4core from '@amcharts/amcharts4/core'
import * as am4charts from '@amcharts/amcharts4/charts'
import am4themes_animated from '@amcharts/amcharts4/themes/animated'
import { useGetTokenDayDatas } from 'src/fixtures/uniswap/hooks'

am4core.useTheme(am4themes_animated)

interface Props {}
interface UniswapData {
  priceUSD: string
  date: number
  dailyVolumeUSD: string
  totalLiquidityUSD: string
}

const CHART_OPTIONS = [
  { label: 'Price [USD]', value: 'price' },
  { label: 'Volume [USD]', value: 'volume' },
  { label: 'Liquidity [USD]', value: 'liquidity' }
]

export const DevChart = (_: Props) => {
  const { data: chartData } = useGetTokenDayDatas()
  const [chartSelectItem, setChartSelectItem] = useState('price')

  const datas = useMemo(() => {
    const formatChartData = (inputChartData: Array<UniswapData>) => {
      inputChartData.forEach((d, index, all) => {
        const yesterdayData = index === 0 ? undefined : all[index - 1]
        datas.push({
          date: d.date * 1000,
          dailyVolumeUSD: d.dailyVolumeUSD,
          totalLiquidityUSD: d.totalLiquidityUSD,
          open: d.priceUSD,
          close: yesterdayData ? yesterdayData.priceUSD : d.priceUSD,
          low: yesterdayData ? (d.priceUSD > yesterdayData.priceUSD ? yesterdayData.priceUSD : d.priceUSD) : d.priceUSD,
          high: yesterdayData ? (d.priceUSD > yesterdayData.priceUSD ? d.priceUSD : yesterdayData.priceUSD) : d.priceUSD
        })
      })
    }
    let datas: Array<Object> = []
    formatChartData(chartData?.tokenDayDatas.slice() || [])
    return datas
  }, [chartData])

  useEffect(() => {
    let dispose: any = undefined
    if (process.browser) {
      let chart = am4core.create('chartdiv', am4charts.XYChart)
      chart.dateFormatter.inputDateFormat = 'x'
      chart.numberFormatter.numberFormat = '#,###.'
      chart.cursor = new am4charts.XYCursor()

      let dateAxis = chart.xAxes.push(new am4charts.DateAxis())
      dateAxis.renderer.grid.template.location = 0

      let valueAxis = chart.yAxes.push(new am4charts.ValueAxis())
      valueAxis.renderer.minWidth = 35

      if (chartSelectItem == 'price') {
        chart.numberFormatter.numberFormat = '#,###.00'

        const series = chart.series.push(new am4charts.CandlestickSeries())
        series.dataFields.dateX = 'date'
        series.dataFields.valueY = 'close'
        series.dataFields.openValueY = 'open'
        series.dataFields.lowValueY = 'low'
        series.dataFields.highValueY = 'high'

        series.tooltipText = 'Date: {dateX}\nPrice: ${valueY.value}'

        const scrollbarX = new am4charts.XYChartScrollbar()
        scrollbarX.series.push(series)
        chart.scrollbarX = scrollbarX
      } else if (chartSelectItem === 'volume') {
        // volume chart
        let series = chart.series.push(new am4charts.ColumnSeries())
        series.dataFields.dateX = 'date'
        series.dataFields.valueY = 'dailyVolumeUSD'

        series.tooltipText = 'Date: {dateX}\nPrice: ${valueY.value}'
      } else {
        // liquidity chart
        let series = chart.series.push(new am4charts.LineSeries())
        series.dataFields.dateX = 'date'
        series.dataFields.valueY = 'totalLiquidityUSD'

        series.tooltipText = 'Date: {dateX}\nPrice: ${valueY.value}'
      }

      chart.data = datas

      dispose = () => {
        if (chart) {
          chart.dispose()
        }
      }
    }
    return () => {
      if (dispose) {
        dispose()
      }
    }
  })

  const handleChangeChartItem = useCallback(
    (e: any) => {
      setChartSelectItem(e?.value)
    },
    [setChartSelectItem]
  )

  return (
    <>
      <Select options={CHART_OPTIONS} onChange={handleChangeChartItem} />
      <div id="chartdiv" style={{ width: '100%', height: '500px' }}></div>
    </>
  )
}
