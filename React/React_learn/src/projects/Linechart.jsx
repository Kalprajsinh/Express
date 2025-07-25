import React, { useEffect, useRef } from "react";

function LineChart({
  data = [],
  height = 300,
  width = 600,
  lineColor = "#3b82f6",
  pointColor = "#2563eb",
  areaColor = "rgba(59, 130, 246, 0.2)",
  animate = true,
}) {
  const svgRef = useRef(null);

  useEffect(() => {
    if (!svgRef.current || data.length === 0) return;

    const svg = svgRef.current;
    const maxY = Math.max(...data.map((d) => d.y), 0);
    const minY = Math.min(...data.map((d) => d.y), 0);
    const padding = 40;
    const chartWidth = width - padding * 2;
    const chartHeight = height - padding * 2;

    while (svg.firstChild) {
      svg.removeChild(svg.firstChild);
    }

    for (let i = 0; i <= 5; i++) {
      const y = padding + chartHeight - (i * chartHeight) / 5;
      const line = document.createElementNS("http://www.w3.org/2000/svg", "line");
      line.setAttribute("x1", padding.toString());
      line.setAttribute("y1", y.toString());
      line.setAttribute("x2", (width - padding).toString());
      line.setAttribute("y2", y.toString());
      line.setAttribute("stroke", "#e5e7eb");
      line.setAttribute("stroke-width", "1");
      svg.appendChild(line);

      const text = document.createElementNS("http://www.w3.org/2000/svg", "text");
      text.setAttribute("x", (padding - 5).toString());
      text.setAttribute("y", y.toString());
      text.setAttribute("text-anchor", "end");
      text.setAttribute("dominant-baseline", "middle");
      text.setAttribute("font-size", "12");
      text.setAttribute("fill", "#6b7280");
      text.textContent = Math.round(minY + ((maxY - minY) * i) / 5).toString();
      svg.appendChild(text);
    }

    const areaPath = document.createElementNS("http://www.w3.org/2000/svg", "path");
    let areaPathD = `M ${padding} ${height - padding} `;
    data.forEach((point, index) => {
      const x = padding + (index * chartWidth) / (data.length - 1);
      const y = padding + chartHeight - ((point.y - minY) / (maxY - minY)) * chartHeight;
      areaPathD += `L ${x} ${y} `;
    });

    areaPathD += `L ${padding + chartWidth} ${height - padding} Z`;
    areaPath.setAttribute("d", areaPathD);
    areaPath.setAttribute("fill", areaColor);
    areaPath.setAttribute("opacity", animate ? "0" : "1");
    svg.appendChild(areaPath);

    const linePath = document.createElementNS("http://www.w3.org/2000/svg", "path");
    let linePathD = "";
    data.forEach((point, index) => {
      const x = padding + (index * chartWidth) / (data.length - 1);
      const y = padding + chartHeight - ((point.y - minY) / (maxY - minY)) * chartHeight;
      if (index === 0) {
        linePathD += `M ${x} ${y} `;
      } else {
        linePathD += `L ${x} ${y} `;
      }
    });

    linePath.setAttribute("d", linePathD);
    linePath.setAttribute("fill", "none");
    linePath.setAttribute("stroke", lineColor);
    linePath.setAttribute("stroke-width", "3");
    linePath.setAttribute("stroke-linecap", "round");
    linePath.setAttribute("stroke-linejoin", "round");

    if (animate) {
      linePath.setAttribute("stroke-dasharray", linePath.getTotalLength().toString());
      linePath.setAttribute("stroke-dashoffset", linePath.getTotalLength().toString());
    }

    svg.appendChild(linePath);

    data.forEach((point, index) => {
      const x = padding + (index * chartWidth) / (data.length - 1);
      const y = padding + chartHeight - ((point.y - minY) / (maxY - minY)) * chartHeight;

      const circle = document.createElementNS("http://www.w3.org/2000/svg", "circle");
      circle.setAttribute("cx", x.toString());
      circle.setAttribute("cy", y.toString());
      circle.setAttribute("r", "5");
      circle.setAttribute("fill", pointColor);
      circle.setAttribute("opacity", animate ? "0" : "1");
      svg.appendChild(circle);
    });

    if (animate) {
      setTimeout(() => {
        areaPath.setAttribute("opacity", "1");
        areaPath.setAttribute("transition", "opacity 1s ease");

        linePath.setAttribute("stroke-dashoffset", "0");
        linePath.setAttribute("transition", "stroke-dashoffset 1.5s ease");

        data.forEach((_, index) => {
          const circles = svg.querySelectorAll("circle");
          setTimeout(() => {
            circles[index].setAttribute("opacity", "1");
            circles[index].setAttribute("transition", "opacity 0.3s ease");
          }, index * 150);
        });
      }, 300);
    }
  }, [data, height, width, lineColor, pointColor, areaColor, animate]);

  return (
    <svg
      ref={svgRef}
      width="100%"
      height="100%"
      viewBox={`0 0 ${width} ${height}`}
      preserveAspectRatio="xMidYMid meet"
    />
  );
}

export default LineChart;
