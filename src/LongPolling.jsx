import {useEffect} from 'react';

export function LongPollingLoader({loadData}) {
  useEffect(() => {
    loadData();
  }, [])

  return <h1 className="title">Long polling</h1>;
}
