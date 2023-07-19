import { Injectable } from '@nestjs/common';

const products = [
  {code: '00001',description: 'This is a sample description of Card 01',name: 'Card number 01', price: 200.00},
  {code: '00002',description: 'This is a description of the second card number 02',name: 'Card number 02', price: 199.99},
  {code: '00003',description: 'This is a long paragraph created to validate the responsive properties of the InfoCard component at Card 03',name: 'Card number 03', price: 350.00},
  {code: '00004',description: 'Description of Card 04',name: 'Card number 04', price: 499.99},
  {code: '00005',description: 'Extense description of Card 05 to check the responsive property of the Frontend.',name: 'Card number 05', price: 50.00}
]

const products2 = [
  {code: '00001',description: 'This is a sample description of Card 01',name: 'Card number 01', price: 200.00},
  {code: '00002',description: 'This is a description of the second card number 02',name: 'Card number 02', price: 199.99},
  {code: '00003',description: 'This is a long paragraph created to validate the responsive properties of the InfoCard component at Card 03',name: 'Card number 03', price: 350.00},
  {code: '00004',description: 'Description of Card 04',name: 'Card number 04', price: 499.99},
  {code: '00005',description: 'Extense description of Card 05 to check the responsive property of the Frontend.',name: 'Card number 05', price: 50.00}
]

const sample = [
  {code: '00000',description: 'This is a sample description of Card 00',name: 'Card number 00', price: 1.00},
]

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  getProducts(): Array<any> {
    return products;
  }

  getProductSample(): Array<any> {
    return sample;
  }
}
