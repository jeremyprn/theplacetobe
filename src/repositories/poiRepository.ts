import {IThemeRequest, TPoi} from '../types/entities/poi.spec';

const poiRepository = {
  getTheme: async ({theme, type, cityId}: IThemeRequest): Promise<TPoi[] | undefined> => {
    try {
      const httpCall = await fetch(
        `https://geodatamine.fr/data/${theme}/${cityId}?format=geojson&aspoint=true&radius=2`,
      );
      const response = await httpCall.json();
      const data = response.features;
      if (type) {
        const filteredData = data.filter(
          (item: any) => item.properties.type === type,
        );
        return filteredData;
      }
      return data;
    } catch (error) {
      return undefined;
    }
  },
};

export default poiRepository;
