const Input = ({ 
  label, 
  type = 'text', 
  name, 
  id, 
  placeholder, 
  required = false,
  error,
  register,
  className = '',
  ...props 
}) => {
  return (
    <div className={`mb-4 ${className}`}>
      {label && (
        <label htmlFor={id || name} className="block text-sm font-semibold text-gray-700 mb-2">
          {label} {required && <span className="text-primary">*</span>}
        </label>
      )}
      <input
        type={type}
        id={id || name}
        name={name}
        placeholder={placeholder}
        className={`input-field ${error ? 'border-red-500 focus:ring-red-500' : ''}`}
        {...(register ? register(name) : {})}
        {...props}
      />
      {error && <p className="mt-1 text-sm text-red-500">{error.message}</p>}
    </div>
  );
};

export default Input;
