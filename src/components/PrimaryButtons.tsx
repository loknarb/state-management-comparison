const PrimaryButton: React.FunctionComponent<
  React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> & {
    title?: string;
  }
> = ({ title, children, style, ...rest }) => (
  <button
    {...rest}
    style={{
      ...style,
      backgroundColor: "#4CAF50",
      color: "white",
      fontSize: "16px",
      padding: "5px 10px",
      textAlign: "center",
      textDecoration: "none",
      border: "none",
    }}>
    {title ?? children}
  </button>
);
export default PrimaryButton;
