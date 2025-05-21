type Store = {
  [props: string]: number | boolean | string;
};

let store: Store = {};

store.id = 1;
store.name = "Nik";

let roles = ["admim", "guest", "editor"] as const;

let dataEntries = {
  entry: 0.51,
  entry2: -1.23,
} satisfies Record<string, number>;

let dataEntries2: Record<string, number> = {
  entry: 0.51,
  entry2: -1.23,
};

dataEntries2.entry3;
