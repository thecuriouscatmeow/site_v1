export default function AccentLine() {
  return (
    <div
      aria-hidden="true"
      style={{
        width: "2px",
        minHeight: "48px",
        alignSelf: "stretch",
        backgroundColor: "var(--color-accent)",
        flexShrink: 0,
      }}
    />
  );
}
