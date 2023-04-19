import { Component } from '@angular/core';

@Component({
  selector: 'app-reservation-list',
  templateUrl: './reservation-list.component.html',
  styleUrls: ['./reservation-list.component.css']
})
export class ReservationListComponent {
  reservations = [
    {name: 'Erick Flores', email: 'erick.flores@u-erre.mx', phone:'8183224253', people: 2, reservationDate: '2023-03-30T06:00:000Z', reservationSchedule: 7},
    {name: 'Erick Flores', email: 'erick.flores@u-erre.mx', phone:'8183224253', people: 2, reservationDate: '2023-03-30T06:00:000Z', reservationSchedule: 7},
    {name: 'Erick Flores', email: 'erick.flores@u-erre.mx', phone:'8183224253', people: 2, reservationDate: '2023-03-30T06:00:000Z', reservationSchedule: 7},
    {name: 'Erick Flores', email: 'erick.flores@u-erre.mx', phone:'8183224253', people: 2, reservationDate: '2023-03-30T06:00:000Z', reservationSchedule: 7},
    {name: 'Erick Flores', email: 'erick.flores@u-erre.mx', phone:'8183224253', people: 2, reservationDate: '2023-03-30T06:00:000Z', reservationSchedule: 7},
    {name: 'Erick Flores', email: 'erick.flores@u-erre.mx', phone:'8183224253', people: 2, reservationDate: '2023-03-30T06:00:000Z', reservationSchedule: 7},
    {name: 'Erick Flores', email: 'erick.flores@u-erre.mx', phone:'8183224253', people: 2, reservationDate: '2023-03-30T06:00:000Z', reservationSchedule: 7},
    {name: 'Erick Flores', email: 'erick.flores@u-erre.mx', phone:'8183224253', people: 2, reservationDate: '2023-03-30T06:00:000Z', reservationSchedule: 7},
    {name: 'Erick Flores', email: 'erick.flores@u-erre.mx', phone:'8183224253', people: 2, reservationDate: '2023-03-30T06:00:000Z', reservationSchedule: 7},
  ];

  displayedColumns: string[] = ['reservationDate', 'reservationSchedule', 'people', 'name', 'email', 'phone'];
}
