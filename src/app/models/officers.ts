export interface IOfficersResponse {
    etag: string;
    inactive_count: number;
    links: Links;
    kind: string;
    items_per_page: number;
    items: IOfficer[];
    total_results: number;
    resigned_count: number;
  }

  export interface IOfficer {
    address: Address;
    name: string;
    appointed_on: string;
    officer_role: string;
    links: ILinks2;
    occupation?: string;
    nationality?: string;
    resigned_on?: string;
    date_of_birth?: IDateofbirth;
    country_of_residence?: string;
  }

  interface IDateofbirth {
    month: number;
    year: number;
  }

  interface ILinks2 {
    officer: Officer;
  }

  interface Officer {
    appointments: string;
  }

  interface Address {
    postal_code: string;
    locality: string;
    address_line_1: string;
    address_line_2?: string;
    region?: string;
  }

  interface Links {
    self: string;
  }