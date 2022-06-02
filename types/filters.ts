export type FilterType = {
  id?: string;
  label: string;
  isLeaf: boolean;
  level: number;
  count?: number;
  filters?: FilterType[];
  flag?: string | null;
  parentId?: string;
};

export type FilterData = { [key: string]: FilterType };

export type Filter = Omit<FilterType, "filters">;

export type FiltersCB = (filters: Filter[]) => Filter[];
