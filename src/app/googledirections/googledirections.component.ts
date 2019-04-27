import {Component, ElementRef, NgZone, OnInit, ViewChild} from '@angular/core';
import * as $ from 'jquery';
import {} from 'googlemaps';
import {MapsAPILoader} from '@agm/core';

@Component({
  selector: 'app-googledirections',
  templateUrl: './googledirections.component.html',
  styleUrls: ['./googledirections.component.css']
})
export class GoogledirectionsComponent implements OnInit {

  @ViewChild('source') public sourceElementRef: ElementRef;
  @ViewChild('destination') public destinationElementRef: ElementRef;
  @ViewChild('directionmap') public driectionMapElement: ElementRef;
  public isMap = false;

  constructor(private mapsAPILoader: MapsAPILoader, private ngZone: NgZone ) {
  }

  ngOnInit() {
    this.mapsAPILoader.load().then(() => {
      const sourceaddress = new google.maps.places.Autocomplete(this.sourceElementRef.nativeElement, {
        types: [],
        componentRestrictions: {'country': 'IN'},
      });

      const destinationaddress = new google.maps.places.Autocomplete(this.destinationElementRef.nativeElement, {
        types: [],
        componentRestrictions: {'country': 'IN'},
      });

    });
  }

  getDirections() {
    this.isMap = true;
    this.mapsAPILoader.load().then(() => {
      this.ngZone.run(() => {
        const sourceaddress = $('#source').val();
        const destinationaddress = $('#destination').val();
        const directionmap = new google.maps.Map(this.driectionMapElement.nativeElement, {
          zoom: 13,
          scrollwheel: false,
          center: new google.maps.LatLng(39.8282, -98.5795),
          mapTypeId: google.maps.MapTypeId.ROADMAP,
          zoomControl: true,
          mapTypeControl: false,
          scaleControl: false,
          panControl: false,
          fullscreenControl: false,
          streetViewControl: false,
          gestureHandling: 'cooperative'
        });

        const directionsService = new google.maps.DirectionsService();
        const directionsDisplay = new google.maps.DirectionsRenderer();
        directionsDisplay.setMap(directionmap);
        directionsService.route({
          origin: sourceaddress,
          destination: destinationaddress,
          travelMode: google.maps.TravelMode.DRIVING
        }, (response) => {
          directionsDisplay.setDirections(response);
        });
        const service = new google.maps.DistanceMatrixService();
        service.getDistanceMatrix({
          origins: [sourceaddress],
          destinations: [destinationaddress],
          travelMode: google.maps.TravelMode.DRIVING,
          unitSystem: google.maps.UnitSystem.METRIC,
          avoidHighways: false,
          avoidTolls: false
        }, function (response) {
          console.log(response);
          this.distance = response.rows[0].elements[0].distance.text;
          $('#distance').html(this.distance);
          this.duration = response.rows[0].elements[0].duration.text;
          $('#duration').html(this.duration);

        });
      });
    });
  }

}
