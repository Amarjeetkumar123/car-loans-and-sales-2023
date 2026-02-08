const Select = ({ 
  label, 
  name, 
  id, 
  options = [], 
  required = false,
  error,
  register,
  placeholder = 'Select an option',
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
      <select
        id={id || name}
        name={name}
        className={`input-field ${error ? 'border-red-500 focus:ring-red-500' : ''}`}
        {...(register ? register(name) : {})}
        {...props}
      >
        <option value="">{placeholder}</option>
        {options.map((option, index) => (
          <option key={index} value={typeof option === 'string' ? option : option.value}>
            {typeof option === 'string' ? option : option.label}
          </option>
        ))}
      </select>
      {error && <p className="mt-1 text-sm text-red-500">{error.message}</p>}
    </div>
  );
};

export default Select;
