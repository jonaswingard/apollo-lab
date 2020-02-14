const SETTINGS = {
   KEY_ITEMS: 'items',
   KEY_TAGS: 'tags'
};

export const loadTags = () =>
   JSON.parse(localStorage.getItem(SETTINGS.KEY_TAGS)) || [];

export const saveTags = tags => {
   try {
      localStorage.setItem(SETTINGS.KEY_TAGS, JSON.stringify(tags));
   } catch (error) {
      console.error('something went wrong', error);
   }
};

export const loadItems = () =>
   JSON.parse(localStorage.getItem(SETTINGS.KEY_ITEMS)) || [];

export const saveItems = items => {
   try {
      localStorage.setItem(SETTINGS.KEY_ITEMS, JSON.stringify(items));
   } catch (error) {
      console.error('something went wrong', error);
   }
};
