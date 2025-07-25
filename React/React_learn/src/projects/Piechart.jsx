import React, { useEffect, useRef } from "react";

function PieChart({ data = [], height = 300, width = 300, colors = [] }) {
  const svgRef = useRef(null);

  useEffect(() => {
    if (!svgRef.current || data.length === 0) return;

    const svg = svgRef.current;
    const radius = Math.min(width, height) / 2;
    const total = data.reduce((sum, item) => sum + item.value, 0);
    const arc = d3.arc().innerRadius(0).outerRadius(radius);
    const pie = d3.pie().value((d) => d.value);
    const color = d3.scaleOrdinal(colors);

    const group = d3.select(svg)
      .append("g")
      .attr("transform", `translate(${width / 2},${height / 2})`);

    const arcs = group
      .selectAll(".arc")
      .data(pie(data))
      .enter()
      .append("g")
      .attr("class", "arc");

    arcs
      .append("path")
      .attr("d", arc)
      .attr("fill", (d, i) => color(i));

    arcs
      .append("text")
      .attr("transform", (d) => `translate(${arc.centroid(d)})`)
      .attr("dy", ".35em")
      .text((d) => d.data.label);

  }, [data, height, width, colors]);

  return (
    <svg
      ref={svgRef}
      width={width}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
      preserveAspectRatio="xMidYMid meet"
    />
  );
}

export default PieChart;
