export interface Actor {
  _id: string;
  imdbId: string;
  name: string;
  birthday: string;
  country: string;
  gender: 'male' | 'female';
  photoUrl: string;
}
