type InputProps = {
  id: string;
  placeholder: string;
};

function Input({ id, placeholder }: InputProps) {
  return (
    <input className="input" id={id} type="number" placeholder={placeholder} />
  );
}

export default Input;
