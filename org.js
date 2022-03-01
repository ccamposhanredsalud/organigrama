d3.json('https://gist.githubusercontent.com/bumbeishvili/dc0d47bc95ef359fdc75b63cd65edaf2/raw/c33a3a1ef4ba927e3e92b81600c8c6ada345c64b/orgChart.json')
.then(data=>{

new Chart()
   .container('.chart-container')
   .data(data)
   .svgWidth(window.innerWidth)
   .svgHeight(window.innerWidth)
   .initialZoom(0.6)
   .onNodeClick(d=> console.log(d+' node clicked'))
   .render()


})




