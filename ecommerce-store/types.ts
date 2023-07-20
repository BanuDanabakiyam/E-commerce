export interface Billboard {
    id: string;
    label: string;
    imageUrl: string;
};

export interface Category {
    id: string;
    name: string;
    billboard: Billboard;
}

export interface Product {
    id: string;
    category: Category;
    name: string;
    price: string;
    isFeatured: boolean;
    size: Size;
    color: Color;
    images: Image[];
};

export interface Image {
    id: string;
    url: string;
};

export interface Size {
    id: string;
    name: string;
    value: String;
};

export interface Color {
    id: string;
    name: string;
    value: String;
}


// In summary, the Billboard interface specifies
//  that an object adhering to this interface 
//  should have three properties: id, name, and
//   imageUrl, each with its own specific data type. 
//   By using this interface, you can define objects 
//   that represent billboards in your TypeScript code,
//    ensuring that they contain the required properties 
//    with the correct data types. This provides type safety
//     and helps catch potential errors during development, as 
//     TypeScript will check that objects conform to the interface
//      when they are assigned to variables or used as function parameters.




