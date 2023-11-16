export interface ICompany {
    company_status: string;
    address_snippet: string;
    date_of_creation: string;
    matches: IMatches;
    description: string;
    links: ILinks;
    company_number: string;
    title: string;
    company_type: string;
    address: IAddress;
    kind: string;
    description_identifier: string[];
  }

  interface IAddress {
    premises: string;
    postal_code: string;
    country: string;
    locality: string;
    address_line_1: string;
  }

  interface ILinks {
    self: string;
  }

  interface IMatches {
    title: number[];
  }