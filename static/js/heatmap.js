// set the dimensions and margins of the graph
const margin = { top: 20, right: 40, bottom: 20, left: 100 },
      width = 950,
      height = 675;

// append the svg object to the body of the page
const svg = d3
      .select("#my_dataviz")
      .append("svg")
      .attr("width", width)
      .attr("height", height + 175)
      .append("g")
      .attr("transform", "translate(" + margin.left + "," + margin.bottom + ")");

const genName = (fullName) => {
    const [first, last] = fullName.split("-");
    const ucFirst = first.charAt(0).toUpperCase() + first.slice(1);
    const ucLast = last.charAt(0).toUpperCase() + last.slice(1);
    return `${ucFirst} ${ucLast}`;
}

// Read the data
d3.csv("/data/orrg-expertise.csv", function(data) {
    // Labels of row and columns -> unique identifier of the column called 'group' and 'variable'
    const myVars = d3
          .map(data, function(d) {
              return genName(d.Name);
          })
          .keys();

    const myGroups = d3
          .map(data, function(d) {
              return d.Expertise;
          })
          .keys();

    // Build X scales and axis:
    const x = d3
          .scaleBand()
          .range([0, 650])
          .domain(myGroups)
          .padding(0.1);

    const xAxisGenerator = d3.axisBottom(x).tickSize(0);

    const xAxis = svg
          .append("g")
          .style("font-size", 15)
          .call(xAxisGenerator);

    xAxis.attr("transform", `translate(2, ${height - 10})`);
    xAxis.select(".domain").remove();
    xAxis
        .selectAll("text")
        .attr("transform", "rotate(45)")
        .style("text-anchor", "start");

    // Build Y scales and axis:
    const y = d3
          .scaleBand()
          .range([650, 0])
          .domain(myVars)
          .padding(0.1);
    svg
        .append("g")
        .style("font-size", 15)
        .call(d3.axisLeft(y).tickSize(0))
        .select(".domain")
        .remove();

    // Build color scale
    const myColor = d3
          .scaleLinear()
          .range(["white", "#69b3a2"])
          .domain([1, 10]);

    // add the squares
    svg
        .selectAll()
        .data(data, function(d) {
            return d.Expertise + ":" + genName(d.Name);
        })
        .enter()
        .append("rect")
        .attr("x", function(d) {
            return x(d.Expertise);
        })
        .attr("y", function(d) {
            return y(genName(d.Name));
        })
        .attr("rx", 4)
        .attr("ry", 4)
        .attr("width", x.bandwidth())
        .attr("height", y.bandwidth())
        .style("fill", function(d) {
            return myColor(d.Value);
        });
});

// Add title to graph
/* svg
 *   .append("text")
 *   .attr("x", 0)
 *   .attr("y", -50)
 *   .attr("text-anchor", "left")
 *   .attr("font-family", "sans-serif")
 *   .attr("font-weight","600")
 *   .style("font-size", "22px")
 *   .text("Expertise Matrix");

 * // Add subtitle to graph
 * svg
 *   .append("text")
 *   .attr("x", 0)
 *   .attr("y", -20)
 *   .attr("text-anchor", "left")
 *   .attr("font-family", "sans-serif")
 *   .style("font-size", "14px")
 *   .style("fill", "grey")
 *   .style("max-width", 400)
 *   .text("Areas of expertise within the ORRG network"); */
