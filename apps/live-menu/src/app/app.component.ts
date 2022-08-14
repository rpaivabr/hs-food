import { Component } from '@angular/core';
import { ApiService } from './services/api.service';
import { AuthService } from '@hs-food/auth';
import { Item } from '@hs-food/ui';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'hsf-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Menu';
  icons = ['room_service', 'receipt_long'];
  items: Item[] = [
    {
      name: 'Calabresa',
      description: 'Molho de tomate italiano, muçarela fresca fior de latte, calabresa artesanal com erva doce, orégano fresco e cebola roxa.',
      category: 'Pizzas',
      imageUrl: '/assets/calabresa.jpg',
      price: 39.9,
    },
    {
      name: 'Carbonara',
      description: 'Nossa queridinha, inspirada no clássico carbonara. Muçarela fresca fior de latte, bacon artesanal, parmesão, finalizada com de fios de gema com queijo pecorino e pimenta do reino.',
      category: 'Pizzas',
      imageUrl: '/assets/carbonara.jpg',
      price: 41.9,
    },
    {
      name: 'Marguerita',
      description: 'Nossa Rainha, Molho de tomate italiano, muçarela fresca fior de latte, parmesão, azeite italiano extra virgem e manjericão.',
      category: 'Pizzas',
      imageUrl: '/assets/marguerita.jpg',
      price: 38,
    },
    {
      name: 'Marinara',
      description: 'Clássico italiano, pizza mais antiga e tradicional de Nápoles. Generosa porção de molho de tomate italiano, orégano, alho laminado, manjericão e azeite italiano extra virgem.',
      category: 'Pizzas',
      imageUrl: '/assets/marinara.jpg',
      price: 32.9,
    },
    {
      name: 'Cannoli',
      description:
        'Dois cannolis recheados de ricota com toque cítrico, gotas de chocolate e pistache. Os canollis são frescos e feitos na casa com toda a atenção e qualidade que você merece!',
      category: 'Sobremesas',
      imageUrl: '/assets/cannoli.jpg',
      price: 24.9,
    },
    {
      name: 'Calzone de Nutella',
      description:
        'Massa de pizza individual fechada com recheio de Nutella. Tudo isso em uma massa leve de longa fermentação feita com farinha 00 importada da Itália, montada artesanalmente.',
      category: 'Sobremesas',
      imageUrl: '/assets/calzone_nutella.jpg',
      price: 39.9,
    },
    {
      name: 'Coca-Cola',
      description: 'Lata 350ml',
      category: 'Bebidas',
      imageUrl: '/assets/coca.jpg',
      price: 7,
    },
    {
      name: 'Guaraná Antarctica',
      description: 'Lata 350ml',
      category: 'Bebidas',
      imageUrl: '/assets/guarana.jpg',
      price: 7,
    },
    {
      name: 'Suco de Laranja',
      description: 'Garrafa 300ml',
      category: 'Bebidas',
      imageUrl: '/assets/suco.jpg',
      price: 39.9,
    },
    {
      name: 'Água sem gás',
      description: 'Garrafa 330ml',
      category: 'Bebidas',
      imageUrl: '/assets/agua.jpg',
      price: 39.9,
    }
  ];

  users$ = this.api.getUsers();
  login$ = this.auth.login({
    email: 'r.paivabr@gmail.com',
    password: 'changeme',
  });

  constructor(private api: ApiService, private auth: AuthService, private snackbar: MatSnackBar) {}

  iconClicked(icon: string): void {
    console.log(icon)
    switch (icon) {
      case 'room_service':
        this.snackbar.open('Atendente solicitado, por favor aguarde!', 'Cancelar', {
          verticalPosition: 'top'
        })
        break;
      default:
        break;
    }

  }
}
