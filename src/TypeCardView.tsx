import * as React from 'react';
import Type from './Type';
import { Score } from './Scoreboard';

interface Props {
  type: Type;
  score?: Score;
}

const TypeCardView: React.FC<Props> = ({ type, score }) => {
  const percent = score ? score.found / type.fields.length : 0;
  const classNameModifier = percent === 1 ? 'completed' : percent > 0 ? 'started' : '';
  return (
    <div className={`type-card ${classNameModifier}`}>
      <div className="label">{type.name}</div>
      <div className="stats">
        {percent < 1
          ? `${(percent * 100).toFixed(2)}%`
          : `✔️ ${score && score.time / 1000} secs`
        }
      </div>
    </div>
  );
}

export default TypeCardView;