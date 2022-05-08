const WarningButton: React.FunctionComponent<
  React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> & {
    title?: string;
  }
> = ({ title, children, style, ...rest }) => (
  <button
    {...rest}
    style={{
      ...style,
      backgroundColor: "red",
      border: "none",
      color: "white",
      margin: "0.5rem",
      padding: "5px 10px",
      textAlign: "center",
      textDecoration: "none",
      display: "inline-block",
      fontSize: "12px",
    }}>
    {title ?? children}
  </button>
);
export default WarningButton;
