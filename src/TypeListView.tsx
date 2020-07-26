import * as React from 'react';
import TypeCardView from './TypeCardView';
import Type from './Type';
import Scoreboard from './Scoreboard';

interface Props {
  types: Type[];
  scoreboard: Scoreboard;
  onTypeSelect: (type: Type) => void;
}

const TypeListView: React.FC<Props> = ({ types, onTypeSelect, scoreboard }) => {
  return (
    <div className="type-list">
      {types.map((type) =>
        <div onClick={() => onTypeSelect(type)} key={type.name}>
          <TypeCardView type={type} score={scoreboard.get(type.name)} />
        </div>
      )}
    </div>
  );
}

export default TypeListView;