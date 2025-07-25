import React, { useEffect, useRef } from "react";

export function BarChart({
  data = [], // Default to an empty array if data is not provided
  height = 300,
  width = 600,
  barColor = "#3b82f6",
  hoverColor = "#2563eb",
  animate = true,
}) {
  const svgRef = useRef(null);

  useEffect(() => {
    // Ensure the SVG ref exists and data is valid
    if (!Array.isArray(data) || data.length === 0) return;

    const svg = svgRef.current;
    const maxValue = Math.max(...data, 0);
    const padding = 40;
    const chartWidth = width - padding * 2;
    const chartHeight = height - padding * 2;
    const barWidth = chartWidth / data.length - 10;

    // Clear any existing SVG elements
    svg.innerHTML = "";

    // Create background grid (lines and labels)
    for (let i = 0; i <= 5; i++) {
      const y = padding + chartHeight - (i * chartHeight) / 5;
      const line = document.createElementNS("http://www.w3.org/2000/svg", "line");
      line.setAttribute("x1", padding);
      line.setAttribute("y1", y);
      line.setAttribute("x2", width - padding);
      line.setAttribute("y2", y);
      line.setAttribute("stroke", "#e5e7eb");
      line.setAttribute("stroke-width", "1");
      svg.appendChild(line);

      const text = document.createElementNS("http://www.w3.org/2000/svg", "text");
      text.setAttribute("x", padding - 5);
      text.setAttribute("y", y);
      text.setAttribute("text-anchor", "end");
      text.setAttribute("dominant-baseline", "middle");
      text.setAttribute("font-size", "12");
      text.setAttribute("fill", "#6b7280");
      text.textContent = Math.round((maxValue * i) / 5);
      svg.appendChild(text);
    }

    // Create bars and their labels
    data.forEach((value, index) => {
      const barHeight = (value / maxValue) * chartHeight;
      const x = padding + index * (chartWidth / data.length) + 5;
      const y = height - padding - barHeight;

      const rect = document.createElementNS("http://www.w3.org/2000/svg", "rect");
      rect.setAttribute("x", x);
      rect.setAttribute("y", animate ? height - padding : y);
      rect.setAttribute("width", barWidth);
      rect.setAttribute("height", animate ? 0 : barHeight);
      rect.setAttribute("fill", barColor);
      rect.setAttribute("rx", "4");

      // Add hover effect
      rect.addEventListener("mouseenter", () => {
        rect.setAttribute("fill", hoverColor);
      });
      rect.addEventListener("mouseleave", () => {
        rect.setAttribute("fill", barColor);
      });

      svg.appendChild(rect);

      // Add value label
      const text = document.createElementNS("http://www.w3.org/2000/svg", "text");
      text.setAttribute("x", x + barWidth / 2);
      text.setAttribute("y", y - 10);
      text.setAttribute("text-anchor", "middle");
      text.setAttribute("font-size", "12");
      text.setAttribute("fill", "#6b7280");
      text.setAttribute("opacity", "0");
      text.textContent = value;
      svg.appendChild(text);

      // Add animation
      if (animate) {
        setTimeout(() => {
          rect.setAttribute("y", y);
          rect.setAttribute("height", barHeight);
          text.setAttribute("opacity", "1");

          rect.setAttribute("transition", "y 0.5s ease, height 0.5s ease");
          text.setAttribute("transition", "opacity 0.5s ease");
        }, index * 100);
      }
    });
  }, [data, height, width, barColor, hoverColor, animate]);

  return (
    <div>
      <svg
        ref={svgRef}
        width={width}
        height={height}
        viewBox={`0 0 ${width} ${height}`}
        preserveAspectRatio="xMidYMid meet"
      />
    </div>
  );
}
