type ButtonProps = {
  text: string;
  onClick: () => void;
};

function PrimaryButton({ text, onClick }: ButtonProps): React.FC {
  return <button onClick={onClick}>{text}</button>;
}

export default PrimaryButton;
