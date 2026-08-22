"use client";

import { useState } from "react";

export function HolisticSlider({ items }) {
  const [activeIndex, setActiveIndex] = useState(0);

  if (!items?.length) {
    return null;
  }

  const activeItem = items[activeIndex];

  return (
    <div className="circle-care">
      <img src={activeItem.image} alt={`${activeItem.title} at Balprada`} />
      <span>{activeItem.title}</span>
      <div className="holistic-counter">
        <b>{String(activeIndex + 1).padStart(2, "0")}</b>
        <i>/{String(items.length).padStart(2, "0")}</i>
        <button
          className="holistic-next"
          type="button"
          onClick={() =>
            setActiveIndex((current) => (current + 1) % items.length)
          }
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default HolisticSlider;
