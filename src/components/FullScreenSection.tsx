

const FullScreenSection = (
  {children, className, id} :
  {
  children: React.ReactNode,
  className?: string
  id?: string
  }) => {
    return (
      <section id={id} className={className ? `min-h-screen ${className}`: 'min-h-screen'}>
        {children}
      </section>
    );
}

export default FullScreenSection;