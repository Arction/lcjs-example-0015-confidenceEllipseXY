(self.webpackChunk=self.webpackChunk||[]).push([[524],{44:(e,t,s)=>{const n=s(89),{lightningChart:l,PointShape:o,ColorCSS:i,SolidLine:a,SolidFill:c,Themes:d}=n,r=l().ChartXY({}).setTitle("Scatter chart + confidence Ellipse"),h=r.addPointSeries({pointShape:o.Circle}).setPointSize(3).setName("Scatter series"),S=r.addPolygonSeries().setCursorEnabled(!1);fetch(document.head.baseURI+"examples/assets/0015/data-confidenceEllipseXY.json").then((e=>e.json())).then((e=>{const{scatterPoints:t,confidenceEllipsePolygonCoords:s}=e;h.add(t),S.add(s).setFillStyle(new c({color:i("gray").setA(30)})).setStrokeStyle(new a({thickness:1,fillStyle:new c({color:i("white")})}))}))}},e=>{e.O(0,[502],(()=>(44,e(e.s=44)))),e.O()}]);