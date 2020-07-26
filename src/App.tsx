
import React, { useState } from 'react';
import './App.css';
import SchemaView from './SchemaView';
import Type from './Type';
import TypeView from './TypeView';
import Scoreboard, { Score } from './Scoreboard';
import Schema from './Schema';

declare const schema: Schema;

export default function App() {
  const [scoreboard, setScoreboard] = useState<Scoreboard>(Scoreboard.load());
  const [selectedType, setSelectedType] = useState<Type | null>(null);

  function updateScore(type: Type, score: Score): void {
    const bestScore = scoreboard.get(type.name);
    const updatedBestScore = {
      found: bestScore ? Math.max(bestScore.found, score.found) : score.found,
      time: bestScore ? Math.min(bestScore.time, score.time) : score.time
    };
    scoreboard.set(type.name, updatedBestScore)
    setScoreboard(scoreboard);
    scoreboard.save();
    setSelectedType(null);
  }

  return (
    <div className="App">
      {selectedType
        ? <TypeView
            type={selectedType}
            onFinish={result => updateScore(selectedType, result)}
            onBack={() => setSelectedType(null)}
          />
        : <SchemaView
            schema={schema}
            scoreboard={scoreboard}
            onTypeSelect={type => setSelectedType(type)}
          />
      }
    </div>
  );
}
