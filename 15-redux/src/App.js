import CreateCustomer from "./Features/Customers/CreateCustomer";
import Customer from "./Features/Customers/Customer";
import AccountOperations from "./Features/accounts/AccountOperations";
import BalanceDisplay from "./Features/accounts/BalanceDisplay";

function App() {
  return (
    <div>
      <h1>🏦 The React-Redux Bank ⚛️</h1>
      <CreateCustomer />
      <Customer />
      <AccountOperations />
      <BalanceDisplay />
    </div>
  );
}

export default App;
