import * as React from 'react';
import Type from './Type';
import useInterval from './useInterval';
import { Score } from './Scoreboard';

interface Props {
  type: Type;
  onFinish: (result: Score) => void;
  onBack: () => void;
}

const ENTER_KEY_CODE = 13;
const TIME_COEFFICIENT = 10;

const TypeView: React.FC<Props> = ({ type, onFinish, onBack }) => {
  const MAX_TIME = type.fields.length * TIME_COEFFICIENT;
  const [startTime, setStartTime] = React.useState<number | null>(null);
  const [ticker, setTicker] = React.useState<number>(MAX_TIME);
  const [running, setRunning] = React.useState<boolean>(false);
  const [found, setFound] = React.useState<Set<string>>(new Set());
  const [wrong, setWrong] = React.useState<number>(0);
  const [submission, setSubmission] = React.useState<string>('');

  const stop = React.useCallback(() => {
    setRunning(false);
    if (startTime) {
      onFinish({ found: found.size, time: found.size === type.fields.length ? Date.now() - startTime : MAX_TIME });
    }
  }, [startTime, onFinish, MAX_TIME, found.size, type.fields.length]);

  React.useEffect(() => {
    if (running && startTime && (ticker <= 0 || found.size === type.fields.length)) {
      stop();
    }
  }, [found.size, type.fields.length, running, ticker, startTime, onFinish, stop]);

  useInterval(() => {
    setTicker(ticker - 1);
  }, running ? 1000 : undefined);

  function start() {
    setTicker(MAX_TIME);
    setWrong(0);
    setRunning(true);
    setFound(new Set());
    setStartTime(Date.now());
  }

  function submit() {
    const field = type.fields.find(f => f.name === submission);
    if (field) {
      setFound(found.add(submission));
    }
    else {
      setWrong(wrong + 1);
    }
    setSubmission('');
  }

  function handleKey(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.keyCode === ENTER_KEY_CODE) {
      submit();
    }
  }

  function onChange(e: React.ChangeEvent<HTMLInputElement>): void {
    setSubmission(e.target.value);
  }

  return (
    <div className="type">
      <h1>How well do you know the <strong>{type.name}</strong> table?</h1>
      {running
        ? <div className="buttons">
            <button onClick={stop}>Stop</button>
          </div>
        : <div className="buttons">
            <button onClick={onBack}>&lt; Back</button>
            <button onClick={start}>Start</button>
          </div>
      }
      {running && (
        <div>
          <div className="ticker">
            <span role="img" aria-label="clock">⏲️</span> {ticker} seconds
          </div>
          <div className="field-list">
            {type.fields.map(field => (
              <div key={field.name} className={found.has(field.name) ? 'field-card found' : 'field-card'}>
                {found.has(field.name) ? field.name : '? ? ?'}
              </div>
            ))}
          </div>
          <div className="wrong">
            {new Array(wrong).fill(<span role="img" aria-label="wrong">❌</span>)}
          </div>
          <input
            autoFocus={true}
            value={submission}
            onKeyUp={handleKey}
            onChange={onChange}
            placeholder="Type a column name"
          />
        </div>
      )}
    </div>
  );
}

export default TypeView;