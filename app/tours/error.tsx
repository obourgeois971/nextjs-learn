'use client';

import { log } from 'console';

function error({ error }: { error: Error }) {
  console.log(error);

  return <div>there was an error...</div>;
}
export default error;
