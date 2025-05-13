export function Button({ children, className = "", ...props }) {
  return <button className={`transition duration-300 ${className}`} {...props}>{children}</button>;
}
