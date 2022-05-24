import { URL } from 'url';

export const pageview = (url: URL) => {
	window.gtag('config', process.env.GA as string, {
		page_path: url,
	});
};

interface EventParams {
	action: string;
	category: string;
	label: string;
	value: number;
}

export const event = ({ action, category, label, value }: EventParams) => {
	window.gtag('event', action, {
		event_category: category,
		event_label: label,
		value,
	});
};
