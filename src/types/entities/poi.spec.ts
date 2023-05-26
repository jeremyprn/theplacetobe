export type TPoiType = "shop" |
"education" |
"fuel" |
"healthcare" |
"historic" |
"service" |
"leisure" |
"restaurant" ;

export type TPoi = {
  properties: {
    osm_id: string | null;
    type: string | null;
    type_fr: string | null;
    name: string | null;
    brand: string | null;
    operator: null;
    wheelchair: null;
    opening_hours: string | null;
    level: null;
    siret: null;
    profession_ref: null;
    wikidata: null;
    website: string | null;
    phone: string | null;
    email: string | null;
    facebook: null;
    address: string | null;
    com_insee: string | null;
    com_nom: string | null;
    last_update: string | null;
  };
  geometry: {
    type: 'Point';
    coordinates: number[];
  } | undefined;
};

export interface IThemeRequest {
  theme: TThemes;
  type?: TCommerces | TLoisirs | TRestauration;
  cityId: number;
}

export type TCommerces =
  | 'bakery'
  | 'optician'
  | 'bank'
  | 'supermarket'
  | 'car'
  | 'estate_agent'
  | 'clothes'
  | 'shoes'
  | 'kitchen'
  | 'post_office'
  | 'motorcycle'
  | 'variety_store'
  | 'vehicule_inspection'
  | 'car_repair'
  | 'doityourself'
  | 'garden_centre'
  | 'sports';
export type TLoisirs = 'nightclub';

export type TRestauration =
  | 'restaurant'
  | 'fast_food'
  | 'cafe'
  | 'ice_cream'
  | 'brewey'
  | 'food_court';

export type TThemes =
  | 'shop_craft_office'
  | 'education'
  | 'shop_craft_office'
  | 'historic'
  | 'shop_craft_office'
  | 'healthcare'
  | 'public_service'
  | 'fuel';
