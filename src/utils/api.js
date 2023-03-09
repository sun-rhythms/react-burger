const API_URL = 'https://norma.nomoreparties.space/api';

export const getIngridientsFromServer = async () => {
  try {
    const res = await fetch(`${API_URL}/ingredients`);
    if (!res.ok) {
      const errorData = await res.json();
      throw new Error(errorData);
    }
    const data = await res.json();
    return data;
  } catch (err) {
    console.log(`Ошибка запроса данных с серера: ${err}`);
  }
};
