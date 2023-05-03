import {useEffect} from 'react';

export function ServerSentEventsLoader({onData, api}) {
  useEffect(() => {
    const source = new EventSource(api);

    source.onmessage = (event) => {
      const message = JSON.parse(event.data)
      onData(message);
    }
  }, [])

  return <h1 className="title">Server Sent Events</h1>;
}
