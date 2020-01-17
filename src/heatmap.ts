import * as d3 from "d3";
import { DSVRowString } from "d3";

// set the dimensions and margins of the graph
const margin = { top: 20, right: 20, bottom: 20, left: 120 },
  width = 800,
  height = 675;

// append the svg object to the body of the page
const svg = d3
  .select("#my_dataviz")
  .classed("svg-container", true)
  .append("svg")
  .attr("preserveAspectRatio", "xMinYMin meet")
  .attr("viewBox", "0 0 875 875")
  .classed("svg", true)
  .append("g")
  .attr("transform", "translate(" + margin.left + "," + margin.bottom + ")")
  .attr("width", width)
  .attr("height", height + 200);

const genName = (fullName: string): string => {
  const [first, last] = fullName.split("-");
  const ucFirst = first.charAt(0).toUpperCase() + first.slice(1);
  const ucLast = last.charAt(0).toUpperCase() + last.slice(1);
  return `${ucFirst} ${ucLast}`;
};

const linkify = (fullName: string): string => {
  const [first, last] = fullName.split(" ");
  const lcFirst = first.charAt(0).toLowerCase() + first.slice(1);
  const lcLast = last.charAt(0).toLowerCase() + last.slice(1);
  return `/members/${lcFirst}-${lcLast}`;
};

// Read the data
d3.csv("/data/orrg-expertise.csv", data => {
  const myVars = d3
    .map<DSVRowString>(<any>data, d => {
      return genName(d.Name);
    })
    .keys();

  const myGroups = d3
    .map<DSVRowString>(<any>data, d => {
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

  const yAxisGenerator = d3.axisLeft(y).tickSize(0);

  svg
    .append("g")
    .style("font-size", 15)
    .attr("class", "axislink")
    .call(yAxisGenerator)
    .select(".domain")
    .remove();

  const yLinks = d3.selectAll(".axislink text");
  yLinks.on("click", (name: string) => {
    document.location.href = linkify(name);
  });

  // Build colour scale
  const myColour = d3
    .scaleLinear<string>()
    .domain([1, 10])
    .range(["white", "#69b3a2"]);

  // add the squares
  svg
    .selectAll()
    .data<DSVRowString>(<any>data, d => {
      return d.Expertise + ":" + genName(d.Name);
    })
    .enter()
    .append("rect")
    .attr("x", d => {
      return x(d.Expertise);
    })
    .attr("y", d => {
      return y(genName(d.Name));
    })
    .attr("rx", 4)
    .attr("ry", 4)
    .attr("width", x.bandwidth())
    .attr("height", y.bandwidth())
    .style("fill", (d: any) => {
      return myColour(d.Value);
    });

  return {};
});
