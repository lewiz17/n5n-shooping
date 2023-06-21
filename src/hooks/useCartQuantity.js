import { useEffect, useState } from "react";

export const useCartTotalQuantity = (array) => {
  const [totalQuantity, setTotalQuantity] = useState(0);

  useEffect(() => {
    const total = () => {
      const quantity = array.reduce((out, item) => out + item.cartQuantity, 0);
      setTotalQuantity(quantity);
    };

    total();
  }, [array]);

  return totalQuantity;
};
