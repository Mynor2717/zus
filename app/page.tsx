"use client";

import { useBearsStore } from '@/store/bear.store';

const HomePage = () => {

  const bears = useBearsStore((state) => state.bears);

  return (
    <div>HomePage</div>
  )
}

export default HomePage