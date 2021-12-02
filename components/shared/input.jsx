const Input = ({ placeholder, className, type, ...otherProps }) => {
  if (type === 'textarea')
    return (
      <textarea
        placeholder={placeholder}
        className={`mb-md ${className}`}
        {...otherProps}
      />
    );

  return (
    <input
      placeholder={placeholder}
      type={type}
      className={`mb-md ${className}`}
      {...otherProps}
    />
  );
};

export default Input;
