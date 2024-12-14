export const ROUTES = {
    app: {
        route: '/',
    },
    shop: {
        route: 'shop',
        page: '/shop',

        category: {
            route: '/:category',
            page: '/shop/:cartegory'
        },
        
        item: {
            route: '/item',
            page: '/shop/item'
        },

        cart: {
            route: '/cart',
            page: '/shop/cart'
        }

    },

    auth: {
        path: '/auth',
        
        login: {
            route: '',
            page: '/auth/login'
        },
        register: {
            route: 'register',
            page: '/auth/register'
        }
    },
    page_not_fount: {
        route: '*',
    }

}