import * as React from 'react';
import Type from './Type';
import Schema from './Schema';
import TypeListView from './TypeListView';
import Scoreboard from './Scoreboard';

interface Props {
  schema: Schema;
  scoreboard: Scoreboard;
  onTypeSelect: (type: Type) => void;
}

const SchemaView: React.FC<Props> = ({ schema, scoreboard, onTypeSelect }) => {
  return (
    <div className="schema">
      <h1>How well do you know the <strong>{schema.name}</strong> schema?</h1>
      <TypeListView
        types={schema.types}
        scoreboard={scoreboard}
        onTypeSelect={onTypeSelect}
      />
    </div>
  );
}

export default SchemaView;