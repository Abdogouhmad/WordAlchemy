import { render, screen } from '@testing-library/svelte';
import { beforeEach, describe, expect, vi, test } from 'vitest';
import { goto } from '$app/navigation';
import Search from '../Searchbar.svelte';

vi.mock('$app/navigation', () => ({
	goto: vi.fn()
}));

describe('YourSearch', () => {
	beforeEach(() => {
		goto('https://example.com'); // set initial page pathname
	});

	test('renders an input and a search button', () => {
		render(Search);

		const search = screen.getByLabelText(/Search input/i);
		expect(search).toBeInTheDocument(); // Replace with the appropriate assertion from @testing-library/svelte
		const searchBtn = screen.getByRole('button');
		expect(searchBtn).toBeInTheDocument(); // Replace with the appropriate assertion from @testing-library/svelte
	});
});