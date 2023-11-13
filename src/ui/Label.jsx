function Label({ children, htmlFor }) {
  return (
    <label className="font-semibold text-lg" htmlFor={htmlFor}>
      {children}
    </label>
  );
}

export default Label;
