// Simple pixel-art cat built from a grid. 1 = pixel, 2 = eye (dark).
const GRID = [
  "0000000000000000",
  "0000000000011000",
  "0000000000111100",
  "0000000001111110",
  "0000000011111111",
  "0001000011111111",
  "0011100111111111",
  "0111111111122111",
  "0011111111111111",
  "0000111111111111",
  "0000011111111111",
  "0000001111111110",
  "0000000111111100",
];

export default function PixelCat({ className = "" }) {
  const size = 16;
  return (
    <svg
      viewBox={`0 0 ${GRID[0].length * size} ${GRID.length * size}`}
      className={className}
      shapeRendering="crispEdges"
      aria-hidden="true"
    >
      {GRID.flatMap((row, y) =>
        [...row].map((c, x) =>
          c === "0" ? null : (
            <rect
              key={`${x}-${y}`}
              x={x * size}
              y={y * size}
              width={size}
              height={size}
              fill={c === "2" ? "#4c1d95" : "#9b7be0"}
            />
          )
        )
      )}
    </svg>
  );
}
