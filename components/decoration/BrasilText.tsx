import { Fragment } from 'react';
import { v4 as uuidv4 } from 'uuid';

function BrasilText({ letters }: { letters: string }) {
  return ( 
    <div className="brasilText">
      {
        letters.split('').map(letter => {
          if (letter === ' ') {
            return <Fragment key={uuidv4()}>&nbsp;</Fragment>
          }
          return <span key={uuidv4()}>{letter}</span>
        })
      }
    </div>
   );
}

export default BrasilText;