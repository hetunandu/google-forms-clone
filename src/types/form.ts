export interface TextSettings {
  value: string;
  fontSize: number;
}

export interface TextInputSettings {
  question: string;
  maxChars: number;
}

export interface SelectInputSettings {
  question: string;
  options: Array<string>;
}

export interface FormConfig<S> {
  id: string,
  type: string,
  settings: S
}
