//Select the svg first

const svg = d3.select('svg');

d3.json('menu.json').then(data => {

  const y = d3.scaleLinear(data)
    .domain([0, 1000])
    .range([0, 500])

  //join the data to rects
  const rects = svg.selectAll('rect')
    .data(data);

  //join attrs to existing rect in the DOM
  rects.attr('width', 50)
    .attr('height', d => y(d.orders))
    .attr('fill', 'orange')
    .attr('x', (d, i) => i * 70);

  //join the enter selection
  rects.enter()
    .append('rect').attr('width', 50)
    .attr('height', d => y(d.orders))
    .attr('fill', 'orange')
    .attr('x', (d, i) => i * 70);
})