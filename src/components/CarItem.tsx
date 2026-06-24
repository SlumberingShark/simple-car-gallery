import { type CarItemInterface } from "../data/data";

interface CarItemProps {
	car: CarItemInterface;
	isHovered: boolean;
	onMouseEnter: () => void;
	onMouseLeave: () => void;
}

export const CarItem = ({
	car,
	isHovered,
	onMouseEnter,
	onMouseLeave,
}: CarItemProps) => {
	return (
		<li className="car-item" onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
			<a
				className="car-item__title"
				onMouseEnter={onMouseEnter}
				onMouseLeave={onMouseLeave}
				href={car.sourcePath}
			>
				{car.title}
			</a>

			{car.imagePath.map((path, index) => (
				<img
					className={`car-item__image car-item__image--${index} ${isHovered ? "is-visible" : ""}`}
					src={path}
					key={`${car.id}-${index}`}
					alt={`${car.id}-${car.title}`}
				/>
			))}
		</li>
	);
};
