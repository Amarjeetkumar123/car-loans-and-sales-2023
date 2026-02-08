const Textarea = ({ 
  label, 
  name, 
  id, 
  placeholder, 
  required = false,
  error,
  register,
  rows = 4,
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
      <textarea
        id={id || name}
        name={name}
        rows={rows}
        placeholder={placeholder}
        className={`input-field resize-none ${error ? 'border-red-500 focus:ring-red-500' : ''}`}
        {...(register ? register(name) : {})}
        {...props}
      />
      {error && <p className="mt-1 text-sm text-red-500">{error.message}</p>}
    </div>
  );
};

export default Textarea;
