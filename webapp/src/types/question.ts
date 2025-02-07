import { Answer } from './answer';
import { Option } from './option';

export interface Question {
  id: number;
  title: string;
  type: 'input' | 'mcq';
  answers?: Answer[];
  options?: Option[];
}
