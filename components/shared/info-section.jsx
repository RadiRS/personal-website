const InfoSection = ({ section, title, desc }) => {
  return (
    <>
      <div className="wrapper-between mb">
        <div className="text-md uppercase">{section}</div>
        <div className="section-line" />
      </div>
      <h1 className="text-xl">{title}</h1>
      <p className="text-sm">{desc}</p>
    </>
  );
};

export default InfoSection;
