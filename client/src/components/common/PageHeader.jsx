const PageHeader = ({ title, subtitle, className = '' }) => {
  return (
    <div className={`bg-primary text-white py-16 px-4 ${className}`}>
      <div className="max-w-7xl mx-auto text-center">
        <h1 className="text-4xl md:text-5xl font-bold">{title}</h1>
        {subtitle && <p className="mt-4 text-lg text-white/90">{subtitle}</p>}
      </div>
    </div>
  );
};

export default PageHeader;
