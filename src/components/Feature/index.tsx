
import { Post } from "@prisma/client";
import Slider from "react-slick";
import SliderFeature from "./styles";

interface PostTypes {
	allPosts: Post[];
}
export default function Feature({ allPosts }: PostTypes) {

	const settings = {
		dots: true, 
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
		fade: true,
		autoplay: true,

	};
	return (
		<div>
			<Slider {...settings} lazyLoad="ondemand">
				{allPosts.filter(item => item.feature === true).map(item =>
					<div key={item.id} >
						<SliderFeature bgColor={item.bgColor}>
							<div className="feature-title">
								<h2>
									{item.title}
								</h2>
								<p>{item.description}</p>
								<div>
									<button className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white 	">
										Ver Post
									</button>
								</div>
							</div>
							<div>
								<img src={item.image} alt="" />
							</div>
						</SliderFeature>
					</div>
				)}
			</Slider>
		</div>
	);
}
