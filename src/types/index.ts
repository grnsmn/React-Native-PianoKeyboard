export interface IPianoKeyboardProps {
  startKey?: string;
  endKey?: string;
  keyDisabled?: boolean;
  onPressKey: (key: string) => void;
}

export type TPianoKey = {
  isWhite: boolean;
  midi: number;
  note: string;
  left: number;
};

export type TKeyboardState = {
  width: number;
  keys: TPianoKey[];
}; 