import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';

function BasicStratHomeButton() {
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
     const simulateNetworkRequest = () => {
      return new Promise((resolve) => setTimeout(resolve, 2000));
    }

    if (isLoading) {
      simulateNetworkRequest().then(() => {
        setLoading(false);
      });
    }
  }, [isLoading]);

  const handleClick = () => setLoading(true);

  return (
    <Button
      variant="warning"
      disabled={isLoading}
      onClick={!isLoading ? handleClick : null}
    >
      {isLoading ? 'Loading…' : 'Study Basic Strategy'}
    </Button>
  );
}

export default BasicStratHomeButton;