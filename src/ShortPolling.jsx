import {useEffect} from 'react';

export function ShortPollingLoader({loadData}) {
  useEffect(() => {
    loadData();

    setInterval(loadData, 2000)
  }, [])
  return (
      <h1 className="title">Short polling</h1>
  );
}
