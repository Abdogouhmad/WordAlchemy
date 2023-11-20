<script>
	let tableData = [
		{
			IPA: 'ɑ',
			Meaning: 'a'
		},
		{
			IPA: 'ɑː',
			Meaning: 'a'
		},
        {
            IPA: 'b',
            Meaning: 'cool'
        }
	];
</script>

<tbody>
	{#each Object.values(tableData) as row}
		<tr>
			{#each Object.values(row) as cell}
				<td class="border rounded-md border-slate-600 text-center">{cell}</td>
			{/each}
		</tr>
	{/each}
</tbody>
