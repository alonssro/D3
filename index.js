//Select the svg first

const svg = d3.select('svg');

d3.json('menu.json').then(data => {

  const y = d3.scaleLinear()
    .domain([0, 1000])
    .range([0, 500])

  const x = d3.scaleBand()
    .domain(data.map(item => item.name))
    .range([0, 600])
    .paddingInner(0.2)
    .paddingOuter(0.2);

  //join the data to rects
  const rects = svg.selectAll('rect')
    .data(data);

  //join attrs to existing rect in the DOM
  rects.attr('width', x.bandwidth)
    .attr('height', d => y(d.orders))
    .attr('fill', 'orange')
    .attr('x', d => x(d.name));

  //join the enter selection
  rects.enter()
    .append('rect').attr('width', x.bandwidth)
    .attr('height', d => y(d.orders))
    .attr('fill', 'orange')
    .attr('x', d => x(d.name));
})