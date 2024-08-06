import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';

function OptionsHomeButton() {
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
      className="growing-button"
      variant="warning"
      disabled={isLoading}
      onClick={!isLoading ? handleClick : null}
    >
      {isLoading ? 'Loading…' : 'Options Menu'}
    </Button>
  );
}

export default OptionsHomeButton;