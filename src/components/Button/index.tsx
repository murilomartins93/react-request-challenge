type Props = {
  text: string;
};

export default function Button({ text }: Props) {
  return <div className="rrc-btn">{text}</div>;
}
