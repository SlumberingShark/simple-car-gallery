export interface CarItemInterface {
	id: string;
	title: string;
	imagePath: string[];
	sourcePath: string;
}

export const carItems: CarItemInterface[] = [
	{
		id: "1",
		title: "chevrolet corvette",
		imagePath: [
			"https://avatars.mds.yandex.net/get-verba/787013/2a000001608ff9af8ea80a9e7f5d8cccd8cf/cattouchret",
			"https://avatars.mds.yandex.net/get-verba/3587101/2a00000182ffd2dadabe9728ba3474335cf4/cattouchret",
			"https://avatars.mds.yandex.net/get-verba/3587101/2a00000182ffd4b9201e54f162da19bdd7f7/cattouchret",
		],
		sourcePath: "https://auto.ru/catalog/cars/chevrolet/corvette/2305909/2305910/",
	},
	{
		id: "2",
		title: "ford mustang",
		imagePath: [
			"https://avatars.mds.yandex.net/get-verba/787013/2a000001609cf36384bd84d2b4a6ea12c696/cattouchret",
			"https://avatars.mds.yandex.net/get-verba/787013/2a000001609d49559b72b8eb557bb86fc7e5/cattouchret",
			"https://avatars.mds.yandex.net/get-verba/216201/2a000001609d2cfdee58a21a1a0135db223e/cattouchret",
		],
		sourcePath: "https://auto.ru/catalog/cars/ford/mustang/10382965/10384656/",
	},
	{
		id: "3",
		title: "dodge challenger",
		imagePath: [
			"https://avatars.mds.yandex.net/get-verba/787013/2a000001609cf203aaa10c3760245f3091bd/cattouchret",
			"https://avatars.mds.yandex.net/get-verba/1030388/2a00000180bd511a9c97fe60a45f180011b5/cattouchret",
			"https://avatars.mds.yandex.net/get-verba/1604130/2a00000180bd50de78650da66255bb8a6741/cattouchret",
		],
		sourcePath: "https://auto.ru/catalog/cars/dodge/challenger/20553303/20553314/",
	},
	{
		id: "4",
		title: "Cadillac CTS-V",
		imagePath: [
			"https://avatars.mds.yandex.net/get-verba/787013/2a000001609d69f6a406abdbe9a410d85fa9/cattouchret",
			"https://avatars.mds.yandex.net/get-verba/1030388/2a000001609cef4131a33e559f49245016f5/cattouchret",
			"https://avatars.mds.yandex.net/get-verba/216201/2a000001609d04645f0003da19629cbe3b1e/cattouchret",
		],
		sourcePath: "https://auto.ru/catalog/cars/cadillac/cts_v/20150020/4601217/",
	},
	{
		id: "5",
		title: "dodge viper",
		imagePath: [
			"https://avatars.mds.yandex.net/get-verba/1030388/2a00000183614382c92072f20ad08c569091/cattouchret",
			"https://avatars.mds.yandex.net/get-verba/937147/2a0000018361465fefaaf40ca0abb48035ea/cattouchret",
			"https://avatars.mds.yandex.net/get-verba/216201/2a000001836141ea490cd6d2b25ec723eb75/cattouchret",
		],
		sourcePath: "https://auto.ru/catalog/cars/dodge/viper/6378847/6378848/",
	},
];
