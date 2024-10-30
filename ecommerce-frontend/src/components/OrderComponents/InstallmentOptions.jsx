const InstallmentOptions = ({ total, onSelect }) => {
  const installmentOptions = [1, 3, 4, 6];

  return (
    <div className="mt-4">
      <h3 className="text-xl mb-2">Installment Options</h3>
      <div className="grid grid-cols-2 gap-4">
        {installmentOptions.map((option) => {
          const monthlyPayment = (total / option).toFixed(2);
          return (
            <button
              key={option}
              onClick={() => onSelect(option)}
              className="p-2 border rounded hover:bg-blue-100 transition-colors font-bold"
            >
              {option === 1 ? "Single Payment" : `${option} Installments`}
              <br />
              {option === 1
                ? `${total.toFixed(2)} $`
                : `${monthlyPayment} $ x ${option}`}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default InstallmentOptions;
