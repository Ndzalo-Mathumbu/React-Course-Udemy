function Button({ children, isSubmitting, type }) {
  const base =
    'bg-gradient-to-r from-yellow-300 to-orange-300 inline-block  font-semibold rounded-full tracking-wide  hover:from-yellow-400 hover:to-orange-400 transition-colors duration-300 focus:outline-none focus:ring focus:ring-yellow-200 focus:ring-offset-2 disabled:cursor-not-allowed ';
  const styles = {
    primary: base + ' px-4 py-3 sm:px-6 sm:py-4',
    small: base + ' px-4 py-2 md:px-5 md:py-2.5 text-sm',
  };

  return (
    <button disabled={isSubmitting} className={styles[type]}>
      {children}
    </button>
  );
}

export default Button;
