import { useEffect, useState } from "react";

const InstallmentOptions = ({ total, onSelect }) => {
  const installmentOptions = [1, 3, 4, 6];
  const [selectedOption, setSelectedOption] = useState(1); // Default to single payment

  useEffect(() => {
    // Set default installment option when component mounts
    onSelect(1);
  }, [onSelect]);

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
    onSelect(option);
  };

  return (
    <div className="mt-4">
      <h3 className="text-xl mb-2">Installment Options</h3>
      <div className="grid grid-cols-2 gap-4">
        {installmentOptions.map((option) => {
          const monthlyPayment = (total / option).toFixed(2);
          return (
            <label
              key={option}
              className={`p-2 border rounded hover:bg-blue-100 transition-colors cursor-pointer flex items-start gap-2 shadow-md ${
                selectedOption === option ? "bg-blue-50" : ""
              }`}
            >
              <input
                type="radio"
                name="installmentOption"
                value={option}
                checked={selectedOption === option}
                onChange={() => handleOptionSelect(option)}
                className="mt-1"
              />
              <div>
                <div className="font-bold">
                  {option === 1 ? "Single Payment" : `${option} Installments`}
                </div>
                <div>
                  {option === 1
                    ? `${total.toFixed(2)} $`
                    : `${monthlyPayment} $ x ${option}`}
                </div>
              </div>
            </label>
          );
        })}
      </div>
    </div>
  );
};

export default InstallmentOptions;
