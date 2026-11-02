type ButtonProps = {
  label: string;
};

function Button({ label }: ButtonProps) {
  return (
    <button className="button" type="button">
      {label}
    </button>
  );
}

export default Button;
