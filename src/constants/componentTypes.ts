export const STATIC_TEXT_COMPONENT = 'TEXT';
export const TEXT_INPUT_COMPONENT = 'TEXT_INPUT';
export const RADIO_INPUT_COMPONENT = 'RADIO_INPUT';
export const DROPDOWN_INPUT_COMPONENT = 'DROPDOWN_INPUT';

export const DEFAULT_SETTINGS = [
  {
    type: STATIC_TEXT_COMPONENT,
    label: 'Static Text',
    defaultSettings: {
      value: '',
      fontSize: 10,
    }
  },
  {
    type: TEXT_INPUT_COMPONENT,
    label: 'Text Input',
    defaultSettings: {
      question: '',
      maxChars: 100,
    }
  },
  {
    type: RADIO_INPUT_COMPONENT,
    label: 'Multiple Choice',
    defaultSettings: {
      question: '',
      options: [],
    }
  },
  {
    type: DROPDOWN_INPUT_COMPONENT,
    label: 'Drop down',
    defaultSettings: {
      question: '',
      options: [],
    }
  }
];
