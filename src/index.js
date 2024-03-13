/*
 * LightningChartJS example that showcases visualization of XY scatter chart with confidence ellipse.
 */
// Import LightningChartJS
const lcjs = require('@arction/lcjs')

// Extract required parts from LightningChartJS.
const { lightningChart, PointShape, ColorCSS, SolidLine, SolidFill, Themes } = lcjs

// Create chart and series.
const chart = lightningChart()
    .ChartXY({
        theme: Themes[new URLSearchParams(window.location.search).get('theme') || 'darkGold'] || undefined
    })
    .setTitle('Scatter chart + confidence Ellipse')

// Create point series for visualizing scatter points.
const pointSeries = chart.addPointSeries({ pointShape: PointShape.Circle }).setPointSize(3).setName('Scatter series')

// Visualize confidence ellipse with polygon series.
// Note, routine for calculation of confidence ellipse coordinates from scatter data set is not currently included in LightningChart JS!
const polygonSeries = chart
  .addPolygonSeries()
  .setCursorEnabled(false);

// Fetch example data from JSON asset.
fetch(document.head.baseURI + 'examples/assets/0015/data-confidenceEllipseXY.json')
    .then((r) => r.json())
    .then((data) => {
        const { scatterPoints, confidenceEllipsePolygonCoords } = data

        // Add data to series.
        pointSeries.add(scatterPoints)
        polygonSeries
            .add(confidenceEllipsePolygonCoords)
            .setFillStyle(new SolidFill({ color: ColorCSS('gray').setA(30) }))
            .setStrokeStyle(
                new SolidLine({
                    thickness: 1,
                    fillStyle: new SolidFill({ color: ColorCSS('white') }),
                }),
            )
    })
