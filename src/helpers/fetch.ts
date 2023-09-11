export const getApi = async (url:string) => {
  try {
    const response = await fetch("http://localhost:3000/"+url);
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};
