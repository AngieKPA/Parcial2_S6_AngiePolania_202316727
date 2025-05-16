export class Aerolinea {

    airlineName: string;
    country : string;
    city: string;
    address: string;
    identityColor: string;
    slogan: string;
    
    constructor(airlineName: string, country: string, city: string, address: string, identityColor: string, slogan: string) {
        this.airlineName = airlineName;
        this.country = country;
        this.city = city;
        this.address = address;
        this.identityColor = identityColor;
        this.slogan = slogan;
    }
}
