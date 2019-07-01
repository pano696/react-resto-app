export default class RestoService {

  constructor() {
    this._baseUrl = 'http://localhost:3000'
  }

  getResource = async (url) => {
    const response = await fetch(`${this._baseUrl}${url}`)
    if (!response.ok) throw new Error(`Could not fetch ${url}, status: ${response.status}`);

    return await response.json()

  }

  saveResource = async (url, data) => {
    const response = await fetch(`${this._baseUrl}${url}`, {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(data)
    })
    if (!response.ok) throw new Error(`Could not fetch ${url}, status: ${response.status}`);

    return await response.json()

  }

  getMenuItems = async () => {
    return await this.getResource('/menu/')
  }

  saveOrders = async (items) => {
    return await this.saveResource('/orders/', items)
  }
}
