import { ICompany } from "./company";

export interface ISearchResults {
    page_number: number;
    kind: string;
    total_results: number;
    items: ICompany[];
  }