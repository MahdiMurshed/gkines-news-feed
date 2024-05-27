export type Post = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

type Address = {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: {
    lat: string;
    lng: string;
  };
};

type Company = {
  name: string;
  catchPhrase: string;
  bs: string;
};

export type User = {
  id: 1;
  name: string;
  username: string;
  email: string;
  address: Address;
  phone: string;
  website: string;
  company: Company;
};

export type UserPost = {
  userName: string;
  handle: string;
  userId: number;
  id: number;
  title: string;
  body: string;
};
