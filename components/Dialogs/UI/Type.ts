export interface SelectInputProps {
  selected: string;
  label: string;
  selectInput: {
    label: string;
    value: string;
    icon: JSX.Element;
  }[];
  inputTextValue: string;
}

export interface SaleItemProps {
  land: string;
  priceDollar: string;
  princETH: string;
  ItemImage: {
    logo: boolean;
    type: string;
    title: string;
    size: string;
    district: string;
    mainImage: string;
  };
}
