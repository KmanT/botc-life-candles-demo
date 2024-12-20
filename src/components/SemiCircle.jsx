export default function SemiCircle ({ items, radius = 12.5, height = 6.25, width = 12.5  }) {
    const angleStep = 190 / items.length;
  
    return (
      <div
        className="circle-container card"
        style={{
            height: `${height}rem`,
            width: `${width}rem`,
        }}
      >
        {items.map((item, index) => (
          <div 
            key={index} 
            className="circle-element"
            style={{
              transform: `rotate(-${(index) * angleStep}deg) translate(${radius}rem, 0) rotate(${index * angleStep}deg)`
            }}
          >
            {item}
          </div>
        ))}
      </div>
    );
}