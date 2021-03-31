import Pages from '../pages';

export const route = {
  home: '/',
  books: '/books',
  bookDetail: '/books/:bookId',
  favoriteBooks: '/favorite-books'
};

const Routes = [
  {
    path: route.home,
    component: Pages.Home
  },
  {
    path: route.books,
    component: Pages.Books
  },
  {
    path: route.bookDetail,
    component: Pages.BookDetail
  },
  {
    path: route.favoriteBooks,
    component: Pages.FavoriteBooks
  },
  {
    path: '*',
    component: Pages.error404
  }
];

export default Routes;
