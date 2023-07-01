import expressoTradicional from '../../assets/coffees/expresso-tradicional.png'
import expressoAmericano from '../../assets/coffees/expresso-americano.png'
import expressoCremoso from '../../assets/coffees/expresso-cremoso.png'
import expressoGelado from '../../assets/coffees/expresso-gelado.png'
import cafeComLeite from '../../assets/coffees/cafe-com-leite.png'
import latte from '../../assets/coffees/latte.png'
import capuccino from '../../assets/coffees/capuccino.png'
import macchiato from '../../assets/coffees/macchiato.png'
import mocaccino from '../../assets/coffees/mocaccino.png'
import chocolateQuente from '../../assets/coffees/chocolate-quente.png'
import cubano from '../../assets/coffees/cubano.png'
import havaiano from '../../assets/coffees/havaiano.png'
import arabe from '../../assets/coffees/arabe.png'
import irlandes from '../../assets/coffees/irlandes.png'
import { Coffee } from '../../contexts/CartContext'

export const coffeeList: Coffee[] = [
  {
    id: 1,
    name: 'Expresso Tradicional',
    description: 'O tradicional café feito com água quente e grãos moídos',
    unitPrice: 3,
    tags: ['Tradicional'],
    imageName: expressoTradicional,
  },
  {
    id: 2,
    name: 'Expresso Americano',
    description: 'Expresso diluído, menos intenso que o tradicional',
    unitPrice: 3,
    tags: ['Tradicional'],
    imageName: expressoAmericano,
  },
  {
    id: 3,
    name: 'Expresso Cremoso',
    description: 'Café expresso tradicional com espuma cremosa',
    unitPrice: 4,
    tags: ['Tradicional'],
    imageName: expressoCremoso,
  },
  {
    id: 4,
    name: 'Expresso Gelado',
    description: 'Bebida preparada com café expresso e cubos de gelo',
    unitPrice: 4,
    tags: ['Tradicional', 'Gelado'],
    imageName: expressoGelado,
  },
  {
    id: 5,
    name: 'Café com Leite',
    description: 'Meio a meio de expresso tradicional com leite vaporizado',
    unitPrice: 4.5,
    tags: ['Tradicional', 'Com leite'],
    imageName: cafeComLeite,
  },
  {
    id: 6,
    name: 'Latte',
    description:
      'Uma dose de café expresso com o dobro de leite e espuma cremosa',
    unitPrice: 5,
    tags: ['Tradicional', 'Com leite'],
    imageName: latte,
  },
  {
    id: 7,
    name: 'Capuccino',
    description:
      'Bebida com canela feita de doses iguais de café, leite e espuma',
    unitPrice: 6.5,
    tags: ['Tradicional', 'Com leite'],
    imageName: capuccino,
  },
  {
    id: 8,
    name: 'Macchiato',
    description:
      'Café expresso misturado com um pouco de leite quente e espuma',
    unitPrice: 6.5,
    tags: ['Tradicional', 'Com leite'],
    imageName: macchiato,
  },
  {
    id: 9,
    name: 'Mocaccino',
    description: 'Café expresso com calda de chocolate, pouco leite e espuma',
    unitPrice: 7,
    tags: ['Tradicional', 'Com leite'],
    imageName: mocaccino,
  },
  {
    id: 10,
    name: 'Chocolate Quente',
    description: 'Bebida feita com chocolate dissolvido no leite quente e café',
    unitPrice: 10,
    tags: ['Especial', 'Com leite'],
    imageName: chocolateQuente,
  },
  {
    id: 11,
    name: 'Cubano',
    description:
      'Drink gelado de café expresso com rum, creme de leite e hortelã',
    unitPrice: 10,
    tags: ['Especial', 'Alcoólico', 'Gelado'],
    imageName: cubano,
  },
  {
    id: 12,
    name: 'Havaiano',
    description: 'Bebida adocicada preparada com café e leite de coco',
    unitPrice: 7,
    tags: ['Especial'],
    imageName: havaiano,
  },
  {
    id: 13,
    name: 'Árabe',
    description: 'Bebida preparada com grãos de café árabe e especiarias',
    unitPrice: 5,
    tags: ['Especial'],
    imageName: arabe,
  },
  {
    id: 14,
    name: 'Irlandês',
    description: 'Bebida a base de café, uísque irlandês, açúcar e chantilly',
    unitPrice: 12,
    tags: ['Especial', 'Alcoólico'],
    imageName: irlandes,
  },
]
