import React, { useState, useMemo, useCallback } from 'react';

const Item = React.memo(({ item }) => {
  // Render item details
  return <div>{item}</div>;
});

const App = () => {
  // State
  const [items, setItems] = useState(Array.from({ length: 1000 }, (_, i) => `Item ${i}`));

  // Callbacks
  const handleClick = useCallback(() => {
    // Handle click
  }, []);

  // Memoized rendering
  const optimizedItems = useMemo(() => {
    // Perform any expensive computations
    return items.map((item, index) => <Item key={index} item={item} />);
  }, [items]);

  return (
    <div>
      {/* Render optimized items */}
      {optimizedItems}

      {/* Example of an interactive element */}
      <button onClick={handleClick}>Click</button>
    </div>
  );
};

export default App;