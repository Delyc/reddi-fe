export interface Categories {
    image: string,
    backText: string,
    title: string

}

const categories: Categories[] = [
    {
        title: "Fashion",
        image: "/assets/fashion.webp",
        backText: "Anyone interested in Fashion, modelling and fashion design"

    },
    {
        title: "Drawing",
        image: "/assets/drawing.webp",
        backText: "Anyone interested in Drawing, art and painting"

    },
    {
        title: "Dancing",
        image: "/assets/dancing.webp",
        backText: "Anyone interested in any kind of dancing"

    },
    {
        title: "Singing",
        image: "/assets/singing.webp",
        backText: "Anyone interested in singing and song writing"

    },


];

export default categories;
