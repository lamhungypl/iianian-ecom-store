import { Map, Record } from "immutable";

export interface WishlistState extends Map<string, any> {
    newPassword: any;
    wishlist: any;
    wishlistLoading: any;
    wishlistLoaded: any;
    wishlistFailed: any;
}

export const wishlistRecord = Record({
    newPassword: {},
    wishlist: [],
    wishlistLoading: false,
    wishlistLoaded: false,
    wishlistFailed: false
});
