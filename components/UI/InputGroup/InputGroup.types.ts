export interface InputGroupType {
  label: string;
  value: string;
  selected: string;
  options: Array<{
    icon: string | JSX.Element;
    text: string;
    value: string;
  }>;
}
