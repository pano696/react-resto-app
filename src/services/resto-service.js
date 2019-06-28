export default class RestoService {

  constructor() {
    this._baseUrl = 'http://localhost:3000'
  }

  getData = async (url) => {
    const response = await fetch(`${this._baseUrl}${url}`)
    if (!response.ok) throw new Error(`Could not fetch ${url}, status: ${response.status}`);

    return await response.json()

  }

  getMenuItems = async () => {
    const menuItems = await this.getData('/menu')
    console.log(menuItems);

    return menuItems;
  }
}
