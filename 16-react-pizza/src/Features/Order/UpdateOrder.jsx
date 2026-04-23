import { useFetcher } from 'react-router-dom';
import Button from '../../UI/Button';

function UpdateOrder({ order }) {
  const fetcher = useFetcher();
  return (
    <fetcher.Form method="Patch" className="text-right">
      <Button type="primary">Prioritize Order</Button>
    </fetcher.Form>
  );
}

export default UpdateOrder;
