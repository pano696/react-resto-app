export default class RestoService {

  constructor() {
    this._baseUrl = 'http://localhost:3000'
  }

  getResource = async (url) => {
    const response = await fetch(`${this._baseUrl}${url}`)
    if (!response.ok) throw new Error(`Could not fetch ${url}, status: ${response.status}`);

    return await response.json()

  }

  getMenuItems = async () => {
    return await this.getResource('/menu/')
  }
}
