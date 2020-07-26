import Field from './Field';

export default interface Type {
  name: string;
  fields: Field[];
  bestScore: number | null;
  bestTime: number | null;
}
