import { useState } from "react";
import { CarItem } from "./CarItem";
import { carItems } from "../data/data";

export const CarList = () => {
	const [hoveredId, setHoveredId] = useState<string | null>(null);

	return (
		<ul className="car-list">
			{carItems.map((car) => (
				<CarItem
					car={car}
					key={car.id}
					isHovered={hoveredId === car.id}
					onMouseEnter={() => setHoveredId(car.id)}
					onMouseLeave={() => setHoveredId(null)}
				/>
			))}
		</ul>
	);
};
