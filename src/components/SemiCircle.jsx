export default function SemiCircle ({ items, radius = 12.5, height = 6.25, width = 12.5  }) {
    const angleStep = 190 / items.length;

    function calculateTransform (idx) {
      return `rotate(-${(idx) * angleStep}deg) translate(${radius}rem, 0) rotate(${idx * angleStep}deg)`;
    }

    return (
      <div
        className="circle-container"
        style={{
            height: `${height}rem`,
            width: `${width}rem`,
        }}
      >
        {items.toReversed().map((item, idx) => (
          <div
            key={idx}
            className="circle-element"
            style={{
              transform: calculateTransform(idx)
            }}
          >
            {item}
          </div>
        ))}
      </div>
    );
}
