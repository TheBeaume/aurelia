function Button({
  children,
  variant = "primary",
  className = "",
  ...props
}) {
  const base =
    "px-7 py-4 rounded-full font-semibold transition-all duration-300 hover:scale-105";

  if (variant === "primary") {
    return (
      <button
        {...props}
        className={`${base} ${className}`}
        style={{
          background: "var(--accent)",
          color: "#000",
        }}
      >
        {children}
      </button>
    );
  }

  return (
    <button
      {...props}
      className={`${base} border border-white/20 bg-white/10 backdrop-blur-lg text-white hover:bg-white/20 ${className}`}
    >
      {children}
    </button>
  );
}

export default Button;
