"use client";

export function SectionHeading({
  eyebrow,
  title,
  text,
  align = "left",
  level = 2,
  className = "",
}) {
  const HeadingTag = `h${level}`;

  return (
    <div className={`section-heading-block ${align === "center" ? "center" : ""} ${className}`.trim()}>
      {eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}
      {title ? <HeadingTag>{title}</HeadingTag> : null}
      {text ? <p>{text}</p> : null}
    </div>
  );
}

export default SectionHeading;
