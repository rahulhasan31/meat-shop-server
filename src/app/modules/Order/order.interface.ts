export interface IOrder {
  products: {
    name: string;
    price: number;
    quantity: number;
    imgUrl: string;
    imgUrlOne: string;
    imgUrlTwo: string;
    productDetails: string;
  }[];
  paymentID: string;
  paymentAmount: number;
  userName: string;

  userEmail?: string;
  userID: string;
  paymentStatus: string;
}
