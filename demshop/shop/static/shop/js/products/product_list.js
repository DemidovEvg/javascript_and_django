import { ProductItem } from './product_item.js'

export class ProductList {
    constructor({ container_selector = '.products' }) {
        this.container = document.querySelector(container_selector);
        this.productsData = [];
    }
    updateData(categoryRequired = 'all') {
        let data = [
            {
                id: 1,
                title: 'Лампа l-1000',
                price: 1500,
                img: '/static/shop/img/product-1.jpg',
                rating: 4,
                description: 'Овальная лампа для дома',
                category: 'lamp'
            },
            {
                id: 2,
                title: 'Стул h-2000',
                price: 2500,
                img: '/static/shop/img/product-2.jpg',
                rating: 5,
                description: 'Стул для чтения с овальной лампой',
                category: 'chair'
            },
            {
                id: 3,
                title: 'Чайник p-3000',
                price: 1700,
                img: '/static/shop/img/product-3.jpg',
                rating: 3,
                description: 'Инновационный чайник с wifi',
                category: 'kitchen'
            },
            {
                id: 4,
                title: 'Стул h-2001',
                price: 3800,
                img: '/static/shop/img/product-4.jpg',
                rating: 2,
                description: 'Данный стул всегда будет улыбаться вам',
                category: 'chair'
            },
            {
                id: 5,
                title: 'Лампа l-1001',
                price: 1200,
                img: '/static/shop/img/product-11.jpg',
                rating: 5,
                description: 'Лампа с датчиком движения',
                category: 'chair'
            },
            {
                id: 6,
                title: 'Стул h-2002',
                price: 5500,
                img: '/static/shop/img/product-21.jpg',
                rating: 3,
                description: 'Стул как у Кристиан Стюарт',
                category: 'chair'
            },
            {
                id: 7,
                title: 'Лампа l-1002',
                price: 2200,
                img: '/static/shop/img/product-31.jpg',
                rating: 4,
                description: 'Настольная лампа, с со встроенным ионизатором воздуха',
                category: 'lamp'
            },
            {
                id: 8,
                title: 'Лампа l-1003',
                price: 3500,
                img: '/static/shop/img/product-41.jpg',
                rating: 5,
                description: 'Беспроводная настенная лампа',
                category: 'lamp'
            },
            {
                id: 9,
                title: 'Ступка p-3001',
                price: 500,
                img: '/static/shop/img/product-51.jpg',
                rating: 2,
                description: 'Ступка для алхимика',
                category: 'kitchen'
            },
        ];
        if (categoryRequired !== 'all') {
            this.productsData = data.filter(product => product.category === categoryRequired);
        } else {
            this.productsData = data;
        }
    }
    renderProductList() {
        for (let product of this.productsData) {
            const item = new ProductItem(product);
            this.container.insertAdjacentHTML("beforeend", item.renderItem());
        }
    }
}