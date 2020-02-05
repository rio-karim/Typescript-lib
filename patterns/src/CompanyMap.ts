import { User } from './User';
import { Company } from './Company';

interface Mappable {
  zoom: number;
  location: {
    lat: number;
    lng: number;
  };
}

export class CompanyMap {
  private googleMap: google.maps.Map;

  constructor(id: string) {
    this.googleMap = new google.maps.Map(document.querySelector(`#${id}`), {
      zoom: 1,
      center: {
        lat: 0,
        lng: 0
      }
    });
  }
  addUserMarker(mappable: Mappable): void {
    new google.maps.Marker({
      map: this.googleMap,
      position: {
        lat: mappable.location.lat,
        lng: mappable.location.lng
      }
    });
  }
}
