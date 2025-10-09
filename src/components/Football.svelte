<script>
    import axios from "axios";

    let matches = $state([]);

    function getSerieAHariIni() {
        const today = new Date().toISOString().split("T")[0];

        axios
            .get("https://v3.football.api-sports.io/fixtures", {
                headers: {
                    "x-apisports-key": "b879da1c3dc72b7875a43c471aa505c5",
                },
                params: {
                    date: today,
                },
            })
            .then((res) => {
                console.log("res Serie A:", res.data);
                const serieA = res.data.response.filter(
                    (item) => item.league.id === 71 || item.league.id === 72
                );
                matches = serieA;
            })
            .catch((err) => {
                console.log("err", err);
            });
    }

    $effect(() => {
        getSerieAHariIni();
    });
</script>

<div class="card">
    <div class="card-body">
        <div class="font-bold text-2xl mb-3">Jadwal Liga Serie A dan B Hari Ini</div>

        {#if matches.length > 0}
            {#each matches as match}
                <div class="border p-3 rounded mb-3 shadow-sm">
                    <div class="flex items-center gap-3">
                        <img src={match.league.logo} alt="league" class="w-6 h-6" />
                        <span class="text-lg font-semibold">{match.league.name}</span>
                    </div>

                    <div class="mt-2 flex justify-between items-center">
                        <div class="flex items-center gap-2">
                            <img src={match.teams.home.logo} alt="home" class="w-6 h-6" />
                            <span>{match.teams.home.name}</span>
                        </div>

                        <div class="font-bold text-xl">
                            {match.goals.home ?? "-"} - {match.goals.away ?? "-"}
                        </div>

                        <div class="flex items-center gap-2">
                            <span>{match.teams.away.name}</span>
                            <img src={match.teams.away.logo} alt="away" class="w-6 h-6" />
                        </div>
                    </div>

                    <div class="text-sm text-gray-500 mt-1">
                        {match.fixture.status.long} — {match.fixture.venue?.name ?? "Venue TBD"}
                    </div>
                </div>
            {/each}
        {:else}
            <div>Tidak ada pertandingan Serie A dan B hari ini</div>
        {/if}
    </div>
</div>