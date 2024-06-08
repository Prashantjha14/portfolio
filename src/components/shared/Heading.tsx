const Heading = ({ text, colorText }: { text: String; colorText: String }) => {
  return (
    <h2 className="heading">
      {text} <span className="text-purple">{colorText}</span>
    </h2>
  );
};

export default Heading;
