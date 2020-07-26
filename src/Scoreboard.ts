export default class Scoreboard {
  scores: Map<string, Score>;

  constructor() {
    this.scores = new Map();
  }

  static load(): Scoreboard {
    const scoreboard = new Scoreboard();
    const json = localStorage.getItem('scores');
    const pairs = json ? JSON.parse(json) : [];
    for (const [typeName, score] of pairs) {
      scoreboard.set(typeName, score);
    }
    return scoreboard;
  }

  get(typeName: string): Score | undefined {
    return this.scores.get(typeName);
  }

  set(typeName: string, score: Score): void {
    this.scores.set(typeName, score);
  }

  save() {
    localStorage.setItem('scores', JSON.stringify(Array.from(this.scores.entries())));
  }
}

export interface Score {
  found: number;
  time: number;
}
