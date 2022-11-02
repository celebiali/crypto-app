export default class DataModels {
    constructor() {
      this.id = "";
      this.symbol = "";
      this.name = "";
      this.image = "";
      this.current_price = 0;
      this.market_cap = 0;
      this.market_cap_rank = 0;
      this.fully_diluted_valuation = 0;
      this.total_volume = 0;
      this.high_24h = 0;
      this.low_24h = 0;
      this.price_change_24h = 0;
      this.price_change_percentage_24h = 0;
      this.market_cap_change_24h = 0;
      this.market_cap_change_percentage_24h = 0;
      this.circulating_supply = 0;
      this.total_supply = 0;
      this.max_supply = 0;
      this.ath = 0;
      this.ath_change_percentage = 0;
      this.ath_date = "";
      this.atl = 0;
      this.atl_change_percentage = 0;
      this.atl_date = "";
      this.roi = null;
      this.last_updated = "";
      this.quantity = 0;
    }
    id: string;
    symbol: string;
    name: string;
    image: string;
    current_price: number;
    market_cap: number;
    market_cap_rank: number;
    fully_diluted_valuation: number;
    total_volume: number;
    high_24h: number;
    low_24h: number;
    price_change_24h: number;
    price_change_percentage_24h: number;
    market_cap_change_24h: number;
    market_cap_change_percentage_24h: number;
    circulating_supply: number;
    total_supply: number;
    max_supply: number;
    ath: number;
    ath_change_percentage: number;
    ath_date: string;
    atl: number;
    atl_change_percentage: number;
    atl_date: string;
    roi: null;
    last_updated: string;
    quantity: number;
  }
  