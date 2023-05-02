// const API_URL = 'http://127.0.0.1:5050/messages';

export function ShortPollingLoader({loadData}) {
  return (
      <>
        <h1 className="title">Short polling</h1>
        <button onClick={loadData} className="button">Refresh</button>
      </>
  );
}
