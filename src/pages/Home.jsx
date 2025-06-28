import CategoryMenu from "../components/Home/CategoryMenu";
import FeatureCard from "../components/Home/FeatureHighlights";
import { Carousel } from "../components/Shared/Carousel";
import {
  Clock,
  ShieldCheck,
  Headphones,
  Wallet,
} from "lucide-react";
const slides = [
    {
        img: "https://d2t8nl1y0ie1km.cloudfront.net/images/thumbs/685174b7407506b5ff135cc7_app_BANNER_DESKTOP%20(1)_1552.jpeg",
        title: "Cucumber",
        description: "A refreshing vegetable",
    },
    {
        img: "https://d2t8nl1y0ie1km.cloudfront.net/images/thumbs/679b43cde3368b3c908beff4_Uniliver-banner_Web_1552.webp",
        title: "Tomato",
        description: "A juicy fruit often mistaken for a vegetable",
    },
    {
        img: "https://d2t8nl1y0ie1km.cloudfront.net/images/thumbs/681b31444627ed704a817a7b_668681ca0b15b6fc211b0d4f_aci%20banner%20DESKTOP_1552.jpeg",
        title: "Carrot",
        description: "A crunchy root vegetable",
    },
    {
        img: "https://d2t8nl1y0ie1km.cloudfront.net/images/thumbs/685174b7407506b5ff135cc7_app_BANNER_DESKTOP%20(1)_1552.jpeg",
        title: "Cucumber",
        description: "A refreshing vegetable",
    },
    {
        img: "https://d2t8nl1y0ie1km.cloudfront.net/images/thumbs/679b43cde3368b3c908beff4_Uniliver-banner_Web_1552.webp",
        title: "Tomato",
        description: "A juicy fruit often mistaken for a vegetable",
    },
    {
        img: "https://d2t8nl1y0ie1km.cloudfront.net/images/thumbs/681b31444627ed704a817a7b_668681ca0b15b6fc211b0d4f_aci%20banner%20DESKTOP_1552.jpeg",
        title: "Carrot",
        description: "A crunchy root vegetable",
    },
];

export default function Recommended() {
    return (
        <div className="max-w-[1580px] mx-auto p-4 flex">
            <CategoryMenu />
            <div className="flex-1 px-4">
                <Carousel
                    slides={slides}
                    render={(data) => (
                        <div className="flex gap-4 h-72 w-full">
                            <div className="h-full hidden xl:block w-full shadow-lg">
                                <img
                                    src={data.img}
                                    alt=""
                                    className="w-full h-full object-cover rounded-lg"
                                />
                            </div>
                            <div className="h-full w-full shadow-lg">
                                <img
                                    src={data.img}
                                    alt=""
                                    className="w-full h-full object-cover rounded-lg"
                                />
                            </div>
                        </div>
                    )}
                />

               <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-8">
                 <FeatureCard icon={Clock} title="Fast Delivery" description="Get your groceries delivered within 30 minutes" />
                 <FeatureCard icon={ShieldCheck} title="Quality Guaranteed" description="Fresh and high-quality products every time" />
                 <FeatureCard icon={Wallet} title="Best Prices" description="Affordable prices and great deals daily" />
                 <FeatureCard icon={Headphones} title="24/7 Support" description="Friendly customer support whenever you need" />
               </div>
            </div>
        </div>
    );
}
