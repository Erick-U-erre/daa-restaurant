import { Component } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {
  menuList = [
    {
      title: 'Arroz a la Mexicana',
      image: '../../assets/menu/platillo1.png',
      description: 'Este platillo está hecho con arroz cocido en un caldo de tomate y cebolla, y se sirve con granos de maíz y chiles picados para darle un toque picante. '
    },
    {
      title: 'Enchiladas Verdes',
      image: '../../assets/menu/platillo2.png',
      description: 'Tortillas suaves rellenas de pollo desmenuzado, cubiertas con una salsa de chiles verdes y queso derretido, y acompañadas con frijoles refritos y arroz.'
    },
    {
      title: 'Tacos de Carne Asada con Guacamole',
      image: '../../assets/menu/platillo3.png',
      description: 'Tiras de carne asada a la parrilla servidas en tortillas calientes, acompañadas de guacamole fresco hecho con aguacate, tomate y cebolla picados.'
    },
    {
      title: 'Hamburguesa con Queso y Macarrones con Queso',
      image: '../../assets/menu/platillo4.png',
      description: 'Una jugosa hamburguesa de carne de res a la parrilla, cubierta con queso cheddar derretido y servida con macarrones con queso cremosos.'
    },
    {
      title: 'Tarta de Fresas con Crema',
      image: '../../assets/menu/platillo5.png',
      description: 'Una base de masa quebrada crujiente rellena con una mezcla de fresas frescas, crema pastelera suave y nata montada, coronada con fresas frescas en rodajas. '
    },
  ];
}
