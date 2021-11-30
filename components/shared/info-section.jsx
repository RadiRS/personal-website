const InfoSection = ({ section, title, desc, className }) => {
  return (
    <div className={`mb-md ${className}`}>
      <div className="wrapper-between-center">
        <div className="text-md uppercase">{section}</div>
        <div className="section-line" />
      </div>
      <h1 className="text-xl">{title}</h1>
      <p className="text-sm">{desc}</p>
    </div>
  );
};

export default InfoSection;
