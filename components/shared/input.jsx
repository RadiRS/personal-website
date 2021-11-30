const Input = ({ placeholder, className, type }) => {
  if (type === 'textarea')
    return (
      <textarea placeholder={placeholder} className={`mb-md ${className}`} />
    );

  return (
    <input
      placeholder={placeholder}
      type={type}
      className={`mb-md ${className}`}
    />
  );
};

export default Input;
