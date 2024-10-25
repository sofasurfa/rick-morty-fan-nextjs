//

export interface DataStructure {
  data: Data;
}

export interface Data {
  characters: Characters;
  character: Character;
}

export interface Characters {
  results: Character[];
}

export interface Character {
  id: string;
  name: string;
  image: string;
  status: string;
  species: string;
  gender: string;
}

// IGNORE THIS..
// export interface DataStructure {
//   data: Data;
// }

// export interface Data {
//   search: ItemsConnection;
// }

// export interface ItemsConnection {
//   totalCount: number;
// }

// export interface Item {
//   id: string;
//   name: string;
//   image: string;
//   description?: string;
//   lat: number;
//   lon: number;
// }
